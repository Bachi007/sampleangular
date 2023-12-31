import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddproductComponent } from './addproduct/addproduct.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'nav',component:NavbarComponent,
    children:[
      {path:'home',component:HomeComponent},
      {path:'products',component:ProductsComponent}
    ]
  },
       {path:'admin', component:DashboardComponent,
    children:[
      {path:'home',component:HomeComponent},
      {path:'add',component:AddproductComponent},
      {path:'products',component:ProductsComponent}
    ]  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


