import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router';
import { BookService } from '../service/book/book.service';
import { UserService } from '../service/user/user.service';
import { Book } from '../shared/book';
import { User } from '../shared/user';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
  public book: Book = new Book();
  public allBookLst: Array<Book> = new Array<Book>();
  public myBookLst: Array<Book> = new Array<Book>();
  public myUser: any;
  public userLst: Array<User> = new Array<User>();

  constructor(
    private bookSvc: BookService,
    private userSvc: UserService
  ) {
  }

  ngOnInit(): void {
    this.getAllUsers();
    this.getMyBooks();
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

  registerBook() {
    if (this.verifyInputs()) {
      this.book.dono = localStorage.getItem("userName");
      this.book.disponibilidade = true;
      this.book.emprestado = 'Nobody';
      this.bookSvc.registerBook(this.book).subscribe(
        () => {
          this.getMyBooks();
        }
      );
      this.book = new Book();
    }
  }

  zerarArray() {
    this.myBookLst = [];
  }

  getMyBooks() {
    this.bookSvc.getBook().subscribe(
      result => {
        this.allBookLst = result
        let i = 0;
        this.zerarArray();
        this.allBookLst.forEach((p) => {
          if (p.dono === localStorage.getItem("userName")) {
            this.myBookLst.push(this.allBookLst[i]);
          }
          i++;
        })
      });
  }

  getAllUsers() {
    console.log(localStorage.getItem("userName"))
    this.userSvc.getAllUsers().subscribe(
      result => {
        this.userLst = result
        let i = 0;
        this.userLst.forEach((u) => {
          if (u.email === localStorage.getItem("userName")) {
            this.myUser = localStorage.setItem("myUser", this.userLst[i].username);
          }
          i++;
        })

      });
  }

  emprestar(disponibily: any, i: any) {
    if (disponibily.disponibilidade == true) {
      disponibily.disponibilidade = false;
      disponibily.emprestado = localStorage.getItem("userName");
      this.bookSvc.alterDisponibilidade(disponibily).subscribe(
        result => {
          this.getMyBooks();
        }
      )
    }

    else {
      if (disponibily.emprestado === localStorage.getItem("userName")) {
        disponibily.disponibilidade = true;
        disponibily.emprestado = 'Nobody';
        this.bookSvc.alterDisponibilidade(disponibily).subscribe(
          result => {
            this.getMyBooks();
          }
        )
      }
    }
  }
}
