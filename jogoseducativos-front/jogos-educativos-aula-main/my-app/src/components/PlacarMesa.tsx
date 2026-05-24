type PlacarMesaProps = {
  maoJogador: number
  maoDealer: number
  resultado: string
  finalizado: boolean
}

function traduzirResultado(resultado: string) {
  if (resultado === 'PLAYER_WIN') return 'Você venceu!'
  if (resultado === 'DEALER_WIN') return 'Dealer venceu!'
  if (resultado === 'DRAW') return 'Empate!'
  if (resultado === 'PLAYER_BUST') return 'Você passou de 21!'
  if (resultado === 'DEALER_BUST') return 'Dealer passou de 21!'
  return resultado
}

function PlacarMesa({
  maoJogador,
  maoDealer,
  resultado,
  finalizado,
}: PlacarMesaProps) {
  return (
    <section className="placar-mesa">
      <div>
        <span>Jogador</span>
        <strong>{maoJogador}</strong>
      </div>

      <div>
        <span>Dealer</span>
        <strong>{maoDealer}</strong>
      </div>

      {finalizado && (
        <p className="resultado finalizado">
          {traduzirResultado(resultado)}
        </p>
      )}
    </section>
  )
}

export default PlacarMesa