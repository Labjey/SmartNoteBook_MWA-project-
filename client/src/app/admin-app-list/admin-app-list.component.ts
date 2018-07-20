import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { ApplicationService } from '../_services/application.service';

@Component({
  selector: 'app-admin-app-list',
  templateUrl: './admin-app-list.component.html',
  styleUrls: ['./admin-app-list.component.scss']
})
export class AdminAppListComponent implements OnInit {
  public applications;
  public application;
  constructor(private _applicationService : ApplicationService, private router : Router) { }

  ngOnInit() {
    this.getApplications();
  }

  search(el){
    //console.log(el.target.value);
    this._applicationService.searchApplication(el.target.value)
        .subscribe(data => {this.applications = data});
  }

  getApplications(){
    console.log('here');
    //this.applications = [{"followUps":["First interview","Second Interview"],"_id":"5b0238caab2e2c150c52c5b7","companyName":"Tesla","city":"SF","postWebsite":"ww.gogle.com","jobDescription":"Developer","sourceOfJobPosting":"","email":"google.gmail.com","contactName":"Ed sheeran","phoneNumber":"87653","resumeVersion":"1.0.0","notes":"Going good","__v":0},{"followUps":["First interview","Second Interview"],"_id":"5b0239146d6a521a88bb7908","companyName":"Google","city":"SF","postWebsite":"ww.gogle.com","jobDescription":"Developer","sourceOfJobPosting":"","email":"google.gmail.com","contactName":"Ed sheeran","phoneNumber":"87653","resumeVersion":"1.0.0","notes":"Going good","__v":0},{"followUps":["First interview","Second Interview"],"_id":"5b0239156d6a521a88bb7909","companyName":"Google","city":"SF","postWebsite":"ww.gogle.com","jobDescription":"Developer","sourceOfJobPosting":"","email":"google.gmail.com","contactName":"Ed sheeran","phoneNumber":"87653","resumeVersion":"1.0.0","notes":"Going good","__v":0},{"followUps":["First interview","Second Interview"],"_id":"5b0245f4d02eb31fb4601518","companyName":"Google","city":"SF","postWebsite":"ww.gogle.com","jobDescription":"Developer","sourceOfJobPosting":"","email":"google.gmail.com","contactName":"Ed sheeran","phoneNumber":"87653","resumeVersion":"1.0.0","notes":"Going good","__v":0},{"followUps":["First interview","Second Interview"],"_id":"5b024fd0ea53ab20c4df49fe","companyName":"Intel","city":"SF","postWebsite":"ww.gogle.com","jobDescription":"Developer","sourceOfJobPosting":"","email":"google.gmail.com","contactName":"Ed sheeran","phoneNumber":"87653","resumeVersion":"1.0.0","notes":"Going good","__v":0}];
      this._applicationService.getApplications()
          .subscribe(
            data => {this.applications = data;
             console.log("Data", this.applications);
           },
            err => console.log(err),
            () => console.log('Loading done')
          );
  }

}
