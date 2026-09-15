export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  experience: string;
  requiredSkills: string[];
  type: string;
  category: string;
  keywords: string[];
}

export interface Course {
  id: string;
  title: string;
  provider: string;
  url: string;
  free: boolean;
  difficulty: string;
  duration: string;
  skill: string;
  rating: number;
  roles: string[];
}

export interface CommunityGroup {
  id: string;
  name: string;
  description: string;
  members: number;
  tags: string[];
}

export interface CommunityPost {
  id: string;
  author: string;
  group: string;
  title: string;
  body: string;
  likes: number;
  comments: number;
  tags: string[];
}

export const jobs: Job[] = [
  {id:"j1",title:"Frontend Developer",company:"PixelForge",location:"Bengaluru, India • Hybrid",salary:"₹8–14 LPA",experience:"2–5 years",requiredSkills:["React","TypeScript","HTML/CSS","Git"],type:"Full-time",category:"Software",keywords:["frontend","web","ui","javascript"]},
  {id:"j2",title:"Backend Developer",company:"CloudNest",location:"Hyderabad, India • Hybrid",salary:"₹10–18 LPA",experience:"2–5 years",requiredSkills:["Node.js","REST APIs","SQL","Git"],type:"Full-time",category:"Software",keywords:["backend","api","server","javascript"]},
  {id:"j3",title:"Full Stack Engineer",company:"NovaWorks",location:"Remote • India",salary:"₹12–22 LPA",experience:"3–6 years",requiredSkills:["React","Node.js","TypeScript","PostgreSQL"],type:"Full-time",category:"Software",keywords:["full stack","web","product"]},
  {id:"j4",title:"Data Analyst",company:"InsightGrid",location:"Pune, India • Hybrid",salary:"₹7–13 LPA",experience:"1–4 years",requiredSkills:["SQL","Python","Excel","Power BI"],type:"Full-time",category:"Data",keywords:["analytics","reporting","bi","data"]},
  {id:"j5",title:"Data Engineer",company:"DataBridge",location:"Bengaluru, India • Remote",salary:"₹14–26 LPA",experience:"3–7 years",requiredSkills:["Python","SQL","Spark","AWS"],type:"Full-time",category:"Data",keywords:["data engineering","etl","pipelines","cloud"]},
  {id:"j6",title:"Machine Learning Engineer",company:"AIMesh",location:"Hyderabad, India • On-site",salary:"₹16–30 LPA",experience:"3–7 years",requiredSkills:["Python","PyTorch","SQL","Machine Learning"],type:"Full-time",category:"AI",keywords:["ml","ai","models","python"]},
  {id:"j7",title:"AI Product Manager",company:"FutureStack",location:"Mumbai, India • Hybrid",salary:"₹18–32 LPA",experience:"5–9 years",requiredSkills:["Product Management","AI/ML basics","Agile","Analytics"],type:"Full-time",category:"Product",keywords:["product","ai","strategy","roadmap"]},
  {id:"j8",title:"Product Manager",company:"OrbitApps",location:"Delhi NCR • Hybrid",salary:"₹15–28 LPA",experience:"4–8 years",requiredSkills:["Product Management","Agile","Analytics","User Research"],type:"Full-time",category:"Product",keywords:["product","roadmap","strategy"]},
  {id:"j9",title:"UX/UI Designer",company:"StudioLoop",location:"Remote • India",salary:"₹8–16 LPA",experience:"2–6 years",requiredSkills:["Figma","User Research","Prototyping","Design Systems"],type:"Full-time",category:"Design",keywords:["ux","ui","design","research"]},
  {id:"j10",title:"UX Researcher",company:"HumanFirst",location:"Bengaluru, India • Hybrid",salary:"₹9–17 LPA",experience:"2–6 years",requiredSkills:["User Research","Interviews","Usability Testing","Figma"],type:"Full-time",category:"Design",keywords:["research","ux","users"]},
  {id:"j11",title:"Cloud Engineer",company:"CloudSys",location:"Remote • India",salary:"₹13–24 LPA",experience:"3–7 years",requiredSkills:["AWS","Docker","Kubernetes","Terraform"],type:"Full-time",category:"Cloud",keywords:["cloud","devops","infrastructure"]},
  {id:"j12",title:"DevOps Engineer",company:"DeployWorks",location:"Hyderabad, India • Hybrid",salary:"₹12–23 LPA",experience:"3–7 years",requiredSkills:["AWS","Docker","Kubernetes","CI/CD"],type:"Full-time",category:"Cloud",keywords:["devops","deployment","cloud"]},
  {id:"j13",title:"Cybersecurity Analyst",company:"SecureLayer",location:"Chennai, India • Hybrid",salary:"₹9–18 LPA",experience:"2–6 years",requiredSkills:["SIEM","Networking","Linux","Incident Response"],type:"Full-time",category:"Security",keywords:["security","soc","risk"]},
  {id:"j14",title:"Business Analyst",company:"ProcessIQ",location:"Mumbai, India • Hybrid",salary:"₹8–15 LPA",experience:"2–6 years",requiredSkills:["SQL","Excel","Requirements Analysis","Power BI"],type:"Full-time",category:"Business",keywords:["business","requirements","analytics"]},
  {id:"j15",title:"Digital Marketing Specialist",company:"GrowthPilot",location:"Remote • India",salary:"₹6–12 LPA",experience:"1–5 years",requiredSkills:["SEO","Google Analytics","Content Strategy","AI Tools"],type:"Full-time",category:"Marketing",keywords:["marketing","growth","content"]},
  {id:"j16",title:"Content Strategist",company:"BrandFoundry",location:"Remote • India",salary:"₹7–14 LPA",experience:"2–5 years",requiredSkills:["Content Strategy","SEO","Copywriting","Analytics"],type:"Full-time",category:"Marketing",keywords:["content","marketing","seo"]},
  {id:"j17",title:"QA Automation Engineer",company:"QualityHub",location:"Pune, India • Hybrid",salary:"₹9–17 LPA",experience:"2–6 years",requiredSkills:["Selenium","Java","API Testing","CI/CD"],type:"Full-time",category:"Software",keywords:["testing","qa","automation"]},
  {id:"j18",title:"Technical Support Engineer",company:"HelpCloud",location:"Hyderabad, India • Hybrid",salary:"₹6–12 LPA",experience:"1–4 years",requiredSkills:["Linux","Networking","SQL","Customer Support"],type:"Full-time",category:"Support",keywords:["support","technical","customer"]},
  {id:"j19",title:"Solutions Architect",company:"EnterpriseOne",location:"Bengaluru, India • Hybrid",salary:"₹20–35 LPA",experience:"7–12 years",requiredSkills:["AWS","System Design","APIs","Security"],type:"Full-time",category:"Architecture",keywords:["architecture","cloud","systems"]},
  {id:"j20",title:"AI Business Analyst",company:"DecisionAI",location:"Remote • India",salary:"₹10–20 LPA",experience:"3–7 years",requiredSkills:["SQL","Power BI","AI Literacy","Requirements Analysis"],type:"Full-time",category:"AI",keywords:["ai","business","analytics"]},
  {id:"j21",title:"People Operations Specialist",company:"PeopleFlow",location:"Bengaluru, India • Hybrid",salary:"₹6–12 LPA",experience:"2–5 years",requiredSkills:["HRIS","Excel","Communication","People Analytics"],type:"Full-time",category:"People",keywords:["hr","people","operations"]},
  {id:"j22",title:"Financial Analyst",company:"FinSight",location:"Mumbai, India • Hybrid",salary:"₹8–16 LPA",experience:"2–6 years",requiredSkills:["Excel","Financial Modeling","SQL","Power BI"],type:"Full-time",category:"Finance",keywords:["finance","analysis","reporting"]},
];

