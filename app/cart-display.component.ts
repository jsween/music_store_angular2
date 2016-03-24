import { Component } from 'angular2/core';
import { Album } from './album.model';

@Component({
  selector: 'cart-display',
  inputs: ['album'],
  template: `
  <div>
    <ul>
      <li>{{ album.name }}</li>
      <li>{{ album.artist }}</li>
      <li>$ {{ album.price }}</li>
      <li>{{ album.genre }}</li>
    </ul>
  </div>
  `
})

export class CartDisplayComponent {
  public album = Album;
}
