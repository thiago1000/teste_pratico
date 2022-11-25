
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from './pages/Home';
import Produto from "./pages/Produto";
import AdicionarProduto from "./pages/AdicionarProduto";
import EditarProdutos from "./pages/EditarProdutos";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produto/:id" element={<Produto />} />
          <Route path="/produto/adicionar" element={<AdicionarProduto />} />
          <Route path="/produto/editar/:id" element={<EditarProdutos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
