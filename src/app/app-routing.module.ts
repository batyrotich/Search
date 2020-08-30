import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserprofileComponent } from './userprofile/userprofile.component'
import { RepositoryComponent } from './repository/repository.component'
            
const routes: Routes = [
  { path: 'userprofile', component:UserprofileComponent},
  { path: 'repository', component:RepositoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
