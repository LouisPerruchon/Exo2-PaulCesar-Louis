import { Component, OnInit, Output } from '@angular/core';
import { Film } from '../model/film';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-liste-film',
  templateUrl: './liste-film.component.html',
  styleUrls: ['./liste-film.component.scss']
})
export class ListeFilmComponent implements OnInit {

  @Output() filmSelected : Film = new Film();
  listFilm : Film[] = [];
  isFilmSelected : boolean = false;

  constructor(private filmService : FilmService) { 
  }

  ngOnInit(): void {
    this.filmService.getListFilm().subscribe(data =>
      this.listFilm = data).unsubscribe();
  }

  onSelection(id : number) : void{
    this.filmService.getFilmById(id)
      .subscribe(
        h => this.filmSelected=h
        )
        .unsubscribe();
    this.refreshFilmDisplay();
  }

  refreshFilmDisplay() : void{
    if(Object.keys(this.filmSelected).length === 0){
      this.isFilmSelected=false;
    }
    else{
      this.isFilmSelected=true;
    }

  }
  

}
