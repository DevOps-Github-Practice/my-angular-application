import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalMaintenanceComponent } from './vertical-maintenance.component';

describe('VerticalMaintenanceComponent', () => {
  let component: VerticalMaintenanceComponent;
  let fixture: ComponentFixture<VerticalMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerticalMaintenanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerticalMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
