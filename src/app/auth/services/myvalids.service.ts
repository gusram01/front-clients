import { Injectable } from '@angular/core';
import {
  FormGroup,
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, debounceTime, switchMap, take } from 'rxjs/operators';
import { AuthService } from './auth.service';

interface MyError {
  [key: string]: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class MyvalidsService {
  constructor(private authService: AuthService) {}
  private isEmptyInputValue(value: any): boolean {
    return value === null || value.length === 0;
  }

  gender(control: AbstractControl): ValidationErrors {
    const str = control.value as string;
    return ['MALE', 'FEMALE'].includes(str) ? null : { validGender: false };
  }
  confirmPass(password1: string, password2: string): any {
    return (formGroup: FormGroup) => {
      const pass1 = formGroup.controls[password1];
      const pass2 = formGroup.controls[password2];
      if (pass1.value === pass2.value) {
        return pass2.setErrors(null);
      }
      return pass2.setErrors({ equalPasswords: false });
    };
  }

  uniqueEmail(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      if (this.isEmptyInputValue(control.value)) {
        return of(null);
      }
      if (control.value === '') {
        return of(null);
      }

      return control.valueChanges.pipe(
        debounceTime(600),
        take(1),
        switchMap(() =>
          this.authService
            .isValid({ key: 'email', value: control.value })
            .pipe(map((data) => (!data.data ? { uniqueEmail: false } : null)))
        )
      );
    };
  }

  uniqueUser(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      if (this.isEmptyInputValue(control.value)) {
        return of(null);
      }
      if (control.value === '') {
        return of(null);
      }

      return control.valueChanges.pipe(
        debounceTime(600),
        take(1),
        switchMap(() =>
          this.authService
            .isValid({ key: 'nick', value: control.value })
            .pipe(map((data) => (!data.data ? { uniqueUser: false } : null)))
        )
      );
    };
  }
}
