import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { CounterComponent } from './counter.component';
import { SavedCounter } from '../../models/saved-counter';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment the counter', () => {
    component.increment();

    expect(component.count).toBe(1);
  });

  it('should decrement but never go below zero', () => {
    component.decrement();
    expect(component.count).toBe(0);

    component.count = 2;
    component.decrement();
    expect(component.count).toBe(1);
  });

  it('should reset the counter', () => {
    component.count = 120;
    component.reset();
    expect(component.count).toBe(0);
  });

  it('should not save without name', () => {
    const emitted: SavedCounter[] = [];
    component.saved.subscribe((counter) => emitted.push(counter));
    component.counterName = '    ';
    component.count = 3;

    component.save();
    expect(emitted).toEqual([]);
  });

  it('should emit a saved counter and reset its state', () => {
    const emitted: SavedCounter[] = [];
    component.saved.subscribe((counter) => emitted.push(counter));
    component.counterName = ' Návštěvníci ';
    component.count = 21;

    component.save();

    expect(emitted).toHaveLength(1);
    expect(emitted[0]).toMatchObject({name: 'Návštěvníci', value: 21,});
    expect(emitted[0].id).toEqual(expect.any(String));
    expect(component.counterName).toBe('');
    expect(component.count).toBe(0);
  });
});
