import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataManager, Query, ReturnOption} from '@syncfusion/ej2-data';
import data from '../../../../assets/jsons/members.json';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  public items: any[] = [];
  public dm: DataManager = new DataManager(data.members as any[]);
  public sort: string = "name";
  @Input() search = '';
  public openform: boolean = false;
  public newMember: FormGroup = new FormGroup({
      name: new FormControl(),
      position: new FormControl(),
      groups: new FormControl(),
      email: new FormControl(),
      isLeader: new FormControl(),
    });

  public ngOnInit(): void {
    this.items = this.dm.executeLocal(new Query().sortBy('name', 'ascending').take(15));
  }

  onSearch(event: any) {
    var search = event.target.value;
    this.items = this.dm.executeLocal(new Query().search(search, ['name'] || ['position'] || ['groups']).take(15));
  }
  
   onSort(sort: string, dir: string) {
    this.items = this.dm.executeLocal(new Query().sortBy(sort, dir).take(15));
  }

  onClickOpenForm(){
    this.openform = true;
  }

  onClickSubmitForm(formdata: any) {
    let newMember: any = {
      id: this.items.length,
      name: formdata.name,  
      position: formdata.position ? formdata.position : "Member",
      groups: formdata.groups ? formdata.groups.split(",") : "no groups",
      email: formdata.email,
      isLeader: !formdata.isLeader ? false : true,
      accepted: false
    }
    data.members.push(newMember);
    this.openform = false;

    this.sendEmail(formdata.email);
  }

  sendEmail(email: any) {
    alert("Your member invite has been sent!");
  }
}
