import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { ChildComponent } from './child/child.component';
import { InlinestylecomponentComponent } from './inlinestylecomponent/inlinestylecomponent.component';
import { InlinetemplatecomponentComponent } from './inlinetemplatecomponent/inlinetemplatecomponent.component';
import { IfforexampleComponent } from './ifforexample/ifforexample.component';
import { Dir1Directive } from './dir1.directive';
import { PipeexampleComponent } from './pipeexample/pipeexample.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    ChildComponent,
    InlinestylecomponentComponent,
    InlinetemplatecomponentComponent,
    IfforexampleComponent,
    Dir1Directive,
    PipeexampleComponent,
    TemplateformComponent
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
