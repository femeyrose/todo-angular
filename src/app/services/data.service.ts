import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from  '@angular/common/http'
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  token=''

  constructor(private http:HttpClient) {this.loadToken(); }

  loadToken(){
    if(localStorage.getItem('token')){
    this.token=localStorage.getItem('token')
  }
}
  //to remove error while adding loadToken, declare variable token
 //define it in the constructor
 //take the token from the localStorage and store it into 'token'
 //in each request we have to send this back token to the server

  saveToken(token){
    this.token=token;
    localStorage.setItem('token',token)
  }
  //to save token to local storage, this is called after login
  //and stored in localStorage

register(name,email,password){
  const data={
    name,email,password
  }
return this.http.post(environment.apiUrl+"/users",data);
}

login(email,password){
  const data={
    email,password
  }
return this.http.post(environment.apiUrl+"/users/login",data);

}

getTodos(){
  let headers= new HttpHeaders();
  headers=headers.set('authorization','Bearer '+this.token) //the value here is bearer space token and store in header, this is return to backend
return this.http.get(environment.apiUrl,{
  headers
});
}
//after token creation, like in postman, we add header here too
//import http headers


}




//ng g s services/data---for service generation to connect to the server 
//also import http client in app.module
//inject hhtp client in constructor
//server runs in 3002, so give this in the environment
//import the environment here
