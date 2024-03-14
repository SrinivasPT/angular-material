import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerComponent } from '../controls/mat-datepicker/mat-datepicker.component';
import { MatInputComponent } from '../controls/mat-input/mat-input.component';
import { DynamicFormBuilderService } from '../services/dynamic-form-builder.service';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatInputComponent, MatDatepickerComponent, FlexLayoutModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.css',
})
export class DynamicFormComponent implements OnInit {
  @Input() config!: any[];
  formGroup!: FormGroup;

  constructor(private formBuilder: DynamicFormBuilderService) {}

  ngOnInit() {
    this.formGroup = this.formBuilder.createForm(this.config);
  }

  getControl(key: string): FormControl {
    const control = this.formGroup.get(key);
    return control instanceof FormControl ? control : new FormControl();
  }
}
