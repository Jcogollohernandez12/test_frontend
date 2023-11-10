import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconComponent } from './icon.component';

import {
  DARK_THEME,
  LIGHT_THEME,
  CLEAR_BUTTON_THEME,
  LIGHT_BLUE,
  DARK_BLUE,
  ERROR_THEME,
  SUCCESSFUL_THEME,
} from '../../../utils/constants/icon.constants';
import {
  COLOR_BLACK,
  COLOR_ERROR,
  COLOR_SUCCESSFUL,
  COLOR_WHITE,
  PRIMARY_DARK_BLUE,
  PRIMARY_LIGHT_BLUE,
} from '../../../utils/constants/colors.constants';

describe('IconComponent', () => {
  let component: IconComponent;
  let fixture: ComponentFixture<IconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IconComponent],
    });
    fixture = TestBed.createComponent(IconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set theme colors for DARK_THEME', () => {
    component.iconTheme = DARK_THEME;
    component.ngOnInit();
    expect(component.primary).toBe(COLOR_BLACK);
    expect(component.secondary).toBe(COLOR_WHITE);
  });

  it('should set theme colors for LIGHT_THEME', () => {
    component.iconTheme = LIGHT_THEME;
    component.ngOnInit();
    expect(component.primary).toBe(COLOR_WHITE);
    expect(component.secondary).toBe(COLOR_BLACK);
  });

  it('should set theme colors for CLEAR_BUTTON_THEME', () => {
    component.iconTheme = CLEAR_BUTTON_THEME;
    component.ngOnInit();
    expect(component.primary).toBe(COLOR_WHITE);
    expect(component.secondary).toBe(PRIMARY_DARK_BLUE);
  });

  it('should set theme colors for LIGHT_BLUE', () => {
    component.iconTheme = LIGHT_BLUE;
    component.ngOnInit();
    expect(component.primary).toBe(PRIMARY_LIGHT_BLUE);
    expect(component.secondary).toBe(COLOR_BLACK);
  });

  it('should set theme colors for DARK_BLUE', () => {
    component.iconTheme = DARK_BLUE;
    component.ngOnInit();
    expect(component.primary).toBe(PRIMARY_DARK_BLUE);
    expect(component.secondary).toBe(COLOR_WHITE);
  });

  it('should set theme colors for ERROR_THEME', () => {
    component.iconTheme = ERROR_THEME;
    component.ngOnInit();
    expect(component.primary).toBe(COLOR_ERROR);
    expect(component.secondary).toBe(COLOR_WHITE);
  });

  it('should set theme colors for SUCCESSFUL_THEME', () => {
    component.iconTheme = SUCCESSFUL_THEME;
    component.ngOnInit();
    expect(component.primary).toBe(COLOR_SUCCESSFUL);
    expect(component.secondary).toBe(COLOR_WHITE);
  });

  it('should set default theme colors', () => {
    component.ngOnInit();
    expect(component.primary).toBe(COLOR_BLACK);
    expect(component.secondary).toBe(COLOR_WHITE);
  });
});
