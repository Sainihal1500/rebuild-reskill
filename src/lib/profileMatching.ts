import type { CommunityGroup, CommunityPost, Course, Job } from './careerData';

export interface ProfileLike {
  currentTitle?: string;
  targetCareer?: string;
  yearsExperience?: number;
  skills?: string[];
  interests?: string[];
  resumeText?: string;
  aiConcern?: number;
}

export const norm = (value: string = '') => value.toLowerCase().replace(/[^a-z0-9+#.]/g, '');
const tokens = (value: string = '') => norm(value).split(/[^a-z0-9+#.]+/).filter(Boolean);
const includesTerm = (haystack: string, needle: string) => {
  const h = norm(haystack); const n = norm(needle);
  return !!n && (h === n || h.includes(n) || n.includes(h));
};

export function profileCompletion(profile: ProfileLike) {
  const checks = [
    Boolean(profile.currentTitle?.trim()),
    Boolean(profile.targetCareer?.trim()),
    Number(profile.yearsExperience || 0) > 0,
    Boolean(profile.skills?.length),
    Boolean(profile.interests?.length),
    Boolean(profile.resumeText?.trim()),
  ];
  return Math.round(checks.filter(Boolean).length / checks.length * 100);
}

export function scoreJob(job: Job, profile: ProfileLike) {
  const skills = profile.skills || [];
  const required = job.requiredSkills || [];
  const skillHits = required.filter(requiredSkill => skills.some(skill => includesTerm(skill, requiredSkill))).length;
  const skillScore = required.length ? (skillHits / required.length) * 65 : 0;
  const targetScore = profile.targetCareer && (includesTerm(job.title, profile.targetCareer) || job.keywords.some(k => includesTerm(profile.targetCareer, k))) ? 20 : 0;
  const currentScore = profile.currentTitle && job.keywords.some(k => includesTerm(profile.currentTitle, k)) ? 10 : 0;
  const resumeText = profile.resumeText || '';
  const resumeScore = resumeText ? Math.min(5, required.filter(s => includesTerm(resumeText, s)).length) : 0;
  return Math.min(100, Math.round(skillScore + targetScore + currentScore + resumeScore));
}

export function rankJobs(jobs: Job[], profile: ProfileLike) {
  return jobs.map(job => ({ ...job, match: scoreJob(job, profile) })).sort((a, b) => b.match - a.match);
}

export function courseRelevance(course: Course, profile: ProfileLike) {
  const target = profile.targetCareer || '';
  const roleMatch = course.roles.some(role => includesTerm(target, role) || includesTerm(role, target));
  const skillOwned = (profile.skills || []).some(skill => includesTerm(skill, course.skill));
  const targetTokens = tokens(target);
  const roleTokenOverlap = course.roles.some(role => targetTokens.some(t => tokens(role).includes(t))) ? 15 : 0;
  return (roleMatch ? 60 : roleTokenOverlap) + (skillOwned ? 0 : 25);
}

export function rankCourses(courses: Course[], profile: ProfileLike) {
  return courses
    .map(course => ({ ...course, relevance: courseRelevance(course, profile) }))
    .filter(course => course.relevance > 0)
    .sort((a, b) => b.relevance - a.relevance || b.rating - a.rating);
}

export function groupRelevance(tags: string[], profile: ProfileLike) {
  const signals = [profile.currentTitle, profile.targetCareer, ...(profile.skills || []), ...(profile.interests || [])].filter(Boolean) as string[];
  return tags.reduce((score, tag) => score + (signals.some(signal => includesTerm(signal, tag)) ? 1 : 0), 0);
}

export function rankGroups(groups: CommunityGroup[], profile: ProfileLike) {
  return groups.map(group => ({ ...group, score: groupRelevance(group.tags, profile) })).sort((a, b) => b.score - a.score || b.members - a.members);
}

export function rankPosts(posts: CommunityPost[], profile: ProfileLike) {
  return posts.map(post => ({ ...post, score: groupRelevance(post.tags, profile) })).sort((a, b) => b.score - a.score || b.likes - a.likes);
}

export function getSkillGaps(jobs: Job[], profile: ProfileLike) {
  const ranked = rankJobs(jobs, profile);
  const target = ranked.filter(job => profile.targetCareer && (includesTerm(job.title, profile.targetCareer) || job.keywords.some(k => includesTerm(profile.targetCareer!, k))));
  const source = target.length ? target.slice(0, 5) : ranked.slice(0, 5);
  const owned = profile.skills || [];
  const counts = new Map<string, number>();
  source.forEach(job => job.requiredSkills.forEach(skill => {
    if (!owned.some(existing => includesTerm(existing, skill))) counts.set(skill, (counts.get(skill) || 0) + 1);
  }));
  return [...counts.entries()].sort((a, b) => b[1] - a[1]).map(([skill]) => skill).slice(0, 6);
}

export function dashboardMetrics(jobs: Job[], groups: CommunityGroup[], profile: ProfileLike) {
  const ranked = rankJobs(jobs, profile);
  const top = ranked[0]?.match || 0;
  const gaps = getSkillGaps(jobs, profile);
  const relevantGroups = rankGroups(groups, profile).filter(g => g.score > 0).length;
  const completion = profileCompletion(profile);
  const readiness = Math.round((top * 0.7) + ((gaps.length ? Math.max(0, 100 - gaps.length * 12) : 100) * 0.3));
  const exposure = profile.aiConcern ? Math.round(Number(profile.aiConcern) / 5 * 100) : 0;
  const profileSignal = Math.round((completion + readiness) / 2);
  const trend = [0.55, 0.68, 0.82, 1].map(multiplier => Math.min(100, Math.round(profileSignal * multiplier)));
  return { completion, readiness, exposure, relevantGroups, gaps, topJobs: ranked.slice(0, 3), trend };
}
