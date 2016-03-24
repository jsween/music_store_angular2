import { Component, EventEmitter } from 'angular2/core';
import { AlbumComponent } from './album.component';
import { Album } from './album.model';


@Component({
selector: 'album-list',
inputs: ['albumList'],
directives: [AlbumComponent],
template: `

<album-display *ngFor="#album of albumList"
  [album]="album">
</album-display>
`
})

export class AlbumListComponent {
  public albumList: Album[];
}
