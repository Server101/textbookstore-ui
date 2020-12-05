import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WincComponent } from './winc.component';

describe('WincComponent', () => {
  let component: WincComponent;
  let fixture: ComponentFixture<WincComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WincComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WincComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
