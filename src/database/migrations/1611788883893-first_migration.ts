import {MigrationInterface, QueryRunner} from "typeorm";

export class firstMigration1611788883893 implements MigrationInterface {
    name = 'firstMigration1611788883893'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "loggers" ("id" SERIAL NOT NULL, "raw_data" character varying(500) NOT NULL, "action" character varying(100) NOT NULL, "user" character varying(100) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_29e8f8af58645b7a782e3694a1a" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "loggers"`);
    }

}
