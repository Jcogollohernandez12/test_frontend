import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralModalComponent } from './general-modal.component';
import { ICON_CLOSE } from '../../../utils/constants/icon.constants';

describe('GeneralModalComponent', () => {
  let component: GeneralModalComponent;
  let fixture: ComponentFixture<GeneralModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [GeneralModalComponent]
    });
    fixture = TestBed.createComponent(GeneralModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit closingModal event when closeModal is called', () => {
    jest.spyOn(component.closingModal, 'emit');

    component.closeModal();

    expect(component.closingModal.emit).toHaveBeenCalled();
  });

  it('should set isModalClosed to false when closeModal is called', () => {
    component.isModalClosed = true;

    component.closeModal();

    expect(component.isModalClosed).toBe(false);
  });

  it('should have an icon name of ICON_CLOSE', () => {
    expect(component.iconName).toBe(ICON_CLOSE);
  });
});
