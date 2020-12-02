import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';
import { MyvalidsService } from '../../core/services/myvalids.service';
import { AuthService } from '../../core/services/auth.service';
import { ResponseToken } from '../../core/models/token_response';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
})
export class SignupFormComponent implements OnInit {
  private emailPattern = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  signupForm: FormGroup;
  loading = false;
  isHome = true;

  constructor(
    private fb: FormBuilder,
    private location: Location,
    private router: Router,
    private myValids: MyvalidsService,
    private authService: AuthService
  ) {
    this.initForm();
  }

  ngOnInit(): void {}

  private initForm(): void {
    this.signupForm = this.fb.group(
      {
        nick: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(54),
          ],
          this.myValids.uniqueUser(this.authService),
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(54),
          ],
        ],
        confirm: ['', [Validators.required, Validators.minLength(6)]],
        email: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(54),
            Validators.pattern(this.emailPattern),
          ],
          this.myValids.uniqueEmail(this.authService),
        ],
      },
      {
        validators: this.myValids.confirmPass('password', 'confirm'),
      }
    );
  }
  onSubmit(): void {
    if (this.signupForm.pristine || this.signupForm.invalid) {
      return;
    }
    // if (!this.signupForm.get('_id').pristine) {
    //   return;
    // }

    this.loading = true;
    Swal.fire({
      icon: 'info',
      title: 'Info sended',
      text: 'Please wait...',
      showLoaderOnConfirm: true,
      allowOutsideClick: false,
    });
    Swal.showLoading();
    const newUser = {
      ...this.signupForm.value,
    };
    delete newUser.confirm;

    this.authService.signup(newUser).subscribe(
      (data: any) => {
        console.log(data);
        if (data.data.token) {
          localStorage.setItem(
            'myClient$T0k3n',
            JSON.stringify({ token: data.data.token })
          );
        }
        Swal.fire({
          icon: 'success',
          title: 'Thank you',
          timer: 5000,
        }).then(() => {
          this.loading = false;
          this.router.navigateByUrl(`/admin/dashboard`);
        });
      },
      (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oopss, something went wrong',
          text: err.error.error,
        });
        this.loading = false;
      }
    );
  }

  back(): void {
    this.location.back();
  }
}