import { NgModule } from '@angular/core';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsListComponent } from './proudcts-list.component';
import { StarComponent } from '../shared/star.component';
import { ConvertToSpaces } from '../shared/covert-to-spaces.pipe';

import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    HttpClientModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    ProductDetailComponent,
    ProductsListComponent,
    ConvertToSpaces,
  ]
})
export class ProductsModule { }
