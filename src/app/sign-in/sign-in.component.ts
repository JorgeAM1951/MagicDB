/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable eqeqeq */
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FireUserService } from '../services/fire-user.service';
import { RouterModule } from '@angular/router';
import { NgModel } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  username: string | undefined;
  passwd: string | undefined;
  passwd_check: string | undefined;


  constructor(
    private fireUserService: FireUserService,
    private router: Router
  ){}
  ngOnInit(): void {

  }

  onSubmit(form: NgForm): void{
    this.fireUserService.SignUp(this.username as string, this.passwd as string);

  }

}
