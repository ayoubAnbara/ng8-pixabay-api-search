import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
import { AboutService } from 'src/services/service.about';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { HttpClientModule } from '@angular/common/http';
import { GalleryService } from 'src/services/gallery.service';

const appRoutes:Routes=[
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'',
   redirectTo:'/gallery',
  pathMatch:'full'
  }
];
@NgModule({ // NgModule prend comme parametre un objet js
  declarations: [
    AppComponent,
    ContactComponent,
    AboutComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [AboutService,GalleryService],
  bootstrap: [AppComponent]
})

export class AppModule { }
