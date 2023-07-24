import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicPageComponent } from './dynamic-page/dynamic-page.component';
import { RouterModule } from '@angular/router';
import { FiltersDynamicComponent } from './filters-dynamic/filters-dynamic.component';
import { ProductModule } from '../product/product.module';
import { DynamicProductsComponent } from './filters-dynamic/dynamic-products/dynamic-products.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    DynamicPageComponent,
    FiltersDynamicComponent,
    DynamicProductsComponent,
   
  ],
  imports: [
    CommonModule,
    RouterModule,
    ProductModule,
    FormsModule
  ]
})
export class DynamicPageModule { }
