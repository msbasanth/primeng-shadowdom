import {
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import '../assets/table-container.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../styles.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('viewContainerRef', { read: ViewContainerRef, static: true })
  public orderedViewContainer: ViewContainerRef;

  constructor(
    public viewContainerRef: ViewContainerRef,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.addDynamicFoodChoice();
  }

  public async addDynamicFoodChoice(): Promise<void> {
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
