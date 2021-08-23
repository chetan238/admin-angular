import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from './../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {

  userId:string='';

  constructor(private activatedRoute:ActivatedRoute,private userService:UserService,private matSnackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.userId=data.id;
    });
    if(this.userId){
      this.userService.deleteUser(this.userId).subscribe(data=>{
        this.matSnackBar.open("user deleted","back")
        
      }),err=>
      {
        this.matSnackBar.open("unable to delete","back")
      }

    }
  }



}
