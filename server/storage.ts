import { getDb, client } from "./db";
import {
  type User, type InsertUser,
  type Profile, type InsertProfile,
  type Skill, type InsertSkill,
  type Project, type InsertProject,
  type Message, type InsertMessage
} from "@shared/schema";
import session from "express-session";
import MongoStore from "connect-mongo";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  getProfile(): Promise<Profile | undefined>;
  updateProfile(profile: InsertProfile): Promise<Profile>;

  getSkills(): Promise<Skill[]>;
  createSkill(skill: InsertSkill): Promise<Skill>;
  updateSkill(id: number, skill: InsertSkill): Promise<Skill>;
  deleteSkill(id: number): Promise<void>;

  getProjects(): Promise<Project[]>;
  createProject(project: InsertProject): Promise<Project>;
  updateProject(id: number, project: InsertProject): Promise<Project>;
  deleteProject(id: number): Promise<void>;

  createMessage(message: InsertMessage): Promise<Message>;

  sessionStore: session.Store;
  
  initialize(): Promise<void>;
}

async function getNextId(collectionName: string): Promise<number> {
  const db = await getDb();
  const counter = await db.collection("counters").findOneAndUpdate(
    { _id: collectionName } as any,
    { $inc: { seq: 1 } },
    { upsert: true, returnDocument: "after" }
  );
  return counter?.seq || 1;
}

export class DatabaseStorage implements IStorage {
  sessionStore: session.Store;

  constructor() {
    this.sessionStore = MongoStore.create({
      clientPromise: client.connect().then(() => client),
      collectionName: "sessions",
    });
  }

  async initialize(): Promise<void> {
    const db = await getDb();
    
    const profile = await db.collection("profile").findOne({});
    if (!profile) {
      await db.collection("profile").insertOne({
        id: 1,
        name: "Your Name",
        photoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
        resumeUrl: "#",
        aboutMe: "Brief description about yourself.",
        email: "your.email@example.com",
        phone: "+1 234 567 890",
        location: "City, Country",
        githubUrl: "https://github.com",
        linkedinUrl: "https://linkedin.com",
      });
    }

    const skills = await db.collection("skills").countDocuments();
    if (skills === 0) {
      const defaultSkills = [
        { id: 1, name: "React", category: "Frontend", proficiency: 90 },
        { id: 2, name: "TypeScript", category: "Language", proficiency: 85 },
        { id: 3, name: "Node.js", category: "Backend", proficiency: 80 },
        { id: 4, name: "PostgreSQL", category: "Database", proficiency: 75 },
        { id: 5, name: "Tailwind CSS", category: "Frontend", proficiency: 95 },
        { id: 6, name: "Docker", category: "Tools", proficiency: 70 },
      ];
      await db.collection("skills").insertMany(defaultSkills);
      await db.collection("counters").updateOne(
        { _id: "skills" } as any,
        { $set: { seq: 6 } },
        { upsert: true }
      );
    }

    const projects = await db.collection("projects").countDocuments();
    if (projects === 0) {
      const defaultProjects = [
        {
          id: 1,
          title: "E-Commerce Platform",
          description: "A full-featured online store with cart, checkout, and admin dashboard.",
          imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
          projectUrl: "#",
          repoUrl: "#",
          tags: ["React", "Node.js", "Stripe"],
        },
        {
          id: 2,
          title: "Task Management App",
          description: "Collaborative project management tool with real-time updates.",
          imageUrl: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&q=80",
          projectUrl: "#",
          repoUrl: "#",
          tags: ["TypeScript", "Socket.io", "Postgres"],
        },
        {
          id: 3,
          title: "Weather Dashboard",
          description: "Real-time weather data visualization using third-party APIs.",
          imageUrl: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
          projectUrl: "#",
          repoUrl: "#",
          tags: ["React", "D3.js", "API"],
        },
      ];
      await db.collection("projects").insertMany(defaultProjects);
      await db.collection("counters").updateOne(
        { _id: "projects" } as any,
        { $set: { seq: 3 } },
        { upsert: true }
      );
    }
  }

  async getUser(id: number): Promise<User | undefined> {
    const db = await getDb();
    const user = await db.collection("users").findOne({ id });
    if (!user) return undefined;
    return { id: user.id, username: user.username, password: user.password };
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const db = await getDb();
    const user = await db.collection("users").findOne({ username });
    if (!user) return undefined;
    return { id: user.id, username: user.username, password: user.password };
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const db = await getDb();
    const id = await getNextId("users");
    const user = { id, ...insertUser };
    await db.collection("users").insertOne(user);
    return user;
  }

  async getProfile(): Promise<Profile | undefined> {
    const db = await getDb();
    const p = await db.collection("profile").findOne({});
    if (!p) return undefined;
    return {
      id: p.id,
      name: p.name,
      photoUrl: p.photoUrl,
      resumeUrl: p.resumeUrl,
      aboutMe: p.aboutMe,
      email: p.email,
      phone: p.phone,
      location: p.location,
      githubUrl: p.githubUrl,
      linkedinUrl: p.linkedinUrl,
    };
  }

  async updateProfile(insertProfile: InsertProfile): Promise<Profile> {
    const db = await getDb();
    const existing = await this.getProfile();
    if (existing) {
      await db.collection("profile").updateOne({ id: existing.id }, { $set: insertProfile });
      return { ...existing, ...insertProfile } as Profile;
    } else {
      const profile = { id: 1, ...insertProfile };
      await db.collection("profile").insertOne(profile);
      return profile as Profile;
    }
  }

  async getSkills(): Promise<Skill[]> {
    const db = await getDb();
    const skills = await db.collection("skills").find({}).toArray();
    return skills.map(s => ({
      id: s.id,
      name: s.name,
      category: s.category,
      proficiency: s.proficiency,
    }));
  }

  async createSkill(insertSkill: InsertSkill): Promise<Skill> {
    const db = await getDb();
    const id = await getNextId("skills");
    const skill = { id, ...insertSkill };
    await db.collection("skills").insertOne(skill);
    return skill;
  }

  async updateSkill(id: number, insertSkill: InsertSkill): Promise<Skill> {
    const db = await getDb();
    await db.collection("skills").updateOne({ id }, { $set: insertSkill });
    return { id, ...insertSkill };
  }

  async deleteSkill(id: number): Promise<void> {
    const db = await getDb();
    await db.collection("skills").deleteOne({ id });
  }

  async getProjects(): Promise<Project[]> {
    const db = await getDb();
    const projects = await db.collection("projects").find({}).toArray();
    return projects.map(p => ({
      id: p.id,
      title: p.title,
      description: p.description,
      imageUrl: p.imageUrl,
      projectUrl: p.projectUrl,
      repoUrl: p.repoUrl,
      tags: p.tags,
    }));
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const db = await getDb();
    const id = await getNextId("projects");
    const project = { id, ...insertProject };
    await db.collection("projects").insertOne(project);
    return project as Project;
  }

  async updateProject(id: number, insertProject: InsertProject): Promise<Project> {
    const db = await getDb();
    await db.collection("projects").updateOne({ id }, { $set: insertProject });
    return { id, ...insertProject } as Project;
  }

  async deleteProject(id: number): Promise<void> {
    const db = await getDb();
    await db.collection("projects").deleteOne({ id });
  }

  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const db = await getDb();
    const id = await getNextId("messages");
    const message = { id, ...insertMessage, createdAt: new Date() };
    await db.collection("messages").insertOne(message);
    return message;
  }
}

export const storage = new DatabaseStorage();
