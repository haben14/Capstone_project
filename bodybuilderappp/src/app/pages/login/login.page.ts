import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
// Exporting a class named LoginPage that implements OnInit interface
export class LoginPage implements OnInit {

  // Variables to store the username and password
  username!: string;
  password!: string;

  // Constructor function with AuthService and Router services injected
  constructor(private authService: AuthService, private router:Router) { }

  // ngOnInit lifecycle hook
  ngOnInit() {
  }

  // Function to handle login
  login(){
    // Call the login method from authService with the username and password
    this.authService.login(this.username, this.password).subscribe(response => {
        // If login is successful, set the token and navigate to the nutrition page
        this.authService.setToken(response.token)
        this.router.navigate(['/tabs/nutrition']);
      }, error =>{
        // Log any errors encountered during login
        console.log(error)
      })
  }
}
