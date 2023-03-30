import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LOBMaintenanceComponent } from './lobmaintenance.component';

describe('LOBMaintenanceComponent', () => {
  let component: LOBMaintenanceComponent;
  let fixture: ComponentFixture<LOBMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LOBMaintenanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LOBMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
