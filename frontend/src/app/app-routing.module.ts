import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BorrowBooksComponent } from './borrow-books/borrow-books.component';
import { LoginComponent } from './login/login.component';
import { PainelComponent } from './painel/painel.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register-user', component: RegisterUserComponent },
  { path: 'home', component: PainelComponent, canActivate: [AuthGuard] },
  { path: 'borrow-books', component: BorrowBooksComponent, canActivate: [AuthGuard] },
  { path: 'perfil/:userName', component: PerfilComponent, canActivate: [AuthGuard] },
  { path: 'perfil/:userName/:otherName', component: PerfilComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
