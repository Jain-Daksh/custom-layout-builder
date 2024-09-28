// src/entities/User.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number; // Use definite assignment assertion

  @Column()
  name!: string;

  @Column({ unique: true })
  email!: string;
}
