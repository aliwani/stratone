import graphicImg from "@/assets/test/Graphicdesign1.png"
import shopifyImg from "@/assets/test/Shopifystores.png"
import editingImg from "@/assets/test/Videoediting.png"
import webAndAppImg from "@/assets/test/websiteandappdevelopment.png"
import marketingImg from "@/assets/test/SocialMediamarketing.png"


const servicesData = [
  {
    id: 0,
    num: "(01)",
    title: "Social Media Marketing",
    img: marketingImg,
    list: [
      "Strategy & Planning",
      "Content Creation",
      "Posting & Community Management",
      "Paid Advertising",
      "Analytics & Reporting",
      "Growth & Optimization",
    ],
    desc: "Data-driven social media strategies to grow your brand, engage audience, and drive real results.",
    tools: ["Meta Ads", "Google Ads", "Canva", "Hootsuite"],
  },
  {
    id: 1,
    num: "(02)",
    title: "Graphic Designing",
    img: graphicImg,
    list: [
      "Brand Identity Design",
      "Logo & Visual Identity",
      "Marketing Collateral",
      "Digital Assets & Graphics",
      "Print & Packaging Design",
    ],
    desc: "Creative and impactful designs that build strong brand identity and visual presence.",
    tools: ["Photoshop", "Illustrator", "Figma"],
  },
  {
    id: 2,
    num: "(03)",
    title: "Video Editing",
    img: editingImg,
    list: [
      "Short-Form Video Editing",
      "Long-Form Video Editing",
      "Reels & TikTok Content",
      "Color Grading & Effects",
      "Educational Video",
      "AI UGC Content",
    ],
    desc: "Professional video editing with cinematic storytelling, smooth transitions, and engaging visuals.",
    tools: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
  },
  {
    id: 3,
    num: "(04)",
    title: "Shopify Store Development",
    img: shopifyImg,
    list: [
      "Shopify Store Setup",
      "Custom Theme Development",
      "Theme Customization",
      "App Integration",
      "Payment & Checkout Setup",
      "Performance Optimization",
    ],
    desc: "High-converting Shopify stores with custom design, seamless checkout, and optimized performance.",
    tools: ["Shopify", "Liquid", "JavaScript"],
  },
  {
    id: 4,
    num: "(05)",
    title: "Website & App Development",
    img: webAndAppImg,
    list: [
      "Custom Website Design",
      "Responsive Web Development",
      "WordPress Website",
      "Web App Development",
      "Mobile App Development",
      "UI/UX Design & Prototyping",
      "Backend & Database Setup",
      "Third-Party Integrations",
      "Launch, Testing & Support",
    ],
    desc: "Scalable, fast, and modern web & app solutions tailored to your business needs.",
    tools: ["React", "Next.js", "Node.js", "MongoDB"],
  },
];

export default servicesData;