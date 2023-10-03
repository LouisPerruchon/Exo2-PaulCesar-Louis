import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionComponent } from './gestion/gestion.component';
import { ListeFilmComponent } from './liste-film/liste-film.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { AccueilComponent } from './components/accueil/accueil.component';

const routes: Routes = [ 
  {
  path : 'gestion', component : GestionComponent 
},
  {
  path : 'listefilm', component : ListeFilmComponent 
},
{
  path : 'contact', component : ContactFormComponent 
},
{
  path : 'accueil', component : AccueilComponent 
},
{
  path :'**', redirectTo: 'accueil', pathMatch: 'full'
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
