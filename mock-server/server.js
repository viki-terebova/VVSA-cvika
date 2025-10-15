import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const data = [
  { "transactionId": 1, "fullName": "Andrej Palovic", "transactionType": 0,
    "accountNumber": "46164646416", "bankCode": "1100", "issueDate": "2019-05-02T00:00:00", "amount": 10 },
  { "transactionId": 2, "fullName": "Andrej Palovic", "transactionType": 0,
    "accountNumber": "46164646416", "bankCode": "1100", "issueDate": "2019-05-05T00:00:00", "amount": 2.45 },
  { "transactionId": 3, "fullName": "Andrej Palovic", "transactionType": 0,
    "accountNumber": "98798798798", "bankCode": "0200", "issueDate": "2019-04-22T00:00:00", "amount": 24.99 },
  { "transactionId": 4, "fullName": "Andrej Palovic", "transactionType": 0,
    "accountNumber": "46164646416", "bankCode": "1100", "issueDate": "2019-05-12T00:00:00", "amount": 264.55 },
  { "transactionId": 5, "fullName": "Andrej Palovic", "transactionType": 1,
    "bankCode": "1100", "issueDate": "2019-05-12T12:00:00", "amount": 100 }
];

app.get('/api/transactions', (req, res) => {
  res.json({ data });
});

app.get('/api/transactions/:id', (req, res) => {
  const item = data.find(x => x.transactionId === Number(req.params.id));
  if (!item) return res.status(404).json({ error: 'Not found' });
  res.json({ data: item });
});

app.listen(5000, () => {
  console.log('Mock API running on http://localhost:5000');
});
