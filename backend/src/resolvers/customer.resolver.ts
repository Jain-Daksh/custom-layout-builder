// src/resolvers/customerResolver.ts
import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { Customer } from '../entities/customer';
import { getRepository } from 'typeorm';

@Resolver()
export class CustomerResolver {
  @Query(() => [Customer])
  async customers() {
    return await getRepository(Customer).find();
  }

  @Mutation(() => Customer)
  async createCustomer(
    @Arg('name') name: string,
    @Arg('email') email: string,
    @Arg('phone_number') phone_number: string
  ): Promise<Customer> {
    const customer = getRepository(Customer).create({ name, email, phone_number });
    return await getRepository(Customer).save(customer);
  }
}
