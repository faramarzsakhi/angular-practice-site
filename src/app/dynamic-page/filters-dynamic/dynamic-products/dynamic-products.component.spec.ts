import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicProductsComponent } from './dynamic-products.component';

describe('DynamicProductsComponent', () => {
  let component: DynamicProductsComponent;
  let fixture: ComponentFixture<DynamicProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicProductsComponent]
    });
    fixture = TestBed.createComponent(DynamicProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
