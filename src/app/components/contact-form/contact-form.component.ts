import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IFormContactData } from 'src/app/model/form-contact-data';
import { FormContactService } from '../../services/form-contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  public formContact : FormGroup =  this.fb.group({
    prenom: ['',[Validators.required]],
    nom: ['',[Validators.required]],
    age: ['',[Validators.pattern("^[0-9]*$"),Validators.min(1)]],
    email: [''],
    commentaire: ['',[Validators.required]],
    showEmail: [true]
  })

  constructor(
    private fb: FormBuilder, 
    private router: Router, 
    private formService : FormContactService) {
  
    }

  emailValidatorCustom(){
    if(this.formContact){
      const emailValidatorCheckbox = this.formContact.get('showEmail');
      const emailValidator = this.formContact.get('email');
      if(emailValidatorCheckbox?.value){
        emailValidator?.setValidators([Validators.required, Validators.email]);
        emailValidator?.updateValueAndValidity();
      }
      else{
        emailValidator?.clearValidators();
        emailValidator?.setValue('');
        emailValidator?.updateValueAndValidity();
      }
    }
  }



  public onSubmit(){
    this.formService.setForm(this.formContact.value);
    alert('Formulaire valide ! Redirection vers la page d\'accueil.');
    this.router.navigate(['/accueil']);
    }

validateField(fieldName: string) {
  const control = this.formContact.get(fieldName);
  if (control) {
    control.markAsTouched();
    control.updateValueAndValidity();
  }
}


}