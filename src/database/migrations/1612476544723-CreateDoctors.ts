import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateDoctors1612476544723 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'doctors',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'crm',
            type: 'varchar',
          },
          {
            name: 'phone',
            type: 'INTEGER',
          },
          {
            name: 'cellphone',
            type: 'INTEGER',
          },
          {
            name: 'cep',
            type: 'varchar',
          },
          {
            name: 'logradouro',
            type: 'varchar',
          },
          {
            name: 'neighborhood',
            type: 'varchar',
          },
          {
            name: 'city',
            type: 'varchar',
          },
          {
            name: 'uf',
            type: 'varchar',
          },
          {
            name: 'specialty',
            type: 'varchar',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('doctors');
  }
}
