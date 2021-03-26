import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

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
import { ApiService } from './api.service';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UsersComponent,
    InvoiceComponent,
    NavbarComponent,
    TwowayDatabindingComponent,
    HomeComponent,
    AddProductComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
