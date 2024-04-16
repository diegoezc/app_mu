import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableOwner1713300816470 implements MigrationInterface {
    name = 'CreateTableOwner1713300816470'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`owner\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(100) NOT NULL, \`phone\` varchar(40) NULL, \`email\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_7431bbd2e694ee4a80c32bd7ef\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_7431bbd2e694ee4a80c32bd7ef\` ON \`owner\``);
        await queryRunner.query(`DROP TABLE \`owner\``);
    }

}
