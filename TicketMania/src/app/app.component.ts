import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './services/authentication/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ticketmania-frontend';
  constructor() {}
  ngOnInit() {}
}
