import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  hamburgerStatus = false;
  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void{
  this.hamburgerStatus = !this.hamburgerStatus;
}
 getHamburgerStatus(){
   return this.hamburgerStatus === true ? 'translateX(100%)' : 'translateX(0%)';
 }
}
 