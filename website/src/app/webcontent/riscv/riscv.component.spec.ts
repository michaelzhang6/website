import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiscvComponent } from './riscv.component';

describe('RiscvComponent', () => {
  let component: RiscvComponent;
  let fixture: ComponentFixture<RiscvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiscvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiscvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
