import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagopasadoComponent } from './pagopasado.component';

describe('PagopasadoComponent', () => {
  let component: PagopasadoComponent;
  let fixture: ComponentFixture<PagopasadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagopasadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagopasadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
