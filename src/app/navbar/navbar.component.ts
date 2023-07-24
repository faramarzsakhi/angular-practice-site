import { Component} from '@angular/core';
import { CartServiceService } from '../services/cart-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  
})
export class NavbarComponent {
  constructor(private cartService:CartServiceService){}
  cartQuantityArray =this.cartService.getQuantity();
}