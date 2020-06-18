import { Component, OnInit } from '@angular/core';
import { ArtistService } from 'src/app/services/artist.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-artist',
  templateUrl: './create-artist.component.html',
  styleUrls: ['./create-artist.component.scss']
})
export class CreateArtistComponent implements OnInit {

  constructor(private api: ArtistService, private fb: FormBuilder) { }
  myArtistForm: FormGroup;
  artistMade = false;
  errorMessage: '';


  ngOnInit(): void {
    this.myArtistForm = this.fb.group({
      name: ['', Validators.required],
      biography: ['', Validators.required],
      genre: ['', Validators.required],
    });
  }

  onArtistAdd() {
    this.api.addArtist(this.myArtistForm.value).subscribe(data => {
      this.artistMade = true;
      window.location.reload();
    },
      (error) => {
        this.errorMessage = error.error.message;
        this.artistMade = false;
      })
  }

}
