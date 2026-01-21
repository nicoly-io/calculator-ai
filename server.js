const express = require('express');
const cors = require('cors');
const { spawn } = require('child_process');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/calculate', (req, res) => {
    const { expression } = req.body;
    const python = spawn('python3', ['./engine/solver.py', expression]);
    python.stdout.on('data', (data) => res.json(JSON.parse(data.toString())));
});

app.listen(3001, () => console.log("Serveur démarré sur port 3001"));