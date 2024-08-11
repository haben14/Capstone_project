import { WeekDay } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// Exporting a class named ExcerciseOutputService
export class ExcerciseOutputService {

  // Private variable to store the API URL
  private apiUrl = 'http://localhost:3001/Excercise'; // Replace with your actual API URL

  // Constructor function with HttpClient service injected
  constructor(private http: HttpClient) { }

  // Function to get the workout based on body type, sex, and day of the week
  getWorkout(Bodytypes: string, Sexs: string, Week_day: string): Observable<any> {
    // GET request to the API with the provided parameters
    // The response from the API is returned as an Observable
    return this.http.get(this.apiUrl, {
      params: {
        Bodytypes: Bodytypes,
        Sexs: Sexs,
        Week_day: Week_day
      }
    });
  }
}
