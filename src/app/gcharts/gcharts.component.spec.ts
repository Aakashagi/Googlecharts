import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GchartsComponent } from './gcharts.component';

describe('GchartsComponent', () => {
  let component: GchartsComponent;
  let fixture: ComponentFixture<GchartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GchartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
