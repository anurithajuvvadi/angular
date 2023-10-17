import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Test1Service } from './test1.service';
import { RegComponent } from './reg/reg.component';
import { TemplateComponent } from './template/template.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { OpeningpageComponent } from './openingpage/openingpage.component';

@NgModule({
  declarations: [
   AppComponent,
    HomeComponent,
    ServicesComponent,
    GalleryComponent,
    ContactComponent,
    RegComponent,
    TemplateComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    OpeningpageComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [Test1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
