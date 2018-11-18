import { Component, OnInit } from "@angular/core";
import {IProduct} from './model/product'
import { ProductService } from "./service/product.service";
@Component({
    selector: 'pm-products',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css']
})

export class ProductsListComponent implements OnInit{
     pageTitle: string= 'Acme product List';
     imageMargin: number=2;
     imageWidth: number=50;
     showImage: boolean=true;
     _listFilter: string='cart';
     filteredProducts: IProduct[];
     errorMessage: string;

     constructor(private productService: ProductService ){
     }
     products: IProduct[]=[];

     toggleImage():void{
       this.showImage=!this.showImage;
     }

     //life-cycle method
     ngOnInit():void{
              console.log('OnInit');
              this.products=this.getProducts();
              this.filteredProducts=this.products;
     }

     set listFilter(value:string){
       console.log('setter');
       this.filteredProducts=this.listFilter?this.performFilteration(value):this.products;
       this._listFilter=value;
     }

     get listFilter(){
       return this._listFilter;
     }

     performFilteration(filter: string){
       filter=filter.toLocaleLowerCase();
       return this.products.filter((product:IProduct)=> product.productName.toLocaleLowerCase().indexOf(filter)!=-1);
     }

     onRatingClicked(message: string): void{
       console.log(message);
     }

     getProducts(): IProduct[]{
        this.productService.getProducts().subscribe(
          data=> {this.products=data,
            this.filteredProducts=this.products;
          },
          error=> this.errorMessage=error
        )
        return this.products;
     }
}