import { ArtistModel } from './artistModel';

export class EventModel{
   public id: number;
   public name: string;
   public description: string;
   public datetime: Date;
   public duration: number;
   public location: string;
   public genre: string;
   public artists: ArtistModel[];
}