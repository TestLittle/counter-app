import { Component, inject } from '@angular/core';
import { CounterComponent } from '../components/counter/counter.component';
import { SavedCounter } from '../models/saved-counter';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';
import { FirebaseCounterService } from '../services/firebase-counter.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [CounterComponent, IonHeader, IonToolbar, IonTitle, IonContent],
})

export class Tab1Page {
  private readonly counterService = inject(FirebaseCounterService);

  async onSaved(counter: SavedCounter):Promise<void>{
    await this.counterService.add(counter);
  }
}
