import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtableWrapperComponent } from './ptable-wrapper.component';

describe('PtableWrapperComponent', () => {
  let component: PtableWrapperComponent;
  let fixture: ComponentFixture<PtableWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PtableWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PtableWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
