import { z } from "zod";

export interface User {
  id: number;
  username: string;
  password: string;
}

export interface Profile {
  id: number;
  name: string;
  photoUrl: string | null;
  resumeUrl: string | null;
  aboutMe: string;
  email: string;
  phone: string | null;
  location: string | null;
  githubUrl: string | null;
  linkedinUrl: string | null;
}

export interface Skill {
  id: number;
  name: string;
  category: string;
  proficiency: number;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string | null;
  repoUrl: string | null;
  tags: string[];
  order: number;
}

export interface Message {
  id: number;
  name: string;
  email: string;
  message: string;
  createdAt: Date | null;
}

export const insertUserSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});

export const insertProfileSchema = z.object({
  name: z.string().min(1),
  photoUrl: z.string().nullable().optional(),
  resumeUrl: z.string().nullable().optional(),
  aboutMe: z.string().min(1),
  email: z.string().email(),
  phone: z.string().nullable().optional(),
  location: z.string().nullable().optional(),
  githubUrl: z.string().nullable().optional(),
  linkedinUrl: z.string().nullable().optional(),
});

export const insertSkillSchema = z.object({
  name: z.string().min(1),
  category: z.string().min(1),
  proficiency: z.number().min(0).max(100),
});

export const insertProjectSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  imageUrl: z.string().optional().default(""),
  projectUrl: z.string().nullable().optional(),
  repoUrl: z.string().nullable().optional(),
  tags: z.array(z.string()),
  order: z.number().optional().default(0),
});

export const insertMessageSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type InsertProfile = z.infer<typeof insertProfileSchema>;
export type InsertSkill = z.infer<typeof insertSkillSchema>;
export type InsertProject = z.infer<typeof insertProjectSchema>;
export type InsertMessage = z.infer<typeof insertMessageSchema>;
