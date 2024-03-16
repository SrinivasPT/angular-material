import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
    selector: 'app-mat-input',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule],
    template: `
        <mat-form-field appearance="fill">
            <mat-label>{{ label }}</mat-label>
            <input matInput [formControl]="control" [type]="type" [placeholder]="placeholder" [defaultValue]="defaultValue" />
            <mat-error *ngIf="control.invalid">{{ errorMessage }}</mat-error>
        </mat-form-field>
    `,
})
export class MatInputComponent {
    @Input() control!: FormControl;
    @Input() label: string = '';
    @Input() type: string = 'text';
    @Input() width: string = '100%';
    @Input() placeholder: string = '';
    @Input() defaultValue: string = '';
    @Input() errorMessage: string = '';
}
