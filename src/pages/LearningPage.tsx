import { useEffect, useMemo, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Clock, Star, ExternalLink, Sparkles } from 'lucide-react';
import { useAuth } from '@/lib/AuthContext';
import type { Course } from '@/lib/careerData';

import { rankCourses } from '@/lib/profileMatching';

export default function LearningPage(){
 const {user}=useAuth(); const [courses,setCourses]=useState<Course[]>([]); const [loading,setLoading]=useState(true);
 useEffect(()=>{fetch('/api/courses').then(r=>r.json()).then(setCourses).catch(console.error).finally(()=>setLoading(false))},[]);
 const profile=user?.profileData||{}; const target=profile.targetCareer||'your target role'; const currentSkills=profile.skills||[];
 const relevant=useMemo(()=>rankCourses(courses,profile),[courses,profile]);
 const gaps=useMemo(()=>relevant.filter(c=>!currentSkills.some(s=>s.toLowerCase().includes(c.skill.toLowerCase())||c.skill.toLowerCase().includes(s.toLowerCase()))).slice(0,6).map(c=>c.skill),[relevant,currentSkills]);
 return <div className="space-y-6">
  <div><h1 className="text-3xl font-bold tracking-tight">Your Learning Path</h1><p className="text-slate-500">Learning recommendations are generated from your current skills → {target} transition.</p></div>
  <Card className="border-purple-100 bg-purple-50/50 dark:bg-purple-950/20"><CardContent className="p-5 flex gap-3"><Sparkles className="h-5 w-5 text-purple-600 mt-1"/><div><p className="font-semibold">Priority skill gaps</p><div className="flex flex-wrap gap-2 mt-2">{gaps.length?gaps.map(skill=><Badge key={skill} variant="outline">{skill}</Badge>):<span className="text-sm text-slate-500">Add more skills to improve recommendations.</span>}</div></div></CardContent></Card>
  <div className="grid gap-6 md:grid-cols-3"><div className="md:col-span-2 space-y-4">{loading?<p>Loading learning options...</p>:relevant.map(course=><Card key={course.id}><CardContent className="p-5 flex flex-col sm:flex-row gap-4 justify-between"><div className="space-y-2"><div className="flex items-center gap-2"><h3 className="font-semibold text-lg">{course.title}</h3>{course.free&&<Badge variant="success">Free</Badge>}</div><p className="text-sm text-slate-500">{course.provider} • {course.skill}</p><div className="flex flex-wrap gap-4 text-xs text-slate-500"><span className="flex items-center gap-1"><Clock className="h-3 w-3"/>{course.duration}</span><span><BookOpen className="inline h-3 w-3 mr-1"/>{course.difficulty}</span><span><Star className="inline h-3 w-3 mr-1"/>{course.rating}</span></div><p className="text-xs text-blue-600">Relevant to: {course.roles.join(' • ')}</p></div><Button asChild className="self-start"><a href={course.url} target="_blank" rel="noopener noreferrer">Start <ExternalLink className="ml-2 h-4 w-4"/></a></Button></CardContent></Card>)}</div>
  <Card className="h-fit"><CardHeader><CardTitle>Target profile</CardTitle><CardDescription>Change your target anytime</CardDescription></CardHeader><CardContent className="space-y-4"><div><p className="text-xs text-slate-500">Current role</p><p className="font-medium">{profile.currentTitle||'Not added'}</p></div><div><p className="text-xs text-slate-500">Target role</p><p className="font-medium">{target}</p></div><div><p className="text-xs text-slate-500">Current skills</p><div className="flex flex-wrap gap-2 mt-2">{currentSkills.map(s=><Badge key={s} variant="secondary">{s}</Badge>)}</div></div><Button variant="outline" className="w-full" onClick={()=>window.location.href='/profile'}>Edit profile</Button></CardContent></Card></div>
 </div>
}
