import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
    selector: 'app-mat-select',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatSelectModule],
    template: `
        <mat-form-field appearance="fill">
            <mat-label>{{ label }}</mat-label>
            <mat-select [formControl]="control">
                <mat-option *ngFor="let option of options" [value]="option.value">
                    {{ option.label }}
                </mat-option>
            </mat-select>
            <mat-error *ngIf="control.invalid">{{ errorMessage }}</mat-error>
        </mat-form-field>
    `,
    styles: [
        `
            :host {
                width: 100%; /* or use @Input() width to customize */
            }
        `,
    ],
})
export class MatSelectComponent {
    @Input() control!: FormControl;
    @Input() label: string = '';
    @Input() options: { label: string; value: any }[] = [];
    @Input() placeholder: string = '';
    @Input() errorMessage: string = '';
}
