import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { BottomNavigationComponent } from './bottom-navigation.component';

describe('BottomNavigationComponent', () => {
  let component: BottomNavigationComponent;
  let fixture: ComponentFixture<BottomNavigationComponent>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [ BottomNavigationComponent ],
      providers: [
        { provide: Router, useValue: routerSpy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomNavigationComponent);
    component = fixture.componentInstance;
    mockRouter = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit navItemClick when nav item is clicked', () => {
    spyOn(component.navItemClick, 'emit');
    const navItem = component.navItems[0];
    
    component.onNavItemClick(navItem);
    
    expect(component.navItemClick.emit).toHaveBeenCalledWith(navItem.id);
  });

  it('should navigate to correct route when nav item is clicked', () => {
    const navItem = component.navItems[0];
    
    component.onNavItemClick(navItem);
    
    expect(mockRouter.navigate).toHaveBeenCalledWith([navItem.route]);
  });

  it('should set activeItem when nav item is clicked', () => {
    const navItem = component.navItems[1];
    
    component.onNavItemClick(navItem);
    
    expect(component.activeItem).toBe(navItem.id);
  });
});
