import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  register() {
    this._router.navigate(['register']);
  }

  forgetPassword() {
    this._router.navigate(['forgot-password']);
  }

  login(){
    this._router.navigate(['home']);
  }

}
