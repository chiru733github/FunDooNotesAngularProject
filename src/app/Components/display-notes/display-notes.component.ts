import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateNotesComponent } from '../update-notes/update-notes.component';
import { DataService } from '../../Services/data/data.service';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrl: './display-notes.component.scss'
})
export class DisplayNotesComponent implements OnInit{
  filterNote:any;
  @Input() ListofNotes:any;
  @Output() refreshUpdateNote = new EventEmitter<string>();
  constructor(public dialog:MatDialog,private data:DataService){}
  ngOnInit(): void {
    this.data.incomingData.subscribe((response)=>{
      console.log('search in processing ',response);
      this.filterNote=response;
    })
  }
  UpdatingNote(notes:any){
    const dialogbox = this.dialog.open(UpdateNotesComponent,{
      width:'40%',
      height:'auto',
      data:notes
    })
    dialogbox.afterClosed().subscribe((response:any)=>{
      console.log(response);
      this.refreshUpdateNote.emit(response);
    })
  }
  IconEventRefresh($event:any){
    this.refreshUpdateNote.emit($event);
  }
}
