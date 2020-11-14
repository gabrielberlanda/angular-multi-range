import { Component, OnInit } from '@angular/core';
import { IRangeComponentValue } from '../../range.value.interface';

@Component({
  selector: 'app-sample-range-basic',
  templateUrl: './sample-range-basic.component.html',
  styleUrls: ['./sample-range-basic.component.scss']
})
export class SampleRangeBasicComponent implements OnInit {

  disabledRange: IRangeComponentValue = {
    min: 20,
    max: 50
  };

  simpleRange: IRangeComponentValue = {
    min: 10,
    max: 30
  };

  customMinMaxRange: IRangeComponentValue = {
    min: 10,
    max: 15
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
