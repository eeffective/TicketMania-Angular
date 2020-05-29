import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { UserComponent } from './components/user/user.component';
import { HeaderComponent } from './components/header/header.component';
import { EventDetailsComponent } from './components/shared/event-details/event-details.component';
import { ArtistDetailsComponent } from './components/shared/artist-details/artist-details.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    routingComponents,
    UserComponent,
    EventDetailsComponent,
    ArtistDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent],
})
export class AppModule {}
