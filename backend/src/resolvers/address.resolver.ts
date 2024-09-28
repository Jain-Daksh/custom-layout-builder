// src/resolvers/addressResolver.ts
import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { Address } from '../entities/address';
import { Customer } from '../entities/customer';
import { getRepository } from 'typeorm';

@Resolver()
export class AddressResolver {
  @Query(() => [Address])
  async addresses() {
    return await getRepository(Address).find();
  }

  @Mutation(() => Address)
  async createAddress(
    @Arg('customerId') customerId: number,
    @Arg('address_1') address_1: string,
    @Arg('city') city: string,
    @Arg('state') state: string
  ): Promise<Address> {
    const address = getRepository(Address).create({ customer: { id: customerId }, address_1, city, state });
    return await getRepository(Address).save(address);
  }
}
