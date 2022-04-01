import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataManager, Query } from '@syncfusion/ej2-data';
import forms from '../../../../assets/jsons/forms.json';
import data from '../../../../assets/jsons/reports.json';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {

  toDos: any[] = [];
  completed: any[] = [];
  all: any[] = [];
  currentUser = "Alan Smith";
  dm: DataManager = new DataManager(forms.forms as any[]);
  dm2: DataManager = new DataManager(data.reports as any[]);
  @Input() search = '';

  constructor(private router: Router) {
  }
  
  public ngOnInit(): void {
    this.all = this.dm.executeLocal(new Query().sortBy('name', 'ascending').take(15));
    this.completed = this.dm2.executeLocal(new Query().where('user', 'equal', this.currentUser));
    this.toDos = this.dm.executeLocal(new Query().where('name', 'equal', "Volunteers Form"));
  }

  onSearch(event: any) {
    var search = event.target.value;
    this.toDos = this.dm.executeLocal(new Query().search(search, ['name']).take(15));
  }
  
  openForm(id: any) {
    this.router.navigate([`main/forms/openForm/${id}`]);
  }
}
