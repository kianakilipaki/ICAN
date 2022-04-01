import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  open = false;
  profile = { isPrimary: true, name: "Alan Smith", relation:"primary", pic: "/assets/ect/pic.jpg", title: "Bishop", email: "alansmith@gmail.com", phone: "(203)123-1234", address: "something st Orem, UT 22883" };
  profile2 = { isPrimary: false, name: "Sarah Smith", relation:"Spouse", pic: "/assets/ect/profile.svg", title: "Member", email:"sarahsmith@gmail.com", phone:"(203)123-1234", address:"something st Orem, UT 22883" };
  profiles = [this.profile, this.profile2];

  addProfile() {
    
  }

  saveProfile(form:any) {
    this.open = false;
  }

}
