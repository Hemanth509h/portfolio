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

  return httpServer;
}
