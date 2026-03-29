import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./configs/route";

function App() {

  return (
   
    <Routes>
      {ROUTES.map((route, idx) => {
      return  <Route key={idx} path={route.path} element={<route.element/>}/>
      })}
    </Routes>
  );
}

export default App;
