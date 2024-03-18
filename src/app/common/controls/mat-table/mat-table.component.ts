import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormArray, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';

@Component({
    selector: 'app-mat-table',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatTableModule],
    templateUrl: './mat-table.component.html',
    styleUrls: ['./mat-table.component.css'],
})
export class MatTableComponent implements OnInit, OnChanges {
    @Input() formArray!: FormArray;
    @Input() config: any;
    displayedColumns: string[] = [];
    tableData: any[] = [];

    ngOnInit(): void {
        this.setupTable();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['formArray'] || changes['config']) {
            this.setupTable();
        }
    }

    private setupTable(): void {
        if (this.config && this.config.columns) {
            this.displayedColumns = this.config.columns.map((col: any) => col.key);
        }
        if (this.formArray) {
            this.updateTableData();
            // React to form array changes
            this.formArray.valueChanges.subscribe((values) => {
                this.updateTableData();
            });
        }
    }

    private updateTableData(): void {
        this.tableData = this.formArray.controls.map((group) => group.value);
    }
}
