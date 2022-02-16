import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LcApplicationService } from 'app/application/services/lc-application.service';
import { ResponseModel } from 'app/models/response.model';
import { Subscription } from 'rxjs';
import { LCApplicationDTO } from '../application-form/models/types.model';

@Component({
  selector: 'app-application-details',
  templateUrl: './application-details.component.html',
  styleUrls: ['./application-details.component.scss'],
})
export class ApplicationDetailsComponent implements OnInit {
  private sub: Subscription = new Subscription();
  public lcAplicationDetail!: LCApplicationDTO;
  public loading: boolean = false;
  public applicationId: number = 0;
  constructor(
    private _lc: LcApplicationService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const param: any = this.activatedRoute.params;
    this.applicationId = param['value'].id;
    this.getLcApplicationss(this.applicationId);
  }

  public getLcApplicationss(id: number): void {
    this.loading = true;
    this.sub.add(
      this._lc.getLcApplication(id).subscribe({
        next: (res: ResponseModel<LCApplicationDTO>) => {
          console.log(res);
          this.loading = false;
          this.lcAplicationDetail = res.response;
        },
        error: (error: ResponseModel<null>) => {
          this.loading = false;
          console.log(error);
        },
      })
    );
  }
}
