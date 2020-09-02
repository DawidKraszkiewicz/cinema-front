import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepertuarComponent } from './repertuar.component';

describe('RepertuarComponent', () => {
  let component: RepertuarComponent;
  let fixture: ComponentFixture<RepertuarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepertuarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepertuarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
