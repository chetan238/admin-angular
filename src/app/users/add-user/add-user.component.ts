import { UserService } from './../../services/user.service';
import { createOfflineCompileUrlResolver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validator } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar'; 
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  
  addUserForm:FormGroup=new FormGroup({});

  constructor(private formBuilder:FormBuilder, private userService:UserService,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {

    this.addUserForm=this.formBuilder.group({
      'firstname': new FormControl('',[Validators.required,Validators.minLength(3)]),
      'lastname': new FormControl('',[Validators.required,Validators.minLength(3)]),
      'email': new FormControl('',[Validators.required,Validators.email]),
      'phone': new FormControl('',[Validators.required,Validators.maxLength(10)]),

    })

  }

  

  createUser(){
    this.userService.addUser(this.addUserForm.value).subscribe(data=>{

      console.log("user created!!!");
      console.log(data);
      this._snackBar.open("User Created","back");
      
    },
    err=>{
      console.log(err);
      this._snackBar.open("Something went Wrong !!!!","back");
      
    }
    )
    
  }

}
