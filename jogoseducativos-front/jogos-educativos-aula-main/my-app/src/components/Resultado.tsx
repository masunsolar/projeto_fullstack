type Resultado = {
    resultado: string;
    playerScore: number;
    dealerScore: number;
    onNovaRodada: () => void;
    loading: boolean;
};

function traduzirResultado(resultado: string) {
    if (resultado === 'PLAYER_WIN') return 'Você venceu!';
    if (resultado === 'DEALER_WIN') return 'Você perdeu!';
    if (resultado === 'DRAW') return 'Empate!';
    if (resultado === 'PLAYER_BUST') return 'Você passou de 21!';
    if (resultado === 'DEALER_BUST') return 'Dealer passou de 21!';
    return resultado;
}

function classeResultado(resultado: string) {
    if (resultado === 'PLAYER_WIN' || resultado === 'DEALER_BUST') {
        return 'modal-vitoria';
    }

    if (resultado === 'DEALER_WIN' || resultado === 'PLAYER_BUST') {
        return 'modal-derrota';
    }

    if (resultado === 'DRAW') {
        return 'modal-empate';
    }

    return '';
}

function ResultadoModal({
    resultado,
    playerScore,
    dealerScore,
    onNovaRodada,
    loading,
}: Resultado) {
    return (
        <div className="modal-fundo">
            <div className={`modal-resultado ${classeResultado(resultado)}`}>
                <h2>{traduzirResultado(resultado)}</h2>

                <p>Seus pontos: {playerScore}</p>
                <p>Pontos do dealer: {dealerScore}</p>

                <button type="button" onClick={onNovaRodada} disabled={loading}>
                    {loading ? 'Carregando...' : 'Jogar novamente'}
                </button>
            </div>
        </div>
    );
}

export default ResultadoModal;
