import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from './supabase';

export interface ProfileData {
  careerStatus?: string;
  currentTitle?: string;
  targetCareer?: string;
  yearsExperience?: number;
  skills?: string[];
  interests?: string[];
  aiConcern?: number;
  resumeName?: string;
  resumeText?: string;
  resumeKeywords?: string[];
}

interface User {
  id: string;
  name: string;
  email: string;
  hasOnboarded?: boolean;
  profileData?: ProfileData;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<{ ok: boolean; error?: string }>;
  logout: () => Promise<void>;
  register: (data: { name: string; email: string; password: string }) => Promise<{ ok: boolean; error?: string }>;
  completeOnboarding: (data: ProfileData) => void;
  updateProfile: (data: Partial<ProfileData> & Partial<Pick<User, 'name' | 'email'>>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);
const ACCOUNTS_KEY = 'rebuild-reskill-accounts-v2';
const SESSION_KEY = 'rebuild-reskill-session-v2';
const defaultProfile: ProfileData = { careerStatus: '', currentTitle: '', targetCareer: '', yearsExperience: 0, skills: [], interests: [], aiConcern: 3 };

type StoredAccount = User & { passwordHash: string };
const configuredSupabase = Boolean(import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY && !String(import.meta.env.VITE_SUPABASE_URL).includes('mock'));

async function hashPassword(value: string) {
  const data = new TextEncoder().encode(value);
  const hash = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('');
}

function readAccounts(): Record<string, StoredAccount> {
  try { return JSON.parse(localStorage.getItem(ACCOUNTS_KEY) || '{}'); } catch { return {}; }
}
function writeAccounts(accounts: Record<string, StoredAccount>) { localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts)); }
function readSession(): User | null { try { return JSON.parse(localStorage.getItem(SESSION_KEY) || 'null'); } catch { return null; } }

function normalizeEmail(email: string) { return email.trim().toLowerCase(); }

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(readSession);
  const navigate = useNavigate();

  const persistSession = (next: User) => {
    setUser(next);
    localStorage.setItem(SESSION_KEY, JSON.stringify(next));
  };

  const register = async ({ name, email, password }: { name: string; email: string; password: string }) => {
    const cleanEmail = normalizeEmail(email);
    if (configuredSupabase) {
      const { data, error } = await supabase.auth.signUp({ email: cleanEmail, password });
      if (error) return { ok: false, error: error.message };
      if (!data.user) return { ok: false, error: 'Account could not be created.' };
      const next: User = { id: data.user.id, name, email: cleanEmail, hasOnboarded: false, profileData: { ...defaultProfile } };
      persistSession(next); navigate('/onboarding'); return { ok: true };
    }
    if (password.length < 6) return { ok: false, error: 'Password must be at least 6 characters.' };
    const accounts = readAccounts();
    if (accounts[cleanEmail]) return { ok: false, error: 'An account with this email already exists.' };
    const next: User = { id: crypto.randomUUID(), name: name.trim(), email: cleanEmail, hasOnboarded: false, profileData: { ...defaultProfile } };
    accounts[cleanEmail] = { ...next, passwordHash: await hashPassword(password) };
    writeAccounts(accounts); persistSession(next); navigate('/onboarding'); return { ok: true };
  };

  const login = async (email: string, password: string) => {
    const cleanEmail = normalizeEmail(email);
    if (configuredSupabase) {
      const { data, error } = await supabase.auth.signInWithPassword({ email: cleanEmail, password });
      if (error || !data.user) return { ok: false, error: error?.message || 'Invalid email or password.' };
      const accounts = readAccounts();
      const stored = accounts[cleanEmail];
      const next: User = stored ? { id: data.user.id, name: stored.name, email: cleanEmail, hasOnboarded: stored.hasOnboarded, profileData: stored.profileData } : { id: data.user.id, name: data.user.user_metadata?.name || cleanEmail.split('@')[0], email: cleanEmail, hasOnboarded: false, profileData: { ...defaultProfile } };
      persistSession(next); navigate(next.hasOnboarded ? '/dashboard' : '/onboarding'); return { ok: true };
    }
    const accounts = readAccounts();
    const stored = accounts[cleanEmail];
    if (!stored || stored.passwordHash !== await hashPassword(password)) return { ok: false, error: 'Invalid email or password.' };
    const next: User = { id: stored.id, name: stored.name, email: stored.email, hasOnboarded: stored.hasOnboarded, profileData: { ...defaultProfile, ...(stored.profileData || {}) } };
    persistSession(next); navigate(next.hasOnboarded ? '/dashboard' : '/onboarding'); return { ok: true };
  };

  const completeOnboarding = (data: ProfileData) => {
    if (!user) return;
    const next = { ...user, hasOnboarded: true, profileData: { ...defaultProfile, ...data } };
    if (!configuredSupabase) { const accounts = readAccounts(); if (accounts[user.email]) { accounts[user.email] = { ...accounts[user.email], ...next }; writeAccounts(accounts); } }
    persistSession(next); navigate('/dashboard');
  };

  const updateProfile = (data: Partial<ProfileData> & Partial<Pick<User, 'name' | 'email'>>) => {
    if (!user) return;
    const { name, email, ...profile } = data;
    const next: User = { ...user, ...(name !== undefined ? { name } : {}), ...(email !== undefined ? { email: normalizeEmail(email) } : {}), profileData: { ...defaultProfile, ...(user.profileData || {}), ...profile } };
    if (!configuredSupabase) {
      const accounts = readAccounts();
      const old = accounts[user.email];
      if (old) {
        delete accounts[user.email];
        accounts[next.email] = { ...old, ...next, passwordHash: old.passwordHash };
        writeAccounts(accounts);
      }
    }
    persistSession(next);
  };

  const logout = async () => {
    if (configuredSupabase) await supabase.auth.signOut();
    setUser(null); localStorage.removeItem(SESSION_KEY); navigate('/login');
  };

  return <AuthContext.Provider value={{ user, login, logout, register, completeOnboarding, updateProfile }}>{children}</AuthContext.Provider>;
}

export function useAuth() { const context = useContext(AuthContext); if (!context) throw new Error('useAuth must be used within an AuthProvider'); return context; }
