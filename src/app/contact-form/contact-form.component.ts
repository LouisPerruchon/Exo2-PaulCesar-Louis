import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormContactData } from 'src/model/form-contact-data';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  public formContact : FormGroup =  this.fb.group({
    prenom: ['',[Validators.required]], // You can set default values or validators here
    nom: ['',Validators.required],
    age: ['',Validators.required,Validators.pattern("[0-9]*")],
    email: ['',Validators.email],
    commentaire: ['',Validators.required],
    showEmail: [false], 
  })

  constructor(private fb: FormBuilder) {
    
  }

  public OnSubmit(){
    const formDataObject: FormContactData = this.formContact.value;
    return formDataObject
}  

}