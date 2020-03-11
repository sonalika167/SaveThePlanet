import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-donationwindow',
  templateUrl: './donationwindow.component.html',
  styleUrls: ['./donationwindow.component.css']
})
export class DonationwindowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  fadeIt(){
    $(".image").fadeTo("slow", 0.7);
  }

  fadeOut(){
    $(".image").fadeTo("slow", 1);
  }
 


}
