import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Animal } from 'src/animal/entities/animal.entity';

@Entity()
export class WeightHistory {
  @PrimaryGeneratedColumn()
  id: string;
  @Column({
    type: 'float',
    nullable: true,
  })
  weight: string;
  @Column({
    type: Date,
  })
  dateOnly: string;
  @ManyToOne(() => Animal, (animal) => animal.weightHistory)
  animal: Animal;
}
