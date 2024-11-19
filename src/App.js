import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Cadastro from "./view/Cadastro";
import Login from "./view/Login";
import Home from "./view/Home";
import Fisica from "./view/Fisica";
import Esporte from "./view/Esporte";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/fisica" element={<Fisica />} />
        <Route path="/esporte" element={<Esporte />} />
      </Routes>
    </Router>
  );
}

export default App;
