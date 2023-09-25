import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GestionComponent } from './gestion/gestion.component';
import { ListeFilmComponent } from './liste-film/liste-film.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

const routes: Routes = [{
  path : "/Accueil", component : AppComponent 
},
  {
  path : "/Gestion", component : GestionComponent 
},
  {
  path : "/Liste Film", component : ListeFilmComponent 
},
{
  path : "/Contact", component : ContactFormComponent 
},
{
  path :'**', component : AppComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
