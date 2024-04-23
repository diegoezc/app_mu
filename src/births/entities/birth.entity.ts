import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Animal } from 'src/animal/entities/animal.entity';

@Entity()
export class Birth {
  @PrimaryGeneratedColumn()
  id: string;
  @Column({
    type: 'float',
  })
  weight: string;
  @Column({
    type: 'date',
  })
  birthday: string;
  @ManyToOne(() => Animal, (animal) => animal.birth)
  animal: Animal;
}
