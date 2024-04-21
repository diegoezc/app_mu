import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Vaccine } from 'src/vaccine/entities/vaccine.entity';

@Entity()
export class Dose {
  @PrimaryGeneratedColumn()
  id: string;
  @Column({
    type: 'date',
  })
  next_dose: string;
  @OneToMany(() => Vaccine, (vaccine) => vaccine.dose)
  vaccine: Vaccine[];
}
