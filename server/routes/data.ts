import { Router } from 'express';
import { jobs, courses, groups, posts } from '../services/data.js';

const router = Router();
router.get('/jobs', (_req,res)=>res.json(jobs));
router.get('/jobs/:id', (req,res)=>{ const job=jobs.find(j=>j.id===req.params.id); job?res.json(job):res.status(404).json({error:'Job not found'}); });
router.get('/courses', (_req,res)=>res.json(courses));
router.get('/community/groups', (_req,res)=>res.json(groups));
router.get('/community/posts', (_req,res)=>res.json(posts));
export default router;
