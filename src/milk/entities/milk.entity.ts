import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Animal } from 'src/animal/entities/animal.entity';

@Entity()
export class Milk {
  @PrimaryGeneratedColumn()
  id: string;
  @Column({
    type: 'float',
  })
  weight: string;
  @Column({
    type: 'date',
  })
  dateTime: string;
  @ManyToOne(() => Animal, (animal) => animal.milk)
  animal: Animal;
}
