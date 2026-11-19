import { Injectable, inject, signal } from '@angular/core';
import { FirebaseAuthService } from './firebase-auth.service';
import { SavedCounter } from '../models/saved-counter';
import { collection, deleteDoc, doc, getDocs, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore';
import { firestore } from '../firebase.client';

@Injectable({providedIn: 'root'})
export class FirebaseCounterService {
    private readonly auth = inject(FirebaseAuthService);
    private readonly countersState = signal<SavedCounter[]>([]);
    private readonly initializedState = signal(false);
    private readonly errorState = signal('');

    readonly counters = this.countersState.asReadonly();
    readonly initialized = this.initializedState.asReadonly();
    readonly errorMessage = this.errorState.asReadonly();

    private connectionPromise: Promise<void> | null = null;

    initialize(): Promise<void>{
        if(this.connectionPromise === null){
            this.connectionPromise = this.connect();
        }
        return this.connectionPromise;
    }

    async load(): Promise<void>{
        this.errorState.set('');

        try{
            const counters = await this.userCounters();
            const snapshot = await getDocs(query(counters, orderBy('createdAt')));
            const items = snapshot.docs.map((item) => item.data() as SavedCounter);
            this.countersState.set(items);
        }catch(error){
            console.error(error);
            this.errorState.set('Historii se nepodařilo načíst.');
        }finally{
            this.initializedState.set(true);
        }
    }

    private async connect(): Promise<void>{
        try{
            const counters = await this.userCounters();
            const countersQuery = query(counters, orderBy('createdAt', 'desc'));
            onSnapshot(
                countersQuery,
                (snapshot) => {
                    const items = snapshot.docs.map((item) => item.data() as SavedCounter);
                    this.countersState.set(items);
                    this.initializedState.set(true);
                },
                (error) => {
                    console.error(error);
                    this.errorState.set('Živou historii se nepodařilo načíst.');
                    this.initializedState.set(true);
                }
            );
        }catch(error){
            console.error(error);
            this.errorState.set('Připojení k historii se nezdařilo.');
            this.initializedState.set(true);
        }
    }

    async add(counter: SavedCounter): Promise<void>{
        this.errorState.set('');

        try{
            const counters = await this.userCounters();
            await setDoc(doc(counters, counter.id), counter);
        }catch(error){
            console.error(error);
            this.errorState.set('Záznam se nepodařilo uložit.');
        }
    }

    async remove(id: string): Promise<void>{
        this.errorState.set('');

        try{
            const counters = await this.userCounters();
            await deleteDoc(doc(counters, counters.id));
        }catch(error){
            console.error(error);
            this.errorState.set('Záznam se nepodařilo smazat.');
        }
    }

    private async userCounters(){
        const uid = await this.auth.initialize();
        return collection(firestore, 'users', uid, 'counters');
    }
}
