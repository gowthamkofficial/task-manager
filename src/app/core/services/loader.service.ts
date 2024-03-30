import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  public loader: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() {}

  open() {
    this.loader.next(true);
  }

  close() {
    this.loader.next(false);
  }
}
