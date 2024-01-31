import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  constructor(private formBuilder: FormBuilder){}
  detailsForm = this.formBuilder.group({
    firstName:['' ,[Validators.required,Validators.maxLength(20)]],
    middleName:[''],
    lastName:['',[Validators.required ,Validators.maxLength(20)]],
    age:['',[Validators.pattern('^(1[0-9]|[2-4][0-9]|50)$')]],
    gender:['',Validators.required],
    address: this.formBuilder.group({
      street:['',[Validators.required,Validators.maxLength(20)]],
      landmark:['',Validators.maxLength(20)],
      city:['',[Validators.required,Validators.maxLength(20)]],
      state:['',[Validators.required,Validators.maxLength(20)]],
      zipCode:['',[Validators.required ,Validators.pattern(/^\d{1,20}$/)]],
      country: ['',[Validators.required ,Validators.maxLength(20)]],

    }),
    hobbies: this.formBuilder.array([this.formBuilder.control('')]),
  })
  get hobbies(){
    return this.detailsForm.get('hobbies') as FormArray;
  }
  addHobby(){
    this.hobbies.push(this.formBuilder.control(''));
  }

  onSubmit():void{
    console.log(this.detailsForm.value);
    
  }
}
