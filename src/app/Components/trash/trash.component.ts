import { Component, Input } from '@angular/core';
import { NotesService } from '../../Services/notes/notes.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrl: './trash.component.scss'
})
export class TrashComponent {
  @Input() notesObject:any;
  ListofTrashNotes:any;
  constructor(private note:NotesService){}
  ngOnInit(): void {
    this.TrashNotes();
  }
  TrashNotes(){
    this.note.getNotes().subscribe((response:any)=>{
      console.log(response);
      this.ListofTrashNotes=response.data;
      this.ListofTrashNotes=this.ListofTrashNotes.filter((Object:any)=>{
        return Object.isTrash==true;
      });
      console.log(this.ListofTrashNotes);
      this.ListofTrashNotes.reverse();
    })
  }
  RestoreTrash(notes:any){
    let reqdata={
      notesId:notes.notesId
    }
    console.log(reqdata);
    this.note.trashNote(reqdata).subscribe((result:any)=>{
      console.log(result);
      this.TrashNotes();
    })
  }
}
