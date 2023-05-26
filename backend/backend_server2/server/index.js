const express = require("express"); 
const cors = require('cors');
const path = require('path');
const PORT = process.env.PORT || 3001; const app = express();

app.use(cors({ 
    origin: '*'
}));

app.use(express.static(path.resolve(__dirname, './client/build')));

app.use(cors({
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

function generateMatrix(rows, columns) {
    const matrix = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < columns; j++) {
        const randomValue = Math.random() < 0.5 ? 0 : 1;
        row.push(randomValue);
      }
      matrix.push(row);
    }
    return matrix;
}
  
app.get("/mazeMatrix", (req, res) => {
    res.json({
    "mazeMatrix": generateMatrix(10, 10)
    });
});

// Handle the data received from the ESP32
app.post("/data", (req, res) => {
  const receivedData = req.body;
  // Process the data or store it in a database
  res.send("Data received successfully");
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});