import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidecardComponent } from './slidecard.component';

describe('SlidecardComponent', () => {
  let component: SlidecardComponent;
  let fixture: ComponentFixture<SlidecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidecardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
