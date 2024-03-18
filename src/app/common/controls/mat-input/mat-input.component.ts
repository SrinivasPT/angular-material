import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
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
export class MatInputComponent implements OnInit {
    @Input() control!: FormControl;
    @Input() config!: any;

    label: string = '';
    type: string = 'text';
    width: string = '100%';
    placeholder: string = '';
    defaultValue: string = '';
    errorMessage: string = '';

    ngOnInit(): void {
        this.label = this.config.label;
        this.type = this.config.type;
        this.width = this.config.width;
        this.placeholder = this.config.label;
        this.defaultValue = this.config.defaultValue;
        this.errorMessage = this.config.errorMessage;
    }
}
