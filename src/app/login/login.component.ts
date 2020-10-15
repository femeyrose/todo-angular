import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService} from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm=this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]],
    
  });

  constructor(private fb:FormBuilder,private dataService:DataService) { }

  ngOnInit(): void {
  }

login(){
  if(this.loginForm.valid){
    this.dataService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe((data:any)=>{
      console.log(data);
      //after token creation we get the token in console of browser
      //we have to store this token to local storage in data.service

      this.dataService.saveToken(data.token)
      //we get token here
      //add 'any' with subscribe to remove error

      alert("login successfull")
    },(data)=>{
    alert(data.error.message)
    })
  }
}


}
