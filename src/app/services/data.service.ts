import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from  '@angular/common/http'
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  token=''

  constructor(private http:HttpClient) {this.loadToken(); }

  //helper getOptions is used, since we need to use many times

  getOptions(){
  let headers= new HttpHeaders();
  headers=headers.set('authorization','Bearer '+this.token)
  return {
    headers
  }
  }

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
  // let headers= new HttpHeaders();
  // headers=headers.set('authorization','Bearer '+this.token) //the value here is bearer space token and store in header, this is return to backend
 //now instaed of above 2 statements, getOptions() can be used, and now header will work

  return this.http.get(environment.apiUrl,this.getOptions());
}
//after token creation, like in postman, we add header here too
//import http headers

addTodo(name,description){
  const data={
    name,description
  }
return this.http.post(environment.apiUrl,data,this.getOptions());

}

getTodo(id){
  //return this.http.get(environment.apiUrl+"/"+id,this.getOptions()); //or
  return this.http.get(`${environment.apiUrl}/${id}`,this.getOptions());
}
//this is for editing the contents in that id
//template literals/template strings in js (`$) letter next to number 1, can be used to concatenate the contents like +"/"+id


editTodo(id,data){
  return this.http.put(`${environment.apiUrl}/${id}`,data,this.getOptions());
}
//edit we use put fn

}





//ng g s services/data---for service generation to connect to the server 
//also import http client in app.module
//inject hhtp client in constructor
//server runs in 3002, so give this in the environment
//import the environment here
