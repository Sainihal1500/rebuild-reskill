import { useState } from 'react';
import { useAuth } from '@/lib/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

const statuses = ['Actively job searching','Looking for a better opportunity','Concerned about AI impact','Changing careers','Upskilling in current role'];

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const { completeOnboarding } = useAuth();
  const [data, setData] = useState<any>({ careerStatus:'', currentTitle:'', targetCareer:'', yearsExperience:0, skills:[], interests:[], aiConcern:3 });
  const update = (key:string, value:any) => setData((d:any)=>({...d,[key]:value}));
  const toggle = (key:'skills'|'interests', value:string) => update(key, data[key].includes(value) ? data[key].filter((x:string)=>x!==value) : [...data[key],value]);

  return <div className="flex min-h-screen w-full items-center justify-center bg-slate-50 dark:bg-slate-950 p-4">
    <Card className="w-full max-w-2xl">
      <CardHeader className="text-center"><CardTitle className="text-2xl">Build your career profile</CardTitle><CardDescription>Step {step} of 3 — recommendations will adapt to your current and target role.</CardDescription></CardHeader>
      <CardContent>
        {step===1 && <div className="space-y-4">
          <h3 className="text-lg font-semibold">What best describes you?</h3>
          <div className="grid gap-3 md:grid-cols-2">{statuses.map(x=><button key={x} type="button" onClick={()=>update('careerStatus',x)} className={`text-left border p-4 rounded-lg transition ${data.careerStatus===x?'border-blue-600 bg-blue-50 dark:bg-blue-950':'hover:border-blue-400'}`}>{x}</button>)}</div>
        </div>}
        {step===2 && <div className="space-y-5">
          <h3 className="text-lg font-semibold">Your professional baseline</h3>
          <div><Label>Current / previous job title</Label><Input className="mt-2" value={data.currentTitle} onChange={e=>update('currentTitle',e.target.value)} placeholder="e.g. Software Engineer, Accountant, Teacher"/></div>
          <div><Label>Years of experience</Label><Input className="mt-2" type="number" min="0" value={data.yearsExperience||''} onChange={e=>update('yearsExperience',Number(e.target.value))}/></div>
          <div><Label>Skills (type comma-separated)</Label><Input className="mt-2" value={data.skills.join(', ')} onChange={e=>update('skills',e.target.value.split(',').map((s:string)=>s.trim()).filter(Boolean))} placeholder="e.g. Excel, SQL, Java, communication"/></div>
        </div>}
        {step===3 && <div className="space-y-5">
          <h3 className="text-lg font-semibold">Where do you want to go?</h3>
          <div><Label>Target job title</Label><Input className="mt-2" value={data.targetCareer} onChange={e=>update('targetCareer',e.target.value)} placeholder="e.g. Data Analyst, Product Manager, Cloud Engineer"/></div>
          <div><Label>Interests (comma-separated)</Label><Input className="mt-2" value={data.interests.join(', ')} onChange={e=>update('interests',e.target.value.split(',').map((s:string)=>s.trim()).filter(Boolean))} placeholder="e.g. AI, analytics, design"/></div>
          <div><Label>How concerned are you about AI changing your current work?</Label><input className="w-full mt-3" type="range" min="1" max="5" value={data.aiConcern} onChange={e=>update('aiConcern',Number(e.target.value))}/><div className="flex justify-between text-xs text-slate-500"><span>Low</span><span>High</span></div></div>
        </div>}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={()=>setStep(s=>Math.max(1,s-1))} disabled={step===1}>Back</Button>
        {step<3 ? <Button className="bg-blue-600 text-white" disabled={step===1 && !data.careerStatus} onClick={()=>setStep(s=>s+1)}>Next</Button> : <Button className="bg-green-600 text-white" disabled={!data.currentTitle || !data.targetCareer} onClick={()=>completeOnboarding(data)}>Complete Profile</Button>}
      </CardFooter>
    </Card>
  </div>;
}
