import { useEffect, useState } from 'react';
import './App.css';
import AreaJogo from './components/AreaJogo';
import HeaderPersonalizado from './components/headerPersonalizado';
import PainelControles from './components/PainelControles';
import TituloSecao from './components/TituloSecao';
import Resultado from './components/Resultado';

export type BlackjackGame = {
  gameId: string;
  playerName: string;
  playerCards: string[];
  dealerCards: string[];
  playerScore: number;
  dealerScore: number;
  finished: boolean;
  result: string;
};

function App() {
  const [playerName, setPlayerName] = useState('Masun');
  const [game, setGame] = useState<BlackjackGame | null>(null);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState('');

  const [contador, setContador] = useState({
    vitorias: 0,
    derrotas: 0,
    empates: 0,
  });

  const [ultimoJogoContado, setUltimoJogoContado] = useState<string | null>(
    null
  );

  useEffect(() => {
    if (game) {
      console.log('Partida atualizada:', game);
    }
  }, [game]);

  useEffect(() => {
    if (!game?.finished) return;

    if (game.gameId === ultimoJogoContado) return;

    if (game.result === 'PLAYER_WIN' || game.result === 'DEALER_BUST') {
      setContador((contadorAtual) => ({
        ...contadorAtual,
        vitorias: contadorAtual.vitorias + 1,
      }));
    } else if (game.result === 'DEALER_WIN' || game.result === 'PLAYER_BUST') {
      setContador((contadorAtual) => ({
        ...contadorAtual,
        derrotas: contadorAtual.derrotas + 1,
      }));
    }

    setUltimoJogoContado(game.gameId);
  }, [game, ultimoJogoContado]);

  async function iniciarJogo() {
    try {
      setLoading(true);
      setErro('');

      const resposta = await fetch('/api/blackjack/start', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          playerName: playerName,
        }),
      });

      if (!resposta.ok) {
        throw new Error('Erro ao iniciar jogo');
      }

      const dados: BlackjackGame = await resposta.json();
      setGame(dados);
    } catch {
      setErro('Não consegui conectar com o backend.');
    } finally {
      setLoading(false);
    }
  }

  async function comprarCarta() {
    if (!game) return;

    try {
      setLoading(true);
      setErro('');

      const resposta = await fetch(`/api/blackjack/${game.gameId}/hit`, {
        method: 'POST',
      });

      if (!resposta.ok) {
        throw new Error('Erro ao comprar carta');
      }

      const dados: BlackjackGame = await resposta.json();
      setGame(dados);
    } catch {
      setErro('Erro ao comprar carta.');
    } finally {
      setLoading(false);
    }
  }

  async function parar() {
    if (!game) return;

    try {
      setLoading(true);
      setErro('');

      const resposta = await fetch(`/api/blackjack/${game.gameId}/stand`, {
        method: 'POST',
      });

      if (!resposta.ok) {
        throw new Error('Erro ao parar');
      }

      const dados: BlackjackGame = await resposta.json();
      setGame(dados);
    } catch {
      setErro('Erro ao parar a jogada.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="app-aula">
      <HeaderPersonalizado />

      <TituloSecao />

      <PainelControles
        playerName={playerName}
        setPlayerName={setPlayerName}
        iniciarJogo={iniciarJogo}
        comprarCarta={comprarCarta}
        parar={parar}
        loading={loading}
        existeJogo={game !== null}
        jogoFinalizado={game?.finished ?? false}
      />

      {erro && <p className="erro">{erro}</p>}

      <section className="bloco-componentes mesa-blackjack">
        {game ? (
          <AreaJogo game={game} />
        ) : (
          <p className="aviso">
            Digite seu nome e clique em “Nova rodada” para começar.
          </p>
        )}
      </section>
      <section className="contador-jogo">
        <p>Vitórias: {contador.vitorias}</p>
        <p>Derrotas: {contador.derrotas}</p>
      </section>
      {game?.finished && (
        <Resultado
          resultado={game.result}
          playerScore={game.playerScore}
          dealerScore={game.dealerScore}
          onNovaRodada={iniciarJogo}
          loading={loading}
        />
      )}
    </main>
  );
}

export default App;
