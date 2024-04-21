import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatTableDose1713726494128 implements MigrationInterface {
    name = 'CreatTableDose1713726494128'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`medical_history\` DROP FOREIGN KEY \`FK_e43475f50698820a03be900a5d1\``);
        await queryRunner.query(`ALTER TABLE \`medical_history\` CHANGE \`typeAnimalId\` \`typeAnimalId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`batch\` DROP FOREIGN KEY \`FK_eca8c3649f4c5b1798c801f28e4\``);
        await queryRunner.query(`ALTER TABLE \`batch\` CHANGE \`farmId\` \`farmId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`type_vaccine\` CHANGE \`name\` \`name\` varchar(100) NULL`);
        await queryRunner.query(`ALTER TABLE \`vaccine\` DROP FOREIGN KEY \`FK_dd4791bb815829c597ed4425f95\``);
        await queryRunner.query(`ALTER TABLE \`vaccine\` DROP FOREIGN KEY \`FK_464ac1180bee0d45b2d5ca3125a\``);
        await queryRunner.query(`ALTER TABLE \`vaccine\` DROP FOREIGN KEY \`FK_485eb8d408eab575895c9eda01f\``);
        await queryRunner.query(`ALTER TABLE \`vaccine\` CHANGE \`amount\` \`amount\` float NULL`);
        await queryRunner.query(`ALTER TABLE \`vaccine\` CHANGE \`typeVaccineId\` \`typeVaccineId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`vaccine\` CHANGE \`animalId\` \`animalId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`vaccine\` CHANGE \`doseId\` \`doseId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`animal\` DROP FOREIGN KEY \`FK_a446f33ae23c96292c088e9527f\``);
        await queryRunner.query(`ALTER TABLE \`animal\` DROP FOREIGN KEY \`FK_4fcedf17f0db2682f880ffc81a9\``);
        await queryRunner.query(`ALTER TABLE \`animal\` CHANGE \`number_earring\` \`number_earring\` varchar(10) NULL`);
        await queryRunner.query(`ALTER TABLE \`animal\` CHANGE \`name\` \`name\` varchar(20) NULL`);
        await queryRunner.query(`ALTER TABLE \`animal\` CHANGE \`status\` \`status\` varchar(30) NULL`);
        await queryRunner.query(`ALTER TABLE \`animal\` CHANGE \`typeAnimalId\` \`typeAnimalId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`animal\` CHANGE \`batchId\` \`batchId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`weight_history\` DROP FOREIGN KEY \`FK_e8ebb78e90fa0a4b50601e5c518\``);
        await queryRunner.query(`ALTER TABLE \`weight_history\` CHANGE \`weight\` \`weight\` float NULL`);
        await queryRunner.query(`ALTER TABLE \`weight_history\` CHANGE \`animalId\` \`animalId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`owner\` CHANGE \`phone\` \`phone\` varchar(40) NULL`);
        await queryRunner.query(`ALTER TABLE \`medical_history\` ADD CONSTRAINT \`FK_e43475f50698820a03be900a5d1\` FOREIGN KEY (\`typeAnimalId\`) REFERENCES \`type_animal\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`batch\` ADD CONSTRAINT \`FK_eca8c3649f4c5b1798c801f28e4\` FOREIGN KEY (\`farmId\`) REFERENCES \`farm\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`vaccine\` ADD CONSTRAINT \`FK_dd4791bb815829c597ed4425f95\` FOREIGN KEY (\`typeVaccineId\`) REFERENCES \`type_vaccine\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`vaccine\` ADD CONSTRAINT \`FK_464ac1180bee0d45b2d5ca3125a\` FOREIGN KEY (\`animalId\`) REFERENCES \`animal\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`vaccine\` ADD CONSTRAINT \`FK_485eb8d408eab575895c9eda01f\` FOREIGN KEY (\`doseId\`) REFERENCES \`dose\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`animal\` ADD CONSTRAINT \`FK_a446f33ae23c96292c088e9527f\` FOREIGN KEY (\`typeAnimalId\`) REFERENCES \`type_animal\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`animal\` ADD CONSTRAINT \`FK_4fcedf17f0db2682f880ffc81a9\` FOREIGN KEY (\`batchId\`) REFERENCES \`batch\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`weight_history\` ADD CONSTRAINT \`FK_e8ebb78e90fa0a4b50601e5c518\` FOREIGN KEY (\`animalId\`) REFERENCES \`animal\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`weight_history\` DROP FOREIGN KEY \`FK_e8ebb78e90fa0a4b50601e5c518\``);
        await queryRunner.query(`ALTER TABLE \`animal\` DROP FOREIGN KEY \`FK_4fcedf17f0db2682f880ffc81a9\``);
        await queryRunner.query(`ALTER TABLE \`animal\` DROP FOREIGN KEY \`FK_a446f33ae23c96292c088e9527f\``);
        await queryRunner.query(`ALTER TABLE \`vaccine\` DROP FOREIGN KEY \`FK_485eb8d408eab575895c9eda01f\``);
        await queryRunner.query(`ALTER TABLE \`vaccine\` DROP FOREIGN KEY \`FK_464ac1180bee0d45b2d5ca3125a\``);
        await queryRunner.query(`ALTER TABLE \`vaccine\` DROP FOREIGN KEY \`FK_dd4791bb815829c597ed4425f95\``);
        await queryRunner.query(`ALTER TABLE \`batch\` DROP FOREIGN KEY \`FK_eca8c3649f4c5b1798c801f28e4\``);
        await queryRunner.query(`ALTER TABLE \`medical_history\` DROP FOREIGN KEY \`FK_e43475f50698820a03be900a5d1\``);
        await queryRunner.query(`ALTER TABLE \`owner\` CHANGE \`phone\` \`phone\` varchar(40) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`weight_history\` CHANGE \`animalId\` \`animalId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`weight_history\` CHANGE \`weight\` \`weight\` float(12) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`weight_history\` ADD CONSTRAINT \`FK_e8ebb78e90fa0a4b50601e5c518\` FOREIGN KEY (\`animalId\`) REFERENCES \`animal\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`animal\` CHANGE \`batchId\` \`batchId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`animal\` CHANGE \`typeAnimalId\` \`typeAnimalId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`animal\` CHANGE \`status\` \`status\` varchar(30) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`animal\` CHANGE \`name\` \`name\` varchar(20) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`animal\` CHANGE \`number_earring\` \`number_earring\` varchar(10) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`animal\` ADD CONSTRAINT \`FK_4fcedf17f0db2682f880ffc81a9\` FOREIGN KEY (\`batchId\`) REFERENCES \`batch\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`animal\` ADD CONSTRAINT \`FK_a446f33ae23c96292c088e9527f\` FOREIGN KEY (\`typeAnimalId\`) REFERENCES \`type_animal\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`vaccine\` CHANGE \`doseId\` \`doseId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`vaccine\` CHANGE \`animalId\` \`animalId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`vaccine\` CHANGE \`typeVaccineId\` \`typeVaccineId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`vaccine\` CHANGE \`amount\` \`amount\` float(12) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`vaccine\` ADD CONSTRAINT \`FK_485eb8d408eab575895c9eda01f\` FOREIGN KEY (\`doseId\`) REFERENCES \`dose\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`vaccine\` ADD CONSTRAINT \`FK_464ac1180bee0d45b2d5ca3125a\` FOREIGN KEY (\`animalId\`) REFERENCES \`animal\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`vaccine\` ADD CONSTRAINT \`FK_dd4791bb815829c597ed4425f95\` FOREIGN KEY (\`typeVaccineId\`) REFERENCES \`type_vaccine\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`type_vaccine\` CHANGE \`name\` \`name\` varchar(100) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`batch\` CHANGE \`farmId\` \`farmId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`batch\` ADD CONSTRAINT \`FK_eca8c3649f4c5b1798c801f28e4\` FOREIGN KEY (\`farmId\`) REFERENCES \`farm\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`medical_history\` CHANGE \`typeAnimalId\` \`typeAnimalId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`medical_history\` ADD CONSTRAINT \`FK_e43475f50698820a03be900a5d1\` FOREIGN KEY (\`typeAnimalId\`) REFERENCES \`type_animal\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
