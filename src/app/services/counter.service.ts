import { computed, Injectable, signal } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { SavedCounter } from '../models/saved-counter';

@Injectable({
  providedIn: 'root',  
})

export class CounterService{
    private readonly storageKey = 'saved-counters';
    private readonly countersState = signal<SavedCounter[]>([]);
    private readonly initializedState = signal(false);
    private initializationPromise: Promise<void> | null = null;

    readonly counters = this.countersState.asReadonly();
    readonly initialized = this.initializedState.asReadonly();

    readonly positiveCount = computed(() => this.countersState().filter((counter) => counter.value > 0).length);
    readonly negativeCount = computed(() => this.countersState().filter((counter) => counter.value < 0).length);
    readonly zeroCount = computed(() => this.countersState().filter((counter) => counter.value === 0).length);

    readonly totalCounterValue = computed(() => this.countersState().reduce((acc, item) => item.value + acc, 0));

    initialize(): Promise<void> {
        this.initializationPromise ??= this.load();
        return this.initializationPromise;
    }

    async add(counter: SavedCounter): Promise<void> {
        await this.initialize();
        this.countersState.update((counters) => [counter, ...counters]);
        await this.persist();
    }

    async remove(id: string): Promise<void>{
        await this.initialize();
        this.countersState.update((counters) => counters.filter((counter) => counter.id !== id),);
        await this.persist();
    }

    async clear(): Promise<void> {
        await this.initialize();
        this.countersState.set([]);
        await Preferences.remove({key: this.storageKey});
    }

    async search(searchName: string): Promise<void>{
        await this.initialize();
        if(searchName === ''){
            return;
        }
        this.countersState.update((counters) => counters.filter((counter) => counter.name.includes(searchName)));
    }

    async sortNameAsc(): Promise<void>{
        await this.initialize();
        this.countersState.update((counters) => counters.sort((a, b) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();
            if(nameA < nameB){
                return -1;
            }
            if(nameA > nameB){
                return 1;
            }
            return 0;
        }));
    }

    async sortNameDesc(): Promise<void>{
        await this.initialize();
        this.countersState.update((counters) => counters.sort((a, b) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();
            if(nameA < nameB){
                return 1;
            }
            if(nameA > nameB){
                return -1;
            }
            return 0;
        }));
    }

    async sortValueAsc(): Promise<void>{
        await this.initialize();
        this.countersState.update((counters) => counters.sort((a, b) => {
            if(a.value < b.value){
                return -1;
            }
            if(a.value > b.value){
                return 1;
            }
            return 0;
        }));
    }

    async sortValueDesc(): Promise<void>{
        await this.initialize();
        this.countersState.update((counters) => counters.sort((a, b) => {
            if(a.value < b.value){
                return 1;
            }
            if(a.value > b.value){
                return -1;
            }
            return 0;
        }));
    }

    private async load(): Promise<void>{
        try {
            const { value } = await Preferences.get({key: this.storageKey});

            if(value == null){
                this.countersState.set([]);
                return;
            }

            const parsed: unknown = JSON.parse(value);

            if(!Array.isArray(parsed)){
                throw new Error('Uložená historie nemá očekávaný formát pole.');
            }

            this.countersState.set(parsed as SavedCounter[]);
        }catch(error){
            console.error('Historii počítadel se nepodařilo načíst.', error);
            this.countersState.set([]);
        }finally{
            this.initializedState.set(true);
        }
    }

    private async persist(): Promise<void>{
        await Preferences.set({
            key: this.storageKey,
            value: JSON.stringify(this.countersState()),
        });
    }
}

