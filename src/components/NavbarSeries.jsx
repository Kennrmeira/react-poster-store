import { Link } from "react-router-dom";

export default function NavbarSeries() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <nav>
        <Link to="/">Página Inicial</Link>
        <Link to="/filmes">Filmes</Link>
      </nav>
    </div>
  );
}
