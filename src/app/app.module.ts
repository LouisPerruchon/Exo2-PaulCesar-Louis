import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FooterComponent } from './components/footer/footer.component';
import { GestionComponent } from './components/gestion/gestion.component';
import { ListeFilmComponent } from './components/liste-film/liste-film.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Page404Component } from './components/page404/page404.component';

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
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
