import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public isActive: boolean = true; 

  // Menu values -- Placeholders
  organizationName = "Ward230"; 
  userName = "Alan Smith"; 
  userTitle = "Bishop"; 
  userPic = "assets/etc/pic.jpg"; 

  

  constructor() {
  }

  ngOnInit(): void {
  }

}
