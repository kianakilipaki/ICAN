import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { DataManager, Query } from '@syncfusion/ej2-data';
import { filter } from 'rxjs';
import rooms from '../../../../../assets/jsons/chatrooms.json';

@Component({
  selector: 'app-room-list',
  template: ` 
  <div *ngFor="let room of chatrooms">
         <p><a (click)="openChatroom(room.id)">
         &#10095; {{ room.name }}</a></p>
  </div>`,
  styles: [`
   div {
     margin-left:4.5em;
   }
   p {
     padding-top:1em;
   }
`]
})
export class RoomListComponent implements OnInit {
  chatId ="0";

  chatrooms: any[] = [];
  constructor(private router: Router) {
    // this.router.routeReuseStrategy.shouldReuseRoute = function () {
    //   return false;
    // }
    // this.router.events.subscribe((evt) => {
    //     if (evt instanceof NavigationEnd) {
    //        // trick the Router into believing it's last link wasn't previously loaded
    //        this.router.navigated = false;
    //        // if you need to scroll back to top, here is the right place
    //        window.scrollTo(0, 0);
    //     }
    // });
  }
  ngOnInit(): void {

    this.chatrooms = new DataManager(rooms.chatrooms as any[]).executeLocal(new Query());

  }

  openChatroom(id: any) {
    
      this.router.navigate([`main/messages/${id}`], {
        state: { data: id }
      });
  }
}
