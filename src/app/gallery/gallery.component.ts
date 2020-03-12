import { Component, OnInit, Injectable } from '@angular/core';
// import {Http} from '@angular/http';
// import 'rxjs/add/operator/map';
// import { map } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { GalleryService } from 'src/services/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
@Injectable()
export class GalleryComponent implements OnInit {

  pagePhotos: any;
  currentPage: number = 1;
  size: number = 10;
  totalPages: number;
  pages: Array<Number> = [];
  constructor(private galleryService:GalleryService) { }

  ngOnInit(): void {
  }
  dataForm: any;
  onSearch(dataForm) {
    this.dataForm=dataForm;
    let resp=this.galleryService.search(this.dataForm,this.size,this.currentPage);
      resp.subscribe(
        data => {
        this.pagePhotos = data;
        this.totalPages = this.pagePhotos.totalHits / this.size;
        if (this.pagePhotos.totalHits % this.size != 0) this.totalPages++;
        this.pages = new Array(this.totalPages);
        // console.log(this.pagePhotos.total);
      },
      error=>alert('error: '+error)
      );


  }
  gotoPage(index) {
    this.currentPage = index + 1;
    this.onSearch(this.dataForm);
  }

}
