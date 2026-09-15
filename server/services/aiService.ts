import OpenAI from 'openai';
import { config } from 'dotenv';
config();

const getAiClient=()=>new OpenAI({apiKey:process.env.OMNIROUTE_API_KEY||'mock-key',baseURL:process.env.OMNIROUTE_BASE_URL||'http://localhost:20128/v1'});
const model=process.env.OMNIROUTE_MODEL||'auto';
const callAI=async(prompt:string)=>{
 const ai=getAiClient(); const response=await ai.chat.completions.create({model,messages:[{role:'user',content:prompt}],response_format:{type:'json_object'}});
 return JSON.parse(response.choices[0].message.content||'{}');
};

export async function generateJobFit(userProfile:any,job:any){
 const prompt=`Evaluate job fit using the user's current role, target role, skills, experience and resume text. Do not assume missing information. Explain transferable skills and missing requirements. User: ${JSON.stringify(userProfile)} Job: ${JSON.stringify(job)}. Return JSON: {"jobFitScore":0,"strengths":[],"skillGaps":[],"recommendation":"","reasoning":""}`;
 try{return await callAI(prompt)}catch{
  const skills=(userProfile?.skills||[]).map((s:string)=>s.toLowerCase()); const required=job.requiredSkills||[];
  const hits=required.filter((r:string)=>skills.some((s:string)=>s.includes(r.toLowerCase())||r.toLowerCase().includes(s))).length;
  const target=(userProfile?.targetCareer||'').toLowerCase(); const title=job.title.toLowerCase();
  const score=Math.min(100,Math.round((hits/Math.max(required.length,1))*80)+(target&&(title.includes(target)||target.includes(title))?20:0));
  return {jobFitScore:score,strengths:required.filter((r:string)=>skills.some((s:string)=>s.includes(r.toLowerCase())||r.toLowerCase().includes(s))),skillGaps:required.filter((r:string)=>!skills.some((s:string)=>s.includes(r.toLowerCase())||r.toLowerCase().includes(s))),recommendation:score>=70?'Strong match — tailor your resume to the role.':score>=45?'Promising transition — close the highlighted skill gaps.':'Build the missing skills before prioritizing this role.',reasoning:`Fit is calculated from ${hits} of ${required.length} listed skills plus target-role alignment.`};
 }
}

export async function generateAiImpact(occupation:string, profile:any = {}){
 const targetCareer = profile?.targetCareer || ''; const skills = profile?.skills || [];
 try{return await callAI(`Analyze task-level AI exposure for the user's current occupation "${occupation}". The same user is targeting "${targetCareer}" and currently has skills ${skills.join(', ') || 'none provided'}. Use responsible uncertainty. Make complementary skills and career directions useful for this user's transition rather than generic. Return JSON with occupation, exposureScore 0-100, highExposureTasks, mediumExposureTasks, lowExposureTasks, complementarySkills, recommendedCareerDirections.`)}
 catch{return {occupation,exposureScore:50,highExposureTasks:['Routine information processing'],mediumExposureTasks:['Drafting and reporting','Analysis with structured data'],lowExposureTasks:['Stakeholder decisions','Contextual judgment'],complementarySkills:['AI literacy','Domain expertise','Communication'],recommendedCareerDirections:targetCareer?[targetCareer,`AI-augmented ${occupation}`]:[`AI-augmented ${occupation}`]};}
}

export async function generateSkillGap(currentSkills:string[],targetCareer:string){
 try{return await callAI(`Compare current skills ${currentSkills.join(', ')} with target career "${targetCareer}". Return JSON with currentSkills,targetCareer,missingSkills.`)}
 catch{return {currentSkills,targetCareer,missingSkills:['Target-role technical fundamentals','Portfolio project','Interview readiness']};}
}

export async function generateLearningPlan(targetCareer:string,skillGaps:string[]){
 try{return await callAI(`Create a practical learning plan for target career "${targetCareer}" and gaps ${skillGaps.join(', ')}. Return JSON with targetCareer,skillGaps,phases where each phase has title,duration,skills,courses,project.`)}
 catch{return {targetCareer,skillGaps,phases:skillGaps.map((gap,i)=>({title:`Phase ${i+1}: ${gap}`,duration:'2–4 weeks',skills:[gap],courses:[`Learn ${gap} fundamentals`],project:`Build a small ${targetCareer} project demonstrating ${gap}.`}))};}
}
