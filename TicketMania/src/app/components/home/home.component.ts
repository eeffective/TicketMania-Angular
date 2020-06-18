import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  events: any[];

  constructor(private eventService: EventService, private router: Router) { }

  ngOnInit() {
    this.eventService.getEvents().subscribe(data => {
      this.events = data;
    })
  }

  onEventSelect(event) {
    this.router.navigate(['/event', event.id]);
  }

  onArtistSelect(artist) {
    this.router.navigate(['/artist', artist.id]);
  }
}
