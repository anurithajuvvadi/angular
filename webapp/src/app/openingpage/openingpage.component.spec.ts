import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpeningpageComponent } from './openingpage.component';

describe('OpeningpageComponent', () => {
  let component: OpeningpageComponent;
  let fixture: ComponentFixture<OpeningpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpeningpageComponent]
    });
    fixture = TestBed.createComponent(OpeningpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
