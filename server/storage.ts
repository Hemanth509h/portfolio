import { db } from "./db";
import {
  users, profile, skills, projects, messages,
  type User, type InsertUser,
  type Profile, type InsertProfile,
  type Skill, type InsertSkill,
  type Project, type InsertProject,
  type Message, type InsertMessage
} from "@shared/schema";
import session from "express-session";
import connectPg from "connect-pg-simple";
import { pool } from "./db";
import { eq } from "drizzle-orm";

const PostgresSessionStore = connectPg(session);

export interface IStorage {
  // User auth
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Profile
  getProfile(): Promise<Profile | undefined>;
  updateProfile(profile: InsertProfile): Promise<Profile>;

  // Skills
  getSkills(): Promise<Skill[]>;
  createSkill(skill: InsertSkill): Promise<Skill>;
  updateSkill(id: number, skill: InsertSkill): Promise<Skill>;
  deleteSkill(id: number): Promise<void>;

  // Projects
  getProjects(): Promise<Project[]>;
  createProject(project: InsertProject): Promise<Project>;
  updateProject(id: number, project: InsertProject): Promise<Project>;
  deleteProject(id: number): Promise<void>;

  // Messages
  createMessage(message: InsertMessage): Promise<Message>;

  sessionStore: session.Store;
}

export class DatabaseStorage implements IStorage {
  sessionStore: session.Store;

  constructor() {
    this.sessionStore = new PostgresSessionStore({
      pool,
      createTableIfMissing: true,
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async getProfile(): Promise<Profile | undefined> {
    const [p] = await db.select().from(profile).limit(1);
    return p;
  }

  async updateProfile(insertProfile: InsertProfile): Promise<Profile> {
    const existing = await this.getProfile();
    if (existing) {
      const [p] = await db.update(profile).set(insertProfile).where(eq(profile.id, existing.id)).returning();
      return p;
    } else {
      const [p] = await db.insert(profile).values(insertProfile).returning();
      return p;
    }
  }

  async getSkills(): Promise<Skill[]> {
    return await db.select().from(skills);
  }

  async createSkill(insertSkill: InsertSkill): Promise<Skill> {
    const [skill] = await db.insert(skills).values(insertSkill).returning();
    return skill;
  }

  async updateSkill(id: number, insertSkill: InsertSkill): Promise<Skill> {
    const [skill] = await db.update(skills).set(insertSkill).where(eq(skills.id, id)).returning();
    return skill;
  }

  async deleteSkill(id: number): Promise<void> {
    await db.delete(skills).where(eq(skills.id, id));
  }

  async getProjects(): Promise<Project[]> {
    return await db.select().from(projects);
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const [project] = await db.insert(projects).values(insertProject).returning();
    return project;
  }

  async updateProject(id: number, insertProject: InsertProject): Promise<Project> {
    const [project] = await db.update(projects).set(insertProject).where(eq(projects.id, id)).returning();
    return project;
  }

  async deleteProject(id: number): Promise<void> {
    await db.delete(projects).where(eq(projects.id, id));
  }

  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const [message] = await db.insert(messages).values(insertMessage).returning();
    return message;
  }
}

export const storage = new DatabaseStorage();
