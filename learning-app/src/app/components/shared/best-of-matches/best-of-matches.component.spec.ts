import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestOfMatchesComponent } from './best-of-matches.component';

describe('BestOfMatchesComponent', () => {
  let component: BestOfMatchesComponent;
  let fixture: ComponentFixture<BestOfMatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestOfMatchesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BestOfMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
