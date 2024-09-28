// src/entities/CustomLayout.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Customer } from './customer';

@Entity()
export class CustomLayout {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Customer)
  customer: Customer;

  @Column('json')
  layout: object; // e.g., { "alt_phone": "string", "alt_email": "string", "last_name": "string" }
}
