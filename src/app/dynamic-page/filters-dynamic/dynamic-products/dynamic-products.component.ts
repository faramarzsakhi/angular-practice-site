import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ProductsServiceService } from 'src/app/product/products-service.service';

@Component({
  selector: 'app-dynamic-products',
  templateUrl: './dynamic-products.component.html',
  styleUrls: ['./dynamic-products.component.scss']
})
export class DynamicProductsComponent {
  constructor(private productsService:ProductsServiceService) {
   
  }
  
  @Input() activeFilter:string='';
  @Input() borderColor:string='black';
  @Input() borderWdith:number=20;
  @Input() borderType:string="solid";
  @ViewChild('product')proborder:ElementRef={} as ElementRef;
  borderStyleString:string="12px solid black";
  productsArrayAll=this.productsService.getAllProdcuts();
  getFiltered(key:string) {
    switch (key) {
      case'':
      return this.productsArrayAll.sort((a:any, b:any) => {
        return a.id - b.id;
      });
      case "free":
        return this.productsArrayAll.filter((x:any) => x.price == 0);
      case "mostExpensive":
        return this.productsArrayAll.sort((a:any, b:any) => {
          return b.price - a.price;
        });
      case "newest":
        return this.productsArrayAll.sort((a:any, b:any) => {
          return b.id - a.id;
        });
      case "popular":
        return [this.productsArrayAll[0], this.productsArrayAll[3], this.productsArrayAll[4]];
      default:
        return this.productsArrayAll;
    }
  }
  filter(){
    this.productsArray=this.getFiltered(this.activeFilter);
    this.borderStyleString=this.borderWdith+'px'+" "+this.borderType+" "+this.borderColor;
    this.proborder.nativeElement.style.border=this.borderStyleString;
  }
  productsArray=this.getFiltered(this.activeFilter);

}
