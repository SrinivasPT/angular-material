import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatRadioGroupComponent } from './mat-radio-group.component';

describe('MatRadioGroupComponent', () => {
  let component: MatRadioGroupComponent;
  let fixture: ComponentFixture<MatRadioGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatRadioGroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatRadioGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
