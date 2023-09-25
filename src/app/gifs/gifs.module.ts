import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { ElementsComponent } from './components/elements/elements.component';
import { GifBoxComponent } from './components/gif-box/gif-box.component';

@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    ElementsComponent,
    GifBoxComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomePageComponent
  ]
})
export class GifsModule { }
