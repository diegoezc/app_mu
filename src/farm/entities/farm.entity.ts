import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Owner } from 'src/owner/entities/owner.entity';

@Entity()
export class Farm {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  sector: string;
  @Column({
    type: 'float',
  })
  hectareas: number;
}
