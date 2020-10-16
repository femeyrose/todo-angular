import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
todos=[];
  constructor(private dataService:DataService,private router:Router) {
 
 this.dataService.getTodos()
.subscribe((data:any)=>{
  //console.log(data)----we get the todos listing in console of browser, to display use ngFor
 this.todos=data;
})

}

//lifecycle hooks.................

ngOnChanges(){ 
//@input changes this will be called
}

onEditClick(todo){
  //this.router.navigateByUrl("edit/:id",todo._id) //or
  this.router.navigate(["edit",todo._id])

   //navigate to the edit component and in the url we get the id which is to be edited
  //console.log(todo._id)
}

  ngOnInit(): void {
    //value which changes by onChanges and after set these values, angular will view all these values
    //after this view, this fn is called
    //main fn, bcz after for the first time when we see the page, this fn is called
    //it is safe to do the calls made in constructor here
    //bcz any changes like made in @input willn,t get since constructor calls only for the first time
    //so change reflection/ set the changes can be viewed when we use this fn
    //so for APIs calls, better/safe to use this fn,bcz to get the data using @input at any instance of time better to use this.
    //after angular first displays the data bound property
  }

  ngDoCheck(){
  //if automatically any value changes, if angular wont detect any changes made, we can check it using this fn
  }

  ngAfterContentChecked(){
  
  }

  ngAfterViewInit(){
  //view and the child views are viewed,this fn is called
  //only for the first time
  }

  ngAfterViewChecked(){
 //view or any child view changes further, this is called
  }

ngOnDestroy(){
  //is called when our component gets destroyed

}
 
}
