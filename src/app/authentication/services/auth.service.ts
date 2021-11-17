import { LoginRequestDTO, LoginResponseDTO } from './../models/auth.model';
import { Injectable } from '@angular/core';
import { HttpService } from '@shared/services/http.service';
import { ResponseModel } from 'app/models/response.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpService) {}
  public login(
    loginRequestDTO: LoginRequestDTO
  ): Observable<ResponseModel<LoginResponseDTO>> {
    const endpoint = 'auth/int/company-admin/login';
    return this.http.makeRequestWithData('post', endpoint, {}, loginRequestDTO);
  }
}
