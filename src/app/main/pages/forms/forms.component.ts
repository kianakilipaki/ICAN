import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {

  // list objects -- placeholders
  item1 = { id:123, title: "Invite members", date:"12/23/2021", status:"incomplete" };
  item2 = { id:1233, title: "Complete Profile", date:"12/23/2021", status:"incomplete" };
  toDos = [this.item1, this.item2, this.item1, this.item2];

}
