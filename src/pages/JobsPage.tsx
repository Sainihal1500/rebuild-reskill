import { useEffect, useMemo, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, MapPin, DollarSign, Briefcase, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/lib/AuthContext';
import type { Job } from '@/lib/careerData';

import { rankJobs } from '@/lib/profileMatching';

export default function JobsPage(){
 const {user}=useAuth(); const [jobs,setJobs]=useState<Job[]>([]); const [loading,setLoading]=useState(true); const [searchTerm,setSearchTerm]=useState('');
 useEffect(()=>{fetch('/api/jobs').then(r=>r.json()).then(setJobs).catch(console.error).finally(()=>setLoading(false))},[]);
 const profile=user?.profileData||{};
 const ranked=useMemo(()=>rankJobs(jobs,profile),[jobs,profile]);
 const filtered=ranked.filter(j=>[j.title,j.company,j.category,...j.requiredSkills].join(' ').toLowerCase().includes(searchTerm.toLowerCase()));
 const target=profile.targetCareer||'your target role';
 return <div className="space-y-6">
  <div><h1 className="text-3xl font-bold tracking-tight">Discover Opportunities</h1><p className="text-slate-500">Matches use your current role, target role, skills and experience — not a fixed score.</p></div>
  <Card className="border-blue-100 bg-blue-50/50 dark:bg-blue-950/20"><CardContent className="p-4 flex gap-3 items-start"><Sparkles className="h-5 w-5 text-blue-600 mt-0.5"/><div><p className="font-semibold">Personalized for {target}</p><p className="text-sm text-slate-600 dark:text-slate-300">Current role: {profile.currentTitle||'Not added'} • Skills: {(profile.skills||[]).join(', ')||'Not added'}</p></div></CardContent></Card>
  <div className="flex gap-4 items-center"><div className="relative flex-1 max-w-xl"><Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500"/><Input placeholder="Search roles, companies, skills..." className="pl-8" value={searchTerm} onChange={e=>setSearchTerm(e.target.value)}/></div><Button variant="outline" asChild><Link to="/profile">Update profile</Link></Button></div>
  <div className="grid gap-4">{loading?<p>Loading opportunities...</p>:filtered.map(job=><Card key={job.id} className="hover:border-blue-300 transition-colors"><CardContent className="p-6"><div className="flex flex-col md:flex-row gap-6 justify-between"><div className="space-y-4 flex-1"><div><div className="flex items-center gap-2 mb-1"><h3 className="text-xl font-bold">{job.title}</h3><Badge variant={job.match>=70?'success':job.match>=45?'warning':'secondary'}>{job.match}% match</Badge></div><p className="text-slate-500 font-medium">{job.company}</p></div><div className="flex flex-wrap gap-4 text-sm text-slate-500"><span className="flex items-center gap-1"><MapPin className="h-4 w-4"/>{job.location}</span><span className="flex items-center gap-1"><DollarSign className="h-4 w-4"/>{job.salary}</span><span className="flex items-center gap-1"><Briefcase className="h-4 w-4"/>{job.experience}</span></div><div className="flex flex-wrap gap-2">{job.requiredSkills.map(s=><Badge key={s} variant="outline">{s}</Badge>)}</div></div><div className="flex md:flex-col gap-2 justify-end"><Button className="bg-blue-600 text-white">Apply Now</Button><Button variant="outline">Save Job</Button><Button variant="link" asChild className="text-blue-600"><Link to={`/job-fit/${job.id}`}>Analyze Fit</Link></Button></div></div></CardContent></Card>)}{!loading&&!filtered.length&&<p className="text-center py-12 text-slate-500">No matching opportunities.</p>}</div>
 </div>;
}
