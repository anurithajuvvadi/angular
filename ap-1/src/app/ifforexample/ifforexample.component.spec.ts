import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfforexampleComponent } from './ifforexample.component';

describe('IfforexampleComponent', () => {
  let component: IfforexampleComponent;
  let fixture: ComponentFixture<IfforexampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IfforexampleComponent]
    });
    fixture = TestBed.createComponent(IfforexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
