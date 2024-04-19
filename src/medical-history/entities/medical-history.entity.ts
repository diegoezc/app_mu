import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TypeAnimal } from 'src/type-animal/entities/type-animal.entity';

@Entity()
export class MedicalHistory {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  name: string;
  @Column()
  reinforcement: string;
  @ManyToOne(() => TypeAnimal, (type_animal) => type_animal.medical_history)
  type_animal: TypeAnimal;
}
