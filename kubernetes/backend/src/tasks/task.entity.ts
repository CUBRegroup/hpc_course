import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TaskStatus } from './task-status.enum';
import { User } from '../auth/user.entity';

@Entity()
export class Task extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: TaskStatus;

  //This is defining the relationship
  @ManyToOne((type) => User, (user) => user.tasks, { eager: false })
  user: User;

  //Actual column created for us due to the relationship, but we still have to define it
  @Column()
  userId: number;
}
