import { Link } from "react-router-dom";

export default function OptionsInicial() {
  return (
    <div>
      <div style={{ backgroundColor: "#fff", display: "flex" }}>
        <Link to="/filmes">
          <button
            style={{
              backgroundColor: "#000",
              color: "#fff",
              borderRadius: "8px",
              padding: "10px",
            }}
          >
            Filmes
          </button>
        </Link>

        <Link to="/series">
          <button
            style={{
              backgroundColor: "#000",
              color: "#fff",
              borderRadius: "8px",
              padding: "10px",
            }}
          >
            Séries
          </button>
        </Link>
      </div>
    </div>
  );
}
