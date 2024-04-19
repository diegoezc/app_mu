import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Animal } from 'src/animal/entities/animal.entity';
import { MedicalHistory } from 'src/medical-history/entities/medical-history.entity';

@Entity()
export class TypeAnimal {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 50 })
  name: string;
  @OneToMany(() => Animal, (animal) => animal.type_animal)
  animals: Animal[];
  @OneToMany(
    () => MedicalHistory,
    (medical_history) => medical_history.type_animal,
  )
  medical_history: MedicalHistory[];
}
