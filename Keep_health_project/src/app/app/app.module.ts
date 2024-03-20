import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent // Adicione o LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule // Adicione o AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, LoginComponent] // Adicione o LoginComponent
})
export class AppModule { }
