import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav>
        <ul
          style={{
            display: "flex",
            gap: "1rem",
            listStyleType: "none",
            justifyContent: "center",
          }}
        >
          <li>Página Inicial</li>
          <li>Filmes</li>
          <li>Séries</li>
        </ul>
      </nav>
    </div>
  );
}
