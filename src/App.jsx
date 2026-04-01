import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./configs/route";
import Layout from "./components/Layout";
function App() {
  return (
    <Layout>
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
