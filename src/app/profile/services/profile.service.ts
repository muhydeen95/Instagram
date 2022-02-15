import { Injectable } from '@angular/core';
import { HttpService } from '@shared/services/http.service';
import { ResponseModel } from 'app/models/response.model';
import { Password, Profile } from '../models/user-profile.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

constructor(private http: HttpService) { }

  public getProfile(
      getProfile: Profile
    ): Observable<ResponseModel<Profile>> {
      const endpoint = 'customer/profile/customer-update-profile';
      return this.http.makeRequestWithData('post', endpoint, {}, getProfile);
  }

  public updateProfile(
      getProfile: Profile
    ): Observable<ResponseModel<Profile>> {
      const endpoint = 'customer/profile/customer-update-profile';
      return this.http.makeRequestWithData('post', endpoint, {}, getProfile);
  }

  public changePassword(
      getPassword: Password
    ): Observable<ResponseModel<Password>> {
      const endpoint = 'customer/profile/customer-update-profile';
      return this.http.makeRequestWithData('post', endpoint, {}, getPassword);
  }

}
