import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICON_CLOSE } from 'src/utils/constants/icon.constants';
import { validKeys } from 'src/utils/types/icon.types';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-general-modal',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './general-modal.component.html',
  styleUrls: ['./general-modal.component.scss'],
})
export class GeneralModalComponent {
  @Input() isModalClosed: boolean = false;
  @Output() closingModal = new EventEmitter();

  iconName: validKeys = ICON_CLOSE;

  public closeModal(): void {
    this.isModalClosed = false;
    this.closingModal.emit()
  }
}
