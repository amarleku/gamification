import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { LaunchComponent } from './launch.component';

describe('LaunchComponent', () => {
  let component: LaunchComponent;
  let fixture: ComponentFixture<LaunchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchComponent ],
      providers: [
        { provide: Router, useValue: { navigate: jasmine.createSpy('navigate') } }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
