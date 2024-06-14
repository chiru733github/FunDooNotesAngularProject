import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  token:any;
  constructor(private http:HttpService) { this.token=localStorage.getItem("token") }


  addNotes(reqData:any){
    let header = {
      headers: new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.http.PostMethodreset('https://localhost:7167/api/Notes/CreateNote',reqData, true, header);
  }

  getNotes(){
    let head={
      headers: new HttpHeaders({
        'content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.http.GetMethod(`https://localhost:7167/api/Notes/GetByUserId`,true,head);
  }
  archiveNotes(reqData:any){
    let head={
      headers: new HttpHeaders({
        'content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.http.PutMethod(`https://localhost:7167/api/Notes/ToggleArchive?noteid=`+reqData.notesId,{},true,head);
  }
  trashNote(reqData:any){
    let header={
      headers: new HttpHeaders({
        'content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.http.PutMethod(`https://localhost:7167/api/Notes/ToggleTrash?noteid=`+reqData.notesId,{},true,header);
  }
  updateNote(reqData:any,id:any){
    let head={
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.http.PutMethod(`https://localhost:7167/api/Notes/UpdateNotes?noteid=`+id,reqData,true,head);
  }

  setColor(reqData:any){
    let head={
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.http.PutMethod(`https://localhost:7167/api/Notes/AddColor?NotesId=`+reqData.notesId+`&Color=`+reqData.colors,{},true,head);
  }
}
