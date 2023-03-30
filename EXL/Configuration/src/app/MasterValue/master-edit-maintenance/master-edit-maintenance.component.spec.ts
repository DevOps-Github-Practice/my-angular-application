import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterEditMaintenanceComponent } from './master-edit-maintenance.component';

describe('MasterEditMaintenanceComponent', () => {
  let component: MasterEditMaintenanceComponent;
  let fixture: ComponentFixture<MasterEditMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterEditMaintenanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterEditMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
