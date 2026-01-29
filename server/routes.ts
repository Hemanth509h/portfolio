import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { db } from "./db";
import { skills, projects } from "@shared/schema";
import { setupAuth } from "./auth";

async function seedDatabase() {
  const existingUsers = await storage.getUserByUsername("admin");
  if (!existingUsers) {
    await storage.createUser({
      username: "admin",
      password: "password", // In production, this should be an env var and hashed!
    });
  }

  const existingSkills = await storage.getSkills();
  if (existingSkills.length === 0) {
    await db.insert(skills).values([
      { name: "React", category: "Frontend", proficiency: 90 },
      { name: "TypeScript", category: "Language", proficiency: 85 },
      { name: "Node.js", category: "Backend", proficiency: 80 },
      { name: "PostgreSQL", category: "Database", proficiency: 75 },
      { name: "Tailwind CSS", category: "Frontend", proficiency: 95 },
      { name: "Docker", category: "Tools", proficiency: 70 },
    ]);
  }

  const existingProjects = await storage.getProjects();
  if (existingProjects.length === 0) {
    await db.insert(projects).values([
      {
        title: "E-Commerce Platform",
        description: "A full-featured online store with cart, checkout, and admin dashboard.",
        imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
        projectUrl: "#",
        repoUrl: "#",
        tags: ["React", "Node.js", "Stripe"],
      },
      {
        title: "Task Management App",
        description: "Collaborative project management tool with real-time updates.",
        imageUrl: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&q=80",
        projectUrl: "#",
        repoUrl: "#",
        tags: ["TypeScript", "Socket.io", "Postgres"],
      },
      {
        title: "Weather Dashboard",
        description: "Real-time weather data visualization using third-party APIs.",
        imageUrl: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
        projectUrl: "#",
        repoUrl: "#",
        tags: ["React", "D3.js", "API"],
      },
    ]);
  }

  const existingProfile = await storage.getProfile();
  if (!existingProfile) {
    await storage.updateProfile({
      name: "Your Name",
      photoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      aboutMe: "Brief description about yourself.",
      email: "your.email@example.com",
      phone: "+1 234 567 890",
      location: "City, Country",
      githubUrl: "https://github.com",
      linkedinUrl: "https://linkedin.com",
      resumeUrl: "#",
    });
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Setup authentication
  setupAuth(app);

  // Seed data on startup
  seedDatabase();

  app.get(api.skills.list.path, async (_req, res) => {
    const result = await storage.getSkills();
    res.json(result);
  });

  app.get(api.projects.list.path, async (_req, res) => {
    const result = await storage.getProjects();
    res.json(result);
  });

  app.post(api.contact.send.path, async (req, res) => {
    try {
      const input = api.contact.send.input.parse(req.body);
      const message = await storage.createMessage(input);
      res.status(201).json(message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // Profile Management
  app.get("/api/profile", async (_req, res) => {
    const p = await storage.getProfile();
    res.json(p);
  });

  app.post("/api/profile", async (req, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);
    const p = await storage.updateProfile(req.body);
    res.json(p);
  });

  // Skills Management
  app.post("/api/skills", async (req, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);
    const s = await storage.createSkill(req.body);
    res.json(s);
  });

  app.patch("/api/skills/:id", async (req, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);
    const s = await storage.updateSkill(Number(req.params.id), req.body);
    res.json(s);
  });

  app.delete("/api/skills/:id", async (req, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);
    await storage.deleteSkill(Number(req.params.id));
    res.sendStatus(204);
  });

  // Projects Management
  app.post("/api/projects", async (req, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);
    const p = await storage.createProject(req.body);
    res.json(p);
  });

  app.patch("/api/projects/:id", async (req, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);
    const p = await storage.updateProject(Number(req.params.id), req.body);
    res.json(p);
  });

  app.delete("/api/projects/:id", async (req, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);
    await storage.deleteProject(Number(req.params.id));
    res.sendStatus(204);
  });

  return httpServer;
}
