import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  username:string;
  repoName: string;
  clientId: string;
  clientSecret: string;
  apikey: string ='153d501385617aeabd8dbc2d7140b33f6e2e3290';


  constructor( private http:HttpClient) {
    console.log('service is ready now');
   }
   getUser() {
     return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientId + "&client_secret=" + this.clientSecret);
   }
   getRepos(){
     return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientId + "&client_secret=" + this.clientSecret);
   }
  searchrepos() {
    return this.http.get('https://api.github.com/search/repositories?q=' + this.repoName, ({
      headers: new HttpHeaders({ Authorization: `token ${this.apikey}` })
    }))
  }
  updateProfile(username: string) {
    this.username = username
  }
  UpdateRepo(repo: string) {
    this.repoName = repo;
  }
}
