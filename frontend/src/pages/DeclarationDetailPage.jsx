import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const mockDeclarations = [
  {
    _id: "1",
    type: "objet",
    description: "Portefeuille noir avec papiers d'identité",
    date: "2025-05-01T14:00:00Z",
    location: "Abidjan, Cocody",
    contact: "0555555555",
    status: "En cours de traitement",
  },
  {
    _id: "2",
    type: "personne",
    description: "Enfant disparu de 10 ans, dernier vu à Yopougon",
    date: "2025-04-20T09:30:00Z",
    location: "Abidjan, Yopougon",
    contact: "0777777777",
    status: "Recherche en cours",
  },
];

const DeclarationDetailPage = () => {
  const { id } = useParams();
  const [declaration, setDeclaration] = useState(null);

  useEffect(() => {
    // Simuler la récupération d'une déclaration via id
    const found = mockDeclarations.find((d) => d._id === id);
    setDeclaration(found);
  }, [id]);

  if (!declaration) return <div className="text-center mt-10">Déclaration non trouvée</div>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow mt-10">
      <h1 className="text-2xl font-bold mb-6">Détail de la déclaration</h1>
      
      <div className="space-y-4 text-gray-800">
        <p><strong>Type :</strong> {declaration.type === "objet" ? "Objet" : "Personne"}</p>
        <p><strong>Description :</strong> {declaration.description}</p>
        <p><strong>Date :</strong> {new Date(declaration.date).toLocaleDateString()}</p>
        <p><strong>Lieu :</strong> {declaration.location}</p>
        <p><strong>Contact :</strong> {declaration.contact}</p>
        <p><strong>Statut :</strong> {declaration.status || "En attente"}</p>
      </div>
    </div>
  );
};

export default DeclarationDetailPage;
