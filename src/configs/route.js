import Home  from "@/Page/Home";
import Project  from "@/Page/Project";
import Service  from "@/Page/Service";
import About  from "@/Page/About";


export const ROUTES = [
    { path: "/", name:"Home", element: Home },
    { path: "/About", name:"About", element: About },
    { path: "/Service", name:"Services", element: Service },
    { path: "/Project", name:"Projects", element: Project },
];
