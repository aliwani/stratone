import Home from "@/Page/Home";
import Work from "@/Page/Work";
import Blog from "@/Page/Blog";
import Contact from "@/Page/Contact";
import About from "@/Page/About";
import Page404 from "@/Page/Page404";
import PrivacyPolicy from "@/Page/PrivacyPolicy";
import WorkCardPage from "@/components/WorkCardPage";

export const ROUTES = [
  { path: "/", name: "Home", element: Home },
  { path: "/about", name: "About", element: About },
  { path: "/work", name: "Work", element: Work },
  { path: "/contact", name: "Contact", element: Contact },
  { path: "/blog", name: "Blog", element: Blog },
  { path: "/policy", name: "Privacy Policy", element: PrivacyPolicy },
  { path: "/404", name: "404", element: Page404 },
  { path: "/work/:slug", element: WorkCardPage },
];
