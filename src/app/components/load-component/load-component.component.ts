import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';
import { LOADING_CIRCLE } from '../../../utils/constants/icon.constants';
import { validKeys } from '../../..//utils/types/icon.types';

@Component({
  selector: 'app-load-component',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './load-component.component.html',
  styleUrls: ['./load-component.component.scss'],
})
export class LoadComponentComponent {
  loadingIconName: validKeys = LOADING_CIRCLE;
}
