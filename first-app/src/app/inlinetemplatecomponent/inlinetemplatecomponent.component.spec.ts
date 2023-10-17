import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlinetemplatecomponentComponent } from './inlinetemplatecomponent.component';

describe('InlinetemplatecomponentComponent', () => {
  let component: InlinetemplatecomponentComponent;
  let fixture: ComponentFixture<InlinetemplatecomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InlinetemplatecomponentComponent]
    });
    fixture = TestBed.createComponent(InlinetemplatecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
