import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataManager, Query, ReturnOption} from '@syncfusion/ej2-data';
import forms from '../../../../../assets/jsons/forms.json';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.scss']
})
export class NewFormComponent implements OnInit {
  public clicks: any[] = [{}];
  public form: FormGroup = new FormGroup({
      name: new FormControl(),
      question: new FormControl(),
      type: new FormControl(),
      options: new FormControl(),
      isRequired: new FormControl(),
  });

  ngOnInit(): void {
    this.form;
    this.clicks;
  }

  addQuestion() {
    this.clicks.push({});
  }
  removeQuestion(i: any) {
    this.clicks.splice(i, 1);
  }

  onClickSubmitForm(f: NgForm) {
    let newForm: any = {
      id: 0,
      name: f.value.name,  
      question: f.value.question,
      type: f.value.type,
      options: f.value.options,
      isRequired: !f.value.isRequired ? false : true,
    }
    forms.forms.push(newForm);
  }
}
