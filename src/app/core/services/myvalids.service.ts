import { Injectable } from '@angular/core';
import {
  FormGroup,
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

interface MyError {
  [key: string]: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class MyvalidsService {
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

  uniqueEmail(authApi: AuthService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors> =>
      authApi
        .isValid({ key: 'email', value: control.value })
        .pipe(
          map((data: { ok: boolean; data: boolean }) =>
            !data.data ? { uniqueEmail: false } : null
          )
        );
  }

  uniqueUser(authApi: AuthService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors> => {
      return authApi.isValid({ key: 'nick', value: control.value }).pipe(
        map((data: { ok: boolean; data: boolean }) => {
          return !data.data ? { uniqueUser: false } : null;
        })
      );
    };
  }
}
