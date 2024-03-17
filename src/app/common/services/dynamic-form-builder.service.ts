import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable({
    providedIn: 'root',
})
export class DynamicFormBuilderService {
    constructor(private formBuilder: FormBuilder) {}

    createForm(form: FormGroup, fields: any[]): void {
        fields.forEach((field) => {
            if (field.type === 'group') {
                // Create a new FormGroup for group type fields and recursively add its child controls
                const group = this.formBuilder.group({});
                this.createForm(group, field.fields || []);
                form.addControl(field.key, group);
            } else if (field.type === 'table') {
                const array = this.formBuilder.array([]);
                field.columns.forEach((item: any) => {
                    const control = this.formBuilder.control(item.value || item.defaultValue, item.validations || []);
                    array.push(control);
                });
                form.addControl(field.key, array);
            } else {
                // Add a control for non-group fields
                form.addControl(field.key, this.formBuilder.control(field.value || field.defaultValue, field.validations || []));
            }
        });
    }
}
