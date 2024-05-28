import { FormArray, FormControl, FormGroup } from '@angular/forms';

export class InvalidControl {
  controlName;

  groupName;
  arrayName;

  errors;
  controlType;

  groupErrors;
  arrayErrors;

  index;

  control;

  constructor() {}
}

export type FormType = FormControl | FormGroup | FormArray;
