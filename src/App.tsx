import { Routes, Route, Outlet, Link, Navigate } from 'react-router-dom';
import { Home, Compass, BookOpen, Users, UserCircle } from 'lucide-react';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import OnboardingPage from './pages/OnboardingPage';
import DashboardPage from './pages/DashboardPage';
import JobsPage from './pages/JobsPage';
import LearningPage from './pages/LearningPage';
import CommunityPage from './pages/CommunityPage';
import ProfilePage from './pages/ProfilePage';
import AiImpactPage from './pages/AiImpactPage';
import JobFitPage from './pages/JobFitPage';
import { useAuth } from './lib/AuthContext';

function Layout() { return <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col"><header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80"><div className="container mx-auto flex h-16 items-center px-4"><Link to="/dashboard" className="flex items-center gap-2 font-bold text-xl text-blue-900 dark:text-blue-400"><Compass className="h-6 w-6 text-blue-600"/><span>REBUILD & RE-SKILL</span></Link><nav className="ml-auto flex gap-4 sm:gap-6"><Link to="/dashboard" className="text-sm font-medium text-slate-600 flex items-center gap-2"><Home className="h-4 w-4"/><span className="hidden sm:inline">Dashboard</span></Link><Link to="/jobs" className="text-sm font-medium text-slate-600 flex items-center gap-2"><Compass className="h-4 w-4"/><span className="hidden sm:inline">Jobs</span></Link><Link to="/learning" className="text-sm font-medium text-slate-600 flex items-center gap-2"><BookOpen className="h-4 w-4"/><span className="hidden sm:inline">Learning</span></Link><Link to="/community" className="text-sm font-medium text-slate-600 flex items-center gap-2"><Users className="h-4 w-4"/><span className="hidden sm:inline">Community</span></Link><Link to="/profile" className="text-sm font-medium text-slate-600 flex items-center gap-2"><UserCircle className="h-4 w-4"/><span className="hidden sm:inline">Profile</span></Link></nav></div></header><main className="flex-1 container mx-auto px-4 py-8 max-w-7xl"><Outlet/></main></div> }
function Protected(){ const {user}=useAuth(); return user ? <Layout/> : <Navigate to="/login" replace/>; }
function OnboardingGuard(){ const {user}=useAuth(); return user ? <OnboardingPage/> : <Navigate to="/login" replace/>; }
export default function App(){ return <Routes><Route path="/" element={<LandingPage/>}/><Route path="/login" element={<LoginPage/>}/><Route path="/register" element={<RegisterPage/>}/><Route path="/onboarding" element={<OnboardingGuard/>}/><Route element={<Protected/>}><Route path="/dashboard" element={<DashboardPage/>}/><Route path="/jobs" element={<JobsPage/>}/><Route path="/learning" element={<LearningPage/>}/><Route path="/community" element={<CommunityPage/>}/><Route path="/profile" element={<ProfilePage/>}/><Route path="/ai-impact" element={<AiImpactPage/>}/><Route path="/job-fit/:id" element={<JobFitPage/>}/></Route></Routes>; }
