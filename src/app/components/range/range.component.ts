import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface IRangeComponentValue {
  min: number;
  max: number;
}

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RangeComponent),
      multi: true
    }
  ]
})
export class RangeComponent implements ControlValueAccessor {
  
  _value: IRangeComponentValue = {
    min: 0,
    max: 0
  };
  
  @Input() set value(val: IRangeComponentValue) {
    this._value = val;
    this.propagateChanged(this._value);
  }

  get value() {
    return this._value;
  }

  @Input()
  min: number = 0;
  
  @Input()
  max: number = 100;

  @Input('hide-values')
  hideValues: boolean = false;

  @Input()
  optional: boolean = false;

  @Input()
  disabled: boolean = false;

  @Input()
  label: string = "";

  constructor() { }
  
  propagateChanged = (_: any) => {};
  propageteTouched = (_: any) => {}; 

  writeValue(value: IRangeComponentValue): void {
    if (value !== undefined) {
      this.value = value;
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChanged = fn;
  }


  registerOnTouched(fn: any): void {
    this.propageteTouched = fn;
  }

  onValueChange(ev) {
    if(this.value.min > this.value.max) {
      this.value = {
        min: this.value.max,
        max: this.value.min
      }
    }
  }

  get minValue() {
    if(this._value.min <= this._value.max) return this._value.min;
    return this._value.max;
  }

  get maxValue() {
    if(this._value.max >= this._value.min) return this._value.max;
    return this._value.min;
  }

  get minStyle() {
    var startval = (this.minValue - this.min) / (this.max - this.min);
    var endval = (this.maxValue - this.min) / (this.max - this.min);

    const fillColor = !this.disabled ? '#2F9ABE' : '#B6BDBF';
    
    const background: string = `-webkit-gradient(
      linear, 
      left top, 
      right top, 
      color-stop(${startval}, #ECEEEE), 
      color-stop(${startval}, ${fillColor}), 
      color-stop(${endval}, ${fillColor}), 
      color-stop(${endval}, #ECEEEE)
    )`;

    const backgroundImage = `-ms-linear-gradient(
      left,
      #ECEEEE 0,
      #ECEEEE ${startval}, 
      ${fillColor} ${startval}, 
      ${fillColor} ${endval}, 
      #ECEEEE ${endval}, 
      #ECEEEE 1
    )`;
    
    return {
      "background": background,
      "background-image": backgroundImage
    };
  }


}
