import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RangeComponent } from '../../range.component';

import { SampleRangeReactiveFormsComponent } from './sample-range-reactive-forms.component';

describe('SampleRangeReactiveFormsComponent', () => {
  let component: SampleRangeReactiveFormsComponent;
  let fixture: ComponentFixture<SampleRangeReactiveFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RangeComponent, SampleRangeReactiveFormsComponent ],
      imports: [
        ReactiveFormsModule,
        FormsModule 
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleRangeReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
