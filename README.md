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