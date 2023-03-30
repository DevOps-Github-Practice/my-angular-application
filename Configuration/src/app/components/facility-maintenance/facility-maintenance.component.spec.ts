import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityMaintenanceComponent } from './facility-maintenance.component';

describe('FacilityMaintenanceComponent', () => {
  let component: FacilityMaintenanceComponent;
  let fixture: ComponentFixture<FacilityMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacilityMaintenanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilityMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
