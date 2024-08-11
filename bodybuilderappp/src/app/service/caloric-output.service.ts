// caloric-output.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
// Exporting a class named CaloricOutputService
export class CaloricOutputService {
  // Private variable to store the API URL
  private apiUrl = 'http://localhost:3001/caloric_output'; 

  // Constructor function with HttpClient service injected
  constructor(private http: HttpClient) {}

  // Function to get the caloric output based on body type and sex
  getCaloricOutput(bodytype: string, sex: string): Observable<{ caloric_output: number }> {
    // parameters for the API request
    const params = { bodytype, sex };
    // GET request to the API and return the response as an Observable
    return this.http.get<{ caloric_output: number }>(this.apiUrl, { params });
  }
}


