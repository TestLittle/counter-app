import { Component, computed, inject, signal } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonSpinner, IonSelect, IonSelectOption, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular';
import { HolidayApiService } from '../services/holiday-api.service';
import { PublicHoliday } from '../models/public-holiday';
import { daysUntil, localDateIso } from '../models/holiday-date';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [DatePipe, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonSpinner, IonSelect, IonSelectOption, IonCard, IonCardHeader, IonCardTitle, IonCardContent],
})
export class Tab3Page {
  private readonly holidayApi = inject(HolidayApiService);

  readonly holidays = signal<PublicHoliday[]>([]);
  readonly selectedId = signal('');
  readonly today = signal(localDateIso());
  readonly loading = signal(false);
  readonly errorMessage= signal('');

  readonly selectedHoliday = computed(() => this.holidays().find((holiday) => holiday.id === this.selectedId()));

  readonly remainingDays = computed(() => {
    const holiday = this.selectedHoliday();
    if(!holiday){
      return null;
    }
    return daysUntil(holiday.startDate, this.today());
  });

  async ionViewWillEnter(): Promise<void>{
    await this.loadHolidays();
  }

  holidayName(holiday: PublicHoliday): string {
    return holiday.name[0]?.text ?? 'Svátek bez názvu';
  }

  async loadHolidays(): Promise<void>{
    if(this.loading()) {
      return;
    }

    const now = new Date();
    const today = localDateIso(now);
    const nextYear = now.getFullYear() + 1;
    this.today.set(today);
    this.loading.set(true);
    this.errorMessage.set('');
    this.holidays.set([]);
    this.selectedId.set('');

    try{
      const holidays = await this.holidayApi.getHolidays(today, `${nextYear}-12-31`);
      const upcoming = holidays.filter((holiday) => holiday.startDate >= today);
      this.holidays.set(upcoming);
      const firstHoliday = upcoming[0];
      if(firstHoliday){
        this.selectedId.set(firstHoliday.id);
      }
    }catch(error){
      console.error('Svátky se nepodařilo načíst.', error);
      this.errorMessage.set('Svátky se nepodařilo načíst. Zkuste to znovu.');
    }finally{
      this.loading.set(false);
    }
  }
}
