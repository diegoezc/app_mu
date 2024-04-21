import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TypeVaccine } from 'src/type-vaccine/entities/type-vaccine.entity';
import { Animal } from 'src/animal/entities/animal.entity';
import { Dose } from 'src/dose/entities/dose.entity';

@Entity()
export class Vaccine {
  @PrimaryGeneratedColumn()
  id: string;
  @Column({
    type: 'float',
    nullable: true,
  })
  amount: string;
  @ManyToOne(() => TypeVaccine, (type_vacicine) => type_vacicine.vaccine)
  type_vaccine: TypeVaccine;
  @ManyToOne(() => Animal, (animal) => animal.vaccine)
  animal: Animal;
  @ManyToOne(() => Dose, (dose) => dose.vaccine)
  dose: Dose;
}
