import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ui1Component } from './ui1.component';

describe('Ui1Component', () => {
  let component: Ui1Component;
  let fixture: ComponentFixture<Ui1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ui1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ui1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
