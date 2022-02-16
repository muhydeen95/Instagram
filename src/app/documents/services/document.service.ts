import { Injectable } from '@angular/core';
import { HttpService } from '@shared/services/http.service';
import { ResponseModel } from 'app/models/response.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  constructor(private http: HttpService) {}

  //Get document by ID
  public getDocumentByIdRequest(id: number): Observable<ResponseModel<any>> {
    const endpoint = 'Document/document-search' + id;
    return this.http.getRequest(endpoint);
  }
}
