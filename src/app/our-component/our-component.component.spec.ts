import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurComponentComponent } from './our-component.component';

describe('OurComponentComponent', () => {
  let component: OurComponentComponent;
  let fixture: ComponentFixture<OurComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
