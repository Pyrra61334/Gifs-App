import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

const APIKEY ='oaZhPg2sQzk6sC2LaKS8XxL4GncPuGTj'
@Injectable({providedIn: 'root'})
export class GifsService {

  public gifList: Gif[] = [];
  private _tagsHistory: string[]=[];
  private apiKey = 'oaZhPg2sQzk6sC2LaKS8XxL4GncPuGTj'
  private serviceUrl = 'https://api.giphy.com/v1/gifs'

  constructor (private http: HttpClient) {
    this.loadLocalStorage();
    console.log('GifsServiceReasy')
  }

  private organizeHistory(tag: string){

    tag = tag.toLowerCase();
    if (this._tagsHistory.includes(tag)){
      this._tagsHistory = this._tagsHistory.filter( (oldTag) => oldTag !== tag)
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0,10);
    this.saveLocalStorage();
  }

  public get tagsHistory(){
    return [...this._tagsHistory];
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory ))
  }
  private loadLocalStorage(){
    if (!localStorage.getItem('history')) return
    this._tagsHistory = JSON.parse(localStorage.getItem('history')!);
    if(this._tagsHistory.length>0) this.searchTag(this._tagsHistory[0]);
  }

  async searchTag(tag: string): Promise<void> {
    if (tag.length==0) return;
    this.organizeHistory(tag);

    // const resp = await fetch('https://api.giphy.com/v1/gifs/search?api_key=oaZhPg2sQzk6sC2LaKS8XxL4GncPuGTj&q=valorant&limit=10')
    // const data = await resp.json();
    // console.log(data)

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag)

    this.http.get<SearchResponse>(`${this.serviceUrl }/search`, { params })
    .subscribe( resp => {
      this.gifList = resp.data;
      // console.log({gifs: this.gifList})
    })

  }
}
