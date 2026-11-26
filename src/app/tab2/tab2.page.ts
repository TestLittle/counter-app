import { Component, inject, signal } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonSpinner, IonItem, IonLabel, IonNote, IonList, IonAlert, IonToast, IonInput, IonSelect, IonSelectOption } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FirebaseAuthService } from '../services/firebase-auth.service';
import { FirebaseCounterService } from '../services/firebase-counter.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [DatePipe, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonSpinner, IonItem, IonLabel, IonNote, IonList, IonAlert, IonToast, IonInput, FormsModule, IonSelect, IonSelectOption]
})
export class Tab2Page {
  readonly counterService = inject(FirebaseCounterService);
  readonly authService = inject(FirebaseAuthService);
  readonly signingOut = signal(false);
  readonly logoutError = signal('');
  searchName = '';
  //public alertButtons = [{text:'Zrušit', role:'cancel', handler: () => {},},{text:'Potvrdit', role:'confirm', handler: () => this.clear()}];
  readonly auth = inject(FirebaseAuthService);

  async remove(id: string): Promise<void>{
    await this.counterService.remove(id);
  }

  async search(): Promise<void>{
    //await this.counterService.search(this.searchName);
  }

  async clear(): Promise<void>{
    //await this.counterService.clear();
  }

  async sort(event: CustomEvent): Promise<void>{
    /*switch(event.detail.value){
      case "name_asc":
        await this.counterService.sortNameAsc();
        break;
      case "name_desc":
        await this.counterService.sortNameDesc();
        break;
      case "value_asc":
        await this.counterService.sortValueAsc();
        break;
      case "value_desc":
        await this.counterService.sortValueDesc();
        break;
    };*/
  }

  async logout(): Promise<void> {
    if(this.signingOut()){
      return;
    }

    this.logoutError.set('');
    this.signingOut.set(true);

    try{
      await this.auth.logout();
    }catch {
      this.logoutError.set('Odhlášení se nezdařilo. Zkuste to znovu.');
    }finally{
      this.signingOut.set(false);
    }
  }
}
