import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { DataManager, Query } from '@syncfusion/ej2-data';
import { filter } from 'rxjs';
import rooms from '../../../../assets/jsons/chatrooms.json';

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
  chatId: string = "empty";
  chatrooms: any[] = [];
  constructor(private router: Router) {
  }
  ngOnInit(): void {
    this.chatrooms = new DataManager(rooms.chatrooms as any[]).executeLocal(new Query());
  }

  openChatroom(id: any) {
      this.router.navigate([`main/messages/${id}`]);
  }
}
