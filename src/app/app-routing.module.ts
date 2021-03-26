import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProdutsComponent } from './produts/produts.component';
import { UsersComponent } from './users/users.component';
import { AddProductComponent } from './add-product/add-product.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  { path:'', component:HomeComponent },
  { path:'home', component: HomeComponent},
  { path:'login', component: LoginComponent},
  { path:'register', component: RegisterComponent},
  { path:'products', component: ProdutsComponent},
  { path:'users', component: UsersComponent},
  { path:'add-product', component: AddProductComponent},
  { path:'sign-in',redirectTo:'login'},
  { path:'sign-up',redirectTo:'register'},
  { path:'**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
