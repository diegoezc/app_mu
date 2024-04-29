import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1714403803618 implements MigrationInterface {
    name = 'CreateTables1714403803618'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`medical_history\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`reinforcement\` varchar(255) NOT NULL, \`typeAnimalId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`type_animal\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(50) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`farm\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`sector\` varchar(255) NOT NULL, \`hectareas\` float NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`batch\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`farmId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`type_vaccine\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(100) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`dose\` (\`id\` int NOT NULL AUTO_INCREMENT, \`next_dose\` date NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`vaccine\` (\`id\` int NOT NULL AUTO_INCREMENT, \`amount\` float NULL, \`date\` date NOT NULL, \`typeVaccineId\` int NULL, \`animalId\` int NULL, \`doseId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`palpated\` (\`id\` int NOT NULL AUTO_INCREMENT, \`preg_time\` varchar(255) NOT NULL, \`dateP\` date NULL, \`status\` varchar(255) NULL, \`description\` varchar(150) NOT NULL, \`animalId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`type_insemination\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`fecundation\` (\`id\` int NOT NULL AUTO_INCREMENT, \`incemination\` tinyint NOT NULL, \`date\` date NOT NULL, \`animalId\` int NULL, \`typeInseminationId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`milk\` (\`id\` int NOT NULL AUTO_INCREMENT, \`weight\` float NOT NULL, \`dateTime\` date NOT NULL, \`animalId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`birth\` (\`id\` int NOT NULL AUTO_INCREMENT, \`weight\` float NOT NULL, \`birthday\` date NOT NULL, \`animalId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`empty_mu\` (\`id\` int NOT NULL AUTO_INCREMENT, \`date\` date NOT NULL, \`animalId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`animal\` (\`id\` int NOT NULL AUTO_INCREMENT, \`number_earring\` varchar(10) NULL, \`name\` varchar(20) NULL, \`status\` varchar(30) NULL, \`typeAnimalId\` int NULL, \`batchId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`weight_history\` (\`id\` int NOT NULL AUTO_INCREMENT, \`weight\` float NULL, \`dateOnly\` datetime NOT NULL, \`animalId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`owner\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(100) NOT NULL, \`phone\` varchar(40) NULL, \`email\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_7431bbd2e694ee4a80c32bd7ef\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`owner_farms_farm\` (\`ownerId\` int NOT NULL, \`farmId\` int NOT NULL, INDEX \`IDX_fc0585c23ca213c04d5a0fd55b\` (\`ownerId\`), INDEX \`IDX_4d23ff7ed98f5407b17c5daa09\` (\`farmId\`), PRIMARY KEY (\`ownerId\`, \`farmId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`medical_history\` ADD CONSTRAINT \`FK_e43475f50698820a03be900a5d1\` FOREIGN KEY (\`typeAnimalId\`) REFERENCES \`type_animal\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`batch\` ADD CONSTRAINT \`FK_eca8c3649f4c5b1798c801f28e4\` FOREIGN KEY (\`farmId\`) REFERENCES \`farm\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`vaccine\` ADD CONSTRAINT \`FK_dd4791bb815829c597ed4425f95\` FOREIGN KEY (\`typeVaccineId\`) REFERENCES \`type_vaccine\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`vaccine\` ADD CONSTRAINT \`FK_464ac1180bee0d45b2d5ca3125a\` FOREIGN KEY (\`animalId\`) REFERENCES \`animal\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`vaccine\` ADD CONSTRAINT \`FK_485eb8d408eab575895c9eda01f\` FOREIGN KEY (\`doseId\`) REFERENCES \`dose\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`palpated\` ADD CONSTRAINT \`FK_02367fed52228ebcc1ece4e5ad5\` FOREIGN KEY (\`animalId\`) REFERENCES \`animal\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`fecundation\` ADD CONSTRAINT \`FK_1da0451f65b40dc9bc227cbd75d\` FOREIGN KEY (\`animalId\`) REFERENCES \`animal\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`fecundation\` ADD CONSTRAINT \`FK_3e179789de2e58ca516a2928561\` FOREIGN KEY (\`typeInseminationId\`) REFERENCES \`type_insemination\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`milk\` ADD CONSTRAINT \`FK_c91af60a2d154329380977a84f3\` FOREIGN KEY (\`animalId\`) REFERENCES \`animal\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`birth\` ADD CONSTRAINT \`FK_eae0e3f77c8ccbbb59f1f45a3bc\` FOREIGN KEY (\`animalId\`) REFERENCES \`animal\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`empty_mu\` ADD CONSTRAINT \`FK_5b62693af2f067d14dfb1438c21\` FOREIGN KEY (\`animalId\`) REFERENCES \`animal\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`animal\` ADD CONSTRAINT \`FK_a446f33ae23c96292c088e9527f\` FOREIGN KEY (\`typeAnimalId\`) REFERENCES \`type_animal\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`animal\` ADD CONSTRAINT \`FK_4fcedf17f0db2682f880ffc81a9\` FOREIGN KEY (\`batchId\`) REFERENCES \`batch\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`weight_history\` ADD CONSTRAINT \`FK_e8ebb78e90fa0a4b50601e5c518\` FOREIGN KEY (\`animalId\`) REFERENCES \`animal\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`owner_farms_farm\` ADD CONSTRAINT \`FK_fc0585c23ca213c04d5a0fd55b1\` FOREIGN KEY (\`ownerId\`) REFERENCES \`owner\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`owner_farms_farm\` ADD CONSTRAINT \`FK_4d23ff7ed98f5407b17c5daa098\` FOREIGN KEY (\`farmId\`) REFERENCES \`farm\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`owner_farms_farm\` DROP FOREIGN KEY \`FK_4d23ff7ed98f5407b17c5daa098\``);
        await queryRunner.query(`ALTER TABLE \`owner_farms_farm\` DROP FOREIGN KEY \`FK_fc0585c23ca213c04d5a0fd55b1\``);
        await queryRunner.query(`ALTER TABLE \`weight_history\` DROP FOREIGN KEY \`FK_e8ebb78e90fa0a4b50601e5c518\``);
        await queryRunner.query(`ALTER TABLE \`animal\` DROP FOREIGN KEY \`FK_4fcedf17f0db2682f880ffc81a9\``);
        await queryRunner.query(`ALTER TABLE \`animal\` DROP FOREIGN KEY \`FK_a446f33ae23c96292c088e9527f\``);
        await queryRunner.query(`ALTER TABLE \`empty_mu\` DROP FOREIGN KEY \`FK_5b62693af2f067d14dfb1438c21\``);
        await queryRunner.query(`ALTER TABLE \`birth\` DROP FOREIGN KEY \`FK_eae0e3f77c8ccbbb59f1f45a3bc\``);
        await queryRunner.query(`ALTER TABLE \`milk\` DROP FOREIGN KEY \`FK_c91af60a2d154329380977a84f3\``);
        await queryRunner.query(`ALTER TABLE \`fecundation\` DROP FOREIGN KEY \`FK_3e179789de2e58ca516a2928561\``);
        await queryRunner.query(`ALTER TABLE \`fecundation\` DROP FOREIGN KEY \`FK_1da0451f65b40dc9bc227cbd75d\``);
        await queryRunner.query(`ALTER TABLE \`palpated\` DROP FOREIGN KEY \`FK_02367fed52228ebcc1ece4e5ad5\``);
        await queryRunner.query(`ALTER TABLE \`vaccine\` DROP FOREIGN KEY \`FK_485eb8d408eab575895c9eda01f\``);
        await queryRunner.query(`ALTER TABLE \`vaccine\` DROP FOREIGN KEY \`FK_464ac1180bee0d45b2d5ca3125a\``);
        await queryRunner.query(`ALTER TABLE \`vaccine\` DROP FOREIGN KEY \`FK_dd4791bb815829c597ed4425f95\``);
        await queryRunner.query(`ALTER TABLE \`batch\` DROP FOREIGN KEY \`FK_eca8c3649f4c5b1798c801f28e4\``);
        await queryRunner.query(`ALTER TABLE \`medical_history\` DROP FOREIGN KEY \`FK_e43475f50698820a03be900a5d1\``);
        await queryRunner.query(`DROP INDEX \`IDX_4d23ff7ed98f5407b17c5daa09\` ON \`owner_farms_farm\``);
        await queryRunner.query(`DROP INDEX \`IDX_fc0585c23ca213c04d5a0fd55b\` ON \`owner_farms_farm\``);
        await queryRunner.query(`DROP TABLE \`owner_farms_farm\``);
        await queryRunner.query(`DROP INDEX \`IDX_7431bbd2e694ee4a80c32bd7ef\` ON \`owner\``);
        await queryRunner.query(`DROP TABLE \`owner\``);
        await queryRunner.query(`DROP TABLE \`weight_history\``);
        await queryRunner.query(`DROP TABLE \`animal\``);
        await queryRunner.query(`DROP TABLE \`empty_mu\``);
        await queryRunner.query(`DROP TABLE \`birth\``);
        await queryRunner.query(`DROP TABLE \`milk\``);
        await queryRunner.query(`DROP TABLE \`fecundation\``);
        await queryRunner.query(`DROP TABLE \`type_insemination\``);
        await queryRunner.query(`DROP TABLE \`palpated\``);
        await queryRunner.query(`DROP TABLE \`vaccine\``);
        await queryRunner.query(`DROP TABLE \`dose\``);
        await queryRunner.query(`DROP TABLE \`type_vaccine\``);
        await queryRunner.query(`DROP TABLE \`batch\``);
        await queryRunner.query(`DROP TABLE \`farm\``);
        await queryRunner.query(`DROP TABLE \`type_animal\``);
        await queryRunner.query(`DROP TABLE \`medical_history\``);
    }

}
