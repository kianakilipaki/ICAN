import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataManager, Query, ReturnOption} from '@syncfusion/ej2-data';
import rooms from '../../../../assets/jsons/chatrooms.json';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  openChat = true;
  add = false;
  chatroom: any[] = [];
  info: any;
  dm: DataManager = new DataManager(rooms.chatrooms);
  currentUser = { pic:"assets/ect/pic.jpg", name:"Alan Smith"};
  members: any;
  chats: { pic: string, user: string, date: string, message: string }[] = [];

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(params => {
      console.log(params.get("id"))
      this.loadData(params.get("id"));
    });
  }

  ngOnInit(): void {
      
  }

  sendMessage(text: any) {
    let chat = { pic:this.currentUser.pic, 'user': this.currentUser.name, date: new Date().toLocaleTimeString('En-en'), message: text};
    this.chats.push(chat);
    let txt = document.getElementById("txt") as HTMLInputElement;
    if (txt != null)
      txt.value = "";
  }

  newChatroom(data: any) {
    let room = { id: 8, name: "Open Chatroom", users: [{ pic: this.currentUser.pic, 'user': this.currentUser.name }, { data }], chats:[] };
    this.chatroom.push(room);
    return this.chatroom;
  }

  loadData(id: any) {
      this.chatroom = this.dm.executeLocal(new Query().where('id', 'equal', parseInt(id)));
      console.log(history.state.data);
      this.chatroom = this.newChatroom(history.state.data);
      this.chats = this.chatroom[0].chats;
      this.info = this.chatroom[0];
  }
}
