import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CloseScrollStrategy } from '@angular/cdk/overlay';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {

  userId:string='';
  userDetails:any=[];
  constructor(private UserService :UserService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(data=>{

      this.userId=data.id;
    })
    this.UserService.viewUser(this.userId).subscribe(data=>{

      console.log(data);
      
      this.userDetails=data;
    })
  }

}
