import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftdevelpComponent } from './softdevelp.component';

describe('SoftdevelpComponent', () => {
  let component: SoftdevelpComponent;
  let fixture: ComponentFixture<SoftdevelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftdevelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftdevelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
