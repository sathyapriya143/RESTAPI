import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildhooksComponent } from './childhooks.component';

describe('ChildhooksComponent', () => {
  let component: ChildhooksComponent;
  let fixture: ComponentFixture<ChildhooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildhooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildhooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
