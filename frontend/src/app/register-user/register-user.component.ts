import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user/user.service';
import { User } from '../shared/user';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  user: User = new User();

  constructor(
    private userSvc: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  verifyInputs() {
    let msg = ``
    let success = true;
    if (!this.user.username) {
      msg += ` O campo Username é requerido`;
      success = false;
    }
    if (!this.user.email) {
      msg += `O campo E-mail é requerido.`;
      success = false;
    }
    if (!this.user.password) {
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

  registerUser() {
    if (this.verifyInputs()) {
      this.userSvc.register(this.user).subscribe(
        () => {
          this.router.navigateByUrl('login');
        }
      );

      this.user = new User();

    }

  }

}
