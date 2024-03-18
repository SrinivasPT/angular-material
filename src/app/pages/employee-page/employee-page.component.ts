import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DynamicFormComponent } from '../../common/dynamic-form/dynamic-form.component';
import { DynamicFormBuilderService } from '../../common/services/dynamic-form-builder.service';
import { employeeFormConfig } from './employee-form-config';
import { MOCK_DATA } from './mock-data';

@Component({
    selector: 'app-employee-page',
    templateUrl: './employee-page.component.html',
    styleUrls: ['./employee-page.component.scss'],
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule, DynamicFormComponent],
})
export class EmployeePageComponent implements OnInit {
    form: FormGroup = new FormGroup({});
    config = employeeFormConfig;
    mode: 'edit' | 'view' = 'view'; // Default mode
    data = MOCK_DATA;

    constructor(
        private route: ActivatedRoute,
        private myFormBuilder: DynamicFormBuilderService,
        private formBuilder: FormBuilder,
        private cdr: ChangeDetectorRef
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe((params) => {
            this.mode = params['mode'] || 'view'; // Fallback to 'edit' if no mode is provided
        });

        this.myFormBuilder.createForm(this.form, this.config);

        // Move the disable logic here, after the form has been constructed
        if (this.mode === 'view') {
            this.form.disable(); // Disable the form if in view mode
        } else {
            this.form.enable(); // Ensure the form is enabled in edit mode
        }
    }

    onSubmit() {
        console.log('Form Value:', this.form.value);
    }

    changeValues() {
        // Update the top-level form values
        this.form.patchValue({ ...MOCK_DATA });

        // Update 'details' FormArray
        const details = this.form.get('details') as FormArray;
        const newDetails = [
            { addressLineOne: 'One', addressLineTwo: 'Two' },
            { addressLineOne: 'Three', addressLineTwo: 'Four' },
        ];

        // Clear the existing FormArray
        while (details.length) {
            details.removeAt(0);
        }

        // Add new FormGroup instances to the FormArray for each item in newDetails
        newDetails.forEach((detail) => {
            const addressFormGroup = new FormGroup({
                addressLineOne: new FormControl(detail.addressLineOne),
                addressLineTwo: new FormControl(detail.addressLineTwo),
            });
            details.push(addressFormGroup);
        });
    }
}
