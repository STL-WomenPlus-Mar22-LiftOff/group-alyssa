import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);

  });

  it('should be created', () => {
    // const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });
});
