import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  /* Form group and Validations*/
  form: FormGroup;
  public loginInvalid = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      username: ['', Validators.email],
      password: ['', Validators.required],
    });
  }
  ngOnInit() {}

  /*Submit form data*/
  async onSubmit(): Promise<void> {
    this.loginInvalid = false;
    console.error(this.form);
    if (this.form.valid) {
      try {
        const username = this.form.get('username')?.value;
        const password = this.form.get('password')?.value;
        this.router.navigate(['home']);
      } catch (err) {
        console.error(err);
      }
    }
  }
}
