// src/database.ts
import { createConnection } from 'typeorm';

export const connectDatabase = async () => {
  try {
    await createConnection({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'test_db',
      entities: [
        __dirname + '/entities/*.ts',
      ],
      synchronize: true,
    });
    console.log('Database connected!');
  } catch (error) {
    console.error('Database connection failed:', error);
  }
};
