import { Component } from '@angular/core';
import { Cell } from './classes/cell';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 // myCell = new Cell('Yehswant');
 date = new Date();
 myCell = new Cell(this.date.toLocaleDateString());
 total = 0 ;
 updateValue(value) {
   console.log(`updated value is ${value}`);
 }
}
