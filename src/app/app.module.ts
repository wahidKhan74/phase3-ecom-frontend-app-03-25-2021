import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProdutsComponent } from './produts/produts.component';
import { UsersComponent } from './users/users.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TwowayDatabindingComponent } from './twoway-databinding/twoway-databinding.component';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AddProductComponent } from './add-product/add-product.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProdutsComponent,
    UsersComponent,
    InvoiceComponent,
    NavbarComponent,
    TwowayDatabindingComponent,
    HomeComponent,
    AddProductComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
