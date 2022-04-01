import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  currentUser = "Alan Smith";
  public newAnn = false;
  public edit = false;
  // banner variables -- placeholders
  welcome = "Welcome to Ward 230!";
  instructions = "Please fill out to do list items to complete setup";

  // list objects -- placeholders
  item1 = { title: "Invite members", link:"../members" };
  item2 = { title: "Complete Profile", link: "../profile" };
  item3 = { title: "Wellness Check", link:"../forms" };
  toDos = [this.item1, this.item2, this.item3];

  // announcements list objects -- placeholders
  isAdmin = true;
  item4 = { id: 0, title: "EMERGENCY ANNOUNCEMENT!!", date: "02/11/2022", user: this.currentUser, content:"Tornado Warning in the area. If you need shelter please come to the Bishops house. PLEASE fill out the Wellness Check Survey so we can make sure everyone is okay!" };
  announcements = [this.item4];

  addAnn(ann: any, title: any) {
    let newAnn = {id: this.announcements.length + 1, title: title, date: new Date().toLocaleTimeString('En-en'), user: this.currentUser, content: ann };
    this.announcements.push(newAnn);
  }

  editAnn(ann: any, title: any, id: number) {
    let newAnn = { id: id, title: title, date: new Date().toLocaleTimeString('En-en'), user: this.currentUser, content: ann };
    this.announcements.splice(id, 1, newAnn);
  }
}
