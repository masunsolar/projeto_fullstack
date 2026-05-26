import type { BlackjackGame } from '../App';
import MaoJogador from './MaoJogador';
import PlacarMesa from './PlacarMesa';

type AreaJogoProps = {
  game: BlackjackGame;
};

function AreaJogo({ game }: AreaJogoProps) {
  const cartasDealer = game.finished
    ? game.dealerCards
    : game.dealerCards.map((carta, index) => {
        if (index === 0) {
          return carta;
        }

        return 'OCULTA';
      });

  return (
    <section className="mesa-jogo">
      <MaoJogador
        titulo="Mão do Dealer"
        cartas={cartasDealer}
        pontos={game.dealerScore}
        mostrarPontos={false}
      />

      <PlacarMesa
        maoJogador={game.playerScore}
        maoDealer={game.dealerScore}
        resultado={game.result}
        finalizado={game.finished}
      />

      <MaoJogador
        titulo={`Mão de ${game.playerName}`}
        cartas={game.playerCards}
        pontos={game.playerScore}
        mostrarPontos={false}
      />
    </section>
  );
}

export default AreaJogo;
