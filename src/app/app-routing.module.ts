import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductIdComponent } from './product-id/product-id.component';
import { OrderViewComponent } from './order-view/order-view.component';
import { SearchComponent } from './search/search.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [
  { path:'',redirectTo:'product-view' , pathMatch:'full'},
  { path:'**',component:PagenotfoundComponent},   
  { path:'products',component:ProductsComponent },
  { path:'product-view',component:ProductViewComponent },
  { path:'product-edit',component:ProductEditComponent },
  { path:'product-id/:id',component:ProductIdComponent },
  { path:'order/:id1/:id2',component:OrderViewComponent },
  { path:'search',component:SearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
