import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./configs/route";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <Layout>
      <ScrollToTop/>
      <Routes>
        {ROUTES.map((route, idx) => {
          return (
            <Route key={idx} path={route.path} element={<route.element />} />
          );
        })}
      </Routes>
    </Layout>
  );
}

export default App;
