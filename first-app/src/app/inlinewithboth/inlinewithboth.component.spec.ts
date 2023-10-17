import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlinewithbothComponent } from './inlinewithboth.component';

describe('InlinewithbothComponent', () => {
  let component: InlinewithbothComponent;
  let fixture: ComponentFixture<InlinewithbothComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InlinewithbothComponent]
    });
    fixture = TestBed.createComponent(InlinewithbothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
