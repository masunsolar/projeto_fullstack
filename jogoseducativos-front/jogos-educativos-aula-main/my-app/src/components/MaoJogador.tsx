import Carta from './Carta'

type MaoJogadorProps = {
  titulo: string
  cartas: string[]
  pontos: number
}

function MaoJogador({ titulo, cartas, pontos }: MaoJogadorProps) {
  return (
    <section className="mao-jogador">
      <h3>{titulo}</h3>

      <div className="linha-cartas">
        {cartas.map((carta, index) => (
          <Carta key={`${carta}-${index}`} carta={carta} />
        ))}
      </div>
        
    </section>
  )
}

export default MaoJogador