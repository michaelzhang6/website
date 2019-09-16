import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifyTrendsComponent } from './spotify-trends.component';

describe('SpotifyTrendsComponent', () => {
  let component: SpotifyTrendsComponent;
  let fixture: ComponentFixture<SpotifyTrendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotifyTrendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotifyTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
