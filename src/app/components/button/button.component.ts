import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  buttonHeights,
  buttonPaddings,
  buttonThemes,
} from '../../../utils/types/button.types';
import { iconThemes, validKeys } from '../../../utils/types/icon.types';
import { IconComponent } from '../icon/icon.component';
import {
  DARK_BLUE,
  HEIGHT_24,
  PADDING_X_24,
} from '../../../utils/constants/button.constants';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule,IconComponent],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  /*
    Los parámetros de los botones se deben definir en el componente padre como una constante, y utilizar las constantes definidas
    en utils/constants para asignar valores a los botones a excepción del buttonText, las constantes iconName e iconTheme deben
    ser definidas por igual en el componente padre y utilizar el archivo de constantes relacionado a los iconos situado en la misma
    carpeta que la de los botones. Esto para modificar rapidamente los valores, evitar errores y testear de manera mas sencilla.
  */

  @Input() theme: buttonThemes = DARK_BLUE;
  @Input() height: buttonHeights = HEIGHT_24;
  @Input() buttonText: string = 'button Text';
  @Input() buttonXpadding: buttonPaddings = PADDING_X_24;
  @Input() isfullWith: boolean = false;
  @Input() isDisabled: boolean = false;

  // si el nombre del icono no es asignado simplemente el componente no utilizará el icono en la vista

  @Input() iconName!: validKeys;
  @Input() iconTheme!: iconThemes;

  @Output() buttonCallBack = new EventEmitter<void>();

  onClickButton() {
    if (this.isDisabled === false) {
      this.buttonCallBack.emit();
    }
  }
}
