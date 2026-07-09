import NavbarSeries from "../components/NavbarSeries";
import Card from "../components/Card";

import friends from "../assets/imagens/friends.jpg";
import got from "../assets/imagens/got.jpg";
import brakingbad from "../assets/imagens/breakingbad.jpg";
import bigbang from "../assets/imagens/bigbangtheory.jpg";
import strangerthings from "../assets/imagens/strangerthings.jpg";
import lacasadepapel from "../assets/imagens/lacasadepapel.jpg";
import dexter from "../assets/imagens/dexter.jpg";
import greysanatomy from "../assets/imagens/greysanatomy.jpg";
import walkingdead from "../assets/imagens/thewalkingdead.jpg";
import round6 from "../assets/imagens/round6.jpg";

export default function Series() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
        padding: "20px",
      }}
    >
      <NavbarSeries />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <Card
          imagem={friends}
          titulo="Kill Bill"
          descricao="Um pôster decorativo intenso de Kill Bill, com moldura de MDF e tamanho A3. Ação, vingança e o estilo visual único de Quentin Tarantino em um quadro cheio de atitude. Perfeito para dar um toque de cor e rebeldia à sua decoração, trazendo a energia da 'Noiva' para qualquer espaço Sigma_e-shop no Mercado Livre."
        />

        <Card
          imagem={got}
          titulo="Kill Bill"
          descricao="Um pôster decorativo intenso de Kill Bill, com moldura de MDF e tamanho A3. Ação, vingança e o estilo visual único de Quentin Tarantino em um quadro cheio de atitude. Perfeito para dar um toque de cor e rebeldia à sua decoração, trazendo a energia da 'Noiva' para qualquer espaço Sigma_e-shop no Mercado Livre."
        />

        <Card
          imagem={brakingbad}
          titulo="Breaking Bad"
          descricao="Um pôster decorativo impecável de Breaking Bad, com moldura de MDF e tamanho A3. A transformação de Walter White no império de Heisenberg estampada na sua parede. Este quadro traz a tensão, o drama urbano e a estética icônica do deserto de Albuquerque com muita atitude."
        />

        <Card
          imagem={bigbang}
          titulo="The Big Bang Theory"
          descricao="Um pôster decorativo genial de The Big Bang Theory, com moldura de MDF e tamanho A3. Uma homenagem inteligente e divertida ao grupo de cientistas mais amado da TV. Este quadro trará humor, cultura geek e leveza para descontrair qualquer ambiente da sua casa."
        />

        <Card
          imagem={strangerthings}
          titulo="Stranger Things"
          descricao="Um pôster decorativo misterioso de Stranger Things, com moldura de MDF e tamanho A3. A atmosfera sobrenatural dos anos 80 e o Mundo Invertido direto no seu espaço. Este quadro traz o equilíbrio perfeito entre o terror e a aventura infanto-juvenil, ideal para marcar sua parede."
        />

        <Card
          imagem={lacasadepapel}
          titulo="La Casa de Papel"
          descricao="Um pôster decorativo audacioso de La Casa de Papel, com moldura de MDF e tamanho A3. A resistência, as máscaras de Dalí e a genialidade do Professor representadas em um quadro. Esta peça traz a adrenalina, o vermelho vibrante e o espírito rebelde do maior assalto da TV."
        />

        <Card
          imagem={dexter}
          titulo="Dexter"
          descricao="Um pôster decorativo intrigante de Dexter, com moldura de MDF e tamanho A3. A mente complexa do analista forense mais famoso do mundo em uma arte cheia de suspense. Este quadro traz o clima policial e o charme sombrio do 'passageiro sombrio' para sua parede."
        />

        <Card
          imagem={greysanatomy}
          titulo="Grey's Anatomy"
          descricao="Um pôster decorativo emocionante de Grey's Anatomy, com moldura de MDF e tamanho A3. Uma recordação cheia de afeto do hospital que marcou gerações. Este quadro trará o drama, a paixão pela medicina e as lições de Meredith Grey para acolher o seu cantinho favorito."
        />

        <Card
          imagem={walkingdead}
          titulo="The Walking Dead"
          descricao="Um pôster decorativo sobrevivente de The Walking Dead, com moldura de MDF e tamanho A3. A força humana diante do fim do mundo agora na sua decoração. Este quadro traz a atmosfera pós-apocalíptica, a ação intensa e o espírito de sobrevivência para dar peso e personalidade ao ambiente."
        />

        <Card
          imagem={round6}
          titulo="Round 6 (Squid Game)"
          descricao="Um pôster decorativo impactante de Round 6, com moldura de MDF e tamanho A3. Os símbolos icônicos e a estética visual marcante do fenômeno coreano na sua parede. Este quadro traz o suspense psicológico, as cores vibrantes e a tensão da série para destacar o seu acervo."
        />
      </div>
    </div>
  );
}
