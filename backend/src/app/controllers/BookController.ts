import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Book from '../models/Book';

class BookController {

    async store(req: Request, res: Response) {
        const repository = getRepository(Book);
        const { book_name, dono, disponibilidade, emprestado } = req.body;

        const book = repository.create({ book_name, dono, disponibilidade, emprestado });
        await repository.save(book);

        return res.json(book);
    }

    async read(req: Request, res: Response) {
        const repository = getRepository(Book);

        const book = await repository.find();

        return res.json(book);
    }

    async update(req: Request, res: Response) {
        const { id } = req.body

        const connectionBook = getRepository(Book)
        const book = await connectionBook.findOne({ id })

        if (book) {
            await connectionBook.update(book.id, req.body)
            return res.status(200).json({ message: 'Book update success' })
        }

        return res.status(404).json({ message: 'Book not found' })
    }

    /*
    async readyByEmail(req: Request, resp: Response) {
        const { dono } = req.body
        const connectionBook = getRepository(Book)
        const book = await connectionBook.findOne({ dono })
        if (book) {
            return resp.json(book)
        }
        return resp.status(404).json({ message: 'Book not found!' })
    }*/

}

export default new BookController();