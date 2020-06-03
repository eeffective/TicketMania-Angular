import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { add, total } from 'cart-localstorage';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

  event: any;
  selectedTickets: [];

  constructor(private route: ActivatedRoute, private api: EventService) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.api.getEvent(id).subscribe(data => {
      this.event = data;
      console.log(this.event);
      console.log(this.event.tickets);
    })

  }

  addTicket(ticket, event) {
    add({ id: `${ticket.ticket.id}${event.id}`, name: `${ticket.ticket.type} | ${event.name}`, price: ticket.price });
    console.log(total());
  }
}
