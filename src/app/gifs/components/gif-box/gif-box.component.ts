import { Component, Input, OnInit} from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card',
  templateUrl: './gif-box.component.html',
})
export class GifBoxComponent{
  @Input()
  public gif!: Gif;

  ngOnInit(): void {
    if (!this.gif ) throw new Error ('Gif is required')
  }
  constructor() { }

}
