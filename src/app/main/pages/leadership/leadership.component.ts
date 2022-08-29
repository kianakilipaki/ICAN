import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leadership',
  templateUrl: './leadership.component.html',
  styleUrls: ['./leadership.component.scss']
})
export class LeadershipComponent {

  profile = { id: 70, isPrimary: true, name: "Alan Smith", relation:"primary", pic: "/assets/etc/pic.jpg", title: "Bishop", email: "alansmith@gmail.com", phone: "(203)123-1234", address: "something st Orem, UT 22883" };
  profile2 = {id: 71, isPrimary: false, name: "Sarah Smith", relation:"Spouse", pic: "/assets/etc/profile.svg", title: "Member", email:"sarahsmith@gmail.com", phone:"(203)123-1234", address:"something st Orem, UT 22883" };
  profiles = [this.profile, this.profile2];
  group1 = { name: "Ward Council", members: this.profiles };
  groups = [this.group1, this.group1];
  
  constructor(private router: Router) { }
  
  GoToChat(id: any) {
    this.router.navigate([`main/messages/${id}`]);
  }
}
