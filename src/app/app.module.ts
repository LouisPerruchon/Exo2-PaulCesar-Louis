import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ListeFilmComponent } from './liste-film/liste-film.component';
import { FilmDetailComponent } from './liste-film/film-detail/film-detail.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { GestionComponent } from './gestion/gestion.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ListeFilmComponent,
    FilmDetailComponent,
    ContactFormComponent,
    GestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
