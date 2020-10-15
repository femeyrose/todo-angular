import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
todos=[];
  constructor(private dataService:DataService) {
 
 this.dataService.getTodos()
.subscribe((data:any)=>{
  //console.log(data)----we get the todos listing in console of browser, to display use ngFor
 this.todos=data;
})

   }

  ngOnInit(): void {
    
  }
 
}
