import express from 'express';


const app = express();

app.get('/', (req, res) => {
    res.send('Hello, Im Sainath Reddy - This is the part of task (DEVOPS)');
});

app.get('/1', (req, res) => {
  res.send('Hello, Im Sainath Reddy - ROUTE 2');
});

app.get('/2', (req, res) => {
  res.send('Hello, Im Sainath Reddy - ROUTE 3');
});

const port = 5000; 

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
