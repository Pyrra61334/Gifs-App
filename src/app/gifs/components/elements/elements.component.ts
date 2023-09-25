import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-elements',
  templateUrl: './elements.component.html',
})
export class ElementsComponent  {
  @Input()
  public gifs: Gif[] = [];
}
