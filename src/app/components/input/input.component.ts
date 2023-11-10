import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import {
  ARROW_DOWN_ICON,
  ERROR_THEME,
  EYE_ICON,
  FORM_ERROR,
  GRAY_THEME,
  HIDE_EYE_ICON,
  SEARCH_ICON,
} from '../../../utils/constants/icon.constants';
import { iconThemes, validKeys } from '../../../utils/types/icon.types';
import { IconComponent } from '../icon/icon.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, MatTooltipModule, IconComponent, FormsModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InputComponent,
    },
  ],
  encapsulation: ViewEncapsulation.None,
})
export class InputComponent implements ControlValueAccessor {
  @Input() labelText: string = 'Label';
  @Input() placeholder: string = 'Placeholder';
  @Input() identifier!: string;
  @Input() inputType!: string;
  @Input() msgError!: string;

  @Input() radioValue!: any;
  @Input() radioText!: string;
  @Input() selectOptions!: any;
  @Input() inputTooltipInfo: string = '';

  checkboxValue: boolean = false;
  eyeIconName: validKeys = EYE_ICON;
  hideEyeIconName: validKeys = HIDE_EYE_ICON;
  arrowDownIcon: validKeys = ARROW_DOWN_ICON;
  searchIconName: validKeys = SEARCH_ICON;
  errorIconName: validKeys = FORM_ERROR;
  errorIconTheme: iconThemes = ERROR_THEME;
  grayIconTheme: iconThemes = GRAY_THEME;
  isPasswordShowing: boolean = false;

  @Input() inputContent!: any;

  public onChange: any = () => {};
  public onTouched: any = () => {};

  public selectValueChange(event: any): void {
    const selectedAux = this.selectOptions.filter(
      (res: any) => res.name === event.target.value
    );

    this.onChange(selectedAux[0].value);
  }

  public writeValue(input: any): void {
    this.inputContent = input;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public generalChanges(event: any): void {
    this.onChange(event);
  }

  public checkboxChanges(): void {
    this.checkboxValue = !this.checkboxValue;
    this.onChange(this.checkboxValue);
  }

  public showHidePassword(): void {
    this.isPasswordShowing = !this.isPasswordShowing;
  }
}
