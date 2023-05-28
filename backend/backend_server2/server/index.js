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
  var d = new Date();
  res.json({
    "data_": [
        { name: 'John Doe', age: 30, city: 'New York' , time: d.toTimeString()},
        { name: 'Jane Smith', age: 25, city: 'London' , time: d.toTimeString()},
        { name: 'Bob Johnson', age: 35, city: 'Paris' , time: d.toTimeString()}
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