import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { MyvalidsService } from '../../core/services/myvalids.service';
import { CustomersService } from '../../core/services/customers.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent implements OnInit {
  newClient: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private clientsApi: CustomersService,
    private myValids: MyvalidsService
  ) {
    this.createForm();
  }

  ngOnInit(): void {}

  private createForm(): void {
    this.newClient = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      curp: [
        '',
        [
          Validators.required,
          Validators.minLength(18),
          Validators.maxLength(18),
        ],
      ],
      mobile: ['', [Validators.required, Validators.minLength(8)]],
      email: [''],
      gender: ['', [Validators.required, this.myValids.gender]],
    });
  }

  onSubmit(): void {
    if (this.newClient.pristine || this.newClient.invalid) {
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

    this.clientsApi.create(this.newClient.value).subscribe(
      (data) => {
        Swal.fire({
          icon: 'success',
          title: 'Thank you',
          timer: 2500,
        }).then(() => {
          this.loading = false;
          this.newClient.reset();
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
