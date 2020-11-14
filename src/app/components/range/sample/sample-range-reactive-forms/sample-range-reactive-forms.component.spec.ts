import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleRangeReactiveFormsComponent } from './sample-range-reactive-forms.component';

describe('SampleRangeReactiveFormsComponent', () => {
  let component: SampleRangeReactiveFormsComponent;
  let fixture: ComponentFixture<SampleRangeReactiveFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleRangeReactiveFormsComponent ]
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
