// src/resolvers/userResolver.ts
import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { User } from '../entities/user';
import { getRepository } from 'typeorm';

@Resolver()
export class UserResolver {
  @Query(() => [User])
  async users() {
    return await getRepository(User).find();
  }

  @Mutation(() => User)
  async createUser(
    @Arg('name') name: string,
    @Arg('email') email: string,
  ): Promise<User> {
    const user = getRepository(User).create({ name, email });
    return await getRepository(User).save(user);
  }
}
