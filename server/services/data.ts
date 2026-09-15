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
 {id:"j23",title:"Frontend React Engineer",company:"WebCraft Labs",location:"Bengaluru, India • Hybrid",salary:"₹10–19 LPA",experience:"2–5 years",requiredSkills:["React","TypeScript","Testing","Git"],type:"Full-time",category:"Software",keywords:["frontend","react","web","ui"]},
 {id:"j24",title:"Java Backend Engineer",company:"FinStack",location:"Hyderabad, India • Hybrid",salary:"₹11–21 LPA",experience:"2–6 years",requiredSkills:["Java","Spring Boot","REST APIs","SQL"],type:"Full-time",category:"Software",keywords:["java","backend","api","server"]},
 {id:"j25",title:"Python Backend Developer",company:"DataPulse",location:"Remote • India",salary:"₹10–20 LPA",experience:"2–6 years",requiredSkills:["Python","FastAPI","PostgreSQL","Docker"],type:"Full-time",category:"Software",keywords:["python","backend","api"]},
 {id:"j26",title:"Mobile App Developer",company:"AppOrbit",location:"Pune, India • Hybrid",salary:"₹9–18 LPA",experience:"2–5 years",requiredSkills:["React Native","JavaScript","APIs","Git"],type:"Full-time",category:"Software",keywords:["mobile","android","ios","app"]},
 {id:"j27",title:"Data Scientist",company:"PredictiveWorks",location:"Bengaluru, India • Hybrid",salary:"₹14–28 LPA",experience:"2–6 years",requiredSkills:["Python","Statistics","Machine Learning","SQL"],type:"Full-time",category:"AI",keywords:["data science","ml","analytics","python"]},
 {id:"j28",title:"AI Engineer",company:"CognitiveGrid",location:"Hyderabad, India • Hybrid",salary:"₹16–32 LPA",experience:"3–7 years",requiredSkills:["Python","LLMs","APIs","Machine Learning"],type:"Full-time",category:"AI",keywords:["ai","llm","machine learning","python"]},
 {id:"j29",title:"MLOps Engineer",company:"ModelOps Cloud",location:"Remote • India",salary:"₹16–30 LPA",experience:"3–7 years",requiredSkills:["Python","Docker","Kubernetes","MLflow"],type:"Full-time",category:"AI",keywords:["mlops","machine learning","devops","cloud"]},
 {id:"j30",title:"Data Quality Analyst",company:"TrustData",location:"Chennai, India • Hybrid",salary:"₹7–14 LPA",experience:"1–4 years",requiredSkills:["SQL","Excel","Data Quality","Python"],type:"Full-time",category:"Data",keywords:["data","quality","analytics"]},
 {id:"j31",title:"BI Developer",company:"ReportWorks",location:"Pune, India • Hybrid",salary:"₹9–17 LPA",experience:"2–6 years",requiredSkills:["Power BI","SQL","DAX","Data Modeling"],type:"Full-time",category:"Data",keywords:["bi","power bi","reporting","analytics"]},
 {id:"j32",title:"Analytics Engineer",company:"MetricFlow",location:"Remote • India",salary:"₹13–25 LPA",experience:"3–7 years",requiredSkills:["SQL","dbt","Python","Data Modeling"],type:"Full-time",category:"Data",keywords:["analytics","data modeling","sql"]},
 {id:"j33",title:"Product Analyst",company:"LaunchBoard",location:"Mumbai, India • Hybrid",salary:"₹10–19 LPA",experience:"2–5 years",requiredSkills:["SQL","Analytics","A/B Testing","Product Metrics"],type:"Full-time",category:"Product",keywords:["product","analytics","experimentation"]},
 {id:"j34",title:"Product Operations Manager",company:"ScaleHub",location:"Delhi NCR • Hybrid",salary:"₹12–22 LPA",experience:"3–7 years",requiredSkills:["Operations","Analytics","Stakeholder Management","Project Management"],type:"Full-time",category:"Product",keywords:["product","operations","program"]},
 {id:"j35",title:"Scrum Master",company:"AgileWorks",location:"Bengaluru, India • Hybrid",salary:"₹12–21 LPA",experience:"3–7 years",requiredSkills:["Agile","Scrum","Facilitation","Stakeholder Management"],type:"Full-time",category:"Product",keywords:["scrum","agile","delivery"]},
 {id:"j36",title:"UI Designer",company:"DesignForge",location:"Remote • India",salary:"₹7–15 LPA",experience:"1–5 years",requiredSkills:["Figma","Visual Design","Design Systems","Prototyping"],type:"Full-time",category:"Design",keywords:["ui","visual","design","figma"]},
 {id:"j37",title:"UX Content Designer",company:"ClearPath",location:"Bengaluru, India • Hybrid",salary:"₹8–16 LPA",experience:"2–6 years",requiredSkills:["UX Writing","Content Design","User Research","Figma"],type:"Full-time",category:"Design",keywords:["ux","content","writing","design"]},
 {id:"j38",title:"Cloud Solutions Engineer",company:"InfraScale",location:"Hyderabad, India • Hybrid",salary:"₹14–27 LPA",experience:"3–8 years",requiredSkills:["AWS","Networking","Terraform","Linux"],type:"Full-time",category:"Cloud",keywords:["cloud","aws","infrastructure"]},
 {id:"j39",title:"Platform Engineer",company:"DeveloperCloud",location:"Remote • India",salary:"₹15–29 LPA",experience:"3–8 years",requiredSkills:["Kubernetes","Terraform","Linux","CI/CD"],type:"Full-time",category:"Cloud",keywords:["platform","devops","infrastructure"]},
 {id:"j40",title:"Site Reliability Engineer",company:"AlwaysOn",location:"Bengaluru, India • Hybrid",salary:"₹16–30 LPA",experience:"4–9 years",requiredSkills:["Linux","Kubernetes","Monitoring","Python"],type:"Full-time",category:"Cloud",keywords:["sre","reliability","devops"]},
 {id:"j41",title:"Security Engineer",company:"ShieldWorks",location:"Pune, India • Hybrid",salary:"₹12–25 LPA",experience:"3–7 years",requiredSkills:["Cloud Security","Linux","Networking","SIEM"],type:"Full-time",category:"Security",keywords:["security","cloud","soc"]},
 {id:"j42",title:"Application Security Analyst",company:"CodeShield",location:"Remote • India",salary:"₹10–21 LPA",experience:"2–6 years",requiredSkills:["OWASP","SAST","API Security","Linux"],type:"Full-time",category:"Security",keywords:["appsec","security","web"]},
 {id:"j43",title:"GRC Analyst",company:"RiskMatrix",location:"Mumbai, India • Hybrid",salary:"₹8–17 LPA",experience:"2–6 years",requiredSkills:["Risk Management","Compliance","Excel","Security"],type:"Full-time",category:"Security",keywords:["grc","risk","compliance"]},
 {id:"j44",title:"Growth Marketing Manager",company:"MarketLift",location:"Remote • India",salary:"₹10–20 LPA",experience:"3–7 years",requiredSkills:["SEO","Performance Marketing","Analytics","AI Tools"],type:"Full-time",category:"Marketing",keywords:["growth","marketing","seo"]},
 {id:"j45",title:"Social Media Strategist",company:"SocialPulse",location:"Bengaluru, India • Hybrid",salary:"₹6–13 LPA",experience:"1–5 years",requiredSkills:["Social Media","Content Strategy","Analytics","Copywriting"],type:"Full-time",category:"Marketing",keywords:["social","content","marketing"]},
 {id:"j46",title:"Customer Success Manager",company:"CustomerFirst",location:"Hyderabad, India • Hybrid",salary:"₹8–16 LPA",experience:"2–6 years",requiredSkills:["Customer Success","Communication","CRM","Analytics"],type:"Full-time",category:"Customer",keywords:["customer","success","crm"]},
 {id:"j47",title:"Talent Acquisition Specialist",company:"TalentBridge",location:"Bengaluru, India • Hybrid",salary:"₹6–13 LPA",experience:"1–5 years",requiredSkills:["Recruiting","Communication","ATS","Sourcing"],type:"Full-time",category:"People",keywords:["hr","recruiting","talent"]},
 {id:"j48",title:"People Analytics Analyst",company:"WorkforceIQ",location:"Remote • India",salary:"₹8–16 LPA",experience:"2–6 years",requiredSkills:["Excel","SQL","People Analytics","Power BI"],type:"Full-time",category:"People",keywords:["hr","people","analytics"]},
 {id:"j49",title:"Operations Analyst",company:"OpsCore",location:"Chennai, India • Hybrid",salary:"₹7–14 LPA",experience:"1–5 years",requiredSkills:["Excel","SQL","Process Improvement","Power BI"],type:"Full-time",category:"Operations",keywords:["operations","process","analytics"]},
 {id:"j50",title:"Project Coordinator",company:"DeliveryWorks",location:"Pune, India • Hybrid",salary:"₹6–12 LPA",experience:"1–4 years",requiredSkills:["Project Management","Communication","Excel","Agile"],type:"Full-time",category:"Operations",keywords:["project","delivery","operations"]},

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
 {id:"c16",title:"Java Spring Boot Essentials",provider:"Spring Academy",url:"https://spring.academy/",free:true,difficulty:"Intermediate",duration:"6 weeks",skill:"Spring Boot",rating:4.7,roles:["Java Backend Engineer","Backend Developer"]},
 {id:"c17",title:"FastAPI for Python Developers",provider:"FastAPI",url:"https://fastapi.tiangolo.com/",free:true,difficulty:"Intermediate",duration:"3 weeks",skill:"FastAPI",rating:4.8,roles:["Python Backend Developer","Backend Developer"]},
 {id:"c18",title:"React Native Fundamentals",provider:"Meta",url:"https://reactnative.dev/",free:true,difficulty:"Intermediate",duration:"5 weeks",skill:"React Native",rating:4.7,roles:["Mobile App Developer"]},
 {id:"c19",title:"Practical Statistics for Data Science",provider:"Coursera",url:"https://www.coursera.org/",free:true,difficulty:"Intermediate",duration:"6 weeks",skill:"Statistics",rating:4.7,roles:["Data Scientist","Data Analyst"]},
 {id:"c20",title:"Large Language Models Fundamentals",provider:"Hugging Face",url:"https://huggingface.co/learn",free:true,difficulty:"Intermediate",duration:"5 weeks",skill:"LLMs",rating:4.8,roles:["AI Engineer","AI Product Manager","Machine Learning Engineer"]},
 {id:"c21",title:"dbt Fundamentals",provider:"dbt Labs",url:"https://courses.getdbt.com/",free:true,difficulty:"Intermediate",duration:"3 weeks",skill:"dbt",rating:4.7,roles:["Analytics Engineer","Data Engineer"]},
 {id:"c22",title:"DAX and Power BI Modeling",provider:"Microsoft Learn",url:"https://learn.microsoft.com/en-us/training/powerplatform/power-bi/",free:true,difficulty:"Intermediate",duration:"4 weeks",skill:"DAX",rating:4.8,roles:["BI Developer","Data Analyst"]},
 {id:"c23",title:"A/B Testing and Product Analytics",provider:"Coursera",url:"https://www.coursera.org/",free:true,difficulty:"Intermediate",duration:"4 weeks",skill:"A/B Testing",rating:4.6,roles:["Product Analyst","Product Manager"]},
 {id:"c24",title:"Agile and Scrum Essentials",provider:"Atlassian",url:"https://www.atlassian.com/agile",free:true,difficulty:"Beginner",duration:"2 weeks",skill:"Scrum",rating:4.7,roles:["Scrum Master","Product Manager","Project Coordinator"]},
 {id:"c25",title:"UX Writing and Content Design",provider:"Google",url:"https://grow.google/certificates/ux-design/",free:true,difficulty:"Beginner",duration:"4 weeks",skill:"UX Writing",rating:4.6,roles:["UX Content Designer","UX/UI Designer"]},
 {id:"c26",title:"Terraform on AWS",provider:"HashiCorp",url:"https://developer.hashicorp.com/terraform/tutorials/aws-get-started",free:true,difficulty:"Intermediate",duration:"3 weeks",skill:"Terraform",rating:4.8,roles:["Cloud Engineer","Cloud Solutions Engineer","Platform Engineer"]},
 {id:"c27",title:"Site Reliability Engineering Basics",provider:"Google Cloud",url:"https://sre.google/",free:true,difficulty:"Intermediate",duration:"5 weeks",skill:"Monitoring",rating:4.7,roles:["Site Reliability Engineer"]},
 {id:"c28",title:"Web Application Security Fundamentals",provider:"OWASP",url:"https://owasp.org/www-project-top-ten/",free:true,difficulty:"Intermediate",duration:"4 weeks",skill:"OWASP",rating:4.9,roles:["Application Security Analyst","Security Engineer"]},
 {id:"c29",title:"Risk and Compliance Fundamentals",provider:"IBM",url:"https://www.ibm.com/training/",free:true,difficulty:"Beginner",duration:"4 weeks",skill:"Risk Management",rating:4.5,roles:["GRC Analyst"]},
 {id:"c30",title:"Performance Marketing Foundations",provider:"Google",url:"https://skillshop.withgoogle.com/",free:true,difficulty:"Beginner",duration:"4 weeks",skill:"Performance Marketing",rating:4.6,roles:["Growth Marketing Manager","Digital Marketing Specialist"]},
 {id:"c31",title:"Customer Success Foundations",provider:"HubSpot",url:"https://academy.hubspot.com/",free:true,difficulty:"Beginner",duration:"3 weeks",skill:"Customer Success",rating:4.6,roles:["Customer Success Manager"]},
 {id:"c32",title:"Recruiting and Talent Sourcing",provider:"LinkedIn Learning",url:"https://www.linkedin.com/learning/",free:false,difficulty:"Beginner",duration:"4 weeks",skill:"Sourcing",rating:4.5,roles:["Talent Acquisition Specialist"]},
 {id:"c33",title:"Project Management Foundations",provider:"Google",url:"https://grow.google/certificates/project-management/",free:true,difficulty:"Beginner",duration:"6 weeks",skill:"Project Management",rating:4.7,roles:["Project Coordinator","Product Operations Manager"]},
 {id:"c34",title:"Process Improvement with Lean",provider:"Coursera",url:"https://www.coursera.org/",free:true,difficulty:"Intermediate",duration:"5 weeks",skill:"Process Improvement",rating:4.6,roles:["Operations Analyst","Project Coordinator"]},

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
 {id:"g9",name:"AI Engineering Builders",description:"LLMs, evaluation, model integration and production AI engineering.",members:2600,tags:["AI Engineer","LLMs","Python","Machine Learning"]},
 {id:"g10",name:"Product Analytics Community",description:"Experimentation, product metrics and data-informed product decisions.",members:3500,tags:["Product Analyst","A/B Testing","SQL","Analytics"]},
 {id:"g11",name:"Security Engineering Network",description:"Application security, cloud security and practical security engineering.",members:2400,tags:["Security Engineer","Application Security Analyst","OWASP","Linux"]},
 {id:"g12",name:"Operations & Project Professionals",description:"Process improvement, delivery, project coordination and operations analytics.",members:3100,tags:["Operations Analyst","Project Coordinator","Project Management","Process Improvement"]},

];

