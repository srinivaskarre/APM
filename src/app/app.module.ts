import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


import {WelcomeComponent} from './home/welcome.component'
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module'

import {ProductDetailGuard} from './products/product-detail/product-detail.guard';
import { ProductsModule } from './products/products.module';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    ProductsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
