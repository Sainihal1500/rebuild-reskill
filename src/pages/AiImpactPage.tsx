import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ShieldAlert, Search, ArrowRight, Zap, RefreshCw, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/lib/AuthContext';

interface ImpactResult {
  occupation: string;
  exposureScore: number;
  highExposureTasks: string[];
  mediumExposureTasks: string[];
  lowExposureTasks: string[];
  complementarySkills: string[];
  recommendedCareerDirections: string[];
}

export default function AiImpactPage() {
  const { user } = useAuth();
  const [occupation, setOccupation] = useState(user?.profileData?.currentTitle || '');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ImpactResult | null>(null);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!occupation.trim()) return;

    setLoading(true);
    try {
      const res = await fetch('/api/ai/impact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ occupation, targetCareer: user?.profileData?.targetCareer || '', skills: user?.profileData?.skills || [] })
      });
      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="text-center space-y-4 py-8">
        <div className="inline-flex p-4 bg-purple-100 dark:bg-purple-900 rounded-full mb-2">
          <ShieldAlert className="h-8 w-8 text-purple-600 dark:text-purple-400" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">AI Impact Analysis</h1>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg">
          Understand how artificial intelligence may automate, augment, or transform tasks within your occupation over the next 5 years.
        </p>
      </div>

      <Card className="border-2 border-purple-100 dark:border-purple-900">
        <CardContent className="p-6">
          <form onSubmit={handleAnalyze} className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
              <Input 
                className="pl-10 h-12 text-lg" 
                placeholder="Your current role or another occupation to analyze" 
                value={occupation}
                onChange={(e) => setOccupation(e.target.value)}
              />
            </div>
            <Button type="submit" disabled={loading} className="h-12 px-8 bg-purple-600 hover:bg-purple-700 text-white text-base">
              {loading ? 'Analyzing...' : 'Analyze'}
            </Button>
          </form>
        </CardContent>
      </Card>

      {result && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="md:col-span-1 border-purple-200 dark:border-purple-800 bg-purple-50/50 dark:bg-purple-950/50">
              <CardHeader>
                <CardTitle className="text-lg">AI Exposure Score</CardTitle>
                <CardDescription>Estimated task exposure</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center py-6">
                <div className="relative w-32 h-32 flex items-center justify-center rounded-full border-8 border-purple-200 dark:border-purple-800">
                  <div 
                    className="absolute inset-0 rounded-full border-8 border-purple-600 dark:border-purple-400" 
                    style={{ clipPath: `polygon(0 0, 100% 0, 100% ${result.exposureScore}%, 0 ${result.exposureScore}%)` }}
                  ></div>
                  <div className="text-4xl font-bold">{result.exposureScore}</div>
                </div>
                <p className="text-center text-sm mt-6 text-slate-600 dark:text-slate-400">
                  Score indicates the percentage of routine tasks that could be highly augmented or automated.
                </p>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Task Breakdown</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="h-4 w-4 text-orange-500" />
                    <h4 className="font-medium">Highly Automatable</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {result.highExposureTasks.map((t, i) => <Badge key={i} variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">{t}</Badge>)}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <RefreshCw className="h-4 w-4 text-blue-500" />
                    <h4 className="font-medium">Augmentation Potential</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {result.mediumExposureTasks.map((t, i) => <Badge key={i} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">{t}</Badge>)}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="h-4 w-4 text-green-500" />
                    <h4 className="font-medium">Human-Centric</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {result.lowExposureTasks.map((t, i) => <Badge key={i} variant="outline" className="bg-green-50 text-green-700 border-green-200">{t}</Badge>)}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Skills to Develop</CardTitle>
                <CardDescription>Focus on these to stay competitive</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {result.complementarySkills.map((s, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                      <div className="h-1.5 w-1.5 rounded-full bg-purple-500" /> {s}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/learning">Generate Learning Plan</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Career Transitions</CardTitle>
                <CardDescription>Recommended adjacent roles</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {result.recommendedCareerDirections.map((r, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500" /> {r}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/jobs">Search These Roles</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
