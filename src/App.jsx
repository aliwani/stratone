import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./configs/route";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import RecursiveRender from "./utils/RecursiveRender";
function App() {
  return (
    <Layout>
      <ScrollToTop/>
      <Routes>
       {RecursiveRender(ROUTES) }
      </Routes>
    </Layout>
  );
}

export default App;
