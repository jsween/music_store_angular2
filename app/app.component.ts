import { Component } from 'angular2/core';
import { AlbumListComponent } from './album-list.component';
import { Album } from './album.model';
import { CartComponent } from './cart.component';

@Component({
  selector: 'my-app',
  directives: [AlbumListComponent, CartComponent],
  template: `
    <div class="jumbotron center">
      <h1>CD Music Store</h1>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h1>Album List</h1>
          <album-list
            [albumList]="albums" (onAlbumSelect)="addToCart($event)">
          </album-list>
        </div>
        <div class="col-md-6">
          <h2>Your Cart</h2>
          <cart-list [cartList]="cartItems"></cart-list>
        </div>
      </div>
    </div>

  `
})

export class AppComponent {
  public albums: Album[];
  public cartItems: Album[] = [];
  constructor() {
    this.albums = [
      new Album("Thriller", "Michael Jackson", "18.99", "Pop", "thriller.jpg", 0),
      new Album("Back in Black","AC/DC","18.99", "Rock", "back_in_black.jpg", 1),
      new Album("Dark Side of the Moon", "Pink Floyd", "18.99", "Rock", "dark_side_moon.jpg", 2)
    ];
  }
  addToCart(album: Album) {
    album.id = this.cartItems.length;
    this.cartItems.push(album);
    console.log(album);
  }
}
