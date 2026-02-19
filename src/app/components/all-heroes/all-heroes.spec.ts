import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllHeroes } from './all-heroes';

describe('AllHeroes', () => {
  let component: AllHeroes;
  let fixture: ComponentFixture<AllHeroes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllHeroes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllHeroes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
