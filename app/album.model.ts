export class Album {
  public soldOut: boolean = false;
  constructor(public name: string, public artist: string, public price: string, public genre: string, public photo: string, public id: number) {

  }
}
