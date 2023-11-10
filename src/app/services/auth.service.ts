import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthModel } from '../interfaces/user.model';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {
  private myAppUrl: string = environment.endpoint;
  private myApiUrl: string = 'api/Mascota/';

  constructor(private http: HttpClient) { }

  login(credential: AuthModel): Observable<AuthModel> {
    return this.http.post<AuthModel>(`${this.myAppUrl}${this.myApiUrl}`,credential);
  }


  addUser(credential: AuthModel): Observable<AuthModel> {
    return this.http.post<AuthModel>(`${this.myAppUrl}${this.myApiUrl}`, credential);
  }

}
