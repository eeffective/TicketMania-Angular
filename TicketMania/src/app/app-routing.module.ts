import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { SignInComponent } from './components/home/authentication/sign-in/sign-in.component';
import { SignUpComponent } from './components/home/authentication/sign-up/sign-up.component';
import { ArtistsListComponent } from './components/admin/artists-list/artists-list.component';
import { EventsListComponent } from './components/admin/events-list/events-list.component';
import { UsersListComponent } from './components/admin/users-list/users-list.component';
import { CreateArtistComponent } from './components/admin/create-artist/create-artist.component';
import { CreateEventComponent } from './components/admin/create-event/create-event.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
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
export class AppRoutingModule {}

export const routingComponents = [
  HomeComponent,
  SignInComponent,
  SignUpComponent,
  AdminComponent,
  ArtistsListComponent,
  CreateArtistComponent,
  EventsListComponent,
  CreateEventComponent,
  UsersListComponent,
];
