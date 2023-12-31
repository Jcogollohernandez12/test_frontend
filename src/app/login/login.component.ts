import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthModel } from '../interfaces/auth.model';
import { HEIGHT_64 } from '../../utils/constants/button.constants';
import { EYE_ICON } from '../../utils/constants/icon.constants';
import { buttonHeights } from '../../utils/types/button.types';
import { validKeys } from '../../utils/types/icon.types';
import { ButtonComponent } from '../../app/components/button/button.component';
import { IconComponent } from '../components/icon/icon.component';
import { InputComponent } from '../components/input/input.component';
import { LoadComponentComponent } from '../components/load-component/load-component.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    IconComponent,
    InputComponent,
    ButtonComponent,
    LoadComponentComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {

  fb = inject(NonNullableFormBuilder);
  router = inject(Router);
  iconName: validKeys = EYE_ICON;
  buttonHeight: buttonHeights = HEIGHT_64;
  isLoading: boolean = false;

  loginForm!: FormGroup;

  isRegisterUser: boolean = false;
  isErrorMessage!: string;

  ngOnInit(): void {
    this.createForm();
    this.cleanErrorMessage();
  }

  private createForm(): void {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required,Validators.minLength(6)]),
    });
  }

  get email() {
    return this.loginForm.controls['email'];
  }

  get password() {
    return this.loginForm.controls['password'];
  }

  private cleanErrorMessage(): void {
    this.loginForm.valueChanges.subscribe(() => {
      this.isErrorMessage = '';
    });
  }

  public onSubmit(formData: AuthModel): void {
    if (this.loginForm.valid && this.isErrorMessage === '') {
      this.isLoading = true;
 var data = {
       Username: formData.email,
        password: formData.password,
      };

      console.log('Formulario enviado:', data);

      //this.authService.login(formData).subscribe(
      //  (response) => {
      //    console.log('Usuario autenticado:', response);
      //    this.isLoading = false;
      //    // this.router.navigate(['/ruta-de-inicio']);
      //  },
      //  (error) => {
      //    // Error en el login
      //    console.error('Error en el login:', error);
      //    this.isErrorMessage = 'Error en el inicio de sesión. Verifica tus credenciales.';
      //    this.isLoading = false;
      //  }
      //);
      this.isLoading = false;
    }
  }

  public gotToRouterRegister(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.router.navigate(['/register-user']);
      this.isLoading = false;
    }, 500);
  }
}
