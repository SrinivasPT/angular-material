import { Validators } from '@angular/forms';

export const employeeFormConfig = [
  { key: 'firstName', label: 'First Name', type: 'text', width: '4', validations: [Validators.required] },
  { key: 'lastName', label: 'Last Name', type: 'text', width: '4', validations: [Validators.required] },
  { key: 'email', label: 'Email', type: 'text', width: '4', validations: [Validators.required, Validators.email] },
  { key: 'age', label: 'Age', type: 'number', width: '4', validations: [Validators.required, Validators.min(18)] },
  {
    key: 'department',
    label: 'Department',
    type: 'select',
    width: '4',
    options: [
      { label: 'Engineering', value: 'engineering' },
      { label: 'Marketing', value: 'marketing' },
      { label: 'Human Resources', value: 'hr' },
      { label: 'Finance', value: 'finance' },
    ],
    validations: [Validators.required],
  },
  { key: 'startDate', label: 'Start Date', type: 'date', width: '4', validations: [Validators.required] },
];
