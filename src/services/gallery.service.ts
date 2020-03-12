import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
@Injectable()
export class GalleryService{
    dataForm: any;
    constructor(private http: HttpClient){
    }
   search(dataForm,size:number,page:number) {
        this.dataForm = dataForm;
        let resp = this.http.get("https://pixabay.com/api/?key=5832566-81dc7429a63c86e3b707d0429&q=" + this.dataForm.keyword 
        + "&page=" + page
          + "&per_page=" + size)
          return resp;
      }
      
}