export const courses: Course[] = [
 {id:"c1",title:"Python for Everybody",provider:"Coursera",url:"https://www.coursera.org/specializations/python",free:true,difficulty:"Beginner",duration:"8 weeks",skill:"Python",rating:4.8,roles:["Data Analyst","Data Engineer","Machine Learning Engineer"]},
 {id:"c2",title:"SQL for Data Science",provider:"Coursera",url:"https://www.coursera.org/learn/sql-for-data-science",free:true,difficulty:"Beginner",duration:"4 weeks",skill:"SQL",rating:4.7,roles:["Data Analyst","Data Engineer","Business Analyst"]},
 {id:"c3",title:"AWS Cloud Practitioner Essentials",provider:"AWS Training",url:"https://aws.amazon.com/training/",free:true,difficulty:"Beginner",duration:"2 weeks",skill:"AWS",rating:4.9,roles:["Data Engineer","Cloud Engineer","DevOps Engineer","Solutions Architect"]},
 {id:"c4",title:"Getting Started with React",provider:"Scrimba",url:"https://scrimba.com/learn/react",free:true,difficulty:"Beginner",duration:"6 weeks",skill:"React",rating:4.8,roles:["Frontend Developer","Full Stack Engineer"]},
 {id:"c5",title:"TypeScript Fundamentals",provider:"Microsoft Learn",url:"https://learn.microsoft.com/en-us/training/",free:true,difficulty:"Intermediate",duration:"3 weeks",skill:"TypeScript",rating:4.7,roles:["Frontend Developer","Full Stack Engineer"]},
 {id:"c6",title:"Data Visualization with Power BI",provider:"Microsoft Learn",url:"https://learn.microsoft.com/en-us/training/powerplatform/power-bi/",free:true,difficulty:"Intermediate",duration:"4 weeks",skill:"Power BI",rating:4.8,roles:["Data Analyst","Business Analyst","Financial Analyst"]},
 {id:"c7",title:"Machine Learning Specialization",provider:"Coursera",url:"https://www.coursera.org/specializations/machine-learning-introduction",free:false,difficulty:"Intermediate",duration:"12 weeks",skill:"Machine Learning",rating:4.9,roles:["Machine Learning Engineer","AI Business Analyst"]},
 {id:"c8",title:"Docker Foundations",provider:"Docker",url:"https://www.docker.com/get-started/",free:true,difficulty:"Beginner",duration:"2 weeks",skill:"Docker",rating:4.7,roles:["Cloud Engineer","DevOps Engineer","Backend Developer"]},
 {id:"c9",title:"Kubernetes Basics",provider:"Kubernetes",url:"https://kubernetes.io/docs/tutorials/kubernetes-basics/",free:true,difficulty:"Intermediate",duration:"3 weeks",skill:"Kubernetes",rating:4.8,roles:["Cloud Engineer","DevOps Engineer"]},
 {id:"c10",title:"Product Management Fundamentals",provider:"Coursera",url:"https://www.coursera.org/",free:true,difficulty:"Beginner",duration:"5 weeks",skill:"Product Management",rating:4.7,roles:["Product Manager","AI Product Manager"]},
 {id:"c11",title:"Figma for UX Design",provider:"Figma",url:"https://help.figma.com/",free:true,difficulty:"Beginner",duration:"3 weeks",skill:"Figma",rating:4.8,roles:["UX/UI Designer","UX Researcher"]},
 {id:"c12",title:"Cybersecurity Fundamentals",provider:"Cisco Networking Academy",url:"https://www.netacad.com/",free:true,difficulty:"Beginner",duration:"8 weeks",skill:"Cybersecurity",rating:4.8,roles:["Cybersecurity Analyst"]},
 {id:"c13",title:"SEO Fundamentals",provider:"Google",url:"https://skillshop.withgoogle.com/",free:true,difficulty:"Beginner",duration:"3 weeks",skill:"SEO",rating:4.6,roles:["Digital Marketing Specialist","Content Strategist"]},
 {id:"c14",title:"Financial Modeling",provider:"CFI",url:"https://corporatefinanceinstitute.com/",free:false,difficulty:"Intermediate",duration:"6 weeks",skill:"Financial Modeling",rating:4.7,roles:["Financial Analyst"]},
 {id:"c15",title:"People Analytics",provider:"Coursera",url:"https://www.coursera.org/",free:true,difficulty:"Intermediate",duration:"4 weeks",skill:"People Analytics",rating:4.6,roles:["People Operations Specialist"]},
];

