import { Injectable } from '@angular/core';
import { ProductModel } from '../product/productModel';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
items:Array<ProductModel>=[];
itemQuantity:Array<number>=[];
addToCart(product: ProductModel,quantity:number) {
  if(quantity!=0){
    this.items.push(product);
    this.itemQuantity.push(quantity);
    quantity=0;
  }
  
} 
getItems(){
  return this.items;
}
removeItem(ind:number){
  this.items.splice(ind,1);
}
getQuantity(){
  return this.itemQuantity;
}
clearCart(){
  this.items=[];
  return this.items;
}
  constructor() { }
}
