const express = require("express"); 
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const { reverse } = require("dns");
const PORT = process.env.PORT || 3001; const app = express();

app.use(cors({ 
    origin: '*'
}));

app.use(express.static(path.resolve(__dirname, './client/build')));
app.use(bodyParser.text({ type: 'text/plain' }));


app.use(cors({
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

function generateMatrix(rows, columns) {
    const matrix = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < columns; j++) {
        const randomValue = Math.random() < 0.65 ? 0 : 1;
        row.push(randomValue);
      }
      matrix.push(row);
    }
    return matrix;
}
  
app.get("/mazeMatrix", (req, res) => {
    res.json({
    "mazeMatrix": generateMatrix(100, 100)
    });
});

app.get("/display_data", (req, res) => {
  let d = new Date();
  res.json({
    "data_": [
        { data1: 1,data2: 2,data3: 3, time: d.toTimeString()},
        { data1: 4,data2: 5,data3: 6, time: d.toTimeString()},
        { data1: 7,data2: 8,data3: 9, time: d.toTimeString()},
      ]
  });
});

// Handle the data received from the ESP32
app.post("/Movement_Control", (req, res) => {
  const receivedData = req.body;
  const resMessage = {message: 'Received Data: ' + JSON.stringify(receivedData) };
  res.json(resMessage);
});

app.get('/Image_Url', (req, res) => {
  const img_path = path.resolve(__dirname, './image/img1.jpeg');
  res.setHeader('Content-Type', 'image/jpeg');
  res.sendFile(img_path);
});


// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
// });

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});