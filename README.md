# getin-export-csv

Skrypt służy do eksportowania transakcji do plików CSV. Aktualnie (03.08.2020) bank umożliwia eksport tylko do plików PDF. 


# Zasada działania

Skrypt działa offline po stronie przeglądarki i jest w 100% bezpieczny, nie podajemy żadnych danych dostępowych, skrypt nie łączy się z serwerem. Niestety przez to musimy trochę pracy wykonać ręcznie :) 

## Eksport krok po kroku

 1. Zaloguj się do Getin Banku za pomocą przeglądarki Google Chrome (nie testowałem w innych przeglądarkach, ale powinno działać podobnie)
 2. Przejdź do konta, z którego transakcje chcesz eksportować. Użyj filtrów aby wyświetlić transakcje do eksportu. 
 UWAGA: Pamiętaj, żeby wyświetlić wszystkie transakcje które chcesz eksportować. W tym celu zjedź na dół listy i klikaj "Pokaż kolejne" aż będzie wyświetlona cała lista. 
 3. Otwórz narzędzia deweloperskie za pomocą przycisku F12
 4. Przejdź do zakładki Console
 5. Wklej cały skrypt z pliku `getin_export_transactions_csv.js` do konsoli i naciśnij Enter
 6. Transakcje zostaną pobrane w pliku .CVS 

# Known Issues (problemy)
Istnieje kilka problemów ze skryptem, być może zostaną poprawione lub nie :) Jesli chcesz pomóc je rozwiązać, lub zgłosić kolejne - dodaj nowe Issue lub Pull Request :) 

 - problem z polskimi znakami
 - na liście (i w csv) znajdują się daty księgowania, a nie dokonania transakcji, tzn transakcje będa opóźnione o kilka dni (do zestawienia mogą wchodzić transakcje kilka dni sprzed 'daty od' w filtrze, a także część transakcji tuż przed 'datą do' może nie zostać uwzględniona)
 - należy pamiętać o dobrym manualnym ustawieniu filtrów (w szczegolnosci nie zapominać o "pokaż kolejne") możnaby to trochę usprawnić, np dodając klikanie w ten przycisk