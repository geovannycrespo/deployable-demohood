import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailLoginComponent } from './email-login/email-login.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { GoogleSigninDirective } from './google-signin.directive';

//import for shared Module in order to use angular material
import { SharedModule } from '../shared/shared.module';

//import for ReactiveForms
import { ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [EmailLoginComponent, LoginPageComponent, GoogleSigninDirective],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    UserRoutingModule
  ],
  exports: [
    LoginPageComponent
  ]
})
export class UserModule { }
