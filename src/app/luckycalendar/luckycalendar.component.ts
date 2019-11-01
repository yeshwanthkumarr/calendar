import { Component, OnInit } from '@angular/core';
import {Calendar} from '../Calendar';
import {Cell} from '../classes/cell';

@Component({
  selector: 'app-luckycalendar',
  templateUrl: './luckycalendar.component.html',
  styleUrls: ['./luckycalendar.component.css']
})
export class LuckycalendarComponent implements OnInit {
  currentcalendar = new Calendar(new Date('11/1/2018'), new Date('11/31/2018'), 0);
   cells: Cell[] = [];
  constructor() { }

  ngOnInit() {
    const startDate = new Date(this.currentcalendar.start);
  const  endDate = new Date(this.currentcalendar.end);
  while (startDate <= endDate) {
    const cell = new Cell(startDate.toLocaleDateString()) ;
    this.cells.push(cell);
    startDate.setDate(startDate.getDate() + 1);
    console.log(startDate.toLocaleDateString());
  }
}
add(currentValue , cell) {
  return(cell.value === undefined ? 0 : cell.value) + currentValue;
}
get currentTotal() {
  return this.cells.reduce(this.add, 0 );
}
get startDateString() {
  return this.currentcalendar.start.toLocaleDateString('en-us');
}
get endDateString()  {
  return this.currentcalendar.end.toLocaleDateString('en-us');
}
get total() {
return this.currentcalendar.total;
}
updateTotal(changedCell) {
  const index = this.cells.findIndex((cell) => {
    return cell.date ===  changedCell.date;
  });
}
