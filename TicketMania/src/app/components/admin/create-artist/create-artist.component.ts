import { Component, OnInit } from '@angular/core';
import { ArtistService } from 'src/app/services/artist.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-artist',
  templateUrl: './create-artist.component.html',
  styleUrls: ['./create-artist.component.scss']
})
export class CreateArtistComponent implements OnInit {

  constructor(private api: ArtistService, private fb: FormBuilder) {}
  myForm: FormGroup;

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      biography: ['', Validators.required],
      genre: ['', Validators.required],
    });
  }

  createArtist() {
    this.api.addArtist(this.myForm);
    console.log(this.myForm.value);
  }

}
