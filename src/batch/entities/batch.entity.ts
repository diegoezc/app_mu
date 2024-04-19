import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Farm } from 'src/farm/entities/farm.entity';
import { Animal } from 'src/animal/entities/animal.entity';

@Entity()
export class Batch {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @ManyToOne(() => Farm, (farm) => farm.batchs)
  farm: Farm;
  @OneToMany(() => Animal, (animal) => animal.batch)
  animals: Animal[];
}
