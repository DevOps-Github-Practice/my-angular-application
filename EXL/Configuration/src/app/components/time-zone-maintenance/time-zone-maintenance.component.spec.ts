import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeZoneMaintenanceComponent } from './time-zone-maintenance.component';

describe('TimeZoneMaintenanceComponent', () => {
  let component: TimeZoneMaintenanceComponent;
  let fixture: ComponentFixture<TimeZoneMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeZoneMaintenanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeZoneMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
