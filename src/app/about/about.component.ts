import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/services/service.about';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  infos:any;
  comments=[];
  constructor(private service:AboutService){
    this.infos=this.service.getInfos();
    this.comments=this.service.getAllComments();
  }
  commentaire={date:null,message:""}
  // first version
  // onAddMessage(){
  //  this.commentaire.date=new Date()
  //   this.comments.push(this.commentaire)
  //   this.commentaire={date:null,message:""};
  // }
  onAddMessage(c){
    this.service.addMessage(c);
    this.commentaire.message='';
    this.comments=this.service.getAllComments();
  }
  


  ngOnInit(): void {
  }

}
