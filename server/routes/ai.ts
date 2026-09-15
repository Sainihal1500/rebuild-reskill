import { Router } from 'express';
import { generateJobFit, generateAiImpact, generateSkillGap, generateLearningPlan } from '../services/aiService.js';

const router = Router();

router.post('/job-fit', async (req, res) => {
  try {
    const { userProfile, job } = req.body;
    const result = await generateJobFit(userProfile, job);
    res.json(result);
  } catch (error) {
    console.error('AI Job Fit Error:', error);
    res.status(500).json({ error: 'Failed to generate job fit analysis' });
  }
});

router.post('/impact', async (req, res) => {
  try {
    const { occupation, targetCareer, skills } = req.body;
    const result = await generateAiImpact(occupation, { targetCareer, skills });
    res.json(result);
  } catch (error) {
    console.error('AI Impact Error:', error);
    res.status(500).json({ error: 'Failed to generate AI impact analysis' });
  }
});

router.post('/skill-gap', async (req, res) => {
  try {
    const { currentSkills, targetCareer } = req.body;
    const result = await generateSkillGap(currentSkills, targetCareer);
    res.json(result);
  } catch (error) {
    console.error('AI Skill Gap Error:', error);
    res.status(500).json({ error: 'Failed to generate skill gap analysis' });
  }
});

router.post('/learning-plan', async (req, res) => {
  try {
    const { targetCareer, skillGaps } = req.body;
    const result = await generateLearningPlan(targetCareer, skillGaps);
    res.json(result);
  } catch (error) {
    console.error('AI Learning Plan Error:', error);
    res.status(500).json({ error: 'Failed to generate learning plan' });
  }
});

export default router;
