import { Component, Input, OnInit } from '@angular/core';
import { provideDatabase } from '@angular/fire/database';
import { ActivatedRoute } from '@angular/router';
import { DataManager, Query, ReturnOption} from '@syncfusion/ej2-data';
import rooms from '../../../../assets/jsons/chatrooms.json';
import members from '../../../../assets/jsons/members.json';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  openChat = true;
  add = false;
  chatroom: any;
  info: any;
  newUser: any;
  dm: DataManager = new DataManager(rooms.chatrooms);
  dm2: DataManager = new DataManager(members.members);
  currentUser = { name:"Alan Smith", img:"assets/etc/pic.jpg"};
  members: { name: string, img: string }[] = [];
  chats: { name: string, img: string, date: string, message: string }[] = [];

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(params => {
      this.loadData(params.get("id"));
    });
  }

  ngOnInit(): void {
    provideDatabase
  }

  loadData(id: any) {
    if (isNaN(id)) {
      this.chatroom = this.newChatroom(id);
    }
    else {
      this.chatroom = this.dm.executeLocal(new Query().where('id', 'equal', parseInt(id)));
      this.chatroom = this.chatroom[0];
      this.members = this.chatroom.users;
      this.chats = this.chatroom.chats;
    }
  }

  addUser(name: any) {
    var x = this.dm2.executeLocal(new Query().where('name', 'equal', name.toString()).select(["name", "img"])) as any[];
    var newUser = x[0];
    this.members.push(newUser);
  }

  sendMessage(text: any) {
    let chat = { name: this.currentUser.name, img: this.currentUser.img, date: new Date().toLocaleTimeString('En-en'), message: text};
    this.chats.push(chat);
    let txt = document.getElementById("txt") as HTMLInputElement;
    if (txt != null)
      txt.value = "";
  }

  newChatroom(name: any) {
    this.addUser(name); 
    this.chatroom = { id: 8, name: "Open Chatroom", users: this.members.push(this.currentUser), chats: this.chats };
    return this.chatroom;
  }
}
