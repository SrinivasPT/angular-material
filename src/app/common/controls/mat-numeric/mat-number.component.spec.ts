import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatNumberComponent } from './mat-number.component';

describe('MatNumberComponent', () => {
    let component: MatNumberComponent;
    let fixture: ComponentFixture<MatNumberComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MatNumberComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(MatNumberComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
