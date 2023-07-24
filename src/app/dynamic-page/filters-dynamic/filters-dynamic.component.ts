import { Component } from '@angular/core';
import { ProductsServiceService } from 'src/app/product/products-service.service';

@Component({
  selector: 'app-filters-dynamic',
  templateUrl: './filters-dynamic.component.html',
  styleUrls: ['./filters-dynamic.component.scss']
})
export class FiltersDynamicComponent {
activeFilter:string='';
width:number=3;
color:string='black';
type:string="solid";

colors:Array<string>=['black',"red",'green','white','yellow','brown'];
types:Array<string>=['solid','dashed','dotted','double','ridge','inset','outset','none'];
}
