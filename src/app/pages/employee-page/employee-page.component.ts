import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from '../../common/dynamic-form/dynamic-form.component';
import { DynamicFormBuilderService } from '../../common/services/dynamic-form-builder.service';
import { employeeFormConfig } from './employee-form-config';

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

    constructor(private formBuilder: DynamicFormBuilderService) {}

    ngOnInit(): void {
        this.formBuilder.createForm(this.form, this.config);
        this.form.valueChanges.subscribe((value) => {
            console.log('Form Value Changed:', value);
        });
    }

    onSubmit() {
        if (this.form.valid) {
            console.log('Form Value:', this.form.value);
            // Additional submission logic
        }
    }
}
