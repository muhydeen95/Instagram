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
      const endpoint = 'CustomerAuth/change-password';
      return this.http.makeRequestWithData('patch', endpoint, {}, changePassword);
  }

  public uploadProfileImage(
      File: File
    ): Observable<ResponseModel<null>> {
      const endpoint = 'CustomerAuth/upload-profile-picture';
      return this.http.makeRequestWithData('put', endpoint, {}, File);
  }

  addSignature(payload: any): any {
    const formData: FormData = new FormData();
    formData.append("file", payload);
    console.log(payload, formData)
    const endpoint = 'CustomerAuth/upload-profile-picture';
    return this.http.makeRequestWithData('put', endpoint, {}, formData);
  }


}
