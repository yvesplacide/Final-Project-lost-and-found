import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DeclarationPage from "./pages/DeclarationPage";
import ListeDeclarationsPage from "./pages/ListeDeclarationsPage";
import AccueilPage from "./pages/AccueilPage";
import Navbar from "./components/Navbar";
import DeclarationDetailPage from "./pages/DeclarationDetailPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<AccueilPage />} />
        <Route path="/declaration" element={<DeclarationPage />} />
        <Route path="/liste" element={<ListeDeclarationsPage />} />
        <Route path="/declaration/:id" element={<DeclarationDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
