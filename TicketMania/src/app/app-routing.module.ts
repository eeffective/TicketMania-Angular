import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { ArtistsListComponent } from './components/shared/artists-list/artists-list.component';
import { EventsListComponent } from './components/shared/events-list/events-list.component';
import { UsersListComponent } from './components/admin/users-list/users-list.component';
import { CreateArtistComponent } from './components/admin/create-artist/create-artist.component';
import { CreateEventComponent } from './components/admin/create-event/create-event.component';
import { ArtistDetailsComponent } from './components/shared/artist-details/artist-details.component';
import { EventDetailsComponent } from './components/shared/event-details/event-details.component';
import { ShoppingCartComponent } from './components/shared/shopping-cart/shopping-cart.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'artist/:id', component: ArtistDetailsComponent },
  { path: 'event/:id', component: EventDetailsComponent },
  { path: 'events/:location', component: EventsListComponent },
  { path: 'events/:genre', component: EventsListComponent },
  { path: 'events/:artist', component: EventsListComponent },
  { path: 'cart', component: ShoppingCartComponent },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'artists', component: ArtistsListComponent },
      { path: 'events', component: EventsListComponent },
      { path: 'users', component: UsersListComponent },
      { path: 'create-artist', component: CreateArtistComponent },
      { path: 'create-event', component: CreateEventComponent },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routingComponents = [
  EventDetailsComponent,
  ArtistDetailsComponent,
  HomeComponent,
  AdminComponent,
  ArtistsListComponent,
  CreateArtistComponent,
  EventsListComponent,
  CreateEventComponent,
  UsersListComponent,
  ShoppingCartComponent
];
