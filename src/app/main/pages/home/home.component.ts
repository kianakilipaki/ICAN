import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  // banner variables -- placeholders
  welcome = "Welcome to Ward 230!";
  instructions = "Please fill out to do list items to complete setup";

  // list objects -- placeholders
  item1 = { title: "Invite members" };
  item2 = { title: "Complete Profile" };
  toDos = [this.item1, this.item2, this.item1, this.item2];

  // announcements list objects -- placeholders
  isAdmin = true;
  item3 = { title: "EMERGENCY ANNOUNCEMENT!!", date: "02/11/2022", user: "Alan Smith", content:"Tornado Warning in the area. If you need shelter please come to the Bishops house." };
  announcements = [this.item3, this.item3];
}
