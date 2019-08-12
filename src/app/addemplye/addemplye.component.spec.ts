import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddemplyeComponent } from './addemplye.component';

describe('AddemplyeComponent', () => {
  let component: AddemplyeComponent;
  let fixture: ComponentFixture<AddemplyeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddemplyeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddemplyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
