import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableWeightHistory1713576151742 implements MigrationInterface {
    name = 'CreateTableWeightHistory1713576151742'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`weight_history\` (\`id\` int NOT NULL AUTO_INCREMENT, \`weight\` float NULL, \`dateOnly\` datetime NOT NULL, \`animalId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`batch\` DROP FOREIGN KEY \`FK_eca8c3649f4c5b1798c801f28e4\``);
        await queryRunner.query(`ALTER TABLE \`batch\` CHANGE \`farmId\` \`farmId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`animal\` DROP FOREIGN KEY \`FK_a446f33ae23c96292c088e9527f\``);
        await queryRunner.query(`ALTER TABLE \`animal\` DROP FOREIGN KEY \`FK_4fcedf17f0db2682f880ffc81a9\``);
        await queryRunner.query(`ALTER TABLE \`animal\` DROP COLUMN \`number_earring\``);
        await queryRunner.query(`ALTER TABLE \`animal\` ADD \`number_earring\` varchar(10) NULL`);
        await queryRunner.query(`ALTER TABLE \`animal\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`animal\` ADD \`name\` varchar(20) NULL`);
        await queryRunner.query(`ALTER TABLE \`animal\` DROP COLUMN \`status\``);
        await queryRunner.query(`ALTER TABLE \`animal\` ADD \`status\` varchar(30) NULL`);
        await queryRunner.query(`ALTER TABLE \`animal\` CHANGE \`typeAnimalId\` \`typeAnimalId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`animal\` CHANGE \`batchId\` \`batchId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`medical_history\` DROP FOREIGN KEY \`FK_e43475f50698820a03be900a5d1\``);
        await queryRunner.query(`ALTER TABLE \`medical_history\` CHANGE \`typeAnimalId\` \`typeAnimalId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`owner\` CHANGE \`phone\` \`phone\` varchar(40) NULL`);
        await queryRunner.query(`ALTER TABLE \`batch\` ADD CONSTRAINT \`FK_eca8c3649f4c5b1798c801f28e4\` FOREIGN KEY (\`farmId\`) REFERENCES \`farm\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`weight_history\` ADD CONSTRAINT \`FK_e8ebb78e90fa0a4b50601e5c518\` FOREIGN KEY (\`animalId\`) REFERENCES \`animal\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`animal\` ADD CONSTRAINT \`FK_a446f33ae23c96292c088e9527f\` FOREIGN KEY (\`typeAnimalId\`) REFERENCES \`type_animal\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`animal\` ADD CONSTRAINT \`FK_4fcedf17f0db2682f880ffc81a9\` FOREIGN KEY (\`batchId\`) REFERENCES \`batch\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`medical_history\` ADD CONSTRAINT \`FK_e43475f50698820a03be900a5d1\` FOREIGN KEY (\`typeAnimalId\`) REFERENCES \`type_animal\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`medical_history\` DROP FOREIGN KEY \`FK_e43475f50698820a03be900a5d1\``);
        await queryRunner.query(`ALTER TABLE \`animal\` DROP FOREIGN KEY \`FK_4fcedf17f0db2682f880ffc81a9\``);
        await queryRunner.query(`ALTER TABLE \`animal\` DROP FOREIGN KEY \`FK_a446f33ae23c96292c088e9527f\``);
        await queryRunner.query(`ALTER TABLE \`weight_history\` DROP FOREIGN KEY \`FK_e8ebb78e90fa0a4b50601e5c518\``);
        await queryRunner.query(`ALTER TABLE \`batch\` DROP FOREIGN KEY \`FK_eca8c3649f4c5b1798c801f28e4\``);
        await queryRunner.query(`ALTER TABLE \`owner\` CHANGE \`phone\` \`phone\` varchar(40) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`medical_history\` CHANGE \`typeAnimalId\` \`typeAnimalId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`medical_history\` ADD CONSTRAINT \`FK_e43475f50698820a03be900a5d1\` FOREIGN KEY (\`typeAnimalId\`) REFERENCES \`type_animal\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`animal\` CHANGE \`batchId\` \`batchId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`animal\` CHANGE \`typeAnimalId\` \`typeAnimalId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`animal\` DROP COLUMN \`status\``);
        await queryRunner.query(`ALTER TABLE \`animal\` ADD \`status\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`animal\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`animal\` ADD \`name\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`animal\` DROP COLUMN \`number_earring\``);
        await queryRunner.query(`ALTER TABLE \`animal\` ADD \`number_earring\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`animal\` ADD CONSTRAINT \`FK_4fcedf17f0db2682f880ffc81a9\` FOREIGN KEY (\`batchId\`) REFERENCES \`batch\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`animal\` ADD CONSTRAINT \`FK_a446f33ae23c96292c088e9527f\` FOREIGN KEY (\`typeAnimalId\`) REFERENCES \`type_animal\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`batch\` CHANGE \`farmId\` \`farmId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`batch\` ADD CONSTRAINT \`FK_eca8c3649f4c5b1798c801f28e4\` FOREIGN KEY (\`farmId\`) REFERENCES \`farm\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`DROP TABLE \`weight_history\``);
    }

}
