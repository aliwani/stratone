import videoImg from "@/assets/VideoEditinCard.jpg"
import shopifyImg from "@/assets/shopifyImage.jpg"
import socialImg from "@/assets/socialManagement.jpg"
import adsImg from "@/assets/adsImage.jpg"
const servicesData = [
  {
    id: 1,
    title: "Video Editing",
    desc: "High quality cinematic edits with smooth transitions and storytelling.",
    image: videoImg,
    tools: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
  },
  {
    id: 2,
    title: "Graphic Design",
    desc: "Modern and creative visuals for branding and marketing.",
    image: shopifyImg,
    tools: ["Photoshop", "Illustrator", "Figma"],
  },
  {
    id: 3,
    title: "Web Development",
    desc: "Fast and responsive websites with clean and scalable code.",
    image: socialImg,
    tools: ["React", "Tailwind", "JavaScript"],
  },
  {
    id: 4,
    title: "UI/UX Design",
    desc: "User-centered design with smooth and intuitive experiences.",
    image:adsImg,
    tools: ["Figma", "Adobe XD", "Framer"],
  },
  {
    id: 5,
    title: "Branding",
    desc: "Strong brand identity that stands out in the market.",
    image: videoImg,
    tools: ["Illustrator", "Photoshop", "InDesign"],
  },
];

export default servicesData;