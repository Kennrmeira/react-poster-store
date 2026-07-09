const URL = "https://6a4eec4de785c9ef536d333f.mockapi.io/posters";

export async function buscarPosters() {
  const resposta = await fetch(URL);

  if (!resposta.ok) {
    throw new Error("Erro ao buscar posters");
  }

  return resposta.json();
}
