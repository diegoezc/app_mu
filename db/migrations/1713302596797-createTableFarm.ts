import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableFarm1713302596797 implements MigrationInterface {
    name = 'CreateTableFarm1713302596797'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`farm\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`sector\` varchar(255) NOT NULL, \`hectareas\` float NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`owner_farms_farm\` (\`ownerId\` int NOT NULL, \`farmId\` int NOT NULL, INDEX \`IDX_fc0585c23ca213c04d5a0fd55b\` (\`ownerId\`), INDEX \`IDX_4d23ff7ed98f5407b17c5daa09\` (\`farmId\`), PRIMARY KEY (\`ownerId\`, \`farmId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`owner\` CHANGE \`phone\` \`phone\` varchar(40) NULL`);
        await queryRunner.query(`ALTER TABLE \`owner_farms_farm\` ADD CONSTRAINT \`FK_fc0585c23ca213c04d5a0fd55b1\` FOREIGN KEY (\`ownerId\`) REFERENCES \`owner\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`owner_farms_farm\` ADD CONSTRAINT \`FK_4d23ff7ed98f5407b17c5daa098\` FOREIGN KEY (\`farmId\`) REFERENCES \`farm\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`owner_farms_farm\` DROP FOREIGN KEY \`FK_4d23ff7ed98f5407b17c5daa098\``);
        await queryRunner.query(`ALTER TABLE \`owner_farms_farm\` DROP FOREIGN KEY \`FK_fc0585c23ca213c04d5a0fd55b1\``);
        await queryRunner.query(`ALTER TABLE \`owner\` CHANGE \`phone\` \`phone\` varchar(40) NULL DEFAULT ''NULL''`);
        await queryRunner.query(`DROP INDEX \`IDX_4d23ff7ed98f5407b17c5daa09\` ON \`owner_farms_farm\``);
        await queryRunner.query(`DROP INDEX \`IDX_fc0585c23ca213c04d5a0fd55b\` ON \`owner_farms_farm\``);
        await queryRunner.query(`DROP TABLE \`owner_farms_farm\``);
        await queryRunner.query(`DROP TABLE \`farm\``);
    }

}
