import { Router, type IRouter } from "express";

const router: IRouter = Router();

const reviews = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Product Manager",
    company: "TechFlow Inc.",
    avatar: "SM",
    rating: 5,
    review:
      "An exceptional developer who consistently delivers clean, well-structured code. Their attention to detail and ability to translate complex requirements into elegant solutions is truly impressive.",
  },
  {
    id: 2,
    name: "James Okonkwo",
    role: "CTO",
    company: "Startify Labs",
    avatar: "JO",
    rating: 5,
    review:
      "Working with them was a game-changer for our startup. They built our entire MVP from scratch, ahead of schedule and well within budget. Highly recommend for any serious project.",
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Lead Engineer",
    company: "DataSync",
    avatar: "PS",
    rating: 5,
    review:
      "Their full-stack expertise is top-notch. The API architecture they designed has scaled effortlessly as we grew from 1k to 100k users. A reliable and thoughtful engineer.",
  },
  {
    id: 4,
    name: "Carlos Rivera",
    role: "Founder",
    company: "BuildKit",
    avatar: "CR",
    rating: 5,
    review:
      "Proactive, communicative, and technically sharp. They flagged potential issues before they became problems and always came with solutions, not just problems. Great collaborator.",
  },
  {
    id: 5,
    name: "Emily Chen",
    role: "UX Designer",
    company: "Pixel & Co.",
    avatar: "EC",
    rating: 5,
    review:
      "A developer who actually cares about the user experience. Every component they built matched the designs pixel-perfectly, and they even suggested improvements to the UI that we adopted.",
  },
  {
    id: 6,
    name: "David Larsson",
    role: "Backend Engineer",
    company: "CloudNative",
    avatar: "DL",
    rating: 5,
    review:
      "Strong understanding of system design and best practices. Their code is clean, well-documented, and a pleasure to maintain. A great addition to any engineering team.",
  },
];

router.get("/reviews", (_req, res) => {
  res.json({ success: true, data: reviews });
});

export default router;
