import { Injectable } from '@angular/core';
import { HttpService } from '@shared/services/http.service';
import {
  PaginationResponse,
  ResponseModel,
  SearchDTO,
} from 'app/models/response.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LcApplicationService {
  constructor(private http: HttpService) {}

  //Get LC application by ID
  public getLcApplication(id: number): Observable<ResponseModel<any>> {
    const endpoint = 'LCApplication/get-lc-application' + id;
    return this.http.getRequest(endpoint);
  }

  //Search all uploaded LC applications
  public searchAllLcApplications(
    searchLcDTO: SearchDTO
  ): Observable<ResponseModel<PaginationResponse<any[]>>> {
    console.log(searchLcDTO);
    const endpoint = 'LCApplication/search-all-lc-applications';
    return this.http.makeRequestWithData('post', endpoint, {}, searchLcDTO);
  }

  //Search all user uploaded LC application
  public searchUserLcApplications(
    searchLcDTO: SearchDTO
  ): Observable<ResponseModel<PaginationResponse<any[]>>> {
    const endpoint = 'LCApplication/search-user-lc-applications';
    return this.http.makeRequestWithData('post', endpoint, {}, searchLcDTO);
  }

  //Upload new LC application
  public addLcApplication(
    addLcApplicationDTO: any
  ): Observable<ResponseModel<any>> {
    const endpoint = 'LCApplication/add-lc-application';
    const formData: FormData = new FormData();
    Object.entries(addLcApplicationDTO).forEach(([key, value]) => {
      formData.set(key, JSON.stringify(value));
    });
    return this.http.makeRequestWithData('post', endpoint, {}, formData);
  }

  //Treat LC application
  public treatLcApplication(
    treatLcApplicationDTO: any
  ): Observable<ResponseModel<any>> {
    const endpoint = 'LCApplication/treat-lc-application';
    return this.http.makeRequestWithData(
      'post',
      endpoint,
      {},
      treatLcApplicationDTO
    );
  }
}
