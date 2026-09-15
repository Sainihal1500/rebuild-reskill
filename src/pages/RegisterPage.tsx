import { useState } from 'react';
import { useAuth } from '@/lib/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

export default function RegisterPage() {
  const [name,setName]=useState(''); const [email,setEmail]=useState(''); const [password,setPassword]=useState(''); const [error,setError]=useState(''); const [loading,setLoading]=useState(false); const {register}=useAuth();
  const submit=async(e:React.FormEvent)=>{e.preventDefault();setError('');setLoading(true);const result=await register({name,email,password});if(!result.ok)setError(result.error||'Unable to create account.');setLoading(false)};
  return <div className="flex h-screen w-full items-center justify-center bg-slate-50 dark:bg-slate-950 px-4"><Card className="w-full max-w-md"><CardHeader className="text-center"><CardTitle className="text-2xl font-bold">Create your account</CardTitle><CardDescription>Your email identifies your account; your profile drives every recommendation.</CardDescription></CardHeader><form onSubmit={submit}><CardContent className="space-y-4"><div><Label>Full Name</Label><Input className="mt-2" required value={name} onChange={e=>setName(e.target.value)} placeholder="Your name"/></div><div><Label>Email</Label><Input className="mt-2" type="email" required value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com"/></div><div><Label>Password</Label><Input className="mt-2" type="password" minLength={6} required value={password} onChange={e=>setPassword(e.target.value)} placeholder="At least 6 characters"/></div>{error&&<p className="text-sm text-red-600">{error}</p>}</CardContent><CardFooter className="flex flex-col space-y-4"><Button type="submit" disabled={loading} className="w-full bg-blue-600 text-white">{loading?'Creating…':'Create Account'}</Button><div className="text-center text-sm text-slate-500">Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Login</Link></div></CardFooter></form></Card></div>;
}
