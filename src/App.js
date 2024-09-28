import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Cadastro from "./view/Cadastro";
import Login from "./view/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
