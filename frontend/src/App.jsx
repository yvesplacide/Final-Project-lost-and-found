import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DeclarationPage from "./pages/DeclarationPage";
import ListeDeclarationsPage from "./pages/ListeDeclarationsPage";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<DeclarationPage />} />
        <Route path="/liste" element={<ListeDeclarationsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
