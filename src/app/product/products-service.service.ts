import { Injectable } from '@angular/core';
import { ProductModel } from './productModel';
import { HttpClient } from '@angular/common/http';
import { TodoModel } from '../Models/todoModel';
import { DummyProductModel } from '../Models/dummyProductModel';
import { DummyProducts } from '../Models/dummyProducts';
@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  constructor(private _http:HttpClient) { }
  productsArray: Array<ProductModel> = [
    new ProductModel(1, "good", ["../../../assets/images/fproducts/1.jpg", "../../../assets/images/fproducts/2.jpg", "../../../assets/images/fproducts/3.jpg", "../../../assets/images/fproducts/4.jpg"], "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid modi, accusantium id dicta fuga deserunt harum sequi distinctio consequatur repudiandae voluptatum temporibus reiciendis nostrum soluta corporis expedita consectetur! Nisi, accusamus aliquam repellat beatae perspiciatis necessitatibus distinctio ab alias id eveniet unde qui animi modi mollitia officiis impedit rerum! Esse, reprehenderit?", 22, 0),
    new ProductModel(2, "good", ["../../../assets/images/fproducts/2.jpg", "../../../assets/images/fproducts/2.jpg", "../../../assets/images/fproducts/3.jpg", "../../../assets/images/fproducts/4.jpg"], "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid modi, accusantium id dicta fuga deserunt harum sequi distinctio consequatur repudiandae voluptatum temporibus reiciendis nostrum soluta corporis expedita consectetur! Nisi, accusamus aliquam repellat beatae perspiciatis necessitatibus distinctio ab alias id eveniet unde qui animi modi mollitia officiis impedit rerum! Esse, reprehenderit?", 0, 0),
    new ProductModel(3, "good", ["../../../assets/images/fproducts/3.jpg", "../../../assets/images/fproducts/2.jpg", "../../../assets/images/fproducts/3.jpg", "../../../assets/images/fproducts/4.jpg"], "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid modi, accusantium id dicta fuga deserunt harum sequi distinctio consequatur repudiandae voluptatum temporibus reiciendis nostrum soluta corporis expedita consectetur! Nisi, accusamus aliquam repellat beatae perspiciatis necessitatibus distinctio ab alias id eveniet unde qui animi modi mollitia officiis impedit rerum! Esse, reprehenderit?", 235, 0),
    new ProductModel(4, "good", ["../../../assets/images/fproducts/4.jpg", "../../../assets/images/fproducts/2.jpg", "../../../assets/images/fproducts/3.jpg", "../../../assets/images/fproducts/4.jpg"], "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid modi, accusantium id dicta fuga deserunt harum sequi distinctio consequatur repudiandae voluptatum temporibus reiciendis nostrum soluta corporis expedita consectetur! Nisi, accusamus aliquam repellat beatae perspiciatis necessitatibus distinctio ab alias id eveniet unde qui animi modi mollitia officiis impedit rerum! Esse, reprehenderit?", 12, 21),
    new ProductModel(5, "good", ["../../../assets/images/fproducts/1.jpg", "../../../assets/images/fproducts/2.jpg", "../../../assets/images/fproducts/3.jpg", "../../../assets/images/fproducts/4.jpg"], "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid modi, accusantium id dicta fuga deserunt harum sequi distinctio consequatur repudiandae voluptatum temporibus reiciendis nostrum soluta corporis expedita consectetur! Nisi, accusamus aliquam repellat beatae perspiciatis necessitatibus distinctio ab alias id eveniet unde qui animi modi mollitia officiis impedit rerum! Esse, reprehenderit?", 455, 0),
    new ProductModel(6, "good", ["../../../assets/images/fproducts/2.jpg", "../../../assets/images/fproducts/2.jpg", "../../../assets/images/fproducts/3.jpg", "../../../assets/images/fproducts/4.jpg"], "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid modi, accusantium id dicta fuga deserunt harum sequi distinctio consequatur repudiandae voluptatum temporibus reiciendis nostrum soluta corporis expedita consectetur! Nisi, accusamus aliquam repellat beatae perspiciatis necessitatibus distinctio ab alias id eveniet unde qui animi modi mollitia officiis impedit rerum! Esse, reprehenderit?", 0, 21),
    new ProductModel(7, "good", ["../../../assets/images/fproducts/3.jpg", "../../../assets/images/fproducts/2.jpg", "../../../assets/images/fproducts/3.jpg", "../../../assets/images/fproducts/4.jpg"], "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid modi, accusantium id dicta fuga deserunt harum sequi distinctio consequatur repudiandae voluptatum temporibus reiciendis nostrum soluta corporis expedita consectetur! Nisi, accusamus aliquam repellat beatae perspiciatis necessitatibus distinctio ab alias id eveniet unde qui animi modi mollitia officiis impedit rerum! Esse, reprehenderit?", 55, 0),
    new ProductModel(9, "bad", ["../../../assets/images/fproducts/1.jpg", "../../../assets/images/fproducts/2.jpg", "../../../assets/images/fproducts/3.jpg", "../../../assets/images/fproducts/4.jpg"], "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid modi, accusantium id dicta fuga deserunt harum sequi distinctio consequatur repudiandae voluptatum temporibus reiciendis nostrum soluta corporis expedita consectetur! Nisi, accusamus aliquam repellat beatae perspiciatis necessitatibus distinctio ab alias id eveniet unde qui animi modi mollitia officiis impedit rerum! Esse, reprehenderit?", 0, 21),
  ];
  filterKey: string = '';
  getAllProdcuts() {
    return this.productsArray;
  }
  getProduct(inputId: number) {
    return this.productsArray.find(x => x.id == inputId);
  }
  getFiltered(key:string) {
    switch (key) {
      case'':
      return this.productsArray.sort((a, b) => {
        return a.id - b.id;
      });
      case "free":
        return this.productsArray.filter(x => x.price == 0);
      case "mostExpensive":
        return this.productsArray.sort((a, b) => {
          return b.price - a.price;
        });
      case "newest":
        return this.productsArray.sort((a, b) => {
          return b.id - a.id;
        });
      case "popular":
        return [this.productsArray[0], this.productsArray[3], this.productsArray[4]];
      default:
        return this.productsArray;
    }
  }

  
  // test data>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


  getTestData(){
    return this._http.get<DummyProducts>('https://dummyjson.com/products/');
  }
  getProductById(id:number){
    return this._http.get<DummyProductModel>('https://dummyjson.com/products/'+id);
  }
  getTestTodos(){
    return this._http.get<TodoModel[]>('https://jsonplaceholder.typicode.com/todos');
  }
  getTestComments(){
    return this._http.get('https://jsonplaceholder.typicode.com/comments/1');
  }
  getTestAlbums(){
    return this._http.get('https://jsonplaceholder.typicode.com/albums/1');
  }
  
  // getFeaturedProducts(){

  // }

}
