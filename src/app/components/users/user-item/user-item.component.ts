import { Component, OnInit, Input } from '@angular/core';
import {AddUserComponent} from "../add-user/add-user.component";
import {MatDialog} from "@angular/material/dialog";
import {Users} from "../../../models/users";

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

  @Input() user!: Users;

  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }
  openUpdateuser(){
    this.dialog.open(AddUserComponent,{
      width: '300px',
      data: this.user
    })
  }

}
