import { Component, OnInit } from '@angular/core';
import { ArtistService } from 'src/app/services/artist.service';

@Component({
  selector: 'app-artists-list',
  templateUrl: './artists-list.component.html',
  styleUrls: ['./artists-list.component.scss']
})
export class ArtistsListComponent implements OnInit {

  constructor(private api: ArtistService) { }
  artists: any[]

  ngOnInit() {
    this.api.getArtists().subscribe(data => {
      this.artists = data;
    })
  }

}
