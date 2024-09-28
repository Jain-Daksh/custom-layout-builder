// src/schema.ts
import { buildSchema } from 'type-graphql';
import { UserResolver } from './src/resolvers/user.resolver';
import { CustomerResolver } from './src/resolvers/customer.resolver';
import { AddressResolver } from './src/resolvers/address.resolver';
import { CustomLayoutResolver } from './src/resolvers/customLayout.resolver';

export const createSchema = () => 
  buildSchema({
    resolvers: [
      UserResolver,
      CustomerResolver,
      AddressResolver,
      CustomLayoutResolver,
    ],
  });
