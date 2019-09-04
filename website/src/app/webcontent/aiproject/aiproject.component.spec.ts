import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AiprojectComponent } from './aiproject.component';

describe('AiprojectComponent', () => {
  let component: AiprojectComponent;
  let fixture: ComponentFixture<AiprojectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AiprojectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AiprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
