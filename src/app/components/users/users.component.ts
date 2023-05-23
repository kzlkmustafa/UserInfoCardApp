import {Component, OnInit} from '@angular/core';
import {Users} from "../../models/users";
import {UserService} from "../../services/user.service";


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  constructor(
    public userService: UserService
  ) {}

  filterText =""
  title = "Kullanıcı listesi"


  ngOnInit(): void {

    this.userService.getUsers()

  }

}
