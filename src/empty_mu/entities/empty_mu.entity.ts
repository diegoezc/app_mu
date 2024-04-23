import { Column, PrimaryGeneratedColumn, Entity, ManyToOne } from 'typeorm';
import { Animal } from 'src/animal/entities/animal.entity';

@Entity()
export class EmptyMu {
  @PrimaryGeneratedColumn()
  id: string;
  @Column({
    type: 'date',
  })
  date: string;
  @ManyToOne(() => Animal, (animal) => animal.emptyMu)
  animal: Animal;
}
