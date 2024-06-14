import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NotesService } from '../../Services/notes/notes.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrl: './icons.component.scss'
})
export class IconsComponent implements OnInit{
  @Input() notesObject:any;
  @Output() refreshForiconEvent=new EventEmitter<string>();
  constructor(private notes:NotesService){}


  ngOnInit(): void {
    
  }

  onArchive(){
    let reqdata={
      notesId:this.notesObject.notesId
    }
    console.log(reqdata)
    this.notes.archiveNotes(reqdata).subscribe((result:any)=>{
      console.log(result);
      this.refreshForiconEvent.emit(result);
    })
  }
  onTrash(){
    let reqdata={
      notesId:this.notesObject.notesId
    }
    console.log(reqdata)
    this.notes.trashNote(reqdata).subscribe((result:any)=>{
      console.log(result);
      this.refreshForiconEvent.emit(result);
    })
  }
  ArrayofColor: Array<any> = [
    {code:'#F24822',name:'Red'},
    {code:'#667799',name:'Stone'},
    {code:'#0D99FF',name:'Blue'},    
    {code:'#FFCD29',name:'Yellow'},
    {code:'#9747FF',name:'Violet'},
    {code:'#FFFFFF',name:'White'},
    {code:'#FFA629',name:'Orange'},
    {code:'#14AE5C',name:'Green'}
    ];

    getColor(color:any){
      let reqdata={
        colors:color.name,
        notesId:this.notesObject.notesId
      }
      this.notes.setColor(reqdata).subscribe((response:any)=>{
        console.log(response);
        this.refreshForiconEvent.emit(response);
      })
    }
}
