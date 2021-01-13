import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  date: Date;
  yrs: string;
  lotlot:any;
  @ViewChild('dayOfTheYear') dayOfTheYear: ElementRef;

  constructor(private renderer: Renderer2) {

  }

  

  ngAfterViewInit() {
    var timestmp = new Date().setFullYear(new Date().getFullYear(), 0, 1);     
    var yearFirstDay = Math.floor(timestmp / 86400000);      
    var today = Math.ceil((new Date().getTime()) / 86400000);
    var dayOfYear = today - yearFirstDay; 
  
    const dt = new Date();
    this.date = dt;
    const year_time = dt.getFullYear();

    if (year_time === 2018 ) {
      this.yrs = '8';
    }

    if (year_time === 2019 ) {
      this.yrs = '9';
    }
    if (year_time === 2020 ) {
      this.yrs = '0';
    }

    if (year_time === 2021 ) {
      this.yrs = '1';
    }
    if (year_time === 2022 ) {
      this.yrs = '2';
    }
    this.renderer.setProperty(this.dayOfTheYear.nativeElement, 'innerHTML', this.yrs+dayOfYear, ) ;
    this.dayOfTheYear=this.lotlot;
  }
  

}
