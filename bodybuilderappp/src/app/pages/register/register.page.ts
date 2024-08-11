import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
// Exporting a class named RegisterPage that implements OnInit interface
export class RegisterPage implements OnInit {
  // Variables to store the first name, last name, email, username, and password
  Firstname!: string;
  Lastname!: string;
  email!: string;
  username!: string;
  password!: string;

  // Constructor function with AuthService and Router services injected
  constructor(private authService: AuthService, private router: Router) { }

  // ngOnInit lifecycle hook
  ngOnInit() {
  }

  // Function to handle registration
  register(){
    // Call the register method from authService with the user details
    this.authService.register(this.Firstname, this.Lastname, this.email, this.username, this.password).subscribe(response => {
        // If registration is successful, navigate to the login page
        this.router.navigate(['/login'])
      },
      error => {
        // Log any errors encountered during registration
        console.error(error);
      })
  }
}
