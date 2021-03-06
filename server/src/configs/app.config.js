import dotenv from 'dotenv';

dotenv.config();

export default {
  PORT: process.env.PORT || 4000,
  DATABASE_URL: process.env.DATABASE_URL,
  CLIENT_PATH: 'client/build',
};
