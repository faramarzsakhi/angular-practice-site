import { Component, ElementRef, ViewChild } from '@angular/core';
import { ProductsServiceService } from '../products-service.service';
import { ProductModel } from '../productModel';

import { HttpClient} from '@angular/common/http';
import { TodoModel } from 'src/app/Models/todoModel';
import { DummyProductModel } from 'src/app/Models/dummyProductModel';
import { DummyProducts } from 'src/app/Models/dummyProducts';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent {
  constructor(private productsService:ProductsServiceService,private _http:HttpClient) {
    this.dummyProducts$ = this.productsService.getTestData();
  }
  @ViewChild("ratings") ratingsElement:ElementRef={} as ElementRef;
  
  testProductsArray:Array<ProductModel>;
  filterKey:string='';
  //new class test>>>>>>>>>>>>>>>>>>>>>
  dummyProducts$:Observable<DummyProducts>
  loader = true;
test(){
  console.log("workds");
}
  ngOnInit(){
    // this.productsService.getTestData().subscribe(data=>{
    //   this.dummyProducts$=data

    // })
   console.warn("product Component Loaded");
   setTimeout(()=>{
    this.loader=false;
   },3000);
   
  }

  //new class test>>>>>>>>>>>>>>>>>>>>>>
  

// filterKeyChanged(value:string){
//  this.filterKey=value;
//  this.productsArray=this.productsService.getFiltered(this.filterKey);
    
// }

  
}

