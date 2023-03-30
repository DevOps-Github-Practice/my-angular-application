import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterValueSearchViewComponent } from './master-value-search-view.component';

describe('MasterValueSearchViewComponent', () => {
  let component: MasterValueSearchViewComponent;
  let fixture: ComponentFixture<MasterValueSearchViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterValueSearchViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterValueSearchViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
