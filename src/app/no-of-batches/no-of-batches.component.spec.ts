import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoOfBatchesComponent } from './no-of-batches.component';

describe('NoOfBatchesComponent', () => {
  let component: NoOfBatchesComponent;
  let fixture: ComponentFixture<NoOfBatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoOfBatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoOfBatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
