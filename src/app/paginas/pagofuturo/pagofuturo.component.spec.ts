import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagofuturoComponent } from './pagofuturo.component';

describe('PagofuturoComponent', () => {
  let component: PagofuturoComponent;
  let fixture: ComponentFixture<PagofuturoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagofuturoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagofuturoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
