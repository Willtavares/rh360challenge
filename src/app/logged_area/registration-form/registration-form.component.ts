import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent implements OnInit {
  faCaretDown = faCaretDown;
  registrationForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      companyType: [''],
      companyName: ['', Validators.required],
      cnpj: ['', Validators.required],
      cep: [''],
      address: [''],
      neighborhood: [''],
      state: [''],
      city: [''],
      complement: [''],
      cellphone: ['', Validators.required],
      moderator: ['', Validators.required],
      cpf: [''],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    console.log('Cai Aqui Pelo menos?');

    if (this.registrationForm.valid) {
      console.log('Essa eu quero ver agora: ', this.registrationForm.value);

      window.sessionStorage.setItem(
        'registration',
        JSON.stringify(this.registrationForm.value)
      );

      this.router.navigateByUrl('/registered');
    }
  }
}
