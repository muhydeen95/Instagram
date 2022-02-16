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

  public getProfile(): Observable<ResponseModel<Profile>> {
      const endpoint = 'CustomerAuth/details';
      return this.http.makeRequestWithData('post', endpoint, {});
  }

  public updateProfile(
      updateProfile: Profile
    ): Observable<ResponseModel<Profile>> {
      const endpoint = 'CustomerAuth/update-details';
      return this.http.makeRequestWithData('post', endpoint, {}, updateProfile);
  }

  public changePassword(
      changePassword: Password
    ): Observable<ResponseModel<Password>> {
      const endpoint = 'customer/profile/customer-update-profile';
      return this.http.makeRequestWithData('post', endpoint, {}, changePassword);
  }

}
