import { Component, Input, OnInit, input } from '@angular/core';
import { NotesService } from '../../Services/notes/notes.service';
import { response } from 'express';

@Component({
  selector: 'app-presented-in-dashboard',
  templateUrl: './presented-in-dashboard.component.html',
  styleUrl: './presented-in-dashboard.component.scss'
})
export class PresentedInDashboardComponent implements OnInit{
  
  noteArray:any;
  constructor(private notes:NotesService){}
  ngOnInit(): void {
    this.GetNotes();
  }
  GetNotes(){
    this.notes.getNotes().subscribe((response:any)=>{
      console.log(response);
      this.noteArray=response.data;
      this.noteArray=this.noteArray.filter((Object:any)=>{
        return Object.isTrash==false;
      });
      this.noteArray=this.noteArray.filter((Object:any)=>{
        return Object.isArchive==false;
      });
      console.log(this.noteArray);
      this.noteArray.reverse();
    })
  }

  methodForRefresh($event:any){
    console.log('refresh event working.');
    this.GetNotes();
  }
  updateRefresh($event:any){
    console.log('update note');
    this.GetNotes();
  }
}
