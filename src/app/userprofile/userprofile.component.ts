import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../user-profile.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  profile:any;
  repos: any;
  username: any ='batyrotich'

  constructor( private userProfile: UserProfileService) { 

  }

  ngOnInit(): void {
  }

}
