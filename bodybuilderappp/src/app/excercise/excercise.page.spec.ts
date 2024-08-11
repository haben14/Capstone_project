import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExcercisePage} from './excercise.page';

describe('ExcercisePage', () => {
  let component: ExcercisePage;
  let fixture: ComponentFixture<ExcercisePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcercisePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
