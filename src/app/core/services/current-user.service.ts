import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LocalStorageService } from '@shared/services/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class CurrentUserService {
  constructor(
    private localStorageAS: LocalStorageService,
    private _jwt: JwtHelperService
  ) {}

  public logOut(): void {
    localStorage.clear();
    this.localStorageAS.clear();
  }

  public isLoggedIn(): boolean {
    const docstream_token = JSON.parse(
      localStorage.getItem('docstream_token') || 'null'
    );
    const currentUser = JSON.parse(
      localStorage.getItem('docstream_user_credential') || 'null'
    );
    if (
      docstream_token !== null &&
      docstream_token !== undefined &&
      !this._jwt.isTokenExpired(docstream_token) &&
      currentUser !== undefined &&
      currentUser !== null
    ) {
      return true;
    }
    return false;
  }

  public getUserDetails(): any {
    return this.decrypt_jwt(this.getAuthToken());
  }

  /**
   *
   * @param docstream_token
   * @returns
   * TODO:
   * -Setup when you see the structure
   */

  public storeUserCredentials(responseData: any): void {
    // const jwtData: any = this.decrypt_jwt(responseData.token);
    // const data_to_store = {
    //   email: jwtData.email,
    //   role: jwtData.roles,
    //   uid: jwtData.id,
    // };
    // localStorage.setItem('user_credential', JSON.stringify(data_to_store));
    // localStorage.setItem('docstream_token', JSON.stringify(responseData.token));
    // localStorage.setItem(
    //   'refresh_token',
    //   JSON.stringify(responseData.refreshToken)
    // );
  }

  // public storeUserDetails(userDetails: any) {
  //   const user_data_to_store = {
  //     firstName: userDetails.firstName,
  //     lastName: userDetails.firstName,
  //     email: userDetails.email,
  //     phoneNumber: userDetails.phoneNumber,
  //   };
  //   this.localStorageAS.set('docstream_user_details', user_data_to_store);
  // }

  private decrypt_jwt(docstream_token: string): any {
    if (docstream_token) {
      const decoded = this._jwt.decodeToken(docstream_token);
      return decoded;
    }
    return null;
  }

  public getAuthToken(): string {
    const docstream_token = JSON.parse(
      localStorage.getItem('docstream_token') || 'null'
    );
    return docstream_token;
  }

  // public getUser(): Observable<ResponseModel> {
  //   return ;
  // }
}
