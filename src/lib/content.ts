import type { LucideIcon } from "lucide-react";
import { FlaskConical, Atom, Lightbulb, Rocket, Users, Trophy, Sparkles, ClipboardCheck, Presentation, Award } from "lucide-react";

// Exhibition schedule anchor for the live countdown.
export const eventDate = "2026-03-14T09:30:00+05:30";
export const eventMeta = {
  title: "Science Exhibition 2026",
  club: "Eulim Science Club",
  venue: "CHRIST (Deemed to be University), Delhi NCR",
  dateLabel: "14 March 2026",
  timeLabel: "9:30 AM onwards",
};

export type Stat = { value: number; suffix: string; label: string };
export const stats: Stat[] = [
  { value: 4, suffix: "", label: "Exhibition tracks" },
  { value: 120, suffix: "+", label: "Participants expected" },
  { value: 6, suffix: "", label: "CHRIST campuses" },
  { value: 1, suffix: " day", label: "Of pure discovery" },
];

export type Step = { number: string; title: string; body: string; icon: LucideIcon };
export const steps: Step[] = [
  { number: "01", title: "Register your team", body: "Pick a track, form a team of the right size, and lock your idea before the deadline.", icon: ClipboardCheck },
  { number: "02", title: "Build & prepare", body: "Prototype your model, poster, or pitch. Prepare to explain your process with evidence.", icon: FlaskConical },
  { number: "03", title: "Exhibit live", body: "Set up your stall and present to peers, faculty, and visiting judges on exhibition day.", icon: Presentation },
  { number: "04", title: "Get recognised", body: "Standout projects across every track are celebrated and awarded on the main stage.", icon: Award },
];

export type GalleryItem = { src: string; alt: string; tag: string };
export const gallery: GalleryItem[] = [
  { src: "/IMG_20260314_121742.jpg", alt: "Students presenting a working model at the exhibition", tag: "Exhibits" },
  { src: "/IMG_20260314_125015.jpg", alt: "Visitors exploring science stalls", tag: "Crowd" },
  { src: "/IMG_20260314_130104.jpg", alt: "A team demonstrating their project", tag: "Demos" },
  { src: "/52.jpg", alt: "Exhibition hall moment", tag: "Moments" },
  { src: "/53.jpg", alt: "Project showcase", tag: "Exhibits" },
  { src: "/54.jpg", alt: "Students collaborating", tag: "Crowd" },
];
export const galleryFilters = ["All", "Exhibits", "Demos", "Crowd", "Moments"] as const;

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

export type Leader = { name: string; role: string; quote: string };

export const leaders: Leader[] = [
  { name: "Dr. Fr. Peter M.V.", role: "Campus Administrator", quote: "The exhibition is a celebration of the relentless curiosity that propels us forward and the boundless innovation that defines our academic community." },
  { name: "Dr. Jeanne Poulose", role: "Dean", quote: "Your work has the potential to serve, solve, and inspire—reshaping lives in meaningful ways beyond the laboratory." },
  { name: "Dr. Bosco Paul Alapatt", role: "Associate Dean & Head of Department", quote: "Every project and presentation is a beacon of inspiration, inviting us to question, explore, and imagine new horizons." },
  { name: "Prof. Vandana Mehndiratta", role: "Academic Coordinator", quote: "Together, we can foster a spirit of scientific inquiry, discovery, and collaboration that pushes knowledge forward." },
  { name: "Prof. Amrit Kaur Saggu", role: "Faculty Coordinator, Eulim Science Club", quote: "Let us expand the horizons of possibility and kindle the flame of discovery in every curious mind." },
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
  { href: "/#leaders", label: "Leaders" },
  { href: "/#categories", label: "Categories" },
  { href: "/#journey", label: "Journey" },
  { href: "/#participate", label: "Participate" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/stellar-cipher", label: "Star Cipher" },
  { href: "/#contact", label: "Contact" },
];
