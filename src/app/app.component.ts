import { Component } from '@angular/core';
// import { Router } from '@angular/router';

import { bloomService } from './services/bloom.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bloomtv';
  categoryData: any = [];
  categoryVideoData: any = [];
  // videoData: any = [];
  permalink: string;

  constructor( private bloomservice: bloomService) {
    //this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
    this.getCategory();
  }

  getCategory() {
    this.bloomservice.getCategoryAll().subscribe(category => {
      this.categoryData = category.category_list;
      console.log('broadcaster '+JSON.stringify(this.categoryData));
    },
    error => { throw error },
    () => 
    console.log("finished"))/*  */;
  }
  getVideo(permalink) {
    let videoData: any = [];
    // this.permalink = category.category_list[i].permalink;  
    this.bloomservice.getCategoryVideo(permalink).subscribe(video => {
      videoData = video.movieList;
      console.log('broadcaster '+JSON.stringify(video.movieList));
    });
  }
  

  slides = [
    {img: "http://placehold.it/350x150/000000"},
    {img: "http://placehold.it/350x150/111111"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/666666"},
    {img: "http://placehold.it/350x150/111111"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/111111"},
    {img: "http://placehold.it/350x150/333333"}
  ];
  // slideConfig = {"slidesToShow": 4, "slidesToScroll": 4};
  slideConfig = {
    "slidesToShow": 4,
    "slidesToScroll": 1,
    "nextArrow": "<div class='nav-btn next-slide'></div>",
    "prevArrow": "<div class='nav-btn prev-slide'></div>",
    "dots": true,
    "infinite": false
  };
  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }

}
