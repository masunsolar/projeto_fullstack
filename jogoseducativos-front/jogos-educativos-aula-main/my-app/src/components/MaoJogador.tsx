import Carta from './Carta'

type MaoJogadorProps = {
  titulo: string
  cartas: string[]
  pontos: number
  mostrarPontos?: boolean
}

function MaoJogador({
  titulo,
  cartas,
  pontos,
  mostrarPontos = true,
}: MaoJogadorProps) {
  return (
    <section className="mao-jogador">
      <h3>{titulo}</h3>

      <div className="linha-cartas">
        {cartas.map((carta, index) => (
          <Carta key={`${carta}-${index}`} carta={carta} />
        ))}
      </div>

      {mostrarPontos && (
        <p className="pontos-mao">Pontos: {pontos}</p>
      )}
    </section>
  )
}

export default MaoJogador