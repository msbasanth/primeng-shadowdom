import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import * as allReportingColumns from '../../assets/reporting-column-option.json';

@Component({
  selector: 'app-ptable-wrapper',
  templateUrl: './ptable-wrapper.component.html',
  styleUrls: ['./ptable-wrapper.component.css'],
})
export class PtableWrapperComponent implements OnInit {
  allColumns: any = (allReportingColumns as any).default;
  procedures: any;
  display = false;
  index: number = 1;
  constructor(private http: HttpClient, private cdRef: ChangeDetectorRef) {}

  ngOnInit() {
    const container = document.querySelector('table-container') as any;
    container.updateComplete.then(() => {
      this.http.get('../assets/large-dataset.json').subscribe((proc) => {
        console.log(proc);
        this.procedures = proc;
        this.display = true;
      });
    });
  }
}
