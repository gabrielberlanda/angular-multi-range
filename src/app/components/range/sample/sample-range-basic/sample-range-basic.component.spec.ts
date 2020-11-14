import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleRangeBasicComponent } from './sample-range-basic.component';

describe('SampleRangeBasicComponent', () => {
  let component: SampleRangeBasicComponent;
  let fixture: ComponentFixture<SampleRangeBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleRangeBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleRangeBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
