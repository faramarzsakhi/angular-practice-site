import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LandingPageModule } from './landing-page/landing-page.module';
import { BuyProductModule } from './buy-product/buy-product.module';
import { ProductModule } from './product/product.module';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { DynamicPageModule } from './dynamic-page/dynamic-page.module';
import { SignModule } from './sign/sign.module';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatBadgeModule} from '@angular/material/badge';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CartComponent,
    NavbarComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    LandingPageModule,
    BuyProductModule,
    ProductModule,
    FormsModule,
    DynamicPageModule,
    SignModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatBadgeModule
    
    

  ],
  // exports:[
  //   MatBadgeModule
  // ],
  providers: [  {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule { }
