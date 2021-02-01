import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfAppComponent } from './list-of-app.component';

describe('ListOfAppComponent', () => {
  let component: ListOfAppComponent;
  let fixture: ComponentFixture<ListOfAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
