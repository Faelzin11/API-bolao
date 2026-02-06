const express = require('express');
const app = express();

const PORT = process.env.PORT || 10000;

app.get('/', (req, res) => {
  res.send('API funcionando 🚀');
});

app.get('/jogos', (req, res) => {
  res.json([
    { jogo: 'Flamengo x Palmeiras', palpite: 'Flamengo' },
    { jogo: 'Grêmio x Inter', palpite: 'Empate' }
  ]);
});

app.get('/ranking', (req, res) => {
  res.json([
    { nome: 'João', pontos: 42 },
    { nome: 'Maria', pontos: 40 },
    { nome: 'Carlos', pontos: 38 }
  ]);
});

app.get('/pontos', (req, res) => {
  res.json([
    { nome: 'João', pontos: 42 },
    { nome: 'Maria', pontos: 40 },
    { nome: 'Carlos', pontos: 38 }
  ]);
});

app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});
