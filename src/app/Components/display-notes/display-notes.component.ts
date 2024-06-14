import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NotesService } from '../../Services/notes/notes.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdateNotesComponent } from '../update-notes/update-notes.component';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrl: './display-notes.component.scss'
})
export class DisplayNotesComponent implements OnInit{
  @Input() ListofNotes:any;
  @Output() refreshUpdateNote = new EventEmitter<string>();
  constructor(public dialog:MatDialog){}
  ngOnInit(): void {
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
