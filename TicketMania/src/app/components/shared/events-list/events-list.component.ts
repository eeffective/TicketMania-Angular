import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {
  events: []
  aRoute: ActivatedRoute

  constructor(private router: Router, private route: ActivatedRoute, private api: EventService) { }

  ngOnInit(): void {
    console.log("wakkaso")
    let location = this.route.snapshot.paramMap.get('location');
    let genre = this.route.snapshot.paramMap.get('genre');
    let artist = parseInt(this.route.snapshot.paramMap.get('artist'));


    if (location != null) {
      this.api.getEventsByLocation(location).subscribe(data => {
        this.events = data;
      })
    } else if (genre != null) {
      this.api.getEventsByLocation(genre).subscribe(data => {
        this.events = data;
      })
    } else{
      this.router.navigate(['/home'])
    }
  }

  onEventSelect(event) {
    this.router.navigate(['/event', event.id]);
  }

}
