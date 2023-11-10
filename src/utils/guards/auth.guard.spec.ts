import { TestBed } from '@angular/core/testing';

import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { authGuard } from './auth.guard';

describe('authGuard', () => {
  const mockRouter = {
    navigate: jest.fn(),
  };

  const executeGuard = () => TestBed.runInInjectionContext(() => authGuard());

  beforeEach(() => {
    mockRouter.navigate.mockReturnValueOnce(Promise.resolve(true));

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [{ provide: Router, useValue: mockRouter }],
    });
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });

  // TODO: watch for this unit tests

  /* it('should return true when authorization and userRole are correct', () => {
    const getItemSpy = jest.spyOn(localStorage, 'getItem')
    getItemSpy.mockReturnValueOnce('validToken').mockReturnValueOnce('admin');
    const result = executeGuard();

    expect(result).toBe(true);
  });

  it('should return true when authorization and userRole are incorrect', () => {
    const getItemSpy = jest.spyOn(localStorage, 'getItem')
    getItemSpy.mockReturnValueOnce(null).mockReturnValueOnce(null);
    const result = executeGuard();

    expect(mockRouter.navigate).toHaveBeenCalledWith(['/login']);
    expect(result).toEqual(false);
  }); */
});
