import { Component, EventEmitter } from 'angular2/core';
import { Album } from './album.model';
import { CartDisplayComponent } from './cart-display.component';

@Component({
  selector: 'cart',
  inputs: ['cartList'],
  directives: [CartDisplayComponent],
  template: `
    <cart-display *ngFor="#currentAlbum of cartList" [album]="currentAlbum">
    </cart-display>
  `
})

export class CartComponent {
  public cartList: Album[];
}
