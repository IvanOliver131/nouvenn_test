import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../service/book/book.service';
import { UserService } from '../service/user/user.service';
import { Book } from '../shared/book';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  public book: Book = new Book();
  public allBookLst: Array<Book> = new Array<Book>();
  public myBookLst: Array<Book> = new Array<Book>();
  public routeFlag: any;
  public routeFlagTwo: any;
  public name: any;

  constructor(
    private bookSvc: BookService,
    public actRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.routeFlag = this.actRoute.snapshot.paramMap.get("otherName");
    this.routeFlagTwo = this.actRoute.snapshot.paramMap.get("userName");
    console.log(localStorage.getItem("userId"))
    if (this.routeFlag) {
      //const [, match] = this.name.match(/(\S+) /) || [];
      this.name = this.routeFlag;
      this.getAllBooks(this.routeFlag);
    }
    else {
      this.getAllBooks(this.routeFlagTwo);
      this.name = this.routeFlagTwo;
    }
  }

  getAllBooks(aux: any) {
    this.bookSvc.getBook().subscribe(
      result => {
        this.allBookLst = result
        let i = 0;
        this.zerarArray();
        this.allBookLst.forEach((p) => {
          if (p.dono === aux) {
            this.myBookLst.push(this.allBookLst[i]);
          }
          i++;
        })
      });
  }

  zerarArray() {
    this.myBookLst = [];
  }

  emprestar(disponibily: any, i: any) {
    if (disponibily.disponibilidade == true) {
      disponibily.disponibilidade = false;
      disponibily.emprestado = localStorage.getItem("userName");
      this.bookSvc.alterDisponibilidade(disponibily).subscribe(
        result => {
          this.getAllBooks(this.routeFlag);
        }
      )
    }

    else {
      if (disponibily.emprestado == localStorage.getItem("userName")) {
        disponibily.disponibilidade = true;
        disponibily.emprestado = 'Nobody';
        this.bookSvc.alterDisponibilidade(disponibily).subscribe(
          result => {
            this.getAllBooks(this.routeFlag);
          }
        )
      }
    }
  }

}
