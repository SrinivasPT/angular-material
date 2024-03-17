import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerComponent } from '../controls/mat-datepicker/mat-datepicker.component';
import { MatInputComponent } from '../controls/mat-input/mat-input.component';
import { MatNumberComponent } from '../controls/mat-numeric/mat-number.component';
import { MatSelectComponent } from '../controls/mat-select/mat-select.component';
import { MatTableComponent } from '../controls/mat-table/mat-table.component';

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
        MatTableComponent,
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

    getFormArray(key: string): FormArray | null {
        const control = this.parent.get(key);
        return control instanceof FormArray ? control : null;
    }
}
