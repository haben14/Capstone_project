import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// Exporting a class named UsdaService
export class UsdaService {

  // Private variable to store the API URL
  private apiUrl = 'https://api.nal.usda.gov/fdc/v1/foods/search';
  // Private variable to store the API key
  private apiKey = 'w4bIjNo0ZlhfkjmZ0MHyYW0LeyLKerTGePwWbZgV&query'
  
  // Constructor function with HttpClient service injected
  constructor(private http: HttpClient) { }

  // Function to search for food in the USDA database
  searchFood(query: string): Observable<any> {
    // Construct the URL for the API request
    const url = `${this.apiUrl}?api_key=${this.apiKey}&query=${encodeURIComponent(query)}`;
    // GET request to the API and return the response as an Observable
    return this.http.get(url);
  }
}

