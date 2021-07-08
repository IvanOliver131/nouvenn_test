import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../service/book/book.service';
import { UserService } from '../service/user/user.service';
import { Book } from '../shared/book';
import { User } from '../shared/user';

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
  public nameUser: any;
  public userLst: Array<User> = new Array<User>();

  constructor(
    private bookSvc: BookService,
    private userSvc: UserService,
    public actRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.routeFlag = this.actRoute.snapshot.paramMap.get("otherName");
    this.routeFlagTwo = this.actRoute.snapshot.paramMap.get("userName");
    if (this.routeFlag) {
      this.getAllUsers(this.routeFlag);
      this.getAllBooks(this.routeFlag);
    }
    else {
      this.getAllBooks(this.routeFlagTwo);
      this.name = this.routeFlagTwo;
      this.nameUser = localStorage.getItem("myUser")
      console.log(this.nameUser)
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

  getAllUsers(aux: any) {
    this.userSvc.getAllUsers().subscribe(
      result => {
        this.userLst = result
        let i = 0;
        this.userLst.forEach((u) => {
          if (u.email === aux) {
            localStorage.setItem("myUserHere", this.userLst[i].username);
          }
          i++;
        })
        this.nameUser = localStorage.getItem("myUserHere")
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

        }
      )
    }

    else {
      if (disponibily.emprestado == localStorage.getItem("userName")) {
        disponibily.disponibilidade = true;
        disponibily.emprestado = 'Nobody';
        this.bookSvc.alterDisponibilidade(disponibily).subscribe(
          result => {

          }
        )
      }
    }
  }

}
