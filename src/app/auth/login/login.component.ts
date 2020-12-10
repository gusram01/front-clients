import Swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  private emailPattern = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  loginForm: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private location: Location
  ) {
    this.initForm();
  }

  ngOnInit(): void {}

  initForm(): void {
    this.loginForm = this.fb.group({
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(54),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(54),
          Validators.pattern(this.emailPattern),
        ],
      ],
    });
  }

  back(): void {
    this.location.back();
  }

  onSubmit(): void {
    if (this.loginForm.pristine || this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    Swal.fire({
      icon: 'info',
      title: 'Info sended',
      text: 'Please wait...',
      allowOutsideClick: false,
      allowEscapeKey: false,
      showConfirmButton: false,
      willOpen: () => Swal.showLoading(),
    });

    this.authService.login(this.loginForm.value).subscribe(
      (data: any) => {
        if (data.data.token) {
          localStorage.setItem(
            'myClient$T0k3n',
            JSON.stringify({ token: data.data.token })
          );
        }
        Swal.fire({
          icon: 'success',
          title: 'Thank you',
          timer: 1500,
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
}
