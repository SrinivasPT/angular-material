import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
    selector: 'app-mat-input',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule],
    templateUrl: './mat-input.component.html',
    styleUrl: './mat-input.component.css',
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
