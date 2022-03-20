import { Component, Input, OnInit } from '@angular/core';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataManager, Query, ReturnOption} from '@syncfusion/ej2-data';
import data from '../../../../assets/jsons/reports.json';
import forms from '../../../../assets/jsons/forms.json';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
  exportAs: 'ngForm'
})
export class ReportsComponent implements OnInit {
  public items: any[] = [];
  public dm: DataManager = new DataManager(forms.forms as any[]);
  public sort: string = "name";
  @Input() search = '';
  public openform: boolean = false;
  public report: FormGroup = new FormGroup({
      name: new FormControl(),
      question: new FormControl(),
      type: new FormControl(),
      options: new FormControl(),
      isRequired: new FormControl(),
    });

  public ngOnInit(): void {
    this.items = this.dm.executeLocal(new Query().sortBy('name', 'ascending').take(15));
  }

  onSearch(event: any) {
    var search = event.target.value;
    this.items = this.dm.executeLocal(new Query().search(search, ['name']).take(15));
  }

  onClickOpenForm(){
    this.openform = true;
    this.report;
  }
  addQuestion() {
    
  }

  onClickSubmitForm(f: NgForm) {
    let newForm: any = {
      id: this.items.length,
      name: f.value.name,  
      question: f.value.question,
      type: f.value.type,
      options: f.value.options,
      isRequired: !f.value.isRequired ? false : true,
    }
    forms.forms.push(newForm);
    this.openform = false;
  }

  
}

