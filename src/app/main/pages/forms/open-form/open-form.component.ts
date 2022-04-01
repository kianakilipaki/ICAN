import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataManager, Query, ReturnOption} from '@syncfusion/ej2-data';
import forms from '../../../../../assets/jsons/forms.json';
import data from '../../../../../assets/jsons/reports.json';

@Component({
  selector: 'app-open-form',
  templateUrl: './open-form.component.html',
  styleUrls: ['./open-form.component.scss']
})
export class OpenFormComponent implements OnInit {
  public f: any;
  public dm: DataManager = new DataManager(forms.forms as any[]);

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.paramMap.subscribe(params => {
      this.loadData(params.get("id"));
    });
  }

  ngOnInit(): void {
  }

  loadData(id: any) {
    this.f = this.dm.executeLocal(new Query().where('id', 'equal', parseInt(id)));
    this.f = this.f[0];
  }

  onClickSubmit(newForm: any) {
    this.router.navigate([`main/forms/`]);
  }
}
