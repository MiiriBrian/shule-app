import { Subject } from "../types";

export const MOCK_SUBJECTS : Subject[] = [
  {
    id: 1,
    code: "MATH101",
    name: "Calculus I",
    department: "Mathematics",
    description: "Introduction to differential and integral calculus for single-variable functions.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    code: "ENG201",
    name: "English Literature",
    department: "English",
    description: "Comprehensive study of classic and contemporary English literary works.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    code: "SCI301",
    name: "Physics Mechanics",
    department: "Science",
    description: "Fundamental principles of classical mechanics and motion dynamics.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 4,
    code: "HIST102",
    name: "World History",
    department: "History",
    description: "Exploration of major historical events and civilizations across continents.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 5,
    code: "CHEM201",
    name: "Organic Chemistry",
    department: "Chemistry",
    description: "Study of carbon-based compounds and organic reaction mechanisms.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 6,
    code: "BIO301",
    name: "Human Biology",
    department: "Biology",
    description: "Study of human body systems, cellular structure, and physiological processes.",
    createdAt: new Date().toISOString(),
  },
];
