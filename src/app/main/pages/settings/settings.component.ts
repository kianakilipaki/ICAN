import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  user = "Alan Smith";
  email = "alanssmitty@gmail.com";
  pass = "password";
  constructor() { }

  ngOnInit(): void {
  }

}
