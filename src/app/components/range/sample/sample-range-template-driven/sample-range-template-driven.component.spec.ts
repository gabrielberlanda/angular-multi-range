import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleRangeTemplateDrivenComponent } from './sample-range-template-driven.component';

describe('SampleRangeTemplateDrivenComponent', () => {
  let component: SampleRangeTemplateDrivenComponent;
  let fixture: ComponentFixture<SampleRangeTemplateDrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleRangeTemplateDrivenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleRangeTemplateDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
