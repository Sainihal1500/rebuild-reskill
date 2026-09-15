# Rebuild & Re-Skill — Account-driven Career Transition Prototype

This version makes the signed-in account the source of truth for the experience. The UI no longer starts with a demo email, demo password, or fixed dashboard profile.

## Account behavior

- Every registered email gets its own account record and its own profile.
- Passwords are stored as SHA-256 hashes in the local prototype account store; the raw password is not stored.
- Logging out clears the active session but keeps other registered accounts separate.
- Logging in with another account loads that account's name, career status, current role, target role, skills, interests, AI concern and resume context.
- A protected route prevents users from opening the dashboard without an active login.
- Legacy prototype session keys are intentionally not treated as credentials; create/sign in to an account in the new account store so one user's data cannot be loaded by another login.

> **Prototype security note:** localStorage authentication is suitable for a local/demo prototype only. For production, configure Supabase Auth and store profile data in a server-side database with row-level security.

## Dynamic recommendation behavior

The backend catalogue contains seed jobs, courses and communities. The **recommendation results are not hardcoded per user**:

- Jobs are ranked using current role, target role, skills and resume text.
- Target-role readiness is recalculated from the user's best matching opportunities and skill gaps.
- Skill gaps are derived from requirements of jobs relevant to the user's target.
- Learning recommendations prioritize courses for the user's target role and skills they do not already have.
- Community groups and posts are ranked using current role, target role, skills and interests.
- AI Impact Analysis uses the logged-in user's current role, target role and skills as context.
- Job Fit sends the logged-in user's profile and resume context for analysis.
- Dashboard trend values are generated from that account's profile/readiness values instead of fixed chart points.

## More career data

The backend seed catalogue now covers 50 job opportunities across software, data, AI, product, design, cloud, security, marketing, customer success, people and operations, plus additional courses and communities.

To make the catalogue fully production-dynamic, replace `server/services/data.ts` with database/job-provider queries. The profile-driven ranking interfaces can remain the same.

## Run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Optional Supabase

If `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` are configured with a real Supabase project, the authentication flow uses Supabase Auth. Without those values, the app uses the local prototype account store so it can run immediately on localhost.
