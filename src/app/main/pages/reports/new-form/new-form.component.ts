import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataManager, Query, ReturnOption} from '@syncfusion/ej2-data';
import forms from '../../../../../assets/jsons/forms.json';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styles: [`
  @import "/src/app/shared/shared.scss";
  .form .name {
    width: 90% !important;
    max-width: none;
  }`]
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
    alert("Your new form has been added!");
  }
}
