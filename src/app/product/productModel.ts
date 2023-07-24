export class ProductModel{
    constructor(id:number,title:string,images:Array<string>,description:string,price:number,discountPercentage:number){
      this.id=id;
      this.title=title;
      this.images=images;
      this.description=description;
      this.price=price;
      this.discountPercentage=discountPercentage;
  
    }
    id:number=0;
    title:string='';
    images:Array<string>=[];
    description:string='';
    price:number=0;
    discountPercentage:number=0;
    rating:number=0;
    stock:number=0;
    brand:string='';
    category:string="";
    thumbnail:string=   "";
  
  
  }