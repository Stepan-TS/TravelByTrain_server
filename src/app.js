import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello!');
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
