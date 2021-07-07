import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('book')
class Book {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    book_name: string;

    @Column()
    dono: string;

    @Column()
    disponibilidade: boolean;

    @Column()
    emprestado: string;

}

export default Book;