import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-elements',
  templateUrl: './card-list.component.html',
})
export class CardListComponent  {

  @Input()
  public gifs: Gif[] = [];
}
