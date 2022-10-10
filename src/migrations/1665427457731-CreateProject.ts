import { MigrationInterface, QueryRunner, Table } from "typeorm";

export default class CreateProject1665427457731 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "project",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true
          },
          {
            name: "name",
            type: "varchar(60)"
          },
          {
            name: "description",
            type: "varchar(200)"
          },
          {
            name: "idClient",
            type: "int"
          },
          {
            name: "idPlataform",
            type: "int"
          },
          {
            name: "idType",
            type: "int"
          },
          {
            name: "idUser",
            type: "int"
          },
          {
            name: "idStatus",
            type: "int"
          },
          {
            name: "creationDate",
            type: "timestamp"
          },
          {
            name: "previousDate",
            type: "timestamp"
          },
          {
            name: "estimateTime",
            type: "numeric(16,6)"
          }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("project");
  }
}