# Hausrat Berechnungen Web UI

## Starten der Anwendung

Du kannst das Projekt in Deine Entwicklungsumgebung importieren (VS Code oder WebStorm). Starten kannst Du die Anwendung
über die Git Bash per `ng serve -o` (`-o` öffnet den Browser automatisch).

Möchtest Du test-driven vorgehen, starte in einer zweiten Git Bash noch `ng test`. Du erhältst dabei die Testergebnisse
im Browser.

Beide Prozesse können während der Entwicklung weiterhin laufen, es folgt stets ein _Live Reload_. Bei größeren
Refactorings ist es aber ratsam, die Prozessen zwischendurch zu stoppen.

Nach erfolgreichem Start kannst Du im Browser folgende URL aufrufen:

[➡`http://localhost:4200`](http://localhost:4200)

## Weitere hilfreiche Befehle

### Erstellen von Artefakten

[➡ Dokumentation](https://angular.io/cli/generate)

- `ng new <name>` (Projekt)
- `ng new <name> --style=scss` (Projekt mit SCSS)
- `ng generate component components/<name> --module=app.module` (Komponente mit Eintrag in Modul)
- `ng generate service services/<name>` (Service)
- `ng generate class domain/<name> --type=model` (Modelklasse)
- `ng generate directive <name>` (Directive)
- `ng generate pipe <name> --module=app.module` (Pipe)
- `ng generate module <name>` (Modul)
- `ng generate module app-routing --flat --module=app` (App-Routing-Modul)

### Kurzschreibweisen

Für die `ng generate`-Befehle gibt es auch alternative Kurzschreibweisen:

- `ng g c ...` (Komponente)
- `ng g s ...` (Service)
- `ng g d ...` (Directive)
- `ng g p ...` (Pipe)
- `ng g m ...` (Modul)

### Weiteres

- `ng build --prod` (Bauen für Production - ab Angular v12 Standard)
