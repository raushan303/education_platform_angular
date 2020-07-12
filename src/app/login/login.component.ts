import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import { FormpostService } from '../services/formpost.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {phone: '', password: ''};
  errMess:string;
  constructor(public router: Router, public formpostService: FormpostService) { }

  ngOnInit() {
    if(localStorage.token)
    {
      console.log("i",localStorage.token);
      this.router.navigate(['/courses']);
    }
  }

  onSubmit() 
  {
    console.log('User: ', this.user);
    this.formpostService.login(this.user).subscribe(
      (data) => {
        console.log("hello",data);
        localStorage.token = data.token;
        location.reload();
      },
      (errmess)=>{
        this.errMess=<any>errmess;
        console.log("hello 123",this.errMess);
      }

    )
    this.router.navigate(['/courses']);
  }
  
}
