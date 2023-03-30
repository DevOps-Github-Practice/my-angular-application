import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationMaintenanceComponent } from './location-maintenance.component';

describe('LocationMaintenanceComponent', () => {
  let component: LocationMaintenanceComponent;
  let fixture: ComponentFixture<LocationMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationMaintenanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
