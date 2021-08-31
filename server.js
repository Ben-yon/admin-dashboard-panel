//install express server

const express = require('express');

const path = require('path');

const app = express();

//serve only the static files from the dist directory
app.use(express.static("./dist/admin-dashboard-panel"));

app.get('/', (req, res) => {
  res.sendFile('index.html', {root: 'dist/admin-dashboard-panel'});
});

app.listen(process.env.PORT || 8765); 
