import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Animal } from 'src/animal/entities/animal.entity';

@Entity()
export class TypeAnimal {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 50 })
  name: string;
  @OneToMany(() => Animal, (animal) => animal.type_animal)
  animals: Animal[];
}
