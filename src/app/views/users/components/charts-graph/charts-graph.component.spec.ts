import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsGraphComponent } from './charts-graph.component';

describe('ChartsGraphComponent', () => {
  let component: ChartsGraphComponent;
  let fixture: ComponentFixture<ChartsGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartsGraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartsGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
