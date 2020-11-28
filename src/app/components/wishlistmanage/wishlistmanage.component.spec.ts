import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistmanageComponent } from './wishlistmanage.component';




describe('WishlistmanageComponent', () => {
  let component: WishlistmanageComponent;
  let fixture: ComponentFixture<WishlistmanageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishlistmanageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistmanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
