import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public page_title : String;
  public page_disclaimer : String;

  constructor() {
    this.page_title = 'Wellcome to my Forum!';
    this.page_disclaimer = 'Share, learn and give support to other developers :-)';
  }

  ngOnInit() {
  }

}
