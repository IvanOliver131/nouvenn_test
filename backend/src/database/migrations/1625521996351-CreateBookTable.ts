import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateBookTable1625521996351 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'book',
            columns: [
                {
                    name: 'id',
                    type: 'serial',
                    isPrimary: true
                },
                {
                    name: 'book_name',
                    type: 'varchar',
                },
                {
                    name: 'dono',
                    type: 'varchar',
                },
                {
                    name: 'disponibilidade',
                    type: 'boolean',
                },
                {
                    name: 'emprestado',
                    type: 'varchar',
                },
            ],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('book');
    }

}