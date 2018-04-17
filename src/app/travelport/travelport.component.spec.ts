import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelportComponent } from './travelport.component';

describe('TravelportComponent', () => {
  let component: TravelportComponent;
  let fixture: ComponentFixture<TravelportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
