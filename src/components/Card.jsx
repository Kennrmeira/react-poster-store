export default function Card({ imagem, titulo, descricao }) {
  return (
    <div
      style={{
        backgroundColor: "#ccc",
        borderRadius: "8px",
        display: "flex",
        gap: "1rem",
        padding: "20px",
      }}
    >
      <img src={imagem} alt={titulo} style={{ width: "200px" }} />

      <div>
        <h2>{titulo}</h2>
        <p>{descricao}</p>

        <button
          style={{
            backgroundColor: "#000",
            color: "#fff",
            borderRadius: "8px",
            padding: "10px",
          }}
        >
          Compre agora!
        </button>
      </div>
    </div>
  );
}
