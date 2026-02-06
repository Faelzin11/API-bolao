const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('API funcionando 🚀');
});

app.get('/bolao', (req, res) => {
  res.json([
    { time: 'Flamengo', pontos: 42 },
    { time: 'Palmeiras', pontos: 40 },
    { time: 'Atlético-MG', pontos: 38 },
    { time: 'Grêmio', pontos: 35 }
  ]);
});

app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});

