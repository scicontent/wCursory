import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
   signUpForm! : FormGroup
  router: any;
  constructor(private formBuilder: FormBuilder, private _http:HttpClient, private authService: AuthService) {}

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      name: [''],
      email: [''],
      mobile: [''],
      password: ['']
    })
  }
  onSubmit(): void {
        // this._http.post<any>("", this.signUpForm.value).subscribe(res=> {
        //   alert('Registration SucessFull 0');
        //   this.signUpForm.reset();
        //   this.router.navigate(['login'])
        // }, err =>{
        //   alert("Something Went Wrong!! Please Try Again")
        // }
        // )
    // const { username, email, password } = this.form;
    // this.authService.register(username, email, password).subscribe(
    //   data => {
    //     console.log(data);
    //     this.isSuccessful = true;
    //     this.isSignUpFailed = false;
    //   },
    //   err => {
    //     this.errorMessage = err.error.message;
    //     this.isSignUpFailed = true;
    //   }
    // );
  }
}
