import { Component,Inject, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Users} from "../../../models/users";
import {UserService} from "../../../services/user.service";
import {AlertifyService} from "../../../services/alertify.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  providers:[UserService]
})
export class AddUserComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<AddUserComponent>,
    private formBuilder:FormBuilder,
    public userService: UserService,
    private alertifyService: AlertifyService,
    @Inject(MAT_DIALOG_DATA)
    public user:Users,
  ) {}
    users! : Users[];
    userAddForm!: FormGroup;
    email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Geçerli bir e-posta değil';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  ngOnInit(): void {
    this.userAddForm = this.formBuilder.group({
      id:[this.user?.id || 0],
      name:[this.user?.name || '', Validators.required],
      title:[this.user?.title|| ''],
      phone:[this.user?.phone|| '', Validators.required],
      website:[this.user?.website || ''],
      email:[this.user?.email|| '', Validators.required],
    })

    this.getErrorMessage()

  }

    add(): void{
      this.user = this.userAddForm.value;
      this.userService.addUser(this.user).subscribe(data=>{
        this.getSuccess(data.name + ' Kullanıcısı Başarıyla oluşturuldu.')
        console.log("burası subscribe olunan yer",data)
      });
    console.log('hello world')
    console.log(typeof(this.user),this.user);
    }

    deleteUser(){
    this.userService.deleteUser(this.userAddForm.value).subscribe( ()=>{
      this.getSuccess(' başarıyla silindi')
      });
    }

    updateUser(){
    this.userService.updateUser(this.userAddForm.value).subscribe(()=>{
      this.getSuccess(' başarıyla düzenlendi')
    })
    }

    getSuccess(message: string ){
      //window.location.reload();
      this.alertifyService.success(message);
      this.dialogRef.close();
      this.userService.getUsers();
    }
  }
