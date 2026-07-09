import { useEffect, useState } from "react";
import { buscarPosters } from "../../services/api";

import NavbarFilmes from "../components/NavbarFilmes";
import Card from "../components/Card";

import starwars from "../assets/imagens/starwars.jpg";
import poderosochefao from "../assets/imagens/poderosochefao.png";
import killbill from "../assets/imagens/killbill.jpg";
import titanic from "../assets/imagens/titanic.jpg";
// import avatar from "../assets/imagens/avatar.jpg";
import vingadores from "../assets/imagens/infinitywar.jpeg";
import jogosvorazes from "../assets/imagens/jogosvorazes.jpg";
import voltafuturo from "../assets/imagens/devoltaparaofuturo.jpg";
import harrypotter from "../assets/imagens/harrypotter.png";

export default function Filmes() {
  const [posters, setPosters] = useState([]);

  useEffect(() => {
    async function carregarPosters() {
      const dados = await buscarPosters();

      setPosters(dados);
    }

    carregarPosters();
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
        padding: "20px",
      }}
    >
      <NavbarFilmes />
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <Card
          imagem={starwars}
          titulo="Pôster Star Wars (1977)"
          descricao="Um pôster decorativo épico do filme Star Wars, com moldura de MDF e tamanho A3. Uma ótima recordação de um dos mais icônicos filmes de todos os tempos. Este clássico pôster trará aventura, nostalgia e a magina de Star Wars para qualquer lugar que você decidir perndurar. Não perca a chance de adicionar essa linda memória ao seu acervo."
        />

        <Card
          imagem={poderosochefao}
          titulo="O Poderoso Chefão"
          descricao="Um pôster decorativo clássico de O Poderoso Chefão, com moldura de MDF e tamanho A3. A intensidade e o drama da família Corleone agora em sua parede. Este quadro traz elegância, prestígio e a atmosfera marcante do cinema noir para sua sala ou escritório. Não perca a chance de adicionar essa obra-prima ao seu acervo Rockposters Quadros e Pôsteres."
        />

        <Card
          imagem={killbill}
          titulo="Kill Bill"
          descricao="Um pôster decorativo intenso de Kill Bill, com moldura de MDF e tamanho A3. Ação, vingança e o estilo visual único de Quentin Tarantino em um quadro cheio de atitude. Perfeito para dar um toque de cor e rebeldia à sua decoração, trazendo a energia da 'Noiva' para qualquer espaço Sigma_e-shop no Mercado Livre."
        />

        <Card
          imagem={titanic}
          titulo="Titanic"
          descricao="Um pôster decorativo romântico do filme Titanic, com moldura de MDF e tamanho A3. Uma recordação inesquecível de uma das maiores histórias de amor do cinema. Este quadro trará nostalgia e sofisticação, perfeito para criar uma atmosfera poética em seu ambiente UauPosters.com.br."
        />

        {posters.map((posters) => (
          <Card
            key={posters.id}
            imagem={posters.imagem}
            titulo={posters.titulo}
            descricao={posters.descricao}
          />
        ))}

        <Card
          imagem={vingadores}
          titulo="Vingadores: Guerra Infinita"
          descricao="Um pôster decorativo monumental de Vingadores: Guerra Infinita, com moldura de MDF e tamanho A3. O ápice do universo Marvel reunido no maior confronto da história do cinema. Este quadro trará a força, a ação e a grandiosidade dos maiores super-heróis da Terra para marcar presença na sua parede."
        />

        <Card
          imagem={jogosvorazes}
          titulo="Jogos Vorazes"
          descricao="Um pôster decorativo revolucionário de Jogos Vorazes, com moldura de MDF e tamanho A3. O símbolo do Tordo e a força de Katniss Everdeen agora na sua decoração. Este quadro transmite coragem, rebeldia e a atmosfera distópica marcante de Panem, perfeito para inspirar o seu ambiente."
        />

        <Card
          imagem={voltafuturo}
          titulo="De Volta para o Futuro"
          descricao="Um pôster decorativo atemporal de De Volta para o Futuro, com moldura de MDF e tamanho A3. Uma viagem nostálgica dos anos 80 direto para os dias de hoje. Este clássico trará aventura, ficção científica e a energia do DeLorean para encher sua parede de estilo e boas memória"
        />

        <Card
          imagem={harrypotter}
          titulo="Harry Potter"
          descricao="Um pôster decorativo mágico de Harry Potter, com moldura de MDF e tamanho A3. O portal definitivo para Hogwarts sem sair do seu quarto. Este quadro trará o encantamento, o mistério e a nostalgia do Mundo Bruxo, garantindo o toque perfeito para o acervo de qualquer fã"
        />
      </div>
    </div>
  );
}
