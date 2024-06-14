import { Component, EventEmitter, OnInit, Output, ViewChild, viewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotesService } from '../../Services/notes/notes.service';
import { response } from 'express';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrl: './add-notes.component.scss'
})
export class AddNotesComponent implements OnInit{
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  display:boolean=true;
  addNoteForm!:FormGroup
  @Output() refreshAddNote= new EventEmitter<string>();
  constructor(private note:NotesService, private formbulider:FormBuilder){}

  ngOnInit(): void {
    this.addNoteForm = this.formbulider.group({
      title:[''],
      description:['']
    })
  }

  addNote(){
    let notedetails={
      title: this.addNoteForm.value.title,
      description: this.addNoteForm.value.description
    }
    this.note.addNotes(notedetails).subscribe((response:any)=>{
      console.log(response);
      this.refreshAddNote.emit(response);
    })
  }
}
