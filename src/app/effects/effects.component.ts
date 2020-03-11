import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-effects',
  templateUrl: './effects.component.html',
  styleUrls: ['./effects.component.css']
})
export class EffectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  fun1(){
    $(".first-image").fadeIn("slow");
  }
  fun2(){
    $(".first-image").fadeOut("slow");
  }
  fun3(){
    $(".second-image").fadeIn("slow");
  }
  fun4(){
    $(".second-image").fadeOut("slow");
  }
  fun5(){
    $(".third-image").fadeIn("slow");
  }
  fun6(){
    $(".third-image").fadeOut("slow");
  }
  fun7(){
    $(".fourth-image").fadeIn("slow");
  }
  fun8(){
    $(".fourth-image").fadeOut("slow");
  }
  fun9(){
    $(".fifth-image").fadeIn("slow");
  }
  fun10(){
    $(".fifth-image").fadeOut("slow");
  }
}
