import { Injectable } from '@angular/core';
import { FormType, InvalidControl } from './error-message.model';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
} from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ErrorMessageService {
  constructor() {}

  public _findInvalidControls(control: FormType) {}

  private _getControlName(c: AbstractControl): string | null {
    const formGroup = c.parent.controls;
    return Object.keys(formGroup).find((name) => c === formGroup[name]) || null;
  }

  private _returnControlErrors(
    control: FormControl,
    type?: 'control' | 'group' | 'array',
    index?: any
  ): InvalidControl | any {
    let invalidControl = new InvalidControl();
    if (control.invalid) {
      invalidControl.controlName = this._getControlName(control);
      invalidControl.controlType = type ?? 'control';
      invalidControl.errors = control.errors ? Object.keys(control.errors) : [];
      invalidControl.index = type == 'array' ? index : null;

      return invalidControl;
    } else {
      return null;
    }
  }

  private _returnGroupErrors(
    group: FormGroup,
    type?: 'control' | 'group' | 'array'
  ) {
    let controlNames: any[] = Object.keys(group.value);

    let invalidControl: any = controlNames.forEach((name: any) => {
      let control = group.get(name) as FormType;

      switch (true) {
        case control instanceof FormControl:
          return this._returnControlErrors(control, 'group');
        case control instanceof FormGroup:
          return this._returnGroupErrors(control, 'group');
        case control instanceof FormArray:
          return this._returnArrayErrors(control, 'group');
      }
    });
  }

  private _returnArrayErrors(
    array: FormArray,
    type?: 'control' | 'group' | 'array'
  ) {}
}
