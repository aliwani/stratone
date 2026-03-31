import Home  from "@/Page/Home";
import Work  from "@/Page/Work";
import Blog  from "@/Page/Blog";
import Contact  from "@/Page/Contact";
import About  from "@/Page/About";
import Page404  from "@/Page/Page404";
import PrivacyPolicy  from "@/Page/PrivacyPolicy";


export const ROUTES = [
    { path: "/", name:"Home", element: Home },
    { path: "/About", name:"About", element: About },
    { path: "/Work", name:"Work", element: Work },
    { path: "/Contact", name:"Contact", element: Contact },
    { path: "/Blog", name:"Blog", element: Blog },
    { path: "/404", name:"404", element: Page404 },
    { path: "/Policy", name:"Privacy Policy", element: PrivacyPolicy },
];
