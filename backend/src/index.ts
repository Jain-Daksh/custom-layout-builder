// src/index.ts
import 'reflect-metadata';
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { createSchema } from '../schema';
import { connectDatabase } from './db';

const startServer = async () => {
  const app = express();
  
  await connectDatabase();

  const schema = await createSchema();

  app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
  }));

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/graphql`);
  });
};

startServer().catch(error => {
  console.error('Error starting server:', error);
});
