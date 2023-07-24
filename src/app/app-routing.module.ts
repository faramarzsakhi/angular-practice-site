import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog/blog.component';
import { ProductComponent } from './product/product/product.component';
import { DynamicPageComponent } from './dynamic-page/dynamic-page/dynamic-page.component';
import { LandingPageComponent } from './landing-page/landing-page/landing-page.component';
import { ContactComponent } from './contact/contact/contact.component';
import { AboutComponent } from './about/about/about.component';
import { BuyProductComponent } from './buy-product/buy-product/buy-product.component';
import { CartComponent } from './cart/cart.component';
import { Error404Component } from './errors/error404/error404.component';
import { SignUpComponent } from './sign/sign-up/sign-up.component';

const routes: Routes = [
  {path:'home',component:LandingPageComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'blog',component:BlogComponent},
  {path:'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule),component:ProductComponent},
   {path:'dynamicpage',component:DynamicPageComponent},
   {path:'contact',component:ContactComponent},
   {path:'about',component:AboutComponent},
   {path:'buyProduct/:id',component:BuyProductComponent},
   {path:'cart',component:CartComponent},
   {path:"signup",component:SignUpComponent},
   {path:'**',component:Error404Component}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

 }