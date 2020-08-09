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
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
