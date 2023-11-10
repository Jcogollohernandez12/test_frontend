import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';
import { IconComponent } from '../icon/icon.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ButtonComponent, IconComponent],
    });
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit buttonCallBack event on click', () => {
    let emitted = false;
    component.buttonCallBack.subscribe(() => {
      emitted = true;
    });

    component.onClickButton();
    expect(emitted).toBe(true);
  });
});
