const express = require('express');
const { spawn } = require('child_process');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/solve', (req, res) => {
    const { equation } = req.body;
    const python = spawn('python3', ['solver.py', equation]);

    python.stdout.on('data', (data) => {
        res.json({ result: data.toString().trim() });
    });

    python.stderr.on('data', (data) => {
        res.status(500).json({ error: "Erreur de calcul" });
    });
});

app.listen(5000, () => console.log('Serveur actif sur le port 5000'));
