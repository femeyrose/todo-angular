import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
addForm =this.fb.group({
name:["",[Validators.required]],
description:["",[Validators.required]]
});
  constructor(private dataService:DataService,private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
  }

  //add() is an API
add(){
if(this.addForm.valid){
this.dataService.addTodo(this.addForm.value.name,this.addForm.value.description)
.subscribe((data:any)=>{
//console.log(data) //we get unauthorization error, means authentication works
  alert(data.message) 
this.router.navigateByUrl('/dashboard') //navigate back to dashboard
})
}
}


}
