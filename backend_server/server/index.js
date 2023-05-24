const express = require("express"); 
const cors = require('cors');
const path = require('path');
const PORT = process.env.PORT || 3001; const app = express();

app.use(cors({ 
    origin: '*'
}));

// app.use(express.static(path.resolve(__dirname, './client/build')));

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
    setTimeout(() =>{ res.json({
    "mazeMatrix": generateMatrix(20, 20)
    // "mazeMatrix": [
    //             [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    //             [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    //             [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    //             [1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
    //             [1, 0, 0, 0, 0, 0, 1, 0, 0, 1],
    //             [1, 0, 0, 0, 0, 0, 1, 0, 0, 1],
    //             [1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
    //             [1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    //             [1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    //             [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    //           ]
    })}, 8000);
});

// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
// });

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});