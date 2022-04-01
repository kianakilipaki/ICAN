import { Component, OnInit } from '@angular/core';
import { DataManager, Query, ReturnOption} from '@syncfusion/ej2-data';
import data from '../../../../../assets/jsons/reports.json';
import forms from '../../../../../assets/jsons/forms.json';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-open-report',
  templateUrl: './open-report.component.html',
  styleUrls: ['./open-report.component.scss']
})
export class OpenReportComponent implements OnInit {
  open = false;
  Ycount = 0;
  Ncount = 0;
  Qopen = false;
  reportExists = false;
  form: any[] = [];
  report: any[] = [];
  dm: DataManager = new DataManager(forms.forms as any[]);
  dm2: DataManager = new DataManager(data.reports as any[]);
  
  
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(params => {
      this.loadData(params.get("id"));
    });
  }

  ngOnInit(): void {
  }

  loadData(id: any) {
    this.form = this.dm.executeLocal(new Query().where('id', 'equal', parseInt(id)));
    this.report = this.dm2.executeLocal(new Query().search(parseInt(id), ['formId']));
    if (this.report.length > 0) {
      this.reportExists = true;
    }
    //console.log(this.report[0].responses);
    console.log(this.form[0].content[0].options[0]);
  }

  openQ(i: any) {
    this.calcCount(i);
    let e = document.getElementById('q'+ i);
    if (e?.classList.contains("open")) {
      e?.classList.remove("open");
      e?.classList.add("closed");
    } else {
      e?.classList.add("open");
      e?.classList.remove("closed");
    }
  }
  openO(i: any) {
    let e = document.getElementById(i);
    if (e?.classList.contains("openO")) {
      e?.classList.remove("openO");
      e?.classList.add("closeO");
    } else {
      e?.classList.add("openO");
      e?.classList.remove("closeO");
    }

  }

  calcCount(i: number) {
    this.Ncount = 0;
    this.Ycount = 0;
    this.report.forEach((e: any) => {
      if (e.responses[i] == 'yes')
        this.Ycount++;
      else
        this.Ncount++;
    });
    
  }

}
