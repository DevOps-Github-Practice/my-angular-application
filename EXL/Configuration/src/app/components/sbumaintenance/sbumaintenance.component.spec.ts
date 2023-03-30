import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SBUMaintenanceComponent } from './sbumaintenance.component';

describe('SBUMaintenanceComponent', () => {
  let component: SBUMaintenanceComponent;
  let fixture: ComponentFixture<SBUMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SBUMaintenanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SBUMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
