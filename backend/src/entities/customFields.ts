// src/entities/CustomField.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Customer } from './customer';

@Entity()
export class CustomField {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Customer)
  customer!: Customer;

  @Column()
  field_name!: string;

  @Column()
  field_value!: string;
}
