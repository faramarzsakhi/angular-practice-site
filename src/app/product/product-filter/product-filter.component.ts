import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent {
constructor(){}

@Output()
filterKeyChanged:EventEmitter<string>=new EventEmitter<string>;
filterKey:string='';
onFilterKeyChanged(){
  // console.log(this.filterKey); 
 this.filterKeyChanged.emit(this.filterKey);
}
}
