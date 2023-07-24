import { Component, ElementRef, ViewChild } from '@angular/core';
import { ProductsServiceService } from '../products-service.service';
import { ProductModel } from '../productModel';

import { HttpClient} from '@angular/common/http';
import { TodoModel } from 'src/app/Models/todoModel';
import { DummyProductModel } from 'src/app/Models/dummyProductModel';
import { DummyProducts } from 'src/app/Models/dummyProducts';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent {
  constructor(private productsService:ProductsServiceService,private _http:HttpClient) {
    console.log(this._http.get('https://dummyjson.com/products/').pipe((x)=>{
      return x;
    }))
  }
  @ViewChild("ratings") ratingsElement:ElementRef={} as ElementRef;
  
  testProductsArray:Array<ProductModel>;
  filterKey:string='';
  //new class test>>>>>>>>>>>>>>>>>>>>>>
  todoModel:TodoModel[]=[];
  dummyProducts:DummyProducts= new DummyProducts();
  loader = true;
test(){
  console.log("workds");
}
  ngOnInit(){
    this.productsService.getTestData().subscribe(data=>{
      this.dummyProducts=data
     console.log(this.dummyProducts);
    })
   console.warn("product Component Loaded");
   setTimeout(()=>{
    this.loader=false;
   },2000);
   
  }

  //new class test>>>>>>>>>>>>>>>>>>>>>>
  

// filterKeyChanged(value:string){
//  this.filterKey=value;
//  this.productsArray=this.productsService.getFiltered(this.filterKey);
    
// }

  
}

