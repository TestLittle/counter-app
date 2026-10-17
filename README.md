# CV2 – CounterApp: záložky, datové vazby a Ionic komponenty

## Kontrolní seznam CV2

- [X] Projekt byl vytvořen s typem `angular-standalone` a šablonou `tabs`.
- [X] Aplikace se spustí pomocí `ionic serve`.
- [X] Rozumím úloze souborů `.ts`, `.html` a `.scss`.
- [X] Vím k čemu slouží importy `IonButton, IonCard, IonCardContent IonCardHeader...` v souboru `tab1.page.ts`.
- [X] Název počítadla funguje přes `[(ngModel)]`.
- [X] Hodnota se zobrazuje pomocí interpolace.
- [X] Tlačítka volají metody přes událost `(click)`.
- [X] Hodnota počítadla nemůže být záporná.
- [X] Záložky mají nové názvy a ikony.
- [X] Záložka O aplikaci obsahuje mé jméno.
- [X] Testy ověřují inkrementaci, snížení bez záporné hodnoty a reset.
- [X] `npm test -- --watch=false` skončí bez chyby.
- [X] Příkaz `ionic build` skončí bez chyby.
- [X] Změny jsou uloženy v lokálním Git commitu.

# CV3 – Znovupoužitelná komponenta a komunikace mezi komponentami

## 17. Kontrolní seznam CV3

- [X] Pracuji ve větvi `cv3/reusable-counter`.
- [X] `CounterComponent` byla vytvořena Angular generátorem.
- [X] Datový model `SavedCounter` je v samostatném souboru.
- [X] Počítadlo používá moderní `input()` a `output()`.
- [X] `Tab1Page` neobsahuje logiku zvyšování a snižování hodnoty.
- [X] Rodič předává potomkovi nadpis přes input.
- [X] Potomek odesílá rodiči typovaný objekt přes output.
- [X] Seznam používá `@if`, `@for` a `track counter.id`.
- [X] Lze uložit více počítadel a nejnovější je první.
- [X] Testy logiky počítadla jsou v `counter.component.spec.ts`.
- [X] Test komponenty ověřuje také validaci názvu a událost `saved`.
- [X] `tab1.page.spec.ts` testuje pouze odpovědnost rodičovské stránky.
- [X] `npm test -- --watch=false` skončí bez chyby.
- [X] Příkaz `ionic build` skončí bez chyby.
- [X] Výsledek je uložený v Git commitu.

# CV4 – Sdílená služba a lokální perzistence

## 16. Kontrolní seznam CV4

- [X] Pracuji ve větvi `cv4/preferences`.
- [X] Projekt obsahuje `@capacitor/preferences` hlavní verze 8.
- [X] `SavedCounter` obsahuje čas vytvoření `createdAt`.
- [X] `CounterService` je dostupná přes `providedIn: 'root'`.
- [X] Stav historie je uložený v signal a ven je vystavený pouze pro čtení.
- [X] Komponenty nevolají Preferences přímo.
- [X] Inicializace služby proběhne nejvýše jednou.
- [X] Záložka Počítadlo ukládá záznam prostřednictvím služby.
- [X] Záložka Historie zobrazuje všechny uložené záznamy.
- [X] Lze odstranit jeden záznam i celou historii.
- [X] Data přežijí obnovení stránky.
- [X] `counter.service.spec.ts` obsahuje připravený inicializační test a povinné scénáře 1–4.
- [X] Testy používají mock Preferences a nezapisují do skutečného úložiště.
- [X] `npm test -- --watch=false` skončí bez chyby.
- [X] `npm run lint` a `ionic build` skončí bez chyby.
- [X] Výsledek je uložený v Git commitu.

# CV5 – REST API a odpočet do svátku

## 18. Kontrolní seznam CV5

- [X] Pracuji ve větvi `cv5/rest-api` navazující na CV4.
- [X] Mám model `PublicHoliday` a samostatnou `HolidayApiService`.
- [X] Konfigurace aplikace obsahuje `provideHttpClient()`.
- [X] Umím vysvětlit metodu GET a parametry země, jazyka a období.
- [X] Používám `firstValueFrom()` a timeout; vím, že TypeScript typ neověřuje JSON za běhu.
- [X] Vím, proč je `name` pole a proč jazyk používá kód CS.
- [X] Třetí záložka nabízí české svátky od dneška do konce příštího roku.
- [X] Výběr jiného svátku přepočítá odpočet bez dalšího požadavku.
- [X] Odpočet používá `computed()` a počítá kalendářní dny.
- [ ] Dnešní svátek zobrazí nulu; minulý se nenabízí.
- [ ] Svátky se stejným datem rozlišuji pomocí ID.
- [ ] Aplikace rozlišuje načítání, chybu, prázdný výsledek a data.
- [ ] Po obnovení připojení lze načtení zopakovat.
- [ ] Ověřil/a jsem požadavek v Network a vrátil/a testovací změny.
- [X] Počítadlo a historie z CV4 stále fungují.
- [X] Na stránce je mé jméno a zdroj dat OpenHolidays s odkazem na licenci.
- [X] `npm run lint` a `ionic build` proběhnou bez chyby.
- [X] Řešení je uložené v Git commitu.