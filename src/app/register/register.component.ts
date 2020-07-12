import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Register, Grade, Board } from '../shared/register';
import { LocationService } from '../services/location.service';
import { FormpostService } from '../services/formpost.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {



 
      @ViewChild('fform') registerFormDirective;
  
      newUser: Register;
      registerForm: FormGroup;
      
      grades = Grade;
      boards = Board;
      errMess: string;
      states: string[];
      cities: string[];
      all: {};
      flag = false;
      isCorrect = false;
      success = false;
      failure = false;
  
      formErrors = {
        'firstname': '',
        'lastname': '',
        'username': '',
        'password': '',
        'email': '',
        // 'phno': '',
        'otp': ''
      };
  
      validationMessages = {
        'firstname': {
          'required':      'First Name is required.',
          'minlength':     'First Name must be at least 2 characters long.',
          'maxlength':     'FirstName cannot be more than 25 characters long.'
        },
        'lastname': {
          'required':      'Last Name is required.',
          'minlength':     'Last Name must be at least 2 characters long.',
          'maxlength':     'Last Name cannot be more than 25 characters long.'
        },
        'username': {
          'required':      'User Name is required.',
          'minlength':     'First Name must be at least 2 characters long.',
          'maxlength':     'FirstName cannot be more than 25 characters long.',
        },
        'password': {
          'required':      'Password is required.',
        },
        'email': {
          'required':      'Email is required.',
          'email':         'Email not in valid format.'
        },
        // 'phno': {
        //   'required':      'Ph. number is required.',
        //   'pattern':       'Ph. number must contain only numbers.'
        // },
        'otp': {
          'required': 'OTP is required.',
          'minlength': 'OTP must be atleast 6 characters long.'
        }
      };
  
      constructor(
        private reg: FormBuilder, private locationService: LocationService, private formpostService: FormpostService,
        private http: HttpClient) { 
        this.createForm();
      }
  
      ngOnInit() 
      {
        this.locationService.getStates()
        .subscribe(states => {
          this.states = Object.keys(states);
          this.all = states;
        },
          errmess => this.errMess = <any>errmess);
      }
    
  
      onSubmit() 
      {
        this.newUser = this.registerForm.value;  
        // console.log(this.formpostService.sendPhoneNo(this.newUser.phno));
        this.formpostService.verifyOTP({"to": this.newUser.phno, "userCode": this.newUser.otp})
        .subscribe((data) => {
          // console.log(data.message);
          if(data.message)
          {
            console.log("inside");
            this.formpostService.postForm(this.newUser)
            .subscribe((data)=>{
              console.log(data);
              this.success = true;
            });
          }
          else
          {
            console.log("outside");
            console.log("Invalid OTP!")
            this.failure = true;
          }
          });
          this.registerForm.reset({
            firstname: '',
            lastname: '',
            username: '',
            password: '',
            email: '',
            phno: ''
          });
        // this.registerFormDirective.resetForm();
      }
  
      onPartial() 
      {
        this.flag = true;
        this.formpostService.sendPhoneNo(this.registerForm.value.phno)
        .subscribe((data)=>{
          // console.log(data);
        });
      }
  
      onValueChanged(data?: any) 
      {
        if(!this.registerForm) 
        { 
          return; 
        }
        const form = this.registerForm;
        // console.log(form);
        for(const field in this.formErrors) 
        {
          if (this.formErrors.hasOwnProperty(field)) 
          {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            const control = form.get(field);
            if (control && control.dirty && !control.valid) 
            {
              const messages = this.validationMessages[field];
              for (const key in control.errors) 
              {
                if (control.errors.hasOwnProperty(key)) 
                {
                  this.formErrors[field] += messages[key] + ' ';
                }
              }
            }
          }
        }
      }
  
      createForm() 
      {
        this.flag = false;
        this.registerForm = this.reg.group({
        firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
        lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
        username: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
        password: ['', Validators.required],
        email: ['', [Validators.required, Validators.email] ],
        phno: ['', [Validators.required, Validators.pattern] ],
        state: 'None',
        city: 'None',
        grade: 'None',
        board: 'None',
        otp: ['', [Validators.required, Validators.minLength(6)]]
        });
        // console.log(this.registerForm);
        this.registerForm.valueChanges.subscribe(data => this.onValueChanged(data));
        this.onValueChanged();
      }
}
  


