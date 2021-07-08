import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/authentication/auth.service';
import { Authentication } from '../shared/authentication';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authentication: Authentication = new Authentication();

  constructor(
    private authSvc: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  verifyInputs() {
    let msg = ``
    let success = true;
    if (!this.authentication.email) {
      msg += `O campo E-mail é requerido.`;
      success = false;
    }
    if (!this.authentication.password) {
      msg += ` O campo Senha é requerido`;
      success = false;
    }
    if (!success) {
      console.log(msg, `Ok`, {
        duration: 3000,
      });
    }
    return success;
  }

  authenticate() {
    if (this.verifyInputs()) {
      this.authSvc.login(this.authentication).subscribe(
        () => {
          this.router.navigateByUrl('home');
        }
      );

      this.authentication = new Authentication();

    }
  }

}
