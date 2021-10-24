import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '@shared/services/http.service';
import { ResponseModel } from 'app/models/response.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpService) {}
  public refreshToken(refreshToken: string): Observable<ResponseModel> {
    const endpoint = 'Auth/refresh-token';
    const params = new HttpParams().set('token', refreshToken);
    return this.http.makeRequestWithData('post', endpoint, params, {});
  }
}
