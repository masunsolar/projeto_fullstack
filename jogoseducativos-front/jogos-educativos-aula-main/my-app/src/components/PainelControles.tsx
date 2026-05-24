import BotaoAcao from './BotaoAcao'

type PainelControlesProps = {
  playerName: string
  setPlayerName: (nome: string) => void
  iniciarJogo: () => void
  comprarCarta: () => void
  parar: () => void
  loading: boolean
  existeJogo: boolean
  jogoFinalizado: boolean
}

function PainelControles({
  playerName,
  setPlayerName,
  iniciarJogo,
  comprarCarta,
  parar,
  loading,
  existeJogo,
  jogoFinalizado,
}: PainelControlesProps) {
  return (
    <section className="painel-controles painel-fora-mesa">
      {!existeJogo && (
        <input
          value={playerName}
          onChange={(event) => setPlayerName(event.target.value)}
          placeholder="Digite seu nome"
        />
      )}

      <BotaoAcao
        texto={loading ? 'Carregando...' : 'Nova rodada'}
        onClick={iniciarJogo}
        disabled={loading || playerName.trim() === ''}
        destaque
      />

      {existeJogo && !jogoFinalizado && (
        <>
          <BotaoAcao
            texto="Comprar"
            onClick={comprarCarta}
            disabled={loading}
          />

          <BotaoAcao
            texto="Parar"
            onClick={parar}
            disabled={loading}
          />
        </>
      )}
    </section>
  )
}

export default PainelControles