import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerComponent } from '../controls/mat-datepicker/mat-datepicker.component';
import { MatInputComponent } from '../controls/mat-input/mat-input.component';
import { MatNumberComponent } from '../controls/mat-numeric/mat-number.component';
import { MatSelectComponent } from '../controls/mat-select/mat-select.component';

@Component({
    selector: 'app-dynamic-field',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatInputComponent,
        MatDatepickerComponent,
        MatSelectComponent,
        MatNumberComponent,
        FlexLayoutModule,
    ],
    templateUrl: './dynamic-field.component.html',
    styleUrl: './dynamic-field.component.css',
})
export class DynamicFieldComponent {
    @Input() field: any;
    @Input() parent!: FormGroup;

    getControl(key: string): FormControl {
        return this.parent?.get(key) as FormControl;
    }

    getForm(key: string): FormGroup {
        return this.parent.get(key) as FormGroup;
    }
}
