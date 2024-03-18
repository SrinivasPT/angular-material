import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
    selector: 'app-mat-datepicker',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule, // or another DateAdapter if you're using a different one
    ],
    templateUrl: './mat-datepicker.component.html',
    styleUrls: ['./mat-datepicker.component.css'],
})
export class MatDatepickerComponent implements OnInit {
    @Input() control!: FormControl;
    @Input() config: any = '';
    label: string = '';
    placeholder: string = '';
    errorMessage: string = '';

    ngOnInit(): void {
        this.label = this.config.label;
        this.placeholder = this.config.label;
        this.errorMessage = this.config.errorMessage;
    }
}
