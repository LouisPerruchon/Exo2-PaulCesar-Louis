import { Component, OnInit } from '@angular/core';
import { FormContactService } from '../../services/form-contact.service';
import { IFormContactData } from '../../model/form-contact-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})

export class GestionComponent implements OnInit {

  formHistorical: IFormContactData =   { 
  prenom : "", 
  nom :"",
  age : 0,
  email : "",
  commentaire :""
};

  formFromService : Observable<IFormContactData | null> = this.formService.getForm();

  isFormEmpty : boolean = true;

  constructor(private formService : FormContactService) { 
    
  }

ngOnInit(): void {
    this.formFromService.subscribe(x => {
      if (x==null){
        
      }
      else{
      this.isFormEmpty = false;
      this.formHistorical = x;
      }
    });
  }
}
