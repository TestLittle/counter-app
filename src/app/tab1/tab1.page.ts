import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonButton, IonContent, IonHeader, IonInput, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonInput, FormsModule, IonCard, IonCardHeader, IonCardTitle, IonCardContent],
})
export class Tab1Page {
  count = 0;
  counterName = '';

  increment(): void{
    this.count++;
  }

  decrement(): void{
    if(this.count > 0){
      this.count--;
    }
  }

  reset(): void {
    this.count = 0;
  }
}
