import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { add, total } from 'cart-localstorage';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { TokenStorageService } from 'src/app/services/authentication/token-storage.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TicketService } from 'src/app/services/ticket.service';
import { ArtistService } from 'src/app/services/artist.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})

export class EventDetailsComponent implements OnInit {

  newArtists: any[];
  event: any;
  isAdmin: boolean;
  myTicketForm: FormGroup;
  myArtistForm: FormGroup;
  ticketAdded: false;
  artistAdded: false;

  constructor(private route: ActivatedRoute,
    private api: EventService, private cartService: ShoppingCartService,
    private storage: TokenStorageService, private fBuilder: FormBuilder,
    private ticketService: TicketService, private artistService: ArtistService) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Authorization': `Bearer ${this.storage.getToken}` })
  };

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.api.getEventById(id).subscribe(data => {
      this.event = data;
    })

    this.artistService.getArtists().subscribe(data => {
      this.newArtists = data;
    })

    this.event = this.api.getEventById(id);
    this.myTicketForm = this.fBuilder.group({
      type: ['', Validators.required],
      price: ['', Validators.required],
      quantityLeft: ['', Validators.required],
      musicEvent: { id: id }
    })

    this.myArtistForm = this.fBuilder.group({
      name: ['', Validators.required],
      biography: ['', Validators.required],
      genre: ['', Validators.required],
      musicEvent: [{ id: id }]
    })

    console.log(this.newArtists)
  }

  addTicket(ticket, event) {
    this.cartService.addTicket(ticket, event)
  }

  isUserAdmin(): boolean {
    if (this.storage.getUser().roles[0] == "ROLE_ADMIN") {
      return true;
    }
    else {
      return false;
    }
  }

  onTicketAdd() {
    console.log(this.myTicketForm.value)

    this.ticketService.addTicket(this.myTicketForm.value).subscribe(data => {
      this.ticketAdded = false;
      window.location.reload();
    },
      (error) => {
        console.log("Something went wrong my G")
      })
  }

  onArtistAdd() {
    this.artistService.addArtist(this.myArtistForm.value).subscribe(data => {
      this.artistAdded = false;
      window.location.reload();
    },
      (error) => {
        console.log("Something went wrong my G")
      })
  }


}
