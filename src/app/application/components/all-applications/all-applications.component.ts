import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-applications',
  templateUrl: './all-applications.component.html',
  styleUrls: ['./all-applications.component.scss']
})
export class AllApplicationsComponent implements OnInit {
  public btnName: string = 'New Application';
  public isFetchingApplications: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public gotToNewApplication() {
    return this.router.navigate(['/application/application-form/step-one'])
  }

}
