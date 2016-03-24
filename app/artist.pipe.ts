import {Pipe, PipeTransform} from 'angular2/core';
import { Album } from './album.model';

@Pipe({
  name: "artist",
  pure: false
})

export class ArtistPipe implements PipeTransform {
  transform(input: Album[], args) {
    var desiredArtist = args[0];
    if(desiredArtist === "Michael Jackson") {
      return input.filter((album) => {
        return album.artist === "Michael Jackson";
      });
    } else if(desiredArtist === "AC/DC") {
      return input.filter((album) => {
        return album.artist === "AC/DC";
      });
    } else if(desiredArtist === "Pink Floyd") {
      return input.filter((album) => {
        return album.artist === "Pink Floyd";
      });
    } else {
      return input;
    }

  }
}
