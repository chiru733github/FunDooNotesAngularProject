import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentedInDashboardComponent } from './presented-in-dashboard.component';

describe('PresentedInDashboardComponent', () => {
  let component: PresentedInDashboardComponent;
  let fixture: ComponentFixture<PresentedInDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PresentedInDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PresentedInDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
