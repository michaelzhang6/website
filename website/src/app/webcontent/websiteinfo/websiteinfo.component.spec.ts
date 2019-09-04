import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteinfoComponent } from './websiteinfo.component';

describe('WebsiteinfoComponent', () => {
  let component: WebsiteinfoComponent;
  let fixture: ComponentFixture<WebsiteinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsiteinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiteinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
