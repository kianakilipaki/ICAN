import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataManager, Query, ReturnOption} from '@syncfusion/ej2-data';
import forms from '../../../../../assets/jsons/forms.json';
import data from '../../../../../assets/jsons/reports.json';

@Component({
  selector: 'app-open-form',
  templateUrl: './open-form.component.html',
  styleUrls: ['./open-form.component.scss']
})
export class OpenFormComponent implements OnInit {
  public items: any[] = [];
  public f: any;
  public dm: DataManager = new DataManager(forms.forms as any[]);

  ngOnInit(): void {
    this.items = this.dm.executeLocal(new Query().where('name', 'equal', 'Wellness Check'));
    this.f = this.items[0];
  }

  onClickSubmit(newForm: any) {

  }
}
