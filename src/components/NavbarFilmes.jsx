import { Link } from "react-router-dom";

export default function NavbarFilmes() {
  return (
    <div>
      <nav style={{ display: "flex", flexDirection: "row" }}>
        <Link to="/">Página Inicial</Link>
        <Link to="/series">Séries</Link>
      </nav>
    </div>
  );
}
