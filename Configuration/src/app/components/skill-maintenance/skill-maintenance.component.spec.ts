import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillMaintenanceComponent } from './skill-maintenance.component';

describe('SkillMaintenanceComponent', () => {
  let component: SkillMaintenanceComponent;
  let fixture: ComponentFixture<SkillMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillMaintenanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