export const groups: CommunityGroup[] = [
 {id:"g1",name:"Data & Analytics Career Switchers",description:"Share projects, interview preparation and transition stories.",members:3200,tags:["Data Analyst","Data Engineer","SQL","Python"]},
 {id:"g2",name:"AI-Ready Product Professionals",description:"Discuss AI product strategy, roadmaps and responsible adoption.",members:2100,tags:["Product Manager","AI Product Manager","AI"]},
 {id:"g3",name:"Cloud & DevOps Builders",description:"Hands-on cloud, infrastructure and automation discussions.",members:4100,tags:["Cloud Engineer","DevOps Engineer","AWS","Kubernetes"]},
 {id:"g4",name:"Frontend & Full Stack Community",description:"Build modern web products and share engineering practices.",members:5600,tags:["Frontend Developer","Full Stack Engineer","React","TypeScript"]},
 {id:"g5",name:"UX Research & Design Network",description:"Portfolio reviews, research methods and design-system practice.",members:2900,tags:["UX/UI Designer","UX Researcher","Figma"]},
 {id:"g6",name:"Cybersecurity Career Launchpad",description:"Learn security fundamentals, labs and entry-to-mid career paths.",members:1800,tags:["Cybersecurity Analyst","Security","Linux"]},
 {id:"g7",name:"Marketing with AI",description:"Use AI responsibly for content, SEO, analytics and growth.",members:3700,tags:["Digital Marketing Specialist","Content Strategist","SEO"]},
 {id:"g8",name:"Business Analysis & Product Thinking",description:"Requirements, stakeholder management, analytics and product skills.",members:4400,tags:["Business Analyst","Product Manager","SQL","Power BI"]},
];

