import express, { type Express, type Request } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { setupAuth } from "./auth";
import multer from "multer";
import { uploadFileToGridFS, getFileFromGridFS } from "./gridfs";

interface MulterRequest extends Request {
  file?: Express.Multer.File;
}

const upload = multer({
  storage: multer.memoryStorage(),
});

async function seedDatabase() {
  await storage.initialize();
  
  const existingUsers = await storage.getUserByUsername("admin");
  if (!existingUsers) {
    await storage.createUser({
      username: "admin",
      password: "admin123",
    });
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  setupAuth(app);

  await seedDatabase();

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

  app.get("/api/profile", async (_req, res) => {
    const p = await storage.getProfile();
    res.json(p);
  });

  app.post("/api/profile", async (req, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);
    const p = await storage.updateProfile(req.body);
    res.json(p);
  });

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

  app.post("/api/upload", upload.single("file"), async (req: MulterRequest, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);
    if (!req.file) return res.status(400).send("No file uploaded.");
    
    try {
      const fileId = await uploadFileToGridFS(
        req.file.buffer,
        req.file.originalname,
        req.file.mimetype
      );
      res.json({ url: `/uploads/${fileId}` });
    } catch (error) {
      console.error("Upload error:", error);
      res.status(500).send("Failed to upload file");
    }
  });

  app.get("/uploads/:fileId", async (req, res) => {
    try {
      const result = await getFileFromGridFS(req.params.fileId);
      if (!result) {
        return res.status(404).send("File not found");
      }
      
      res.set("Content-Type", result.contentType);
      res.set("Content-Disposition", `inline; filename="${result.filename}"`);
      result.stream.pipe(res);
    } catch (error) {
      console.error("File retrieval error:", error);
      res.status(500).send("Failed to retrieve file");
    }
  });

  return httpServer;
}
