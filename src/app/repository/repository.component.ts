import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../user-profile.service';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  repoitems: any[];
  repoName:string= "Quotes";


  constructor( private userProfileService:UserProfileService) {

   }
   findRepo(){
     this.userProfileService.UpdateRepo(this.repoName);
     this.userProfileService.searchrepos().subscribe(repo => {
         this.repoitems= repo["items"];
         console.log(this.repoitems);
     })
   }

  ngOnInit() {
    this.findRepo()
  }
}
