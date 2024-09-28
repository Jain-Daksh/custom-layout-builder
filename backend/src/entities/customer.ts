// src/entities/Customer.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Address } from './address';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  phone_number: string;

  // One customer can have many addresses
  @OneToMany(() => Address, address => address.customer)
  addresses: Address[];
}
