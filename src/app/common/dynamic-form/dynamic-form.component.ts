import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerComponent } from '../controls/mat-datepicker/mat-datepicker.component';
import { MatInputComponent } from '../controls/mat-input/mat-input.component';
import { DynamicFieldComponent } from '../dynamic-field/dynamic-field.component';
import { DynamicFormBuilderService } from '../services/dynamic-form-builder.service';

@Component({
    selector: 'app-dynamic-form',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, MatInputComponent, MatDatepickerComponent, FlexLayoutModule, DynamicFieldComponent],
    templateUrl: './dynamic-form.component.html',
    styleUrl: './dynamic-form.component.css',
})
export class DynamicFormComponent implements OnInit {
    @Input() config!: any[];
    @Input() parent!: FormGroup;

    constructor(private formBuilder: DynamicFormBuilderService) {}

    ngOnInit() {
        this.formBuilder.createForm(this.parent, this.config);
    }

    getControl(key: string): FormControl {
        return this.parent.get(key) as FormControl;
    }

    getNestedControl(groupKey: string, controlKey: string): FormControl {
        const group = this.parent.get(groupKey) as FormGroup;
        if (!group) {
            console.error(`FormGroup with key '${groupKey}' not found.`);
            return new FormControl(); // Or handle this case as appropriate
        }
        const control = group.get(controlKey) as FormControl;
        if (!control) {
            console.error(`FormControl with key '${controlKey}' not found in group '${groupKey}'.`);
            return new FormControl(); // Or handle this case as appropriate
        }
        return control;
    }
}
