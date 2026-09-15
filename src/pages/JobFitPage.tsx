import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAuth } from '@/lib/AuthContext';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Sparkles } from 'lucide-react';

export default function JobFitPage(){
 const {id}=useParams(); const {user}=useAuth(); const [job,setJob]=useState<any>(null); const [result,setResult]=useState<any>(null); const [loading,setLoading]=useState(true);
 useEffect(()=>{fetch(`/api/jobs/${id}`).then(r=>r.json()).then(setJob).catch(console.error)},[id]);
 useEffect(()=>{if(!job||!user)return; setLoading(true);fetch('/api/ai/job-fit',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({userProfile:user.profileData,job})}).then(r=>r.json()).then(setResult).catch(console.error).finally(()=>setLoading(false))},[job,user]);
 return <div className="max-w-4xl mx-auto space-y-6">{job&&<><Button variant="ghost" asChild><Link to="/jobs"><ArrowLeft className="h-4 w-4 mr-2"/>Back to jobs</Link></Button><Card><CardHeader><div className="flex justify-between gap-4"><div><CardTitle className="text-2xl">{job.title}</CardTitle><CardDescription>{job.company} • {job.location}</CardDescription></div>{result&&<Badge variant="success">{result.jobFitScore}% fit</Badge>}</div></CardHeader><CardContent><div className="flex flex-wrap gap-2">{job.requiredSkills.map((s:string)=><Badge key={s} variant="outline">{s}</Badge>)}</div></CardContent></Card>{loading?<p>Analyzing your profile and resume against this role…</p>:result&&<div className="grid md:grid-cols-2 gap-6"><Card><CardHeader><CardTitle>Strengths</CardTitle></CardHeader><CardContent><ul className="space-y-2">{result.strengths?.map((x:string)=><li key={x}>✓ {x}</li>)}</ul></CardContent></Card><Card><CardHeader><CardTitle>Skill gaps</CardTitle></CardHeader><CardContent><ul className="space-y-2">{result.skillGaps?.map((x:string)=><li key={x}>• {x}</li>)}</ul></CardContent></Card><Card className="md:col-span-2"><CardHeader><CardTitle><Sparkles className="inline h-5 w-5 mr-2"/>Recommendation</CardTitle></CardHeader><CardContent><p>{result.recommendation}</p><p className="text-sm text-slate-500 mt-3">{result.reasoning}</p></CardContent></Card></div>}</>}</div>
}
