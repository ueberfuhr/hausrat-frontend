# Hausrat Berechnungen Web UI

## Starten der Anwendung

Du kannst das Projekt in Deine Entwicklungsumgebung importieren (VS Code oder WebStorm). Starten kannst Du die Anwendung
über die Git Bash per `ng serve -o` (`-o` öffnet den Browser automatisch).
Ist das Backend mit Security gestartet, so starte auch das Frontend mit `ng serve --configuration=secured`.

Möchtest Du test-driven vorgehen, starte in einer zweiten Git Bash noch `ng test`. Du erhältst dabei die Testergebnisse
im Browser.

Beide Prozesse können während der Entwicklung weiterhin laufen, es folgt stets ein _Live Reload_. Bei größeren
Refactorings ist es aber ratsam, die Prozessen zwischendurch zu stoppen.

Nach erfolgreichem Start kannst Du im Browser folgende URL aufrufen:

[➡`http://localhost:4200`](http://localhost:4200)

## Todos

Folgende Ideen habe ich noch für die Umsetzung:

 - Umstieg von NG Bootstrap auf Angular Material
   - Response Layout
   - Nachladen von Modulen bei Bedarf
 - Infinite Scroll für Listenansicht 
   - https://www.npmjs.com/package/ngx-infinite-scroll
   - https://material.angular.io/cdk/scrolling/overview
