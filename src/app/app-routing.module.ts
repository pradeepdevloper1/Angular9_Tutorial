import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductIdComponent } from './product-id/product-id.component';
import { OrderViewComponent } from './order-view/order-view.component';
import { OrderView2Component } from './order-view2/order-view2.component';
import { SearchComponent } from './search/search.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [
  //routes to router outlet 
  { path:'products',component:ProductsComponent },
  { path:'product-view',component:ProductViewComponent },
  { path:'product-edit',component:ProductEditComponent },
  { path:'product-id/:id',component:ProductIdComponent },// this id value should be dynamic

  // parameterized Route
    //http://localhost:5656/order2/10
  { path:'order2/:id',component:OrderView2Component },
    //http://localhost:5656/order2/10/90
  { path:'order/:id1/:id2',component:OrderViewComponent },

  //queryparams
 //http://localhost:5656/search?country=usa&tag=fashion&trending=2020
 { path:'search',component:SearchComponent },

 //redirect route
 //http://localhost:5656/ alwasy http://localhost:5656/products
  { path:'',redirectTo:'products' , pathMatch:'full'},

  //child Routes 
  {path :'products',
   component:ProductsComponent,
         children:[
           {path:'view' ,component:ProductViewComponent},
           {path:'edit' ,component:ProductEditComponent},
           {path:'view/:id' ,component:ProductIdComponent},
                    ]},
  //wild card Route
   { path:'**',component:PagenotfoundComponent},   
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
