// src/pages/AccueilPage.jsx
import { Link } from "react-router-dom";

const AccueilPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-6">
        Bienvenue sur la plateforme de déclaration de perte
      </h1>
      <p className="text-lg text-center text-gray-700 max-w-xl mb-8">
        Déclarez la perte d’un objet ou d’une personne facilement en ligne et suivez l’état de votre déclaration depuis votre espace personnel.
      </p>

      <div className="flex gap-4">
        <Link
          to="/declaration"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
        >
          Faire une déclaration
        </Link>
        <Link
          to="/liste"
          className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg transition"
        >
          Consulter les déclarations
        </Link>
      </div>
    </div>
  );
};

export default AccueilPage;
