import { Injectable, } from '@angular/core';
import { Observable,of } from 'rxjs';
import { FormContactData } from 'src/app/model/form-contact-data';

@Injectable({
  providedIn: 'root'
})
export class FormContactService {
  form : FormContactData = new FormContactData();
  
  constructor() { }

  setForm(data : FormContactData) : void {
    this.form=data
  }
  getForm(): Observable<FormContactData> {
    const formContact = of(this.form);
    return formContact;
  }


}

