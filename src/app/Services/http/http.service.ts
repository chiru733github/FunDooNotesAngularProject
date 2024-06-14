import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
}) 
export class HttpService {

  constructor(private http:HttpClient) { }
  PostMethod(reqUrl: string,payload:any, token:boolean=false,httpoptions: any={})
  {
    return  this.http.post(reqUrl,payload,token && httpoptions);
  }
  PostMethodreset(reqUrl: string,payload:any, token:boolean=true,httpoptions: any={})
  {
    return  this.http.post(reqUrl,payload,token && httpoptions);
  }
  GetMethod(url:string,token:boolean=true,httpoptions:any={}){
    return this.http.get(url,token && httpoptions);
  }
  PutMethod(reqUrl: string,payload:any, token:boolean=true,httpoptions: any={}){
    return this.http.put(reqUrl,payload,token && httpoptions);
  }
  
}
