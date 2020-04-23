import { EventModel } from './eventModel';

export class ArtistModel{
    public id: string;
    public name: string;
    public biography: string;
    public events: EventModel[];
}