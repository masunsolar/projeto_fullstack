type BotaoAcaoProps = {
  texto: string
  onClick: () => void
  disabled?: boolean
  destaque?: boolean
}

function BotaoAcao({
  texto,
  onClick,
  disabled = false,
  destaque = false,
}: BotaoAcaoProps) {
  return (
    <button
      type="button"
      className={destaque ? 'botao destaque' : 'botao'}
      onClick={onClick}
      disabled={disabled}
    >
      {texto}
    </button>
  )
}

export default BotaoAcao  