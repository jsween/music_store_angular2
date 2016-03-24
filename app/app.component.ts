import { Component } from 'angular2/core';
import { AlbumListComponent } from './album-list.component';
import { Album } from './album.model';

@Component({
  selector: 'my-app',
  directives: [AlbumListComponent],
  template: `
    <div class="jumbotron center">
      <h1>CD Music Store</h1>
    </div>
    <div class="container">
    <h1>Album List</h1>
      <album-list
      [albumList]="albums">
      </album-list>
    </div>
  `
})

export class AppComponent {
  public albums: Album[];
  constructor() {
    this.albums = [
      new Album("Thriller", "Michael Jackson", "18.99", "Pop", "thriller.jpg", 0),
      new Album("Back in Black","AC/DC","18.99", "Rock", "back_in_black.jpg", 1),
      new Album("Dark Side of the Moon", "Pink Floyd", "18.99", "Rock", "dark_side_moon.jpg", 2)
    ];
  }
}
