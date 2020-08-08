import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { ClickeventComponent } from './clickevent/clickevent.component';
import { NGComponent } from './ng/ng.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    ClickeventComponent,
    NGComponent,
    DatabindingComponent,
    TemplatedrivenformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
