import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

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
        this.form.patchValue({ ...MOCK_DATA });
        this.form.get('details')?.patchValue([...MOCK_DATA['details']]);
    }
}
