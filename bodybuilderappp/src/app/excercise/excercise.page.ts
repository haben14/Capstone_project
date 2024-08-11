import { Component, OnInit } from '@angular/core';
import { ExcerciseOutputService } from '../service/excercise-output.service';
import { AuthService} from '../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-excercise',
  templateUrl: './excercise.page.html',
  styleUrls: ['./excercise.page.scss'],
})
// Exporting a class named ExcercisePage
export class ExcercisePage  {
  // Defining options for body types
  BodytypesOptions: string[] = ['EctoMorph', 'Mesomorph', 'Endomorph'];
  // Variable to store selected body type
  selectedBodytypes!: string;

  // Defining options for sex
  SexsOptions: string[] = ['Male', 'Female'];
  // Variable to store selected sex
  selectedSexs!: string; 

  // Defining options for days of the week
  Week_dayOptions: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  // Variable to store selected day of the week
  selectedWeek_day!: string;

  // Variable to store data fetched from the database
  dataFromDatabase: any;

  // Constructor function with services injected
  constructor(private excerciseOutputService: ExcerciseOutputService,private authService: AuthService,private router: Router) {}

  // ngOnInit lifecycle hook
  ngonInit():void{
    // Check if user is authenticated, if not navigate to login page
    if(!this.authService.isAuthenticate()){
      this.router.navigate(['/login']);
    }
  }

  // Function to handle selection of body type
  onBodytypesSelected(option: string) {
    this.selectedBodytypes = option;
  }

  // Function to handle selection of sex
  onSexsSelected(selectedValue: any) {
    this.selectedSexs = selectedValue;
  }

  // Function to handle selection of day of the week
  onWeek_daySelected(event: CustomEvent) {
    this.selectedWeek_day = event.detail.value;
    // Call getWorkoutData() when the third option is selected
    this.getWorkoutData();
  }

  // Function to fetch workout data based on selected options
  getWorkoutData() {
    this.excerciseOutputService.getWorkout(this.selectedBodytypes, this.selectedSexs, this.selectedWeek_day)
      .subscribe(
        data => {
          // Store the fetched data in dataFromDatabase
          this.dataFromDatabase = data;
        },
        error => {
          // Log any errors encountered during fetching
          console.error('Error fetching workout data:', error);
        }
      );
  }
  
}