export const posts: CommunityPost[] = [
 {id:"p1",author:"Community member",group:"Data & Analytics Career Switchers",title:"What project helped you move into data?",body:"Looking for portfolio project ideas that demonstrate SQL, Python and business impact.",likes:42,comments:18,tags:["Data Analyst","Python","SQL"]},
 {id:"p2",author:"Community member",group:"AI-Ready Product Professionals",title:"How are you showing AI product skills?",body:"Sharing practical ways to demonstrate discovery, experimentation and responsible AI knowledge in a product portfolio.",likes:31,comments:11,tags:["AI Product Manager","Product Manager"]},
 {id:"p3",author:"Community member",group:"Cloud & DevOps Builders",title:"Best beginner cloud project?",body:"I want a small deployable project that proves AWS, Docker and CI/CD fundamentals.",likes:56,comments:24,tags:["AWS","Docker","DevOps Engineer"]},
 {id:"p4",author:"Community member",group:"Frontend & Full Stack Community",title:"React to full-stack transition",body:"Which backend concepts should a frontend developer prioritize first?",likes:37,comments:15,tags:["React","Full Stack Engineer"]},
 {id:"p5",author:"Community member",group:"UX Research & Design Network",title:"Portfolio review exchange",body:"Looking for peers to review a case study focused on user research and prototyping.",likes:28,comments:9,tags:["UX/UI Designer","UX Researcher"]},
 {id:"p6",author:"Community member",group:"Marketing with AI",title:"AI tools without losing your voice",body:"Discussing workflows that speed up research and content while keeping strategy human-led.",likes:64,comments:22,tags:["Digital Marketing Specialist","Content Strategist","AI"]},
];
