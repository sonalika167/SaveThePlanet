import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  myFunction(){
    let x = document.getElementById('navbar');
    if(x.className === "topnav"){
      x.className+= " responsive";
    }else{
      x.className = "topnav";
    }
  }
}
