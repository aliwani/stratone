import Home from "@/Page/Home";
import Work from "@/Page/Work";
import OurServices from "@/Page/OurServices";
import Blog from "@/Page/Blog";
import Contact from "@/Page/Contact";
import About from "@/Page/About";
import Page404 from "@/Page/Page404";
import PrivacyPolicy from "@/Page/PrivacyPolicy";
import WorkCardPage from "@/components/WorkCardPage";

export const ROUTES = [
  { path: "/", name: "Home", element: Home },
  { path: "/services", name: "Our Services", element: OurServices },
  { path: "/work", name: "Our Work", element: Work },
  { path: "/about", name: "About US", element: About },
  { path: "/contact", name: "Contact", element: Contact },
  { path: "/blog", name: "Blog", element: Blog },
  { path: "/policy", name: "Privacy Policy", element: PrivacyPolicy },
  { path: "/work/:slug", element: WorkCardPage },
  { path: "/404", name: "404", element: Page404 },
  { path: "*",  element: Page404 },
  
];
