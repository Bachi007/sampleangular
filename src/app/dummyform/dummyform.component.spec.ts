import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyformComponent } from './dummyform.component';

describe('DummyformComponent', () => {
  let component: DummyformComponent;
  let fixture: ComponentFixture<DummyformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DummyformComponent]
    });
    fixture = TestBed.createComponent(DummyformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
