import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { ProductModel } from 'src/app/product/productModel';
import { ActivatedRoute } from '@angular/router';
import { ProductsServiceService } from 'src/app/product/products-service.service';
import { DummyProductModel } from 'src/app/Models/dummyProductModel';
@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.scss']
})
export class BuyProductComponent {

  constructor(
    private cartService: CartServiceService,
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsServiceService

  ) { }
  //declerations>>>>>>>>>>>>>>>>>>>>>>>>
  productId: any;
  product: DummyProductModel = new DummyProductModel;
  buyQuantity: number = 0
  @ViewChild('cartAlert') cartAlert: ElementRef = {} as ElementRef;
  @Output() cartNumber= new EventEmitter<number>();
  addToCartNumber( num:number){
    this.cartNumber.emit(num);
  }
  cartQuantityNumber:number=0;
  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    this.productsService.getProductById(this.productId).subscribe(data => {
      this.product = data;
    })
  }

//functions>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  addQuantity() {
    this.buyQuantity++;
  }
  minusQuantity() {
    if (this.buyQuantity > 0) { this.buyQuantity--; }

  }

  addToCart(product: ProductModel) {
    this.cartService.addToCart(product, this.buyQuantity);
    this.cartAlert.nativeElement.classList.remove("visually-hidden");
    setTimeout(()=>{
      this.cartAlert.nativeElement.classList.add("visually-hidden");
    },5000);
    
  }

parseInt(num:any){
  return parseInt(num);
}

}
