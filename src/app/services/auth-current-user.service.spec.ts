import { TestBed } from '@angular/core/testing';

import { AuthCurrentUserService } from './auth-current-user.service';

describe('AuthCurrentUserService', () => {
  let service: AuthCurrentUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthCurrentUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
