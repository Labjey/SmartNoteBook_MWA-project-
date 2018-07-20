import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../_services/application.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(private _applicationService : ApplicationService, private router : Router) { }
  public normalUsers;
  ngOnInit() {
    this.getNormalUsers();
  }

  applicationList(user){
    console.log('here', user);
    localStorage.setItem('ATS_USERID', user._id);
     this.router.navigate([`admin-dashboard/app-list`]);
 }

 search(el){
  //console.log(el.target.value);
  this._applicationService.searchUsers(el.target.value)
      .subscribe(data => {this.normalUsers = data});
}
  getNormalUsers(){
    console.log('here');
      this._applicationService.getNormalUser()
          .subscribe(
            data => {
              this.normalUsers = data;
              console.log("Type ----> " + typeof(this.normalUsers))
              // this.normalUsers.array.forEach(element => {
              //   console.log("Element ------>" + element);
              // });
              let arr = new Array(this.normalUsers);
             console.log("Data----------->", arr);
           },
            err => console.log(err),
            () => console.log('Loading done')
          );
  }

}
