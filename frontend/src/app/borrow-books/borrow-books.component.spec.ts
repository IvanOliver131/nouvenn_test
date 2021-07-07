import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowBooksComponent } from './borrow-books.component';

describe('BorrowBooksComponent', () => {
  let component: BorrowBooksComponent;
  let fixture: ComponentFixture<BorrowBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
