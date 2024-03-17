import { Validators } from '@angular/forms';

export const employeeFormConfig = [
    {
        key: 'firstName',
        label: 'First Name',
        type: 'text',
        width: '4',
        defaultValue: 'John',
        validations: [Validators.required, Validators.minLength(1), Validators.maxLength(5)],
    },
    {
        key: 'lastName',
        label: 'Last Name',
        type: 'text',
        width: '4',
        defaultValue: 'Doe',
        validations: [Validators.required, Validators.minLength(1), Validators.maxLength(5)],
    },
    { key: 'email', label: 'Email', type: 'text', width: '4', validations: [Validators.required, Validators.email] },
    { key: 'age', label: 'Age', type: 'text', numberwidth: '4', validations: [Validators.required] },
    { key: 'dateOfBirth', label: 'Date Of Birth', type: 'date', width: '4', validations: [Validators.required] },
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
    {
        key: 'details',
        type: 'table',
        columns: [
            { key: 'addressLineOne', label: 'Address Line One', type: 'text', width: '4', validations: [Validators.required] },
            { key: 'addressLineTwo', label: 'Address Line Two', type: 'text', width: '4', validations: [Validators.required] },
        ],
    },
];
