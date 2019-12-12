const express = require('express');
const knex = require('knex')(require('../knexfile'))
const bodyParser = require('body-parser');

const redis = require('./redis')

const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json())

// this endpoint indicates that the node.js/express app is working by itself
app.get('/', (req, res) => {
    return res.send('Hello world!!!');
});

// this endpoint pings both redis and postgres to ensure both are wired up successfully
app.get('/healthcheck', async (req, res) => {
  const redisIsConnected = redis.connection.PING()
  const dbResult = await knex.raw("SELECT 1;")
  const dbIsConnected = dbResult.rows.length >= 0;
  res.json({ redisIsConnected, dbIsConnected })
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});