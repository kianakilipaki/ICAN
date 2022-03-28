import { Component, Input, OnInit } from '@angular/core';
import { DataManager, Query} from '@syncfusion/ej2-data';
import data from '../../../../assets/jsons/reports.json';
import forms from '../../../../assets/jsons/forms.json';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],  
})
export class ReportsComponent implements OnInit {
  public items: any[] = [];
  public dm: DataManager = new DataManager(forms.forms as any[]);
  
  public sort: string = "name";
  @Input() search = '';

  public ngOnInit(): void {
    this.items = this.dm.executeLocal(new Query().sortBy('name', 'ascending').take(15));
  }

  onSearch(event: any) {
    var search = event.target.value;
    this.items = this.dm.executeLocal(new Query().search(search, ['name']).take(15));
  }

  onSort(sort: string, dir: string) {
    this.items = this.dm.executeLocal(new Query().sortBy(sort, dir).take(15));
  }
  
}