export const posts: CommunityPost[] = [
 {id:"p1",author:"Community member",group:"Data & Analytics Career Switchers",title:"What project helped you move into data?",body:"Looking for portfolio project ideas that demonstrate SQL, Python and business impact.",likes:42,comments:18,tags:["Data Analyst","Python","SQL"]},
 {id:"p2",author:"Community member",group:"AI-Ready Product Professionals",title:"How are you showing AI product skills?",body:"Sharing practical ways to demonstrate discovery, experimentation and responsible AI knowledge in a product portfolio.",likes:31,comments:11,tags:["AI Product Manager","Product Manager"]},
 {id:"p3",author:"Community member",group:"Cloud & DevOps Builders",title:"Best beginner cloud project?",body:"I want a small deployable project that proves AWS, Docker and CI/CD fundamentals.",likes:56,comments:24,tags:["AWS","Docker","DevOps Engineer"]},
 {id:"p4",author:"Community member",group:"Frontend & Full Stack Community",title:"React to full-stack transition",body:"Which backend concepts should a frontend developer prioritize first?",likes:37,comments:15,tags:["React","Full Stack Engineer"]},
 {id:"p5",author:"Community member",group:"UX Research & Design Network",title:"Portfolio review exchange",body:"Looking for peers to review a case study focused on user research and prototyping.",likes:28,comments:9,tags:["UX/UI Designer","UX Researcher"]},
 {id:"p6",author:"Community member",group:"Marketing with AI",title:"AI tools without losing your voice",body:"Discussing workflows that speed up research and content while keeping strategy human-led.",likes:64,comments:22,tags:["Digital Marketing Specialist","Content Strategist","AI"]},
];
