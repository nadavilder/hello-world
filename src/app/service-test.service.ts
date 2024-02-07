import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceTestService {

  constructor(private http: HttpClient) { }
  DisplayMsg(){
    return "I am a message that came from a service";
  }
  GetDetails()
  {
    return this.http.get('../../assets/MyRecords.json');
  }
}
