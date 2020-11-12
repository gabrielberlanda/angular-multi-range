import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IRangeComponentValue } from './components/range/range.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tolentinos-challenge';
  form: FormGroup;

  outerValue: IRangeComponentValue = {
    min: 0,
    max: 10
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      reactive: {
        min: 0,
        max: 50
      }
    });
  }
}
