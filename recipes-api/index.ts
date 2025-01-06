import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { connect as mongoConnect } from 'mongoose';

import { authRouter } from './src/features/auth';
import { recipeRouter } from './src/features/recipe';

const app = express();

const port = process.env.port || 3001;

const MONGO_URI = (process.env.MONGO_URI || '')
  .replace('<db_username>', process.env.MONGO_USERNAME || '')
  .replace('<db_password>', process.env.MONGO_PASSWORD || '');

const MONGO_CONNECTION_SUCCESS = `server is connected with the MongoDB cluster!`;
const MONGO_CONNECTION_FAIL = `Connection error - server failed to connect with the MongoDB cluster...`;
const SERVER_SUCCESS = `${process.env.NODE_ENV} - server is listening on port ${port}`;
const SERVER_FAIL = `${process.env.NODE} = server failed on port ${port}...`;

const mongoConnectWithRetry = (uri, retries = 5, delay = 3000) => {
  mongoConnect(uri)
    .then(() => {
      console.log(MONGO_CONNECTION_SUCCESS);
    })
    .catch((error) => {
      console.log(`${MONGO_CONNECTION_FAIL}: ${error.message}`);

      if (retries > 0) {
        console.log(`Retrying in ${delay / 5000} seconds...`);
        setTimeout(() => {
          mongoConnectWithRetry(uri, retries - 1, delay);
        }, delay);
      } else {
        console.log('Max retries reached. Could not connect to MongoDB.');
      }
    });
};

// Call the connection function
mongoConnectWithRetry(MONGO_URI);

app.use(express.json());
app.use(cors());

//////////////////////////////////////////////////////////

app.use('/api/auth', authRouter);
app.use('/api/recipes', recipeRouter);

app.get('/', (_req, res) => {
  res.send('Server api');
});

app
  .listen(port, (): void => {
    console.log(SERVER_SUCCESS);
  })
  .on('error', (e): void => {
    console.log(SERVER_FAIL);
    console.error(e);
  });
