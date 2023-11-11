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
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    IconComponent,
    InputComponent,
    ButtonComponent,
    LoadComponentComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  ngOnInit(): void {
   this.createForm();
   this.cleanErrorMessage();
  }
  fb = inject(NonNullableFormBuilder);
  router = inject(Router);
  iconName: validKeys = EYE_ICON;
  isLoginShowing: boolean = false;
  buttonHeight: buttonHeights = HEIGHT_64;
  isLoading: boolean = false;


  registerForm!: FormGroup;

  isRegisterUser: boolean = false;
  isErrorMessage!: string;


  private createForm(): void {
    this.registerForm = this.fb.group({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required,Validators.minLength(6)]),
    });
  }

  get username() {
    return this.registerForm.controls['username'];
  }

  get password() {
    return this.registerForm.controls['password'];
  }

  private cleanErrorMessage(): void {
    this.registerForm.valueChanges.subscribe(() => {
      this.isErrorMessage = '';
    });
  }



  public onSubmit(formData: AuthModel): void {
    if (this.registerForm.valid && this.isErrorMessage === '') {
      this.isLoading = true;
      console.log('Formulario enviado:', formData);
      this.isLoading = false;
    }
  }

  public gotToRouterLogin(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.router.navigate(['/login']);
      this.isLoading = false;
    }, 500);
  }

}
