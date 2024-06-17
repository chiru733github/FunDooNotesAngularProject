import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../Services/data/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  constructor(private router:Router,private data:DataService){}

  searchingNotes(event:any){
    console.log(event.target.value);
    this.data.outGoingData(event.target.value);
  }
}
