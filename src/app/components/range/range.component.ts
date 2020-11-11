import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.scss']
})
export class RangeComponent implements OnInit {

  min: number = 10;
  max: number = 100;

  minValue: number = -50;
  maxValue: number = 100;

  dif: number = this.maxValue - this.minValue;
  wrapLeft: number = 0;
  wrapRight: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  get minV() {
    if(this.min < this.max) return this.min;
    return this.max;
  }

  get maxV() {
    if(this.max > this.min) return this.max;
    return this.min;
  }

  get wrap() {
    var left = ((this.minV - this.minValue) / this.dif) * 100;
    var right = 100 - (((this.maxV - this.minValue)/ this.dif) * 100);


    return {
      left: `${left}%`,
      right: `${right}%`
    }
  }


}
