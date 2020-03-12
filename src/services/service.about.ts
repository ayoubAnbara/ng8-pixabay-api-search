import { Injectable } from "@angular/core";

@Injectable()
export class AboutService {

  infos = {
    name: "ayoub anbara",
    email: "ayoub@gmail.com",
    tel: 6777383
  }
  comments = [
    { date: new Date(), message: "A" },
    { date: new Date(), message: "B" },
    { date: new Date(), message: "C" }
  ];
  commentaire={date:null,message:""}
  // first version
  // onAddMessage(){
  //  this.commentaire.date=new Date()
  //   this.comments.push(this.commentaire)
  //   this.commentaire={date:null,message:""};
  // }
  addMessage(c){
    // c is object like commentaie, it contains two attributes, date and message
    
    c.date=new Date();
    this.comments.push(c);
    
  }
  
  public  getInfos(){
    return this.infos;
  }
  public getAllComments(){
    return this.comments;
  }


}