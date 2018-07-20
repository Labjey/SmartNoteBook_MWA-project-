import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAppListComponent } from './admin-app-list.component';

describe('AdminAppListComponent', () => {
  let component: AdminAppListComponent;
  let fixture: ComponentFixture<AdminAppListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAppListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAppListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
