import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InlinestylecomponentComponent } from './inlinestylecomponent/inlinestylecomponent.component';
import { InlinetemplatecomponentComponent } from './inlinetemplatecomponent/inlinetemplatecomponent.component';
import { InlinewithbothComponent } from './inlinewithboth/inlinewithboth.component';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { ProductComponent } from './product/product.component';
import { Dir1Directive } from './dir1.directive';
import { CustomPipePipe } from './custom-pipe.pipe';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { TestService } from './test.service';
import {HttpClientModule} from '@angular/common/http';
import { HttpexampleComponent } from './httpexample/httpexample.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InlinestylecomponentComponent,
    InlinetemplatecomponentComponent,
    InlinewithbothComponent,
    C1Component,
    C2Component,
    ProductComponent,
    Dir1Directive,
    CustomPipePipe,
    RegistrationComponent,
    HttpexampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
