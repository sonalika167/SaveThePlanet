import { Component, OnInit } from '@angular/core';
import {NgodetailsService} from '../ngodetails.service';
@Component({
  selector: 'app-ngo',
  templateUrl: './ngo.component.html',
  styleUrls: ['./ngo.component.css']
})
export class NgoComponent implements OnInit {

  public ngodetails;
  constructor(private _ngodetails: NgodetailsService) { }

  ngOnInit() {
    this._ngodetails.getngodetails()
    .subscribe((data) => {this.ngodetails = data;
    console.log(this.ngodetails);
    });

  } 

}
