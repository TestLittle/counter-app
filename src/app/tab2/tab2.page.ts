import { Component, inject, input, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonSpinner, IonItem, IonLabel, IonNote, IonList, IonAlert, IonToast, IonInput, IonSelect, IonSelectOption } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { CounterService } from '../services/counter.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [DatePipe, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonSpinner, IonItem, IonLabel, IonNote, IonList, IonAlert, IonToast, IonInput, FormsModule, IonSelect, IonSelectOption]
})
export class Tab2Page implements OnInit {
  readonly counterService = inject(CounterService);
  searchName = '';
  public alertButtons = [{text:'Zrušit', role:'cancel', handler: () => {},},{text:'Potvrdit', role:'confirm', handler: () => this.clear()}];

  async ngOnInit(): Promise<void>{
    await this.counterService.initialize();
  }

  async remove(id: string): Promise<void>{
    await this.counterService.remove(id);
  }

  async search(): Promise<void>{
    await this.counterService.search(this.searchName);
  }

  async clear(): Promise<void>{
    await this.counterService.clear();
  }

  async sortNameAsc(): Promise<void>{
    await this.counterService.sortNameAsc();
  }

  async sortNameDesc(): Promise<void>{
    await this.counterService.sortNameDesc();
  }

  async sortValueAsc(): Promise<void>{
    await this.counterService.sortValueAsc();
  }

  async sortValueDesc(): Promise<void>{
    await this.counterService.sortValueDesc();
  }
}
