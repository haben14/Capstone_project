import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
// Exporting a class named LogoutPage
export class LogoutPage {

  // Constructor function with services injected
  constructor(private authService: AuthService, private router: Router) {}

  // Method to handle logout
  logoutmethod(){
    // Calling the logout method from authService
    this.authService.logout();
    // Navigating to the login page after logout
    this.router.navigate(['/login'])
  }

}

