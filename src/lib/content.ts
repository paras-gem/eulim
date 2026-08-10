import type { LucideIcon } from "lucide-react";
import { FlaskConical, Atom, Lightbulb, Rocket, Users, Trophy, Sparkles } from "lucide-react";

export type Category = {
  number: string;
  title: string;
  description: string;
  detail: string;
  icon: LucideIcon;
  accent: "orange" | "gold" | "silver" | "navy";
};

export const categories: Category[] = [
  {
    number: "01",
    title: "Discovery Constructs",
    description: "Bring a working science and technology model to life.",
    detail: "Team of 2–4 · Working model",
    icon: FlaskConical,
    accent: "orange",
  },
  {
    number: "02",
    title: "Insight Showcase",
    description: "Turn rigorous research into a compelling visual story.",
    detail: "Team of 2–3 · A3 portrait poster",
    icon: Atom,
    accent: "gold",
  },
  {
    number: "03",
    title: "Visionary Concepts",
    description: "Pitch a science-led idea with the power to move forward.",
    detail: "Individual or team of 2–3 · Start-up idea",
    icon: Lightbulb,
    accent: "silver",
  },
  {
    number: "04",
    title: "Future Ventures",
    description: "Make something original, thoughtful, and entirely by hand.",
    detail: "Individual or team of 2–3 · Handmade project",
    icon: Rocket,
    accent: "navy",
  },
];

export const guidelines: string[] = [
  "Keep every project original, ethical, and rooted in science & technology.",
  "Build for clarity: label your exhibit well and make the story easy to follow.",
  "Prioritise safety—no hazardous, toxic, flammable, or corrosive materials.",
  "Prepare to explain your process, evidence, and ideas with confidence.",
];

export type Contact = { label: string; name: string; phone: string };

export const contacts: Contact[] = [
  { label: "Event coordination", name: "Mr. Shayan Azmi", phone: "+91 62041 39749" },
  { label: "Event coordination", name: "Mr. Aryan Soman", phone: "+91 88514 08313" },
  { label: "General coordination", name: "Mr. Aryan Manna", phone: "+91 98746 99768" },
  { label: "General coordination", name: "Mr. Aryan Garg", phone: "+91 93197 00172" },
];

export type Leader = { name: string; role: string; image: string; quote: string };

export const leaders: Leader[] = [
  { name: "Dr. Fr. Peter M.V.", role: "Campus Administrator", image: "/47.jpg", quote: "The exhibition is a celebration of the relentless curiosity that propels us forward and the boundless innovation that defines our academic community." },
  { name: "Dr. Jeanne Poulose", role: "Dean", image: "/48.jpg", quote: "Your work has the potential to serve, solve, and inspire—reshaping lives in meaningful ways beyond the laboratory." },
  { name: "Dr. Bosco Paul Alapatt", role: "Associate Dean & Head of Department", image: "/49.jpg", quote: "Every project and presentation is a beacon of inspiration, inviting us to question, explore, and imagine new horizons." },
  { name: "Prof. Vandana Mehndiratta", role: "Academic Coordinator", image: "/50.jpg", quote: "Together, we can foster a spirit of scientific inquiry, discovery, and collaboration that pushes knowledge forward." },
  { name: "Prof. Amrit Kaur Saggu", role: "Faculty Coordinator, Eulim Science Club", image: "/51.jpg", quote: "Let us expand the horizons of possibility and kindle the flame of discovery in every curious mind." },
];

export type Milestone = { number: string; title: string; body: string; icon: LucideIcon };

export const milestones: Milestone[] = [
  { number: "01", title: "A vibrant community", body: "Eulim brings together students who care deeply about science, ideas, and each other.", icon: Users },
  { number: "02", title: "Ideas on stage", body: "From industry talks to exhibitions, every gathering turns learning into a shared experience.", icon: Trophy },
  { number: "03", title: "What's next", body: "New questions, wider collaborations, and a culture built for thoughtful innovation.", icon: Sparkles },
];

export const campuses: { name: string; primary?: boolean }[] = [
  { name: "Bangalore Central" },
  { name: "Bangalore Bannerghatta" },
  { name: "Bangalore Kengeri" },
  { name: "Bangalore Yeshwanthpur" },
  { name: "Delhi NCR", primary: true },
  { name: "Pune Lavasa" },
];

export const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#categories", label: "Categories" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#guidelines", label: "Guidelines" },
  { href: "/stellar-cipher", label: "Star Cipher" },
  { href: "/#contact", label: "Contact" },
];
