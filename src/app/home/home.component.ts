import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  signupForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    window.sessionStorage.clear();

    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      terms: [false, Validators.requiredTrue],
    });

    this.signupForm.setValidators(this.passwordMatchValidator);
  }

  onSubmit() {
    if (this.signupForm.valid) {
      // Lógica para enviar o formulário ou executar outras ações
      window.sessionStorage.setItem(
        'register',
        JSON.stringify(this.signupForm.value)
      );

      this.router.navigateByUrl('/logged');
    }
  }

  passwordMatchValidator: ValidatorFn = (
    control: AbstractControl
  ): { [key: string]: any } | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (
      password &&
      confirmPassword &&
      password.value !== confirmPassword.value
    ) {
      return { passwordMismatch: true };
    }

    return null;
  };
}
