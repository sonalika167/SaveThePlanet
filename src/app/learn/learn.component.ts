import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import{FactdetailsService} from '../factdetails.service';
import * as AOS from "aos";
@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit {

  public factdetails;
  constructor(public _factdetails: FactdetailsService) { }

  ngOnInit() {
    // this._factdetails.getfactdetails()
    // .subscribe((data) => {this.factdetails = data;
    // console.log(this.factdetails);
    // });

    this._factdetails.getfactdetails()
    .subscribe((data) => {
      this.factdetails = data;
      console.log(this.factdetails);
    });
  }

  fun1(){
    $('#yes-id').fadeIn("slow");
    $('#btn-no-id').slideUp("fast");
    $('#timer-id').fadeIn("slow");
    $('#no-id').fadeOut("slow");
    this.utility();
  }

  fun2(){
    $('#no-id').fadeIn("slow");
    $('#btn-yes-id').slideUp("fast");
    $('#timer-id').fadeIn("slow");
    $('#yes-id').fadeOut("slow");
    this.utility();
  }

  

  utility(){

    let timer = document.getElementById('timer-id');
    let counter = 1;
    let int = setInterval(()=>{
        
        counter--;
        console.log(counter);
        if(counter < 0){
                clearInterval(int);
                this.showotherdiv();
              
        }
        
    }, 1000);
    
    }

    showotherdiv(){
      let fact = document.getElementsByClassName("fact");
      $("#mainlearn").fadeOut("slow");
      
      $(".maincontainer").fadeIn("slow");
      AOS.refresh();
      // for(let i = 0; i<fact.length; i++){
      //     $(fact[i]).fadeIn("slow");
      // }
  }
    hello(){
      alert('hello');
    }

    

}
