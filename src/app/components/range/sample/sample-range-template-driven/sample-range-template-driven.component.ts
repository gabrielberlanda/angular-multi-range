import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IRangeComponentValue } from '../../range.value.interface';

interface ISampleRangeTemplateDriveFormValue {
  age: IRangeComponentValue;
}

@Component({
  selector: 'app-sample-range-template-driven',
  templateUrl: './sample-range-template-driven.component.html',
  styleUrls: ['./sample-range-template-driven.component.scss']
})
export class SampleRangeTemplateDrivenComponent implements OnInit {

  model: ISampleRangeTemplateDriveFormValue = {
    age: {
      min: 18,
      max: 35
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm) {
    const { min, max } = form.value.age;

    alert(`Este local é recomendado para o público de ${min} até ${max}`)
  }
}
