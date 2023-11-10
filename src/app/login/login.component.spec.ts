import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockRouter: { navigate: jest.Mock };

  beforeEach(() => {
    mockRouter = {
      navigate: jest.fn(),
    };

    TestBed.configureTestingModule({
      imports: [LoginComponent, ReactiveFormsModule],
      providers: [{ provide: Router, useValue: mockRouter }],
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the login form with email and password controls', () => {
    expect(component.loginForm).toBeDefined();
    expect(component.email instanceof FormControl).toBe(true);
    expect(component.password instanceof FormControl).toBe(true);
  });

  it('should show/hide password', () => {
    expect(component.isPasswordShowing).toBe(false);
    component.showHidePassword();
    expect(component.isPasswordShowing).toBe(true);
    component.showHidePassword();
    expect(component.isPasswordShowing).toBe(false);
  });

  it('should submit the form when valid', () => {
    const formGroupMock = {
      value: {
        email: 'test@example.com',
        password: 'password123',
      },
      valid: true,
      controls: {
        email: {
          value: 'test@example.com',
          valid: true,
        },
        password: {
          value: 'password123',
          valid: true,
        },
      },
    };

    component.isErrorMessage = '';

    component.loginForm = formGroupMock as any;

  })})
