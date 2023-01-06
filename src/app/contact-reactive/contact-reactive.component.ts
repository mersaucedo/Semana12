import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.css']
})
export class ContactReactiveComponent implements OnInit {
  contactForm!: FormGroup;
  //myField = new FormControl();

  constructor(private readonly fb:FormBuilder) { }
 
  ngOnInit(): void {
    this.contactForm = this.initForm();
    //this.onPathValue();
    //this.onSetValue();
  }
  
  onSubmit(): void {
    console.log('Form ->',this.contactForm.value )
  }
  onPathValue(): void {
    this.contactForm.patchValue({name: 'Bezabel'});
  }
  onSetValue(): void {
    //this.contactForm.setValue({comment: 'Hola Mundo'});
  }


  initForm(): FormGroup {
    return this.fb.group({
      name:['',[Validators.required, Validators.minLength(5)]],
      checkAdult:['',[Validators.required]],
      departament:[''],
      comment:['',[Validators.required]],
    })
  }
}