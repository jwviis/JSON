# JSON
# JSON Viewer – przeglądarka plików JSON

To jest prosta strona internetowa, która pozwala wczytać plik JSON i zobaczyć jego zawartość w czytelny sposób.

## 🔧 Co potrafi ta strona?

- Wczytuje plik `.json` z twojego komputera
- Pokazuje dane z pliku w kolorowych sekcjach
- Ma przycisk, który resetuje wszystko
- Działa bez internetu – wystarczy otworzyć plik w przeglądarce



# ✨ Funkcje
Łatwe wczytywanie plików JSON: Wystarczy kliknąć przycisk, aby załadować plik JSON z lokalnego dysku.

Automatyczne renderowanie danych: Aplikacja analizuje zawartość pliku i tworzy odpowiednie sekcje z tytułami, opisami i opcjonalnymi kolorami.

Kolorowanie kart: Każda karta może mieć przypisany indywidualny kolor na podstawie danych z pliku lub zostanie przypisany losowy kolor.

Wielowariantowe style kart: Wybór z trzech różnych wariantów wyświetlania, które zmieniają sposób prezentacji sekcji (np. linie przerywane, gradienty, cienie).

Animacje: Karty pojawiają się z efektami animacyjnymi, które poprawiają doświadczenie użytkownika.

Wskaźniki ikon: Każda sekcja jest oznaczona ikoną, która zależy od indeksu elementu.

Błyskawiczne resetowanie: Możliwość szybkiego wyczyszczenia wczytanych danych za pomocą przycisku "Resetuj".

Obsługa błędów: Jeśli plik JSON jest uszkodzony lub niepoprawny, użytkownik zobaczy komunikat o błędzie.

# 🧠 Struktura danych JSON
Aplikacja została zaprojektowana z myślą o dwóch głównych strukturach danych JSON. Oczekiwana struktura to lista obiektów, gdzie każdy obiekt posiada co najmniej tytuł, opis i opcjonalnie kolor. Oto przykład struktury:
