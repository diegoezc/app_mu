import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Farm } from 'src/farm/entities/farm.entity';

@Entity()
export class Owner {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 100 })
  name: string;
  @Column({
    nullable: true,
    length: 40,
  })
  phone: string;
  @Column({
    unique: true,
  })
  email: string;
  @Column({
    unique: true,
  })
  password: string;

  @ManyToMany(() => Farm)
  @JoinTable()
  farms: Farm[];
}
