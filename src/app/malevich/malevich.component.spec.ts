import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MalevichComponent } from './malevich.component';

describe('MalevichComponent', () => {
  let component: MalevichComponent;
  let fixture: ComponentFixture<MalevichComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MalevichComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MalevichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
