import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Book } from 'src/app/shared/book';

@Injectable({
    providedIn: 'root'
})
export class BookService {
    bookURL = `http://localhost:3000/books`;
    //bookUserURL = `http://localhost:3000/books/:dono`

    constructor(private http: HttpClient) { }

    registerBook(bookObj: any) {
        const obj = {
            book_name: bookObj.book_name,
            dono: bookObj.dono,
            disponibilidade: bookObj.disponibilidade,
            emprestado: bookObj.emprestado
        }

        return this.http.post(`${this.bookURL}`, obj);
    }

    getBook(): Observable<Book[]> {
        return this.http.get<Book[]>(`${this.bookURL}`);
    }

    /*getBookUser(email: any): Observable<Book[]> {
        return this.http.get<Book[]>(`${this.bookUserURL}`, email);
    }*/

    alterDisponibilidade(alterObj: any): Observable<Book[]> {
        const obj = {
            id: alterObj.id,
            book_name: alterObj.book_name,
            dono: alterObj.dono,
            disponibilidade: alterObj.disponibilidade,
            emprestado: alterObj.emprestado
        }

        return this.http.put<Book[]>(`${this.bookURL}`, obj);
    }

}
