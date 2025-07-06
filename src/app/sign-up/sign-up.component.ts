import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormGroupName } from '@angular/forms';
import { Country } from '../country';
import { CountriesService } from '../countries.service';

@Component({
  selector: 'app-sign-up',
  standalone: false,
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

  signUpForm: FormGroup | any = null;
  genders = ["male", "female"];
  countries: Country[] = [];

  constructor(private countrieService: CountriesService){}

  ngOnInit(){

    this.countries = this.countrieService.getCountries();

    this.signUpForm = new FormGroup({

      personname : new FormGroup({
        firstName : new FormControl('veer'),
        lastName  : new FormControl(null),
      }),

      email: new FormControl(null),
      mobile: new FormControl(null),
      dateOfBirth: new FormControl(null),
      gender: new FormControl(null),
      countryID: new FormControl(null),
      recievenewsletter:  new FormControl(null),
      skills: new FormArray([]),
    });

    this.signUpForm.valueChanges.subscribe((value : any)=>{
      console.log(value);
    });
  }

  onSubmitClick(){
    //Display current form value
    //console.log(this.signUpForm.value);

    //set values
    //this.signUpForm.setValue({
    //  firstName: "Veer",
    //  lastName: "Solanki",
    //  email: "veer@gmail.com",
    //  mobile: "711111",
    //  dateOfBirth: "2025-07-06",
    //  gender: "male",
    //  countryID: 1,
    //  recievenewsletter: true,
    //});

    //patch values
    //this.signUpForm.patchValue({
    //  firstName: "Veer",
    //  lastName: "Solanki",
    //  dateOfBirth: "2025-07-06",
    //});

    //reset
    this.signUpForm.reset();
  }

  onAddSkill(){
    var formGroup = new FormGroup({
      skillName: new FormControl(null),
      level: new FormControl(null)
    });
    (<FormArray>this.signUpForm.get("skills")).push(formGroup);
  }

  onRemoveClick(index: number)
  {
    (<FormArray>this.signUpForm.get("skills")).removeAt(index);
  }
}
