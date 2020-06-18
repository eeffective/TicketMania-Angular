import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users: [];
  
  constructor(private service: UserService) { }

  ngOnInit(): void {
   this.service.getUsers().subscribe(data => {
     this.users = data;
     console.log(this.users)
   })
  }

}
