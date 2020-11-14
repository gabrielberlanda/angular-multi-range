import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeComponent } from './range.component';

describe('RangeComponent', () => {
  let component: RangeComponent;
  let fixture: ComponentFixture<RangeComponent>;
  let nativeElement: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeComponent);
    component = fixture.componentInstance;
    component.label = 'Meu label';
    component.value = { min: 0, max: 100};
    component.optional = true;
    fixture.detectChanges();
    nativeElement = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a label', () => {
    expect(fixture.debugElement.nativeElement.innerHTML).toContain('Meu label');
  })

  it('should change label', () => {
    component.label = 'Label alterado';
    fixture.detectChanges();
    expect(nativeElement.innerHTML).toContain('Label alterado');
  })
  it('should show optional label', () => {
    var optionalLabel = nativeElement.querySelector('.slider-optional-label');
    expect(optionalLabel).not.toBeNull();
    expect(optionalLabel.innerText).toBe('(Opcional)');
  })

  it('should hide optional label', () => {
    component.optional = false;
    fixture.detectChanges();
    var optionalLabel = nativeElement.querySelector('.slider-optional-label');
    expect(optionalLabel).toBeNull();
  })

  it('should show values', () => {
    const labelsElements = nativeElement.querySelectorAll('.value-label');

    expect(labelsElements).not.toBeNull()
    expect(labelsElements.length).toBe(2)
    expect(labelsElements[0].innerText).toBe("0")
    expect(labelsElements[1].innerText).toBe("100")
  })

  it('should hide value', () => {
    component.hideValues = true;
    fixture.detectChanges();
    const labelsElements = nativeElement.querySelectorAll('.value-label');
    expect(labelsElements.length).toBe(0);
  });

  it('should change model value', () => {
    component.value = {
      min: 15,
      max: 50
    };

    fixture.detectChanges();
    const labelsElements = nativeElement.querySelectorAll('.value-label');

    expect(labelsElements.length).toBe(2)
    expect(labelsElements[0].innerText).toBe("15")
    expect(labelsElements[1].innerText).toBe("50")

  })

  it('should change fix min max value', () => {
    component.value = {
      min: 55,
      max: 15
    };

    fixture.detectChanges();
    const labelsElements = nativeElement.querySelectorAll('.value-label');

    expect(labelsElements.length).toBe(2)
    expect(labelsElements[0].innerText).toBe("15")
    expect(labelsElements[1].innerText).toBe("55")
  })

  it('should disable inputs', () => {
    component.disabled = true;
    fixture.detectChanges();

    const inputsElements = nativeElement.querySelectorAll('input[type="range"]:disabled');
    expect(inputsElements.length).toBe(2);
    
  })

  it('should hide input container while value is undefined', () => {
    component.value = undefined;
    fixture.detectChanges();
    expect(nativeElement.querySelector('.input-container')).toBeNull();
  })


});
