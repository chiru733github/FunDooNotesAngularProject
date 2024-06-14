import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from '../../Services/notes/notes.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrl: './archive.component.scss'
})
export class ArchiveComponent implements OnInit{
  ListofArchiveNotes:any;
  constructor(private notes:NotesService){}
  ngOnInit(): void {
    this.ArchiveNotes();
  }
  ArchiveNotes(){
    this.notes.getNotes().subscribe((response:any)=>{
      console.log(response);
      this.ListofArchiveNotes=response.data;
      this.ListofArchiveNotes=this.ListofArchiveNotes.filter((Object:any)=>{
        return Object.isArchive==true;
      });
      console.log(this.ListofArchiveNotes);
      this.ListofArchiveNotes.reverse();
    })
  }
  ArchiveRefresh($event:any){
    this.ArchiveNotes();
  }
}
