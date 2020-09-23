import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentLisComponent } from './department-lis.component';

describe('DepartmentLisComponent', () => {
  let component: DepartmentLisComponent;
  let fixture: ComponentFixture<DepartmentLisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentLisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentLisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
