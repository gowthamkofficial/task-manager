import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { LoaderService } from 'src/app/core/services/loader.service';
import { ToasterService } from 'src/app/core/services/toaster.service';
import { SessionService } from '../session.service';
import { UserService } from 'src/app/core/services/user.service';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { REGEXPRESSIONS } from 'src/app/core/configs/constants';
import { ErrorMessageService } from 'src/app/core/services/error-message.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;

  constructor(
    private toaster: ToasterService,
    private loader: LoaderService,
    private service: SessionService,
    private userService: UserService,
    private errorMessage: ErrorMessageService
  ) {}

  ngOnInit(): void {
    this.initialForm();
  }

  initialForm() {
    this.signInForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.pattern(REGEXPRESSIONS.validators.username),
      ]),
      password: new FormControl('', [Validators.required]),
    });
  }

  get form() {
    return this.signInForm.controls;
  }

  test = new FormGroup({
    text: new FormControl('', [
      Validators.required,
      Validators.pattern(REGEXPRESSIONS.validators.username),
    ]),
    number: new FormControl('', [
      Validators.required,
      Validators.min(1),
      Validators.max(10),
    ]),

    group: this.groupControl,

    array: new FormArray([this.arrayControl, this.arrayControl]),
  });

  get groupControl() {
    return new FormGroup({
      control1: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      control2: new FormControl('', [Validators.required, Validators.min(10)]),
    });
  }

  get arrayControl() {
    return new FormGroup({
      arraycontrol1: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      arraycontrol2: new FormControl('', [
        Validators.required,
        Validators.min(10),
      ]),
    });
  }

  signIn() {
    this.errorMessage._findInvalidControls(this.test);
  }
}
