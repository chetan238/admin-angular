import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  listUsers:any=[];

  constructor(private UserService:UserService) { }

  ngOnInit(): void {
    
    this.UserService.listUsers().subscribe(data=>{
      console.log(data);
     this.listUsers=data
     

    });
  }

}
