import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Animal } from 'src/animal/entities/animal.entity';

@Entity()
export class Palpated {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  preg_time: string; // tiempo de prenes del animal
  @Column({
    type: 'date',
    nullable: true,
  })
  dateP: string;
  @Column({
    nullable: true,
  })
  status: string;
  @Column({
    length: 150,
  })
  description: string;
  @ManyToOne(() => Animal, (animal) => animal.palpated)
  animal: Animal;
}
