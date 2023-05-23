import {Component, Input, OnInit} from '@angular/core';
import {AddUserComponent} from "../users/add-user/add-user.component";
import {MatDialog} from "@angular/material/dialog";
import {Users} from "../../models/users";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() user!:Users;

  //isShow: boolean = false;

  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    //this.ShowAdd();
  }

  openUpdateuser(){
    this.dialog.open(AddUserComponent,{
      width: '300px',
      data: this.user
    })
  }
  /*ShowAdd(){
    if (window.location.href === 'http://localhost:4200/'){
      this.isShow = true
    }
  }*/

}
