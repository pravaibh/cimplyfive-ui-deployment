import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  toggleMenu = false;

  constructor() { }

  ngOnInit() {
  }

  // onToggleMenu() {
  //   if(this.toggleMenu === true) {
  //     this.toggleMenu = false;
  //   } else {
  //     this.toggleMenu = true; 
  //   }
  // }


}
