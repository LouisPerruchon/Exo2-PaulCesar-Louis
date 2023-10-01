import { Component, OnInit } from '@angular/core';
import { FormContactService } from '../services/form-contact.service';
import { FormContactData } from '../model/form-contact-data';
import { Observable, isEmpty } from 'rxjs';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})

export class GestionComponent implements OnInit {

  formHistorical: FormContactData = new FormContactData;

  formFromService : Observable<FormContactData> = this.formService.getForm();

  isFormEmpty : boolean = true;

  constructor(private formService : FormContactService) { 
    
  }

  ngOnInit(): void {
    this.formFromService.subscribe( 
      x => this.formHistorical = x
      ).unsubscribe() 
    if(!(Object.keys(this.formHistorical).length === 0)){
      this.isFormEmpty = false;
    }
  }
}
