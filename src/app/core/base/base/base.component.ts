import { Location } from '@angular/common';
import { Injectable, Injector } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription, TeardownLogic } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export abstract class BaseComponent {
  private subscription = new Subscription();
  private location: Location;
  private snackBar: MatSnackBar;
  constructor(private injector: Injector) {
    this.snackBar = this.injector.get<MatSnackBar>(MatSnackBar);
    this.location = this.injector.get<Location>(Location);
  }

  public addSubscription(logic: TeardownLogic): void {
    this.subscription.add(logic);
  }

  public clearSubscription(): void {
    this.subscription.unsubscribe();
  }

  public goBack(): void {
    this.location.back();
  }
  public openSnackBarSuccess(message: string, timeDuration = 5000): void {
    if (message) {
      this.snackBar.open(message, 'close', {
        verticalPosition: 'top',
        horizontalPosition: 'center',
        duration: timeDuration,
      });
    }
  }

  public openSnackBarError(message: string, timeDuration = 5000): void {
    if (timeDuration === 0) {
      this.snackBar.open(message, 'close', {
        verticalPosition: 'top',
        horizontalPosition: 'center',
      });
    } else {
      this.snackBar.open(message, 'close', {
        verticalPosition: 'top',
        horizontalPosition: 'center',
        duration: timeDuration,
        panelClass: ['snackbar__error'],
      });
    }
  }
}
