import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService} from '../services/data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm=this.fb.group({
    name:['',[Validators.required]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]],
    confirmPassword:['',[Validators.required]]
  },{
    validator:this.checkPasswords
  });

  //to check the pwd and confirm pwd, and these are 2 different fields , we have to combine these fields
  //validators in the second parameter of the registerform will be called and take the values from formGroup
  //return pass.value=confirmPassword.value?null: {notSame:true}
  //check the passwords, if true returns null otherwise notSame:true in the console of browser (console.log(this.registerForm.value) in register())
  //this is multiple field validation 

  checkPasswords(registerForm){
    const pass=registerForm.get("password");
    const confirmPassword=registerForm.get("confirmPassword");
    return pass.value==confirmPassword.value? null: {notSame:true}
  }

  constructor(private fb:FormBuilder,private dataService:DataService) { }

  ngOnInit(): void {
  }

  register(){
  // console.log(this.registerForm.value)

  if(this.registerForm.valid){
    this.dataService.register( this.registerForm.value.name, this.registerForm.value.email, this.registerForm.value.password).subscribe(data=>{
      alert("registration successfull")
    },(data)=>{
    alert(data.error.message)
    })
  }

  }




}

//install cors in the backend to connect to the front end
//npm i cors
//define the require cors module in app.js