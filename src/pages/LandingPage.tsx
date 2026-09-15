import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Compass, Users, Target, BookOpen, ShieldAlert } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link to="/" className="flex items-center justify-center">
          <Compass className="h-6 w-6 text-blue-600" />
          <span className="ml-2 font-bold text-xl text-blue-900 dark:text-blue-400">REBUILD & RE-SKILL</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <Link className="text-sm font-medium hover:underline underline-offset-4" to="/login">
            Login
          </Link>
          <Button asChild>
            <Link to="/register">Get Started</Link>
          </Button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-slate-50 dark:bg-slate-900">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-slate-900 dark:text-white">
                  A Bridge to a Brighter Future
                </h1>
                <p className="mx-auto max-w-[700px] text-slate-500 md:text-xl dark:text-slate-400 pt-4">
                  Recover faster. Discover better opportunities. Build the skills for tomorrow's workforce.
                </p>
              </div>
              <div className="space-x-4 pt-4">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Link to="/register">Get Started</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="#features">Explore How It Works</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-full">
                  <Users className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold">PEER-TO-PEER INTERACTION</h3>
                <p className="text-slate-500 dark:text-slate-400">Connect with people, support groups and share experiences.</p>
              </div>
              
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-green-100 dark:bg-green-900 rounded-full">
                  <Target className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-bold">CUSTOMIZED JOB OPPORTUNITIES</h3>
                <p className="text-slate-500 dark:text-slate-400">Find jobs based on qualifications, experience, skills and preferences.</p>
              </div>

              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-purple-100 dark:bg-purple-900 rounded-full">
                  <ShieldAlert className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold">UNDERSTANDING AI'S IMPACT</h3>
                <p className="text-slate-500 dark:text-slate-400">Understand which tasks and occupations are most exposed to AI.</p>
              </div>

              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-orange-100 dark:bg-orange-900 rounded-full">
                  <BookOpen className="h-8 w-8 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="text-xl font-bold">RE-SKILLING & LEARNING</h3>
                <p className="text-slate-500 dark:text-slate-400">Get personalized courses and career transition recommendations.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-slate-500 dark:text-slate-400">© 2026 Rebuild & Re-Skill. All rights reserved.</p>
      </footer>
    </div>
  )
}
