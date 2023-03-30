import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterValueMaintenanceComponent } from './master-value-maintenance.component';

describe('MasterValueMaintenanceComponent', () => {
  let component: MasterValueMaintenanceComponent;
  let fixture: ComponentFixture<MasterValueMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterValueMaintenanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterValueMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
