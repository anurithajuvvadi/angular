import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlinestylecomponentComponent } from './inlinestylecomponent.component';

describe('InlinestylecomponentComponent', () => {
  let component: InlinestylecomponentComponent;
  let fixture: ComponentFixture<InlinestylecomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InlinestylecomponentComponent]
    });
    fixture = TestBed.createComponent(InlinestylecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
