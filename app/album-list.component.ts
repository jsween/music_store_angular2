import { Component, EventEmitter } from 'angular2/core';
import { AlbumComponent } from './album.component';
import { Album } from './album.model';
import { GenrePipe } from './genre.pipe';
import { ArtistPipe } from './artist.pipe';



@Component({
selector: 'album-list',
inputs: ['albumList'],
directives: [AlbumComponent],
pipes: [GenrePipe, ArtistPipe],
template: `
<select (change)="onGenreChange($event.target.value)" class="filter">
  <option value="all" selected="selected">Show All</option>
  <option value="Pop">Pop</option>
  <option value="Rock">Rock</option>
</select>
<select (change)="onArtistChange($event.target.value)" class="filter">
  <option value="all" selected="selected">Show All</option>
  <option value="Michael Jackson">Michael Jackson</option>
  <option value="AC/DC">AC/DC</option>
  <option value="Pink Floyd">Pink Floyd</option>
</select>
<album-display *ngFor="#album of albumList | genre:filterGenre | artist:filterArtist"
  [album]="album">
</album-display>
`
})

export class AlbumListComponent {
  public albumList: Album[];
  public filterGenre: string = "all";
  public filterArtist: string = "all";
  onGenreChange(filterOption) {
    this.filterGenre = filterOption;
  }
  onArtistChange(filterOption) {
    this.filterGenre = filterOption;
  }
}
