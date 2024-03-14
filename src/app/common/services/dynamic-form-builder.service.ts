import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class DynamicFormBuilderService {
  constructor(private formBuilder: FormBuilder) {}

  createForm(fields: any[]): FormGroup {
    const group = this.formBuilder.group({});
    fields.forEach((field) => {
      if (field.type !== 'group') {
        group.addControl(field.key, this.formBuilder.control(field.value || '', field.validations || []));
      } else {
        // Handle group type or nested fields
      }
    });
    return group;
  }
}
