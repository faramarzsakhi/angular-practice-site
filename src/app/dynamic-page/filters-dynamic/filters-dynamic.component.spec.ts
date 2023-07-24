import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersDynamicComponent } from './filters-dynamic.component';

describe('FiltersDynamicComponent', () => {
  let component: FiltersDynamicComponent;
  let fixture: ComponentFixture<FiltersDynamicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiltersDynamicComponent]
    });
    fixture = TestBed.createComponent(FiltersDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
