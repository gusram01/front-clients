import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'errors',
})
export class ErrorsPipe implements PipeTransform {
  transform(value: any, ...args: any[]): string {
    if (!value) {
      return null;
    }
    return Object.keys(value)
      .map((key) => {
        let str = '';
        if (key === 'required') {
          str = 'This field is REQUIRED';
        }
        if (key === 'uniqueUser') {
          str = 'Please try another username';
        }
        if (key === 'uniqueEmail') {
          str = 'This Email already used';
        }
        if (key === 'equalPasswords') {
          str = 'Passwords are not the same';
        }
        if (key === 'minlength') {
          str = `This field with at least ${value[key].requiredLength} characters`;
        }
        if (key === 'maxlength') {
          str = `This field with max ${value[key].requiredLength} characters`;
        }
        if (key === 'pattern') {
          str = 'Please enter valid data';
        }
        return str;
      })
      .join(' , ');
  }
}
