import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrentStepService {
  private subject = new BehaviorSubject<number>(1);
  constructor() {}

  addRouteNumber(route_number: number) {
    this.subject.next(route_number);
  }

  clearRouteNumber() {
    this.subject.complete();
  }

  getRouteNumber(): Observable<number> {
    return this.subject.asObservable();
  }
}
