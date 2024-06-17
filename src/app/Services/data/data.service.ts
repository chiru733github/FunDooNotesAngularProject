import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  private message=new BehaviorSubject([]);
  incomingData = this.message.asObservable();

  outGoingData(reqmessage:any){
    console.log(reqmessage);
    this.message.next(reqmessage);
  }
}
