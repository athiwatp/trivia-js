const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const questions = require('./questions');

const app = express();
const port = process.env.PORT || 3000;
const uri = process.env.MONGODB_URI;

app.use(express.static(path.join(__dirname, '..', 'dist')));
app.use(bodyParser.json());

app.get('/api/questions', (req, res) => {
  res.json(questions);
});

app.post('/api/track-quiz-finished', (req, res) => {
  MongoClient.connect(uri, (err, db) => {
    if (err) {
      res.sendStatus(503).end(); // Service not available
    }
    const quizFinishedEvents = db.collection('quiz-finished-events');
    return quizFinishedEvents.insert(req.body, (error, result) => {
      if (error) {
        res.sendStatus(500).end();
      } else {
        res.sendStatus(200);
        res.send(result);
        res.end();
      }
    });
  });
});

app.listen(port);
