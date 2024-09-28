// src/resolvers/customLayoutResolver.ts
import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { CustomLayout } from '../entities/customLayout';
import { getRepository } from 'typeorm';

@Resolver()
export class CustomLayoutResolver {
  @Query(() => [CustomLayout])
  async customLayouts() {
    return await getRepository(CustomLayout).find();
  }

  @Mutation(() => CustomLayout)
  async createCustomLayout(
    @Arg('customerId') customerId: number,
    @Arg('layout') layout: object
  ): Promise<CustomLayout> {
    const customLayout = getRepository(CustomLayout).create({ customer: { id: customerId }, layout });
    return await getRepository(CustomLayout).save(customLayout);
  }
}
