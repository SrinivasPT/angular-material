import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
    selector: 'app-mat-number',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, MatInputModule, CommonModule],
    template: `
        <mat-form-field appearance="fill">
            <mat-label>{{ label }}</mat-label>
            <input matInput [formControl]="control" [type]="'number'" [placeholder]="placeholder" />
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
export class MatNumberComponent implements OnInit {
    @Input() control!: FormControl;
    @Input() config!: any;

    label: string = '';
    placeholder: string = '';
    errorMessage: string = '';

    ngOnInit(): void {
        this.label = this.config.label;
        this.placeholder = this.config.placeholder;
        this.errorMessage = this.config.errorMessage;
    }
}
