import { Component, OnInit } from '@angular/core';
import { DataManager, Query, ReturnOption} from '@syncfusion/ej2-data';
import data from '../../../../../assets/jsons/reports.json';

@Component({
  selector: 'app-open-report',
  templateUrl: './open-report.component.html',
  styleUrls: ['./open-report.component.scss']
})
export class OpenReportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
