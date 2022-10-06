import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstComponentCliComponent } from './first-component-cli.component';

describe('FirstComponentCliComponent', () => {
  let component: FirstComponentCliComponent;
  let fixture: ComponentFixture<FirstComponentCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstComponentCliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstComponentCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
