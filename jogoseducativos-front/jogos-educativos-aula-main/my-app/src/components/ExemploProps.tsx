import type { ExemploPropsProps } from '../types/components/exemplo-props.types'

function ExemploProps({ mensagem }: ExemploPropsProps) {
  return <p className="exemplo-props">Exemplo de props: {mensagem}</p>
}

export default ExemploProps
