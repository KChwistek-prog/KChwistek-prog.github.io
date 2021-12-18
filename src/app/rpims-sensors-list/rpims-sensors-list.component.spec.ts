import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpimsSensorsListComponent } from './rpims-sensors-list.component';

describe('RpimsSensorsListComponent', () => {
  let component: RpimsSensorsListComponent;
  let fixture: ComponentFixture<RpimsSensorsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RpimsSensorsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RpimsSensorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
