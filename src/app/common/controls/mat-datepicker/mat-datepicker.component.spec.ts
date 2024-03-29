import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDatepickerComponent } from './mat-datepicker.component';

describe('MatDatepickerComponent', () => {
  let component: MatDatepickerComponent;
  let fixture: ComponentFixture<MatDatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDatepickerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
