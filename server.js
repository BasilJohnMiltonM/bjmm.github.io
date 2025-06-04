const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// API endpoint to fetch projects from a JSON file
app.get('/api/projects', (req, res) => {
  fs.readFile(path.join(__dirname, 'projects.json'), 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to load projects' });
    }
    try {
      const projects = JSON.parse(data);
      res.json(projects);
    } catch (parseErr) {
      res.status(500).json({ error: 'Invalid projects data' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
