import {
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import '../assets/table-container.js';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      .outofstock {
        font-weight: 700;
        color: #ff5252;
        text-decoration: line-through;
      }

      .lowstock {
        font-weight: 700;
        color: #ffa726;
      }

      .instock {
        font-weight: 700;
        color: #66bb6a;
      }

      :host ::ng-deep .row-accessories {
        background-color: rgba(0, 0, 0, 0.15) !important;
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  @ViewChild('viewContainerRef', { read: ViewContainerRef, static: true })
  public orderedViewContainer: ViewContainerRef;


  constructor(
    public viewContainerRef: ViewContainerRef,
    private cdr: ChangeDetectorRef,
    private http: HttpClient
  ) {}

  ngOnInit() {
    //this.loadTableComponent();
  }

  public async loadTableComponent(): Promise<void> {
    const { PtableWrapperComponent } = await import(
      './ptable-wrapper/ptable-wrapper.component'
    );
    const componentRef = this.orderedViewContainer.createComponent(
      PtableWrapperComponent
    );
    this.cdr.detectChanges();
  }
}

export class Car {
  id: string;
  vin: string;
  year: string;
  brand: string;
  color: string;
  constructor() {
    this.id = '';
    this.color = '';
    this.vin = '';
    this.year = '';
    this.brand = '';
  }
}
