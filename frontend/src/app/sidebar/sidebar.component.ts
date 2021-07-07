import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  el: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  home() {
    this.router.navigate(['home']);
  }

  borrowBooks() {
    this.router.navigate(['borrow-books']);
  }

  perfil() {
    this.router.navigate(['perfil/' + localStorage.getItem("userName")]);
  }

  exit() {
    localStorage.clear();
    this.router.navigate(['login']);
  }

}
