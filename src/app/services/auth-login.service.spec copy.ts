import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { AuthLoginService } from './auth-login.service';

describe('AuthLoginService', () => {
  let service: AuthLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        AuthLoginService
      ]
    });
    service = TestBed.inject(AuthLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
