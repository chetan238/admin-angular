import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { UserService } from './../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
userID:any
userDetails:any=[]
editUserForm:FormGroup=new FormGroup({});
dataLoaded:boolean=false;
  constructor(private activatedRoute:ActivatedRoute,private _snackBar:MatSnackBar,private userService:UserService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.dataLoaded=false;
    this.activatedRoute.params.subscribe(data=>{

      this.userID=data.id;
    });

    if(this.userID!==''){

      this.userService.viewUser(this.userID).toPromise()
      .then(data=>{

        this.userDetails=data;
        Object.assign(this.userDetails,data);
        console.log(this.userDetails);
        this.editUserForm=this.formBuilder.group({
          'firstname':new FormControl(this.userDetails.username),
          'lastname':new FormControl(this.userDetails.lastname),
          'email':new FormControl(this.userDetails.email),
          'phone':new FormControl(this.userDetails.phone)
        })

        this.dataLoaded=true;
        
      })
      .catch(err=>{
        console.log(err);
      }) 
    }
  }

  updateUser(){
    this.userService.updateUser(this.userID,this.editUserForm.value).subscribe(data=>{

      console.log("user created!!!");
      console.log(data);
      this._snackBar.open("User Updated","back");
      
    },
    err=>{
      console.log(err);
      this._snackBar.open("Something went Wrong !!!!","back");
      
    })
  }
}

