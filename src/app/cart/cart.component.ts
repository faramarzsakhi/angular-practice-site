import { Component } from '@angular/core';
import { CartServiceService } from '../services/cart-service.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
constructor(private cartService:CartServiceService){}
cartItems=this.cartService.getItems();
quantity=this.cartService.getQuantity();


//TEST>>>>>>>>>
testQuantity:number=1;
addQuantity(i:number){
  this.quantity[i]++;
}
removeQuantity(i:number){
  if(this.quantity[i]>1){this.quantity[i]--;}
}
removeItem(ind:number){
  this.cartService.removeItem(ind);
}
  
}
