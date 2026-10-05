import { TestBed } from '@angular/core/testing';
import { CounterService } from './counter.service';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { Preferences } from '@capacitor/preferences';
import { SavedCounter } from '../models/saved-counter';

vi.mock('@capacitor/preferences', () => ({
  Preferences: {
    get: vi.fn(),
    set: vi.fn(),
    remove: vi.fn()
  }
}));

describe('CounterService', () => {
  let service: CounterService;

  const getMock = vi.mocked(Preferences.get);
  const setMock = vi.mocked(Preferences.set);
  const removeMock = vi.mocked(Preferences.remove);

  const first: SavedCounter = {
    id: 'first',
    name: 'První',
    value: 1,
    createdAt: '2026-10-05T14:00:00.000Z'
  };

  const second: SavedCounter = {
    id: 'second',
    name: 'Druhý',
    value: 2,
    createdAt: '2026-10-05T14:00:00.000Z'
  };

  beforeEach(() => {
    vi.clearAllMocks();

    getMock.mockResolvedValue({value: null});

    setMock.mockResolvedValue(undefined);
    removeMock.mockResolvedValue(undefined);

    TestBed.configureTestingModule({
      providers: [CounterService]
    });

    service = TestBed.inject(CounterService);
  });

  it('should initialize only once', async () => {
    await Promise.all([service.initialize(), service.initialize()]);

    await service.initialize();

    expect(getMock).toHaveBeenCalledTimes(1);

    expect(service.initialized()).toBe(true);
    expect(service.counters()).toEqual([]);
  });

  it('should load saved data', () => {

  });

  it('should successfully add a new counter', () => {

  });

  it('should remove successfully remove one specified counter', () => {

  });

  it('should clear the whole history', () => {

  });

  it('should not crash when an undefined JSON gets parsed', () => {
    
  })
});
