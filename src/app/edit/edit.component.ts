import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editForm =this.fb.group({
    name:["",[Validators.required]],
    description:["",[Validators.required]]
    });
 
 id="";
  constructor(private route:ActivatedRoute,private fb:FormBuilder,private dataService:DataService,private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
     // alert(params.id)
     this.id=params.id;
    this.dataService.getTodo(this.id)
    .subscribe((data:any)=>{
      //console.log(data); //now the contents will appear in the console of browser
      this.editForm.setValue({
        name:data.name,
        description:data.description
      })//now the data to be edited will be displayed in the field
    })
    })
  }

  save(){
    if(this.editForm.valid){
      const data={
        name:this.editForm.value.name,
        description:this.editForm.value.description
      }
    this.dataService.editTodo(this.id,data)
    .subscribe((data:any)=>{
    //console.log(data) //we get unauthorization error, means authentication works
      alert(data.message) 
    this.router.navigateByUrl('/dashboard') //navigate back to dashboard
    })
    }
    }

}

//activated route is used here
//we have to edit the contents(name,desc) of the id selected
//in the edit page, it should show already filled data, for editing
//for that we need to create a router/end point in the backend