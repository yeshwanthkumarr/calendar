import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';
import {Cell} from '../../classes/Cell';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { StyleCompiler } from '@angular/compiler';

@Component({
  selector: 'app-luckycell',
  templateUrl: './luckycell.component.html',
  styleUrls: ['./luckycell.component.css']
})
export class LuckycellComponent implements OnInit {
  @Input()
  cell: Cell;
  showDate = true;
  @Output()
  valueUpdated: EventEmitter<Cell> = new EventEmitter<Cell>();

  constructor() { }

  ngOnInit() {
  }
  get value() {
    if (this.showDate) {
      return this.cell.date;
    }
    return this.cell.value === undefined ?  0 : this.cell.value;
  }
  showValue() {
    console.log('hii');
    this.showDate = false;
  }
  hideValue() {
    this.showDate = true;
  }
  updateValue() {
    this.cell.value = +this.cell.value;
  this.valueUpdated.emit(+this.cell.value);
  }
}