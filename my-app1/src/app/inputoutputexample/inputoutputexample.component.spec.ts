import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputoutputexampleComponent } from './inputoutputexample.component';

describe('InputoutputexampleComponent', () => {
  let component: InputoutputexampleComponent;
  let fixture: ComponentFixture<InputoutputexampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputoutputexampleComponent]
    });
    fixture = TestBed.createComponent(InputoutputexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
