import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';

@Component({
    selector: 'app-mat-table',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, MatTableModule],
    templateUrl: './mat-table.component.html',
    styleUrl: './mat-table.component.css',
})
export class MatTableComponent implements OnInit {
    @Input() formArray: FormArray = this.formBuilder.array([]);
    @Input() config: any;

    columns: any[] = [];
    displayedColumns: string[] = [];
    dataSource: any[] = [];

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.columns = this.config.columns;
        this.displayedColumns = this.columns.map((col) => col.key);
    }

    // ngOnChanges(changes: SimpleChanges): void {
    //     if (changes['formArray']) {
    //         this.dataSource = this.formArray.value;
    //     }

    //     if (changes['columns']) {
    //         this.displayedColumns = this.columns.map((col) => col.key);
    //     }
    // }
}
