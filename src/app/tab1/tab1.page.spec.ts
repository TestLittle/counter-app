import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it} from 'vitest';
import { Tab1Page } from './tab1.page';
import { SavedCounter } from '../models/saved-counter';
import { CounterService } from '../services/counter.service';

describe('Tab1Page', () => {
  let component: Tab1Page;
  let fixture: ComponentFixture<Tab1Page>;
  let counterService: CounterService;

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab1Page);
    component = fixture.componentInstance;
    counterService = TestBed.inject(CounterService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add the newest saved counter to the beginning', () => {
    const first: SavedCounter = {
      id: 'first',
      name: 'První',
      value: 1,
      createdAt: '2026-10-05T10:45:00.00'
    };
    const second: SavedCounter = {
      id: 'second',
      name: 'Druhý',
      value: 2,
      createdAt: '2026-10-05T10:45:00.00'
    };

    component.onSaved(first);
    component.onSaved(second);
    expect(counterService.counters()).toEqual([second, first]);
  })
});
