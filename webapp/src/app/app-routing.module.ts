import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { RegComponent } from './reg/reg.component';
import { OpeningpageComponent } from './openingpage/openingpage.component';

const routes: Routes = [
  {
    path:'Home',
    component:HomeComponent
  },
  {
    path:'Services',
    component:ServicesComponent
  },
  {
     path:'Gallery',
     component:GalleryComponent
  },
  {
    path:'Contact',
    component:ContactComponent
  },
  {
    path:'reg',
    component:RegComponent
  },
  {
    path:'open',
    component:OpeningpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
