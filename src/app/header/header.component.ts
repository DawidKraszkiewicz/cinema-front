import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  status = false;
  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void{
  this.status = !this.status;
}
}
 