import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { HttpService } from '@shared/services/http.service';
import { ResponseModel } from 'app/models/response.model';
import { Observable } from 'rxjs';
import { UploadDocDTO } from '../models/dashboard.model';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpService, private _http: HttpClient) {}

  // ResponseModel<UploadDocDTO>
  public uploadDocumentRequest(payload: UploadDocDTO): Observable<any> {
    const formData = new FormData();
    Object.entries(payload).forEach(([key, value]) => {
      if (key != 'Files') {
        formData.set(key, value);
      }
    });
    payload.Files.forEach((file) => {
      formData.append('Files', file, file.name);
    });
    const endpoint = 'incomingmail/customer-create';
    return this._http.post(`${environment.api_url}${endpoint}`, formData, {
      reportProgress: true,
      observe: 'events',
    });
  }

  public getDocumentTypesRequest(payload: any): Observable<ResponseModel<any>> {
    const endpoint = 'documentType/get-document-types';
    return this.http.makeRequestWithData('post', endpoint, {}, payload);
  }

  public getCustomerDashboard(): Observable<ResponseModel<any>> {
    const endpoint = 'IncomingMail/get-customer-dashboard';
    return this.http.getRequest(endpoint);
  }
  public getDocumentTracking(
    correspondenceNumber: any
  ): Observable<ResponseModel<any>> {
    const endpoint = 'IncomingMail/track-customer-file-submission';
    return this.http.makeRequestWithData(
      'post',
      endpoint,
      {},
      { correspondenceNumber }
    );
  }
}
