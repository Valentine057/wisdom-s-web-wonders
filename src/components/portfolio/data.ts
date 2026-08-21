import nexusImg from "@/assets/photo.jpg";
import swiftpayImg from "@/assets/flour.jpg";

export const PROFILE = {
  name: "Wisdom Bassey Johnny",
  title: "Full-Stack Developer",
  email: "valentinejohnny@gmail.com",
  phone: "+234 706 082 9220",
  phoneHref: "+2347060829220",
  location: "Nigeria (GMT+1)",
  github: "https://github.com/Valentine057",
  linkedin: "mailto:valentinejohnny@gmail.com",
  twitter: "https://twitter.com/",
  whatsapp: "https://wa.me/2347060829220",
  tiktok: "https://www.tiktok.com/",
  // Replace with your own photo by uploading an image to the project and updating this path.
  photo: "",
};

export const SKILLS: { group: string; items: string[] }[] = [
  { group: "Frontend", items: ["HTML", "CSS", "JavaScript", "React"] },
  { group: "Backend", items: ["Node.js", "Django", "Python/Flask", "Java", "C#"] },
  { group: "Database", items: ["MongoDB", "MySQL"] },
  { group: "Mobile & Tools", items: ["Flutter/Dart", "Git/GitHub"] },
];

export const PROJECTS = [
  {
    name: "Flavor Bloom",
    image: heroImage,
    description:
      "A responsive organic-spice storefront featuring product galleries, contact details, and an engaging customer experience.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    github: "https://github.com/Valentine057",
    demo: "https://flavor-bloom-spa-main.vercel.app/",
    accent: "primary" as const,
  },
  {
    name: "Flour Mills Bloom",
    image: flourMillsBloomMainImg,
    description:
      "A high-performance customer relationship tool built for distributed sales teams.",
    tech: ["React", "Django", "MySQL"],
    github: "https://github.com/Valentine057",
    demo: "https://github.com/Valentine057",
    accent: "primary" as const,
  },
];

export const SERVICES = [
  {
    title: "Web Development",
    body: "Fast, accessible React interfaces backed by clean, maintainable code.",
  },
  {
    title: "Backend Development",
    body: "APIs and services with Node or Django, built to be boring to operate.",
  },
  {
    title: "Mobile App Development",
    body: "Cross-platform apps in Flutter that feel native on both platforms.",
  },
  {
    title: "Database Development",
    body: "Data modelling, indexing, and caching for MySQL and MongoDB.",
  },
];
