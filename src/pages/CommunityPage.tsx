import { useEffect, useMemo, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, MessageSquare, ThumbsUp, Sparkles } from 'lucide-react';
import { useAuth } from '@/lib/AuthContext';
import type { CommunityGroup, CommunityPost } from '@/lib/careerData';

import { rankGroups, rankPosts } from '@/lib/profileMatching';

export default function CommunityPage(){
 const {user}=useAuth(); const [groups,setGroups]=useState<CommunityGroup[]>([]); const [posts,setPosts]=useState<CommunityPost[]>([]);
 useEffect(()=>{Promise.all([fetch('/api/community/groups').then(r=>r.json()),fetch('/api/community/posts').then(r=>r.json())]).then(([g,p])=>{setGroups(g);setPosts(p)}).catch(console.error)},[]);
 const profile=user?.profileData||{};
 const recGroups=useMemo(()=>rankGroups(groups,profile),[groups,profile]);
 const recPosts=useMemo(()=>rankPosts(posts,profile),[posts,profile]);
 return <div className="space-y-6">
  <div><h1 className="text-3xl font-bold tracking-tight">Peer Support & Community</h1><p className="text-slate-500">Groups and discussions are matched to your current role, target role, skills and interests.</p></div>
  <Card className="border-green-100 bg-green-50/50 dark:bg-green-950/20"><CardContent className="p-4 flex gap-3"><Sparkles className="h-5 w-5 text-green-600 mt-1"/><div><p className="font-semibold">Your community focus</p><p className="text-sm text-slate-600 dark:text-slate-300">{profile.currentTitle||'Current role not set'} → {profile.targetCareer||'Target role not set'} • {(profile.interests||[]).join(', ')||'Add interests in Profile'}</p></div></CardContent></Card>
  <div className="grid gap-6 md:grid-cols-3"><div className="md:col-span-2 space-y-4">{recPosts.map(p=><Card key={p.id}><CardContent className="p-6 space-y-4"><div className="flex items-center gap-3"><div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center font-bold">{p.author.slice(0,2).toUpperCase()}</div><div><p className="font-semibold text-sm">{p.author} <span className="text-slate-400 font-normal">in {p.group}</span></p></div></div><div><h3 className="text-lg font-bold">{p.title}</h3><p className="text-slate-600 dark:text-slate-300 mt-1">{p.body}</p></div><div className="flex flex-wrap gap-2">{p.tags.map(t=><Badge key={t} variant="outline">{t}</Badge>)}</div><div className="flex items-center gap-4"><Button variant="ghost" size="sm"><ThumbsUp className="h-4 w-4 mr-1"/>{p.likes}</Button><Button variant="ghost" size="sm"><MessageSquare className="h-4 w-4 mr-1"/>{p.comments}</Button></div></CardContent></Card>)}</div>
  <Card className="h-fit"><CardHeader><CardTitle>Recommended Groups</CardTitle></CardHeader><CardContent className="space-y-4">{recGroups.slice(0,5).map(g=><div key={g.id} className="flex items-center justify-between gap-3"><div className="flex items-center gap-2"><div className="p-2 bg-blue-100 rounded-lg text-blue-600"><Users className="h-4 w-4"/></div><div><p className="font-semibold text-sm">{g.name}</p><p className="text-xs text-slate-500">{g.members.toLocaleString()} members</p></div></div><Button variant="outline" size="sm">Join</Button></div>)}</CardContent></Card></div>
 </div>
}
