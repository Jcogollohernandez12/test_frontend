import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrueComponentComponent } from './true-component.component';

describe('TrueComponentComponent', () => {
  let component: TrueComponentComponent;
  let fixture: ComponentFixture<TrueComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TrueComponentComponent]
    });
    fixture = TestBed.createComponent(TrueComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
