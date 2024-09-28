// src/entities/Address.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Customer } from './customer';

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Customer, customer => customer.addresses)
  customer!: Customer;

  @Column()
  address_1!: string;

  @Column()
  city!: string;

  @Column()
  state!: string;
}
