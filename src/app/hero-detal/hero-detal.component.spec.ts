import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetalComponent } from './hero-detal.component';

describe('HeroDetalComponent', () => {
  let component: HeroDetalComponent;
  let fixture: ComponentFixture<HeroDetalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroDetalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
