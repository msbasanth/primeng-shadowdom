import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as allReportingColumns from '../assets/reporting-column-option.json';
import { ChangeDetectorRef } from '@angular/core';
import "../assets/table-container.js";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent  implements OnInit{
  allColumns: any = (allReportingColumns as any).default;
  procedures: any;
  display = false;
  index: number = 1;
  constructor(private http: HttpClient, private cdRef:ChangeDetectorRef) {}

  ngOnInit() {
    this.http.get('../assets/large-dataset.json').subscribe(proc => {
      console.log(proc);
      this.procedures = proc;
      this.display = true;
    });

  }

}

export class Car {
  id: string;
  vin: string;
  year: string;
  brand: string;
  color: string;
  constructor(){
    this.id = '';
    this.color = '';
    this.vin = '';
    this.year = '';
    this.brand = '';
  }
}
