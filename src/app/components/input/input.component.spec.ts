import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputComponent } from './input.component';
import { ERROR_THEME, EYE_ICON, FORM_ERROR, HIDE_EYE_ICON, SEARCH_ICON } from 'src/utils/constants/icon.constants';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [InputComponent]
    });
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize isPasswordShowing to false', () => {
    expect(component.isPasswordShowing).toBe(false);
  });

  it('should call showHidePassword and toggle isPasswordShowing', () => {
    component.isPasswordShowing = false;
    component.showHidePassword();
    expect(component.isPasswordShowing).toBe(true);

    component.isPasswordShowing = true;
    component.showHidePassword();
    expect(component.isPasswordShowing).toBe(false);
  });

  it('should set inputContent when writeValue is called', () => {
    const inputValue = 'testValue';
    component.writeValue(inputValue);
    expect(component.inputContent).toBe(inputValue);
  });

  it('should call onChange when inputContent changes', () => {
    jest.spyOn(component, 'onChange');
    const newValue = 'newInputValue';
    component.inputContent = newValue;
    component.onChange(newValue);
    expect(component.onChange).toHaveBeenCalledWith(newValue);
  });

  it('should call onTouched when inputContent changes', () => {
    jest.spyOn(component, 'onTouched');
    const newValue = 'newInputValue';
    component.inputContent = newValue;
    component.onTouched();
    expect(component.onTouched).toHaveBeenCalled();
  });

  it('should set eyeIconName and hideEyeIconName correctly', () => {
    expect(component.eyeIconName).toBe(EYE_ICON);
    expect(component.hideEyeIconName).toBe(HIDE_EYE_ICON);
  });

  it('should set searchIconName correctly', () => {
    expect(component.searchIconName).toBe(SEARCH_ICON);
  });

  it('should set errorIconName and errorIconTheme correctly', () => {
    expect(component.errorIconName).toBe(FORM_ERROR);
    expect(component.errorIconTheme).toBe(ERROR_THEME);
  });
});
