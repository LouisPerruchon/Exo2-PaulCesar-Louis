import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IFormContactData } from 'src/app/model/form-contact-data';

@Injectable({
  providedIn: 'root'
})
export class FormContactService {
  private form: IFormContactData | null = null;

  constructor() { }

  setForm(data: IFormContactData): void {
    this.form = data;
  }

  getForm(): Observable<IFormContactData | null> {
    return of(this.form);
  }
}
