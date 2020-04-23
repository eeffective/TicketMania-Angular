import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { EventModel } from '../models/eventModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  events: EventModel[];

  constructor(private api: RestService) {}

  ngOnInit() {
    console.log('home component is working :)')
    this.api.getEvents().subscribe((data) => {
      this.events = data;
      console.log(this.events);
    });
  }
}
