import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// Exporting a class named AuthService
export class AuthService {

  // Private variables to store the API URLs for login and register
  private loginApiUrl = 'http://localhost:3001/login';
  private registerApiUrl = 'http://localhost:3001/register'

  // Constructor function with HttpClient service injected
  constructor(private http: HttpClient) { }

  // Function to handle login
  login(username: string, password: string): Observable<any> {
    // Make a POST request to the login API with the username and password
    return this.http.post(this.loginApiUrl, {username, password})
  }

  // Function to handle registration
  register(Firstname: string, Lastname: string, email: string, username: string, password: string): Observable<any> {
    // POST request to the register API with the user details
    return this.http.post(this.registerApiUrl, {Firstname, Lastname,username,email, password})
  }

  // Function to set the token in local storage
  setToken(token: string){
    localStorage.setItem('token',token);
  }

  // Function to get the token from local storage
  getToken(){
    localStorage.removeItem('token');
  }

  // Function to handle logout
  logout(){
    // Remove the token from local storage
    localStorage.removeItem('token');
  }

  // Function to check if the user is authenticated
  isAuthenticate():boolean {
    // Return true if the token exists, false otherwise
    return this.getToken() !== null;
  }
}
