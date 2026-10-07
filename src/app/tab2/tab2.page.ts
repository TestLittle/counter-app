import { Component, inject, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonSpinner, IonItem, IonLabel, IonNote, IonList, IonAlert } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [DatePipe, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonSpinner, IonItem, IonLabel, IonNote, IonList, IonAlert]
})
export class Tab2Page implements OnInit {
  readonly counterService = inject(CounterService);
  public alertButtons = [{text:'Zrušit', role:'cancel', handler: () => {},},{text:'Potvrdit', role:'confirm', handler: () => this.clear()}];

  async ngOnInit(): Promise<void>{
    await this.counterService.initialize();
  }

  async remove(id: string): Promise<void>{
    await this.counterService.remove(id);
  }

  async clear(): Promise<void>{
    await this.counterService.clear();
  }
}
