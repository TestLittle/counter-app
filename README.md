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
- [X] Dnešní svátek zobrazí nulu; minulý se nenabízí.
- [X] Svátky se stejným datem rozlišuji pomocí ID.
- [X] Aplikace rozlišuje načítání, chybu, prázdný výsledek a data.
- [X] Po obnovení připojení lze načtení zopakovat.
- [X] Ověřil/a jsem požadavek v Network a vrátil/a testovací změny.
- [X] Počítadlo a historie z CV4 stále fungují.
- [X] Na stránce je mé jméno a zdroj dat OpenHolidays s odkazem na licenci.
- [X] `npm run lint` a `ionic build` proběhnou bez chyby.
- [X] Řešení je uložené v Git commitu.

# CV6 – První nativní sestavení pro Android

## 18. Kontrolní seznam CV6

- [X] Pracuji ve větvi `cv6/android` navazující na CV5.
- [X] Mám nainstalované Android SDK Platform 36, potřebné SDK Tools a emulátor nebo fyzické zařízení.
- [X] `capacitor.config.ts` obsahuje platný `appId`, název `CounterApp` a `webDir: 'www'`.
- [X] `@capacitor/core`, `@capacitor/cli` a `@capacitor/android` používají verzi 8.5.0.
- [X] Rozumím rozdílu mezi `ionic build`, `cap sync`, `cap run` a `cap open`.
- [X] Adresář `android/` vznikl pomocí `npx cap add android` a vím, že `add` neopakuji.
- [X] Aplikace se sestaví, nainstaluje a spustí na Androidu.
- [X] Ruční počítadlo i navigace fungují na dotykové obrazovce.
- [X] Záznam v historii zůstane po zavření a novém spuštění aplikace.
- [X] OpenHolidays API vrátí data při dostupné síti.
- [X] Při vypnuté síti se zobrazí chyba a po obnovení lze načtení zopakovat.
- [X] Ověřil/a jsem aplikaci na výšku i na šířku.
- [X] Umím najít proces aplikace v Logcatu.
- [X] Umím otevřít běžící WebView přes `chrome://inspect` a najít HTTP požadavek.
- [X] V konfiguraci nezůstalo `server.url` ani jiná dočasná změna.
- [X] `npm run lint`, `ionic build`, `npx cap sync android` a `npx cap doctor android` skončí bez chyby.
- [X] Nativní projekt je uložený v Git commitu a pracovní strom je čistý.

# CV7 – Firebase a identita uživatele

## 8. Dokončení

```bash
npm run lint
ionic build
git diff --check
git add package.json package-lock.json src
git commit -m "CV7: pripojeni Firebase a anonymni identita"
```

Před commitem zkontrolujte vlastní `git diff`.

- [ ] Lokální historie stále funguje.
- [ ] UID odpovídá účtu ve Firebase Console.
- [ ] Obnovení stránky zachová UID; soukromé okno má jiné.
- [ ] Umím vysvětlit rozdíl mezi konfigurací projektu a oprávněním k datům.
- [ ] Umím vysvětlit, proč sdílíme `signInPromise`.
- [X] Lint a sestavení prošly.