import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ListeFilmComponent } from './liste-film/liste-film.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { GestionComponent } from './gestion/gestion.component';
import { MatMenuModule } from '@angular/material/menu';
import { AccueilComponent } from './accueil/accueil.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Page404Component } from './page404/page404.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ListeFilmComponent,
    ContactFormComponent,
    GestionComponent,
    AccueilComponent,
    Page404Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
