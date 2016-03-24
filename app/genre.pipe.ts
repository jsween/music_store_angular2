import {Pipe, PipeTransform} from 'angular2/core';
import { Album } from './album.model';

@Pipe({
  name: "genre",
  pure: false
})

export class GenrePipe implements PipeTransform {
  transform(input: Album[], args) {
    var desiredGenre = args[0];
    if(desiredGenre === "Rock") {
      return input.filter((album) => {
        return album.genre === "Rock";
      });
    } else if(desiredGenre === "Pop") {
      return input.filter((album) => {
        return album.genre === "Pop";
      });
    } else {
      return input;
    }

  }
}
