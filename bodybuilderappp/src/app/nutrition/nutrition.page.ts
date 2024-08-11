import { Component, OnInit } from '@angular/core';
import { UsdaService } from '../service/usda.service';
import { CaloricOutputService } from '../service/caloric-output.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService} from '../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.page.html',
  styleUrls: ['./nutrition.page.scss'],
})
// Exporting a class named NutritionPage
export class NutritionPage {
  // Form group for the form controls
  public form: FormGroup;
  // Array to store the rows of data
  public rows: any[] = [];
  // Variables to store the consumed and remaining calories
  public consumedCalories: number = 0;
  public remainingCalories: number = 0;
  // Boolean to indicate if calculation is in progress
  calculating: boolean = false;

  // Constructor function with services injected
  constructor(private formBuilder: FormBuilder,  private usdaService: UsdaService, private caloricOutputService: CaloricOutputService,private authService: AuthService,private router: Router ) {
    // Checking if user is authenticated, if not navigate to login page
    if(!this.authService.isAuthenticate()){
      this.router.navigate(['/login']);
    }
    // Initialize the form with form controls
    this.form = this.formBuilder.group({
      selector1: ['', Validators.required],
      selector2: ['', Validators.required]
    });
  }

  // ngOnInit lifecycle hook
  ngOnInit() { 
    // Checking if user is authenticated, if not navigate to login page
    if(!this.authService.isAuthenticate()){
      this.router.navigate(['/login']);
    }
    // Subscribe to form value changes
    this.form.valueChanges.subscribe(val => {
      // If both selectors have values, get the caloric output
      if (val.selector1 && val.selector2) {
        this.caloricOutputService.getCaloricOutput(val.selector1, val.selector2).subscribe(res => {
          // Update the remaining calories
          this.remainingCalories = res.caloric_output;
        });
      }
    });
  }

  // Function to add a row
  addRow() {
    this.rows.push({col1: '', col2: '', col3: ''});
  }

  // Function to add a custom row
  customAddRow() {
    this.rows.push({col1: '', col2: '', col3: '', custom: true});
  }

  // Function to handle string input change
  onStringInputChanged(row: any) {
    // Search for the food in the USDA database
    this.usdaService.searchFood(row.col2).subscribe((result: any) => {
      // If the result is valid, update the query result and calculate calories
      if (result && result.foods && result.foods.length > 0 && result.foods[0].foodNutrients && result.foods[0].foodNutrients.length > 3) {
        const nutrientValue = result.foods[0].foodNutrients[3].nutrientNumber;
        row.queryResult = `${nutrientValue}`;
        this.calculateCalories();  
      } 
    }, (error) => {
      // Log any errors encountered during fetching
      console.error("Error in searchFood: ", error);
    });
  }

  // Function to calculate calories
  calculateCalories() {
    // Set calculating to true
    this.calculating = true;
    // Calculate consumed calories
    this.consumedCalories = this.rows.reduce((sum, row) => sum + (Number(row.col1) * Number(row.col3 || row.queryResult || 0)), 0);
    // Get the caloric output for the selected body type and sex
    this.caloricOutputService.getCaloricOutput(this.form.value.selector1, this.form.value.selector2).subscribe(res => {
      // Calculate remaining calories and set calculating to false
      this.remainingCalories = res.caloric_output - this.consumedCalories;
      this.calculating = false;
    });
  }
}
