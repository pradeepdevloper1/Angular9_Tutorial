import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { ClickeventComponent } from './clickevent/clickevent.component';
import { NGComponent } from './ng/ng.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';
import { PipeComponent } from './pipe/pipe.component';
import { HighlightPipe } from './pipe/highlight.pipe';
import { RoutingComponent } from './routing/routing.component';
import {LocationStrategy,HashLocationStrategy} from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductIdComponent } from './product-id/product-id.component';
import { OrderViewComponent } from './order-view/order-view.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    ClickeventComponent,
    NGComponent,
    DatabindingComponent,
    TemplatedrivenformComponent,
    PipeComponent,
    HighlightPipe,
    RoutingComponent,
    ProductsComponent,
    ProductViewComponent,
    ProductEditComponent,
    ProductIdComponent,
    OrderViewComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    // {provide:LocationStrategy,useClass:HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
