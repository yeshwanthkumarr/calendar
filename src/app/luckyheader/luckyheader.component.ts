import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-luckyheader',
  templateUrl: './luckyheader.component.html',
  styleUrls: ['./luckyheader.component.css']
})
export class LuckyheaderComponent implements OnInit {
  @Input()
  startDate: string;

  @Input()
  endDate: string;


  constructor() { }

  ngOnInit() {
  }

}
