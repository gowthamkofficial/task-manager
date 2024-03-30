import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class ToasterService {
  constructor(private toaster: MatSnackBar) {}

  show(message: any, duration?: any) {
    this.toaster.open(message, '', { duration: duration ?? 2 });
  }
}
