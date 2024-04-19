import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableMedicalHistory1713570343131 implements MigrationInterface {
    name = 'CreateTableMedicalHistory1713570343131'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`medical_history\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`reinforcement\` varchar(255) NOT NULL, \`typeAnimalId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`batch\` DROP FOREIGN KEY \`FK_eca8c3649f4c5b1798c801f28e4\``);
        await queryRunner.query(`ALTER TABLE \`batch\` CHANGE \`farmId\` \`farmId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`animal\` DROP FOREIGN KEY \`FK_a446f33ae23c96292c088e9527f\``);
        await queryRunner.query(`ALTER TABLE \`animal\` DROP FOREIGN KEY \`FK_4fcedf17f0db2682f880ffc81a9\``);
        await queryRunner.query(`ALTER TABLE \`animal\` CHANGE \`typeAnimalId\` \`typeAnimalId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`animal\` CHANGE \`batchId\` \`batchId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`owner\` CHANGE \`phone\` \`phone\` varchar(40) NULL`);
        await queryRunner.query(`ALTER TABLE \`batch\` ADD CONSTRAINT \`FK_eca8c3649f4c5b1798c801f28e4\` FOREIGN KEY (\`farmId\`) REFERENCES \`farm\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`animal\` ADD CONSTRAINT \`FK_a446f33ae23c96292c088e9527f\` FOREIGN KEY (\`typeAnimalId\`) REFERENCES \`type_animal\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`animal\` ADD CONSTRAINT \`FK_4fcedf17f0db2682f880ffc81a9\` FOREIGN KEY (\`batchId\`) REFERENCES \`batch\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`medical_history\` ADD CONSTRAINT \`FK_e43475f50698820a03be900a5d1\` FOREIGN KEY (\`typeAnimalId\`) REFERENCES \`type_animal\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`medical_history\` DROP FOREIGN KEY \`FK_e43475f50698820a03be900a5d1\``);
        await queryRunner.query(`ALTER TABLE \`animal\` DROP FOREIGN KEY \`FK_4fcedf17f0db2682f880ffc81a9\``);
        await queryRunner.query(`ALTER TABLE \`animal\` DROP FOREIGN KEY \`FK_a446f33ae23c96292c088e9527f\``);
        await queryRunner.query(`ALTER TABLE \`batch\` DROP FOREIGN KEY \`FK_eca8c3649f4c5b1798c801f28e4\``);
        await queryRunner.query(`ALTER TABLE \`owner\` CHANGE \`phone\` \`phone\` varchar(40) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`animal\` CHANGE \`batchId\` \`batchId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`animal\` CHANGE \`typeAnimalId\` \`typeAnimalId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`animal\` ADD CONSTRAINT \`FK_4fcedf17f0db2682f880ffc81a9\` FOREIGN KEY (\`batchId\`) REFERENCES \`batch\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`animal\` ADD CONSTRAINT \`FK_a446f33ae23c96292c088e9527f\` FOREIGN KEY (\`typeAnimalId\`) REFERENCES \`type_animal\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`batch\` CHANGE \`farmId\` \`farmId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`batch\` ADD CONSTRAINT \`FK_eca8c3649f4c5b1798c801f28e4\` FOREIGN KEY (\`farmId\`) REFERENCES \`farm\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`DROP TABLE \`medical_history\``);
    }

}
