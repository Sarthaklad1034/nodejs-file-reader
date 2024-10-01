const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../frontend')));

app.get('/api/read-file', (req, res) => {
    const filePath = path.join(__dirname, 'data', 'sample.txt');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return res.status(500).json({ error: 'Error reading file' });
        }
        res.json({ content: data });
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});