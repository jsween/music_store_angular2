import { Component, EventEmitter } from 'angular2/core';
import { Album } from './album.model';

@Component({
  selector: 'album-display',
  inputs: ['album'],
  template: `
    <div>
      <img src="resources/img/{{album.photo}}" alt={{album.name}}/>
      <h2>{{ album.name }}</h2>
      <h4> by {{album.artist}} </h4>
      <h5> \$\ {{album.price}} | {{album.genre}}</h5>
    </div>
  `
})

export class AlbumComponent {
  public album: Album;
}
