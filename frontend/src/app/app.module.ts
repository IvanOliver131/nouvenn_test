import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './service/user/user.service';
import { AuthGuard } from './shared/auth.guard';
import { RouterModule } from '@angular/router';
import { PainelComponent } from './painel/painel.component';
import { IonicModule } from '@ionic/angular';
import { BorrowBooksComponent } from './borrow-books/borrow-books.component';
import { PerfilComponent } from './perfil/perfil.component';
//import { AuthService } from './service/authentication/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    RegisterUserComponent,
    PainelComponent,
    BorrowBooksComponent,
    PerfilComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    IonicModule.forRoot()
  ],
  providers: [
    UserService,
    AuthGuard
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
