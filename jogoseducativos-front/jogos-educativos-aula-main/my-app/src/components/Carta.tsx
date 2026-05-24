type CartaProps = {
  carta: string
}

function Carta({ carta }: CartaProps) {
  const valor = carta.slice(0, -1)
  const naipe = carta.slice(-1)

  const simbolos: Record<string, string> = {
    S: '♠',
    H: '♥',
    D: '♦',
    C: '♣',
  }

  const naipeFormatado = simbolos[naipe] || naipe
  const vermelha = naipe === 'H' || naipe === 'D'

  return (
    <div className={vermelha ? 'carta vermelha' : 'carta'}>
      <span className="valor-carta">{valor}</span>
      <span className="naipe-carta">{naipeFormatado}</span>
    </div>
  )
}

export default Carta