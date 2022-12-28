import { Component } from '@angular/core';
import { FormGroup , FormControl , Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive-form-validation',
  templateUrl: './reactive-form-validation.component.html',
  styleUrls: ['./reactive-form-validation.component.css']
})
export class ReactiveFormValidationComponent {
  logForm = new FormGroup({
    user: new FormControl('',[Validators.required]),
    email : new FormControl('',[Validators.required , Validators.email]),
    password: new FormControl('',[Validators.required , Validators.minLength(5)]),
    upper_alphabet: new FormControl('',[Validators.required , Validators.pattern('[azA-Z]+$')]),
    lower_alphabet: new FormControl('',[Validators.required , Validators.pattern('[a-zAZ]+$')])

  })
  loginUser(){
    console.log(this.logForm.value);
  }

  get user(){
    return this.logForm.get('user')
  }
  get email(){
    return this.logForm.get('email')
  }
  get password(){
    return this.logForm.get('password')
  }
  get upper_alphabet(){
    return this.logForm.get('upper_alphabet')
  }
  get lower_alphabet(){
    return this.logForm.get('lower_alphabet')
  }
}
