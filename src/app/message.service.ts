import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  //这个叫服务
  //这个叫缓存

  messages:String[]=[];

  constructor() { }

  add(message:String){
    console.log(message);
    this.messages.push(message);
  }

  clear(){
    this.messages=[];
  }
}
