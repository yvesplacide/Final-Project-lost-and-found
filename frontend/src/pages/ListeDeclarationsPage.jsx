import React from "react";

const ListeDeclarationsPage = () => {
  // Exemple de fausses données
  const declarations = [
    {
      id: 1,
      type: "Objet perdu",
      nom: "Portefeuille noir",
      lieu: "Plateau",
      date: "2025-05-24",
    },
    {
      id: 2,
      type: "Personne disparue",
      nom: "Kouassi Bernard",
      lieu: "Yopougon",
      date: "2025-05-20",
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Liste des déclarations</h1>
      <ul className="space-y-4">
        {declarations.map((item) => (
          <li key={item.id} className="p-4 bg-white shadow rounded-lg">
            <p><strong>Type :</strong> {item.type}</p>
            <p><strong>Nom :</strong> {item.nom}</p>
            <p><strong>Lieu :</strong> {item.lieu}</p>
            <p><strong>Date :</strong> {item.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListeDeclarationsPage;
