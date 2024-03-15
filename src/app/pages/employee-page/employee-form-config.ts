import { Validators } from '@angular/forms';

export const employeeFormConfig = [
    { key: 'firstName', label: 'First Name', type: 'text', width: '4', defaultValue: 'John', validations: [Validators.required] },
    { key: 'lastName', label: 'Last Name', type: 'text', width: '4', defaultValue: 'Doe', validations: [Validators.required] },
    {
        key: 'details',
        type: 'group',
        fields: [{ key: 'email', label: 'Email', type: 'text', width: '4', validations: [Validators.required] }],
    },
    // { key: 'age', label: 'Age', type: 'text', numberwidth: '4', validations: [Validators.required] },
    // {
    //     key: 'department',
    //     label: 'Department',
    //     type: 'text',
    //     width: '4',
    //     options: [
    //         { label: 'Engineering', value: 'engineering' },
    //         { label: 'Marketing', value: 'marketing' },
    //         { label: 'Human Resources', value: 'hr' },
    //         { label: 'Finance', value: 'finance' },
    //     ],
    //     validations: [Validators.required],
    // },
    // { key: 'startDate', label: 'Start Date', type: 'date', width: '4', validations: [Validators.required] },
];
