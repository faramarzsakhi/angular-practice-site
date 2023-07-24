import { Component, EventEmitter } from '@angular/core';
import { ProductsServiceService } from './product/products-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Shopping Site';
  constructor(private _productService:ProductsServiceService){}
  ngOnInit(){
    console.log(this._productService.getTestData());
    // this._productService.getTestAlbums().subscribe(data => {
    //   console.log(data);
    // })
    // this._productService.getTestPosts().subscribe(data => {
    //   console.log(data);
    // })
    // this._productService.getTestComments().subscribe(data => {
    //   console.log(data);
    // })

  }
  cartNum=0;
  getCartNum(num:number){
    this.cartNum=num;
  }
}

