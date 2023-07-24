import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyProductComponent } from './buy-product/buy-product.component';
import { Router, RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms'


@NgModule({
  declarations: [
    BuyProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class BuyProductModule { }
