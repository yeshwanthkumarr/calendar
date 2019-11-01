import { Component, OnInit } from '@angular/core';
import { StringifyOptions } from 'querystring';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  dateMessage: string;
  dateMessage1: string;
  d: string;

  constructor() {
    setInterval(() => {
      const currentDate = new Date();
      this.dateMessage = currentDate.toDateString() + ' ' + currentDate.toLocaleTimeString();
    } , 1000);

  }
  startDate = new Date();
  endDate = new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000 );

    /*const endDate = new Date();
     dateMessage1= endDate.setDate(32);*/

  ngOnInit() {
  }
}
