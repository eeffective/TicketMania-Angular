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

  constructor(private route: ActivatedRoute, private api: EventService) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.api.getEvent(id).subscribe(data => {
      this.event = data;
    })

  }

  addTicket(ticket, event) {
    add({ id: `${ticket.ticket.id}${event.id}`, name: `${event.name} | ${ticket.ticket.type}`, price: ticket.price });
    console.log(total());
  }
}
