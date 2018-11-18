import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ProductService } from '../service/product.service';
import { IProduct } from '../model/product';
import { HttpClientModule, HttpClient } from '@angular/common/http';
@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  id: number;
  product: IProduct;
  constructor(private activatedRouter: ActivatedRoute,
  private router: Router, private productService:ProductService) { }
  
  ngOnInit() {
    this.id=+this.activatedRouter.snapshot.paramMap.get('id');
    this.getProductByProductId(this.id);
  }

  getProductByProductId(id: number){
    this.productService.getProducts().subscribe(
      data=>{
        data.forEach(
          product=>{
            if(product.productId==this.id){
              this.product=product
            }
          }
        )
      }
    );
  }

  onBack(): void{
    this.router.navigate(['/products']);
  }

}
