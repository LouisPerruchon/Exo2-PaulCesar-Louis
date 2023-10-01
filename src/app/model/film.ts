export class Film {
    idFilm !: number;
    nameFilm !: string;
    linkImageFilm !: string;

    constructor(idFilmConstructor:number =0,nameFilmConstructor:string ='',linkImageFilmConstructor:string ='') {
        this.idFilm=idFilmConstructor;
        this.nameFilm=nameFilmConstructor;
        this.linkImageFilm=linkImageFilmConstructor;
    }


}
