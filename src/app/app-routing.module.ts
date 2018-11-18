import {Routes, RouterModule} from '@angular/router'
import {NgModule} from '@angular/core'

import {WelcomeComponent} from './home/welcome.component';
import {ProductsListComponent} from './products/proudcts-list.component';
import {ProductDetailComponent} from './products/product-detail/product-detail.component';
import { ProductDetailGuard } from './products/product-detail/product-detail.guard';

const routes: Routes =[
    {
        path: '',
        component: WelcomeComponent
    },
    {
        path: 'welcome',
        component: WelcomeComponent
    },
    {
        path: 'products',
        component: ProductsListComponent
    },
    {
        path: 'productDeatils/:id',
        component: ProductDetailComponent,
        canActivate: [ProductDetailGuard]
    },
    {
        path: '**',
        component: WelcomeComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{
    
}