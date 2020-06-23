import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  cars = [
    {
      brand: "Toyota",
      type: "Camry"
    },
    {
      brand: "VW",
      type: "Golf"
    },
    {
      brand: "Lamborghini",
      type: "Countach"
    },
  ]

  ngOnInit(): void {
  }

}