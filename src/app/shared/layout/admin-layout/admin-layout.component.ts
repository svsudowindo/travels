import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  public section1 = [
    {
      title: 'FLIGHTS',
      url: '/login',
      icon: 'airplane',
      isOrange: false
    },
    {
      title: 'BUSES',
      url: '/login',
      icon: 'bus',
      isOrange: false
    },
    {
      title: 'HOLIDAYS',
      url: '/login',
      icon: 'airplane',
      isOrange: false
    },
    {
      title: 'LOGIN',
      url: '/login',
      // icon: 'airplane',
      isOrange: true
    },
    {
      title: 'REGISTER',
      url: '/login',
      // icon: 'airplane',
      isOrange: true
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
