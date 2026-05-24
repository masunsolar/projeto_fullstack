import type { BlackjackGame } from '../App'
import MaoJogador from './MaoJogador'
import PlacarMesa from './PlacarMesa'

type AreaJogoProps = {
  game: BlackjackGame
}

function AreaJogo({ game }: AreaJogoProps) {
  return (
    <section className="mesa-jogo">
      <MaoJogador
        titulo="Mão do Dealer"
        cartas={game.dealerCards}
        pontos={game.dealerScore}
        tipo="dealer"
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
        tipo="jogador"
      />
    </section>
  )
}

export default AreaJogo