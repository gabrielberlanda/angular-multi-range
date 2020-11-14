import { Component, forwardRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-sample-range-reactive-forms',
  templateUrl: './sample-range-reactive-forms.component.html',
  styleUrls: ['./sample-range-reactive-forms.component.scss'],
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => SampleRangeReactiveFormsComponent),
    }
  ]
})
export class SampleRangeReactiveFormsComponent implements OnInit {

  form: FormGroup;
  
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      rentRange: {
        min: 1000,
        max: 2000
      }
    });
  }

  onSubmit() {
    const { min, max } = this.form.value.rentRange;
    console.log(this.form);
    alert(`Buscando apartamentos para locação com o valor de ${min} até ${max}`)
  }

}
