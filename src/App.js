import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Cadastro from "./view/Cadastro";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </Router>
  );
}

export default App;
