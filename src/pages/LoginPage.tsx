import { useState } from 'react';
import { useAuth } from '@/lib/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  const [email, setEmail] = useState(''); const [password, setPassword] = useState(''); const [error, setError] = useState(''); const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const handleSubmit = async (e: React.FormEvent) => { e.preventDefault(); setError(''); setLoading(true); const result = await login(email, password); if (!result.ok) setError(result.error || 'Unable to log in.'); setLoading(false); };
  return <div className="flex h-screen w-full items-center justify-center bg-slate-50 dark:bg-slate-950 px-4"><Card className="w-full max-w-md"><CardHeader className="space-y-1 text-center"><CardTitle className="text-2xl font-bold">Welcome back</CardTitle><CardDescription>Sign in to load your own career profile and recommendations.</CardDescription></CardHeader><form onSubmit={handleSubmit}><CardContent className="space-y-4"><div className="space-y-2"><Label htmlFor="email">Email</Label><Input id="email" type="email" placeholder="you@example.com" required value={email} onChange={e=>setEmail(e.target.value)}/></div><div className="space-y-2"><Label htmlFor="password">Password</Label><Input id="password" type="password" required value={password} onChange={e=>setPassword(e.target.value)}/></div>{error&&<p className="text-sm text-red-600">{error}</p>}</CardContent><CardFooter className="flex flex-col space-y-4"><Button type="submit" disabled={loading} className="w-full bg-blue-600 hover:bg-blue-700 text-white">{loading?'Signing in…':'Login'}</Button><div className="text-center text-sm text-slate-500">Don't have an account? <Link to="/register" className="text-blue-600 hover:underline">Sign up</Link></div></CardFooter></form></Card></div>;
}
