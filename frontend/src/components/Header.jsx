import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header >
      <nav>
        <Link to="/">Déclaration</Link>
        <Link to="/liste">Liste des déclarations</Link>
      </nav>
    </header>
  );
};

export default Header;
