import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Vaccine } from 'src/vaccine/entities/vaccine.entity';

@Entity()
export class TypeVaccine {
  @PrimaryGeneratedColumn()
  id: string;
  @Column({
    length: 100,
    nullable: true,
  })
  name: string;
  @OneToMany(() => Vaccine, (vaccine) => vaccine.type_vaccine)
  vaccine: Vaccine[];
}
