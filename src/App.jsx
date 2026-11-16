import { Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ROUTES } from "./configs/route";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import RecursiveRender from "./utils/RecursiveRender";
import { useEffect } from "react";

function App() {
  return (
    <HelmetProvider>
      <Layout>
        <ScrollToTop />
        <Routes>{RecursiveRender(ROUTES)}</Routes>
      </Layout>
    </HelmetProvider>
  );
}

export default App;
