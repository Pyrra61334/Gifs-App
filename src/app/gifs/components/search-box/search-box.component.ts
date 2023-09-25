import { Component, ViewChild, ElementRef } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
  <h5>Buscar</h5>
  <input
  (keyup.enter)="searchTag()"
  type="text"
  class="form-control"
  placeholder="Buscar gifs.."
  #txtTagInput
  >
  `
})

export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef <HTMLInputElement>;

  constructor(private gifsService: GifsService){}

  searchTag():void{
    const newTag = this.tagInput.nativeElement.value;
    console.log({newTag})
    this.gifsService.searchTag(newTag);
    this.tagInput.nativeElement.value='';
  }
}
