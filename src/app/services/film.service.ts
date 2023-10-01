import { Injectable } from '@angular/core';
import { Film } from '../model/film';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  
  desanchantée : Film = new Film(1, "Désenchantée", "assets/desenchantee.jpg");
  shrek : Film = new Film(2, "Schrek", "assets/shrek.jpg");
  drive : Film = new Film(3, "Drive", "assets/drive.jpg");
  interstellar : Film = new Film(4, "Interstellar", "assets/interstellar.jpg");
  inception : Film = new Film(5, "Inception", "assets/inception.jpg");
  listeFilm : Film[] = [this.desanchantée, this.shrek, this.drive, this.interstellar, this.inception];
  constructor() { 

    
  }

  setListFilm(data : Film[]) : void {
    this.listeFilm=data
  }

  getListFilm(): Observable<Film[]> {
    const listeFilm = of(this.listeFilm);
    return listeFilm;
  }

  getFilmById(idFilmParam :number) :Observable<Film>  {
    const film = this.listeFilm.find(h => h.idFilm === idFilmParam);
    if (film) {
      return of(film);
    } 
    else{
      return throwError(() => new Error('Film not found'));    }
}
}
