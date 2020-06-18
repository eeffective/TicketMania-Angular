import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/authentication/token-storage.service';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { ArtistService } from 'src/app/services/artist.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {

  myEventForm: FormGroup;
  myTicketForm: FormGroup;
  $event: any;
  eventMade = false;
  errorMessage: '';
  eventCreationFailed = false;


  constructor(
    private tokenStorageService: TokenStorageService,
    private authService: AuthenticationService,
    private eventService: EventService,
    private artistService: ArtistService,
    // private ticketService: TicketService, 
    private fBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.myEventForm = this.fBuilder.group({
      name: ['', Validators.required],
      genre: ['', Validators.required],
      description: ['', Validators.required],
      location: ['', Validators.required],
      duration: ['', Validators.required],
      dateTime: ['', Validators.required],
    });

  }

  onSaveEvent() {
    this.eventService.addEvent(this.myEventForm.value).subscribe(data => {
      this.$event = data;
      this.eventMade = true;
    },
    (error) => {
      this.errorMessage = error.error.message;
      this.eventCreationFailed = true;
      this.eventMade = false;
    })
    console.log(this.myEventForm.value)
  }

}
