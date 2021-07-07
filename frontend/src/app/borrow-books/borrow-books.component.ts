import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BookService } from '../service/book/book.service';
import { UserService } from '../service/user/user.service';
import { Book } from '../shared/book';

@Component({
  selector: 'app-borrow-books',
  templateUrl: './borrow-books.component.html',
  styleUrls: ['./borrow-books.component.css']
})
export class BorrowBooksComponent implements OnInit {

  public book: Book = new Book();
  public allBookLst: Array<Book> = new Array<Book>();

  constructor(
    private bookSvc: BookService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.getAllBooks();
  }

  verifyInputs() {
    let msg = ``
    let success = true;
    if (!this.book.book_name) {
      msg += ` O campo Book Name é requerido`;
      success = false;
    }
    if (!success) {
      console.log(msg, `Ok`, {
        duration: 3000,
      });
    }
    return success;
  }


  zerarArray() {
    this.allBookLst = [];
  }

  getAllBooks() {
    this.bookSvc.getBook().subscribe(
      result => {
        this.allBookLst = result
      });
  }

  emprestar(disponibily: any, i: any) {

    if (disponibily.disponibilidade == true) {
      disponibily.disponibilidade = false;
      disponibily.emprestado = localStorage.getItem("userName");
      this.bookSvc.alterDisponibilidade(disponibily).subscribe(
        result => {
          this.getAllBooks();
        }
      )
    }

    else {
      if (disponibily.emprestado == localStorage.getItem("userName")) {
        disponibily.disponibilidade = true;
        disponibily.emprestado = 'Nobody';
        this.bookSvc.alterDisponibilidade(disponibily).subscribe(
          result => {
            this.getAllBooks();
          }
        )
      }
    }
  }

  verPerfil(dono: any) {
    this.router.navigate(['perfil/' + localStorage.getItem("userName") + '/' + dono]);
  }

}
