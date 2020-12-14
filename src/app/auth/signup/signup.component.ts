import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';
import { MyvalidsService } from '../services/myvalids.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  title = 'Register to MyClients';
  private emailPattern = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

  signupForm: FormGroup;
  loading = false;
  isHome = true;
  hide = true;
  hideConfirm = true;

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
          this.myValids.uniqueUser(),
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
          this.myValids.uniqueEmail(),
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

    const newUser = {
      ...this.signupForm.value,
    };
    delete newUser.confirm;

    this.authService.signup(newUser).subscribe(
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
