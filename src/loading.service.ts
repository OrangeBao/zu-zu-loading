import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoadingService {
  private spinnerSubject: Subject<any> = new Subject<any>();

  getMessage(): Observable<any> {
    return this.spinnerSubject.asObservable();
  }

  constructor() {

  }

  show() {
    this.spinnerSubject.next(true);
  }

  hidden() {
    this.spinnerSubject.next(false);
  }
}
