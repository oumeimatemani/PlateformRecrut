import { Component, inject, Injectable } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperIntl, MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';

@Injectable()
export class StepperIntl extends MatStepperIntl {
  // the default optional label text, if unspecified is "Optional"
  override optionalLabel = 'Optional Label';
}
@Component({
  selector: 'app-mat-stepper-intl-service',
  templateUrl: './mat-stepper-intl-service.component.html',
  styleUrl: './mat-stepper-intl-service.component.css',
  providers: [{ provide: MatStepperIntl, useClass: StepperIntl }],
  standalone: true,
  imports: [
    MatRadioModule,
    FormsModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class MatStepperIntlServiceComponent {
  private _formBuilder = inject(FormBuilder);

  optionalLabelText!: string;
  optionalLabelTextChoices: string[] = ['Option 1', 'Option 2', 'Option 3'];
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  constructor(
    private _matStepperIntl: MatStepperIntl,
  ) { }

  updateOptionalLabel() {
    this._matStepperIntl.optionalLabel = this.optionalLabelText;
    // Required for the optional label text to be updated
    // Notifies the MatStepperIntl service that a change has been made
    this._matStepperIntl.changes.next();
  }
}
