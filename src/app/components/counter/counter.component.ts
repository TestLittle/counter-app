import { Component, input, output } from '@angular/core';
import { SavedCounter } from '../../models/saved-counter';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  imports: [],
})
export class CounterComponent{
  readonly heading = input('Nové počítadlo');
  readonly saved = output<SavedCounter>();

  counterName = '';
  count = 0;

  increment(): void{
    this.count++;
  }

  decrement(): void {
    if(this.count > 0){
      this.count--;
    }
  }

  reset(): void{
    this.count = 0;
  }

  save(): void{
    const name = this.counterName.trim();

    if(!name){
      return;
    }

    this.saved.emit({
      id: crypto.randomUUID(),
      name,
      value: this.count,
    });

    this.counterName = '';
    this.count = 0;
  }

}
