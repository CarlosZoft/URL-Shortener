import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class URLCreate1626152875631 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "urls",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
          },
          {
            name: "fullUrl",
            type: "varchar",
          },
          {
            name: "ShortUrl",
            type: "varchar",
          },
          {
            name: "visitQtd",
            type: "integer",
          },
          {
            name: "linkExpires",
            type: "timestamp",
            default: null,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("urls");
  }
}
