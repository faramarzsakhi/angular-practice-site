import { Component } from '@angular/core';
import { ProductsServiceService } from 'src/app/product/products-service.service';

@Component({
  selector: 'app-dynamic-page',
  templateUrl: './dynamic-page.component.html',
  styleUrls: ['./dynamic-page.component.scss']
})
export class DynamicPageComponent {
  constructor(private productsService:ProductsServiceService) {
   
  }
  productsArray=this.productsService.getAllProdcuts();
}
