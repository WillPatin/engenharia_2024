import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Cadastro from "./view/Cadastro";
import Login from "./view/Login";
import Home from "./view/Home";
import Fisica from "./view/Fisica";
import Esporte from "./view/Esporte";
import Saude from "./view/Saude";
import Educacao from "./view/Educacao";
import Todos from "./view/Todos";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/fisica" element={<Fisica />} />
        <Route path="/esporte" element={<Esporte />} />
        <Route path="/educacao" element={<Educacao />} />
        <Route path="/saude" element={<Saude />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </Router>
  );
}

export default App;
