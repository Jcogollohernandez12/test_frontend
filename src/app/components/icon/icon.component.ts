import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  COLOR_BLACK,
  COLOR_ERROR,
  COLOR_GRAY,
  COLOR_SUCCESSFUL,
  COLOR_WHITE,
  PRIMARY_DARK_BLUE,
  PRIMARY_LIGHT_BLUE,
} from '../../../utils/constants/colors.constants';
import { iconThemes, validKeys } from '../../../utils/types/icon.types';
import {
  CLEAR_BUTTON_THEME,
  DARK_BLUE,
  ERROR_THEME,
  GRAY_THEME,
  LIGHT_BLUE,
  LIGHT_THEME,
  SUCCESSFUL_THEME,
} from '../../../utils/constants/icon.constants';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
  /*
    Los parámetros que recibe el componente básicamente son dos, el nombre del icono que de ser posible debe ser
    definido dentro de una constante en el componente donde se vaya a usar y utilizar las constantes de los iconos
    alojadas en la carpeta utils, y lo mismo sucedería para el tema del icono. Esto para evitar errores y facilitar
    la modificación y el testeo.
  */

  @Input() iconName!: validKeys;
  @Input() iconTheme!: iconThemes;

  primary!: string;
  secondary!: string;

  ngOnInit(): void {
    this.setThemeColor();
  }

  private setThemeColor(): void {
    switch (this.iconTheme) {
      case LIGHT_THEME:
        this.primary = COLOR_WHITE;
        this.secondary = COLOR_BLACK;
        break;

      case GRAY_THEME:
        this.primary = COLOR_GRAY;
        break;

      case LIGHT_BLUE:
        this.primary = PRIMARY_LIGHT_BLUE;
        this.secondary = COLOR_BLACK;
        break;

      case CLEAR_BUTTON_THEME:
        this.primary = COLOR_WHITE;
        this.secondary = PRIMARY_DARK_BLUE;
        break;

      case DARK_BLUE:
        this.primary = PRIMARY_DARK_BLUE;
        this.secondary = COLOR_WHITE;
        break;

      case ERROR_THEME:
        this.primary = COLOR_ERROR;
        this.secondary = COLOR_WHITE;
        break;

      case SUCCESSFUL_THEME:
        this.primary = COLOR_SUCCESSFUL;
        this.secondary = COLOR_WHITE;
        break;

      default:
        this.primary = COLOR_BLACK;
        this.secondary = COLOR_WHITE;
        break;
    }
  }
}
