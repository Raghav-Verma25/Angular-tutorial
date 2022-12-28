import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceFooterComponent } from './service-footer.component';

describe('ServiceFooterComponent', () => {
  let component: ServiceFooterComponent;
  let fixture: ComponentFixture<ServiceFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
