import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
} from '@angular/forms';

export interface _invalidControls {
  controlName;
  type: 'control' | 'group' | 'array';
  index?;
  errors?: any[];
  messages?: any[];
}
export type ControlType = 'control' | 'group' | 'array';

export class ErrorControl implements _invalidControls {
  controlName;
  type: ControlType;
  errors?: any[];
  constructor(control: AbstractControl, type: ControlType, inx?: any) {
    this.type = type;
    this.errors = control?.errors ? Object.keys(control?.errors) : [];
    this.controlName = this.getControlName(control);
  }

  getControlName(c: AbstractControl): string | null {
    const formGroup = c.parent.controls;
    return Object.keys(formGroup).find((name) => c === formGroup[name]) || null;
  }
}

@Injectable({
  providedIn: 'root',
})
export class ErrorMessageService {
  constructor() {}

  _findInvalidControls(abstractControl: AbstractControl) {
    let invalidControls: any[] = [];

    let controlType: 'control' | 'group' | 'array';
    switch (true) {
      case abstractControl instanceof FormControl:
        controlType = 'control';
        break;
      case abstractControl instanceof FormGroup:
        controlType = 'group';
        break;
      case abstractControl instanceof FormArray:
        controlType = 'array';
        break;
    }

    switch (controlType) {
      case 'control':
        {
          if (abstractControl.invalid) {
            invalidControls.push(new ErrorControl(abstractControl, 'control'));
          }
        }
        break;
      case 'group':
        {
          let controls = Object.keys(abstractControl.value);
          controls.forEach((cnt) => {
            if (abstractControl.get(cnt).invalid) {
              console.log(abstractControl.get(cnt));

              invalidControls.push(
                new ErrorControl(abstractControl.get(cnt), 'group')
              );
            }
          });
          console.log(controls);
        }
        break;
      case 'array':
        {
        }
        break;
    }
    console.log(invalidControls);

    return invalidControls;
  }

  public findInvalidControlsRecursive(
    formToInvestigate: FormGroup | FormArray
  ): string[] {
    var invalidControls: any[] = [];
    let recursiveFunc = (form: FormGroup | FormArray) => {
      Object.keys(form.controls).forEach((field) => {
        const control = form.get(field);
        if (control.invalid)
          invalidControls.push(new ErrorControl(control, 'control'));
        if (control instanceof FormGroup) {
          recursiveFunc(control);
        } else if (control instanceof FormArray) {
          recursiveFunc(control);
        }
      });
    };
    recursiveFunc(formToInvestigate);
    return invalidControls;
  }
}

/**
 *
 * controlName
 * errors
 *
 *
 */
