const questionDataBase = {
    multimediaAndInterfaces: [
        {
            questionID: 1,
            questionText: "Multimedia to:",
            questionAnswers: [
                {
                    id: 1,
                    text: "modelowanie tekstu na tekst"
                },
                {
                    id: 2,
                    text: "rozpoznawanie obrazów"
                },
                {
                    id: 3,
                    text: "generowanie obrazu z opisu (grafika)"
                },
                {
                    id: 4,
                    text: "przetwarzanie obrazów"
                },
                {
                    id: 5,
                    text: "wszystkie odpowiedzi są poprawne",
                    isCorrect: true
                }
            ]
        },
        {
            questionID: 2,
            questionText: "Który czynnik utrudnia człowiekowi słyszenie przestrzenne:",
            questionAnswers: [
                {
                    id: 1,
                    text: "efekt doplera"
                },
                {
                    id: 2,
                    text: "odbicie dźwięków",
                    isCorrect: true
                },
                {
                    id: 3,
                    text: "para uszu"
                },
                {
                    id: 4,
                    text: "tłumienie dźwięków docierających z tyłu"
                }
            ]
        },
        {
            questionID: 3,
            questionText: "Mechanizm animacji w VRML",
            questionAnswers: [
                {
                    id: 1,
                    text: "nie ma wpływu na parametry odtwarzanego dźwięku",
                    isCorrect: true
                },
                {
                    id: 2,
                    text: "korzysta wyłącznie z jednego interpolatora dla danego obiektu"
                },
                {
                    id: 3,
                    text: "nie pozwala na wielokrotne wykorzystanie timerów"
                },
                {
                    id: 4,
                    text: "samodzielnie interpoluje właściwości animowanego obiektu we wszystkich klatkach pośrednich"
                }
            ]
        },
        {
            questionID: 4,
            questionText: "Spójność i używanie standardów nie oznacza, że:",
            questionAnswers: [
                {
                    id: 1,
                    text: "system dostarcza skrótów",
                    isCorrect: true
                },
                {
                    id: 2,
                    text: "użytkownik może wykorzystać doświadczenie zdobyte przy używaniu innych programów"
                },
                {
                    id: 3,
                    text: "poszczególne części interfejsu programu wyglądają i są obsługiwane w podobny sposób jak inne programy"
                },
                {
                    id: 4,
                    text: "poszczególne części interfejsu wyglądają i są obsługiwane w podobny sposób"
                }
            ]
        },
        {
            questionID: 5,
            questionText: "Wskaż zdanie fałszywe:",
            questionAnswers: [
                {
                    id: 1,
                    text: "za widzenie koloru odpowiedzialne są pręciki",
                    isCorrect: true
                },
                {
                    id: 2,
                    text: "za widzenie nocne odpowiedzialne są pręciki"
                },
                {
                    id: 3,
                    text: "pręciki umożliwiają dobre wykrywanie krawędzi"
                },
                {
                    id: 4,
                    text: "wzrok człowieka jest bardziej wrażliwy na jasność niż na kolor"
                }
            ]
        },
        {
            questionID: 6,
            questionText: "Histogram obrazu:",
            questionAnswers: [
                {
                    id: 1,
                    text: "pozwala na wykrywnanie krawędzi w obrazie"
                },
                {
                    id: 2,
                    text: "pozwala na odszumianie obrazu"
                },
                {
                    id: 3,
                    text: "pozwala na redukcję liczby barw występujących w obrazie",
                    isCorrect: true
                },
                {
                    id: 4,
                    text: "pełny H(RGB) dla wszystystkich kanałów jest wykorzystywany w aparatach cyfrowych"
                }
            ]
        },
        {
            questionID: 7,
            questionText: "Prostota dialogu nie oznacza, że:",
            questionAnswers: [
                {
                    id: 1,
                    text: "brak jest zbędnych elementów na ekranie"
                },
                {
                    id: 2,
                    text: "elementy multimedialne są oszczędnie wykorzystywane w szczególności filmy",
                    isCorrect: true
                },
                {
                    id: 3,
                    text: "interfejs zawiera tylko te elemeny które są niezbędne"
                },
                {
                    id: 4,
                    text: "uwaga użytkownika nie jest odciągana przez dodatkowe obrazki napisy itp."
                }
            ]
        },
        {
            questionID: 8,
            questionText: "Wskaż zdanie fałszywe: kompresja stratna ...",
            questionAnswers: [
                {
                    id: 1,
                    text: "zawsze obniża jakość sygnału",
                    isCorrect: true
                },
                {
                    id: 2,
                    text: "może wykorzystywać informację o ograniczeniach percepcji człowieka"
                },
                {
                    id: 3,
                    text: "może wykorzystywać właściwości sygnału"
                },
                {
                    id: 4,
                    text: "może wykorzystywać kompresje bezstratną"
                }
            ]
        },
        {
            questionID: 9,
            questionText: "Efektem działania filtru uśredniającego o masce poziomej o wymiarze 3x1 dla wiersza obrazu o jasnościach pikseli 1 2 3 4 0 4 3 2 1 może być następujący wiersz:",
            questionAnswers: [
                {
                    id: 1,
                    text: "1 2 3 2 3 2 3 2 1",
                    isCorrect: true
                },
                {
                    id: 2,
                    text: "1 2 3 2,33 2,67 2,33 3 2"
                },
                {
                    id: 3,
                    text: "2 3 2 3 2 3 2"
                },
                {
                    id: 4,
                    text: "2 2 2 2 2 2 2 2 2"
                }
            ]
        },
        {
            questionID: 10,
            questionText: "Zapobieganie błędom oznacza, że:",
            questionAnswers: [
                {
                    id: 1,
                    text: "brak jest zbędnych elementów na ekranie"
                },
                {
                    id: 2,
                    text: "interfejs jest prosty w obsłudze"
                },
                {
                    id: 3,
                    text: "zamiast dostarczac komunikat o błędzie po wyjściu poza dozwolony zakres czyni się niedostępnymi odpowiedni klawisz lub opcję w menu",
                    isCorrect: true
                },
                {
                    id: 4,
                    text: "system dostarcza skrótów"
                }
            ]
        },
        {
            questionID: 11,
            questionText: "Widoczny stan interfejsu oznacza, że:",
            questionAnswers: [
                {
                    id: 1,
                    text: "zawsze można się wycofać z błędnych działań"
                },
                {
                    id: 2,
                    text: "komunikaty o błędach są dobrze dobrane"
                },
                {
                    id: 3,
                    text: "użytkownik zna bieżący tryb interfejsu",
                    isCorrect: true
                },
                {
                    id: 4,
                    text: "brak jest zbędnych elementów na ekranie"
                }
            ]
        },
        {
            questionID: 12,
            questionText: "Oblicz rozmiar kolorowej bitmapy w formacie TrueColor RGB powstałej w wyniku skanowania w rozdzielczości 300dpi obrazu o wymiarach 1 na 5 cali:",
            questionAnswers: [
                {
                    id: 1,
                    text: "1 800 000"
                },
                {
                    id: 2,
                    text: "    4 500"
                },
                {
                    id: 3,
                    text: "  450 000"
                },
                {
                    id: 4,
                    text: "1 350 000",
                    isCorrect: true
                }
            ]
        },
        {
            questionID: 13,
            questionText: "Używanie języka użytkownika oznacza, że:",
            questionAnswers: [
                {
                    id: 1,
                    text: "brak jest zbędnych elementów na ekranie"
                },
                {
                    id: 2,
                    text: "interfejs jest prosty w obsłudze"
                },
                {
                    id: 3,
                    text: "interfejs może używać żargonu z dziedziny z której pochodza zadania wykonywane przez uzytkownika"
                },
                {
                    id: 4,
                    text: "komunikaty o bledach sa dobrze opisane",
                    isCorrect: true
                }
            ]
        },
        {
            questionID: 14,
            questionText: "Które z podanych miar oceny sa obiektywne:",
            questionAnswers: [
                {
                    id: 1,
                    text: "postawa"
                },
                {
                    id: 2,
                    text: "stosunek"
                },
                {
                    id: 3,
                    text: "motywacja"
                },
                {
                    id: 4,
                    text: "zachowanie niewerbalne",
                    isCorrect: true
                }
            ]
        },
        {
            questionID: 15,
            questionText: "Jaka jest częstotliwość próbkowania muzyki jakości CD i z czego ona wynika?",
            questionAnswers: [
                {
                    id: 1,
                    text: "44100 Hz.Ponad 2 razy większa od górnej granicy słyszalności człowieka.",
                    isCorrect: true
                },
                {
                    id: 2,
                    text: "40000 Hz. 2 razy większa od górnej granicy słyszalności człowieka."
                },
                {
                    id: 3,
                    text: "1,5 Mbit/s .Prędkość odtwarzania CD …"
                },
                {
                    id: 4,
                    text: "8 kHZ.Ograniczenia pasma w kanałach transmisji."
                }
            ]
        },
        {
            questionID: 16,
            questionText: "W pozyskiwaniu wiedzy stategia:",
            questionAnswers: [
                {
                    id: 1,
                    text: "to uporządkowanie czasowe działań"
                },
                {
                    id: 2,
                    text: "określa krok po kroku jakie działania realizują dany cel",
                    isCorrect: true
                },
                {
                    id: 3,
                    text: "odpowiada regułom  wyboru metod GOMS"
                },
                {
                    id: 4,
                    text: "umożliwia określenie czasu nauki interfejsu"
                }
            ]
        },
        {
            questionID: 17,
            questionText: "W pozyskiwaniu wiedzy plan nie:",
            questionAnswers: [
                {
                    id: 1,
                    text: "określa krok po kroku, jakie działania realizują dany cel"
                },
                {
                    id: 2,
                    text: "to uporządkowanie czasowe czynności"
                },
                {
                    id: 3,
                    text: "poznaje się szukając w wywiadach i protokołach sformułowań typu 'teraz przystępuję do...'"
                },
                {
                    id: 4,
                    text: "umożliwia wyznaczenie najkrótszego czasu realizacji zadania",
                    isCorrect: true
                }
            ]
        },
        {
            questionID: 18,
            questionText: "W wyniku wykonania algorytmu RLE(run length encoding) dla ciągu 1111222334 nie można uzyskać następującego kodu:",
            questionAnswers: [
                {
                    id: 1,
                    text: "1(4) 2(3) 3(2) 4"
                },
                {
                    id: 2,
                    text: "11 11 11 11 10 10 10 01 01 00",
                    isCorrect: true
                },
                {
                    id: 3,
                    text: "1(4) 2(3) 3(2) 4(1)"
                },
                {
                    id: 4,
                    text: "1(4) 2(3) 3 3 4"
                }
            ]
        },
        {
            questionID: 19,
            questionText: "Efektem działania filtru wartości środkowej (medianowego) o masce poziomej w wymiarze 3 x 1 dla wiersza obrazu o jasnościach pixeli 1 2 3 4 0 4 3 2 1 może być następujący wiersz:",
            questionAnswers: [
                {
                    id: 1,
                    text: "2 2 2 2 2 2 2 2 2"
                },
                {
                    id: 2,
                    text: "2 3 2 3 2 3 2 3 2"
                },
                {
                    id: 3,
                    text: "3 3 3 3 3 3 3 3 3"
                },
                {
                    id: 4,
                    text: "1 2 3 3 4 3 3 2 1",
                    isCorrect: true
                }
            ]
        },
        {
            questionID: 20,
            questionText: "W ocenie heurystycznej widoczny stan interfejsu nie oznacza, że:",
            questionAnswers: [
                {
                    id: 1,
                    text: "zawsze można się wycofać z błędnych działań",
                    isCorrect: true
                },
                {
                    id: 2,
                    text: "użytkownik zawsze wie ,w którym miejscu się znajduje"
                },
                {
                    id: 3,
                    text: "użytkownik zna bieżące wartości parametrów interfejsu np. podkreślenie/wytłuszczenie w edytorze tekstu"
                },
                {
                    id: 4,
                    text: "użytkownik zna bieżący tryb interfejsu"
                }
            ]
        },
        {
            questionID: 21,
            questionText: " W ocenie heurystycznej minimalizowanie obciążania pamięci oznacza, że:",
            questionAnswers: [
                {
                    id: 1,
                    text: "system dostarcza skrótów"
                },
                {
                    id: 2,
                    text: "interfejs jest prosty w obsłudze"
                },
                {
                    id: 3,
                    text: "użytkownik nie musi pamiętać nazw poleceń",
                    isCorrect: true
                },
                {
                    id: 4,
                    text: "komunikaty o błędach są dobrze opisane"
                }
            ]
        },
        {
            questionID: 22,
            questionText: "Oblicz rozmiar kolorowej bitmapy (w formacie TrueColorRGB) powstałej w wyniku skanowania o rozdzielczości 200 dpi obrazu o wymiarach 3 na 5 cale(i).",
            questionAnswers: [
                {
                    id: 1,
                    text: "1 800 000",
                    isCorrect: true
                },
                {
                    id: 2,
                    text: "2 400 000"
                },
                {
                    id: 3,
                    text: "9 000"
                },
                {
                    id: 4,
                    text: "600 000"
                }
            ]
        },
        {
            questionID: 23,
            questionText: "Wskaż zdanie fałszywe. Format MIDI:",
            questionAnswers: [
                {
                    id: 1,
                    text: "umożliwia dobrą kompresję muzyki instrumentalnej"
                },
                {
                    id: 2,
                    text: "służy do zapisu muzyki, która zawsze brzmi identycznie niezależnie od komputera",
                    isCorrect: true
                },
                {
                    id: 3,
                    text: "jest standardem komunikacji cfrowych urządzeń muzycznych"
                },
                {
                    id: 4,
                    text: "można traktować jako odmianę zapisu nutowego"
                }
            ]
        },
        {
            questionID: 24,
            questionText: "Wskaż zdanie fałszywe:",
            questionAnswers: [
                {
                    id: 1,
                    text: "pręciki umożliwiają dobre wykrywanie krawędzi"
                },
                {
                    id: 2,
                    text: "za widzenie koloru odpowiedzialne są pręciki",
                    isCorrect: true
                },
                {
                    id: 3,
                    text: "za widzenie nocne odpowiedzialne są pręciki"
                },
                {
                    id: 4,
                    text: "za widzenie koloru odpowiedzialne są czopki"
                }
            ]
        },
        {
            questionID: 25,
            questionText: "W ocenie heurystycznej dobre diagnozowanie błędów oznacza, że:",
            questionAnswers: [
                {
                    id: 1,
                    text: "komunikaty o błędzie pisane są inną czcionką i są innej barwy niż pozostałe komunikaty"
                },
                {
                    id: 2,
                    text: "komunikat o błędzie umożliwia usunięcie przyczyny błędu",
                    isCorrect: true
                },
                {
                    id: 3,
                    text: "komunikat o błędzie obejmuje zawartość rejestrów procesora"
                },
                {
                    id: 4,
                    text: "komunikat o błędzie wyświetlany jest na środku ekranu"
                }
            ]
        },
        {
            questionID: 26,
            questionText: "Celami kompresji MPEG 1 i 2 nie są:",
            questionAnswers: [
                {
                    id: 1,
                    text: "szybkie przeszukiwanie w przód i wstecz"
                },
                {
                    id: 2,
                    text: "małe opóźnienia kodowania i dekodowania"
                },
                {
                    id: 3,
                    text: "elastyczność formatu obrazu"
                },
                {
                    id: 4,
                    text: "skuteczna korekcja błędów",
                    isCorrect: true
                }
            ]
        },
        {
            questionID: 27,
            questionText: "W ocenie heurystycznej elastyczność i wydajność nie oznacza, że:",
            questionAnswers: [
                {
                    id: 1,
                    text: "niektóre działania interfejsu użytkownik może wywołać w mniejszej liczbie kroków(kliknięć,uderzeń w klawiaturę)"
                },
                {
                    id: 2,
                    text: "zaawansowanym użytkownikom umożliwia się szybszą obsługę interfejsu"
                },
                {
                    id: 3,
                    text: "system dostarcza skrótów"
                },
                {
                    id: 4,
                    text: "interfejs jest prosty w obsłudze",
                    isCorrect: true
                }
            ]
        },
        {
            questionID: 28,
            questionText: "Wskaż zdanie fałszywe. Płyty DVD...",
            questionAnswers: [
                {
                    id: 1,
                    text: "są trwalsze od analogicznych ( tłoczonych lub nagrywanych ) płyt CD",
                    isCorrect: true
                },
                {
                    id: 2,
                    text: "zawierają informację zapisaną w postaci zagłębień i płaskich powierzchni"
                },
                {
                    id: 3,
                    text: "muszą być odczytywane laserem o krótszej długości fali niż płyty CD"
                },
                {
                    id: 4,
                    text: "mogą występować w wersji jedno- lub dwuwarstwowej"
                }
            ]
        },
        {
            questionID: 29,
            questionText: "Wskaż zdanie fałszywe. Częstotliwość próbkowania DVDaudio...",
            questionAnswers: [
                {
                    id: 1,
                    text: "jest stosowana aby zmniejszyć składowe harmoniczne"
                },
                {
                    id: 2,
                    text: "jest stosowana aby uzyskać dźwięk o wierniejszym brzmieniu"
                },
                {
                    id: 3,
                    text: "może nie wpływać na odbiór muzyki przez melomanów o gorszym słuchu (w porównaniu z Cdaudio)"
                },
                {
                    id: 4,
                    text: "wynosi 48 lub 96 kHz",
                    isCorrect: true
                }
            ]
        },
        {
            questionID: 30,
            questionText: "Jeżeli trzy barwy tworzą układ niezależnych liniowo barw to są to:",
            questionAnswers: [
                {
                    id: 1,
                    text: "barwy achromatyczne"
                },
                {
                    id: 2,
                    text: "barwy podstawowe",
                    isCorrect: true
                },
                {
                    id: 3,
                    text: "barwy proste"
                }
            ]
        },
        {
            questionID: 31,
            questionText: "Barwa prosta to nie barwa:",
            questionAnswers: [
                {
                    id: 1,
                    text: "monochromatyczna"
                },
                {
                    id: 2,
                    text: "widmowa"
                },
                {
                    id: 3,
                    text: "spektralna"
                },
                {
                    id: 4,
                    text: "achromatyczna",
                    isCorrect: true
                }
            ]
        },
        {
            questionID: 32,
            questionText: "Addytywne mieszanie kolorów nie jest wykorzystywane przez:",
            questionAnswers: [
                {
                    id: 1,
                    text: "monitory CRT"
                },
                {
                    id: 2,
                    text: "monitory TV"
                },
                {
                    id: 3,
                    text: "rzutniki"
                },
                {
                    id: 4,
                    text: "plotery",
                    isCorrect: true
                }
            ]
        },
        {
            questionID: 33,
            questionText: "Substraktywne uzyskiwanie kolorów jest wykorzystywane przez:",
            questionAnswers: [
                {
                    id: 1,
                    text: "monitory CRT"
                },
                {
                    id: 2,
                    text: "rzutniki"
                },
                {
                    id: 3,
                    text: "monitory TV"
                },
                {
                    id: 4,
                    text: "drukarki",
                    isCorrect: true
                }
            ]
        },
        {
            questionID: 34,
            questionText: "Model CMY(K) jest wykorzystywany przez:",
            questionAnswers: [
                {
                    id: 1,
                    text: "monitory CRT"
                },
                {
                    id: 2,
                    text: "rzutniki"
                },
                {
                    id: 3,
                    text: "skanery"
                },
                {
                    id: 4,
                    text: "maszyny offsetowe",
                    isCorrect: true
                }
            ]
        },
        {
            questionID: 35,
            questionText: "Modelu RGB nie wykorzystuje:",
            questionAnswers: [
                {
                    id: 1,
                    text: "aparat fotograficzny"
                },
                {
                    id: 2,
                    text: "monitor"
                },
                {
                    id: 3,
                    text: "rzutnik"
                },
                {
                    id: 4,
                    text: "skaner",
                    isCorrect: true
                }
            ]
        },
        {
            questionID: 36,
            questionText: "Modelu CMY(K) nie wykorzystuje:",
            questionAnswers: [
                {
                    id: 1,
                    text: "drukarka"
                },
                {
                    id: 2,
                    text: "ploter"
                },
                {
                    id: 3,
                    text: "rzutnik",
                    isCorrect: true
                }
            ]
        },
        {
            questionID: 37,
            questionText: " W model CMY(K) kolor K jest potrzebny ze względu na:",
            questionAnswers: [
                {
                    id: 1,
                    text: "problem w odzwierciedlaniu czarnego"
                },
                {
                    id: 2,
                    text: "oszczędność",
                    isCorrect: true
                },
                {
                    id: 3,
                    text: "model nie mógłby istnieć bez niego"
                }
            ]
        },
        {
            questionID: 38,
            questionText: "Fala akustyczna(wskaż nieprawidłową odpowiedź):",
            questionAnswers: [
                {
                    id: 1,
                    text: "w cieczach może być falą podłużną"
                },
                {
                    id: 2,
                    text: "w gazach może być falą podłużną"
                },
                {
                    id: 3,
                    text: "w ciałach stałych może być falą podłużną"
                },
                {
                    id: 4,
                    text: "w cieczach może być falą poprzeczną",
                    isCorrect: true
                },
                {
                    id: 5,
                    text: "w ciałach stałych może być falą poprzeczną"
                }
            ]
        },
        {
            questionID: 39,
            questionText: "Co pasuje do szumu:",
            questionAnswers: [
                {
                    id: 1,
                    text: "dźwięk o ciągłym widmie",
                    isCorrect: true
                },
                {
                    id: 2,
                    text: "nieskorelowane częstotliwości"
                },
                {
                    id: 3,
                    text: "wieloton harmoniczny"
                },
                {
                    id: 4,
                    text: "harmoniczne drganie o jednej częstotliwości"
                }
            ]
        },
        {
            questionID: 40,
            questionText: "Wybierz prawidłowe:",
            questionAnswers: [
                {
                    id: 1,
                    text: "pręcików jest więcej niż czopków",
                    isCorrect: true
                },
                {
                    id: 2,
                    text: "czopków jest więcej niż pręcików"
                },
                {
                    id: 3,
                    text: "liczba pręcików jest równa ilosci czopków"
                }
            ]
        },
        {
            questionID: 41,
            questionText: "Jaka liczba klatek na sekundę wystarcza, żeby uznać, że jest płynny?",
            questionAnswers: [
                {
                    id: 1,
                    text: "100fps"
                },
                {
                    id: 2,
                    text: "60fps"
                },
                {
                    id: 3,
                    text: "30fps"
                },
                {
                    id: 4,
                    text: "15fps",
                    isCorrect: true
                }
            ]
        },
        {
            questionID: 42,
            questionText: "Która metoda nie dotyczy bezpośrednio kompresji stratnej?",
            questionAnswers: [
                {
                    id: 1,
                    text: "redukcja rozdzielczości"
                },
                {
                    id: 2,
                    text: "prunning"
                },
                {
                    id: 3,
                    text: "wprowadzanie palety barw"
                },
                {
                    id: 4,
                    text: "np. grupowanie pikseli o tej samej barwie",
                    isCorrect: true
                },
                {
                    id: 5,
                    text: "redukcja chrominancji"
                }
            ]
        },
        {
            questionID: 43,
            questionText: "Spójność interfejsu oznacza:",
            questionAnswers: [
                {
                    id: 1,
                    text: "zgodność z powszechnie przyjętymi zasadami",
                    isCorrect: true
                },
                {
                    id: 2,
                    text: "ta sama czynność można wykonać na wiele rożnych sposobów w rożnych miejscach inaterfejsu"
                },
                {
                    id: 3,
                    text: "interfejs programu jest jasny i szybki do opanowania"
                },
                {
                    id: 4,
                    text: "minimalizowanie obciążenia pamięci użytkownika"
                }
            ]
        },
        {
            questionID: 44,
            questionText: "Granice slyszalnosci człowieka",
            questionAnswers: [
                {
                    id: 1,
                    text: "15Hz-20kHz"
                },
                {
                    id: 2,
                    text: "20Hz-20kHz",
                    isCorrect: true
                },
                {
                    id: 3,
                    text: "10Hz-20kHz"
                },
                {
                    id: 4,
                    text: "20kHz-20Hz"
                }
            ]
        },
        {
            questionID: 45,
            questionText: "ITD to:",
            questionAnswers: [
                {
                    id: 1,
                    text: "inteligentny system rozpoznawania mowy dla niepełnosprawnych"
                },
                {
                    id: 2,
                    text: "różnica intensywności dźwięku odbierana miedzy uszami"
                },
                {
                    id: 3,
                    text: "różnica czasu w jakim dociera dźwięk",
                    isCorrect: true
                },
                {
                    id: 4,
                    text: "czas w jakim dźwięk odbierany jest przez mózg "
                }
            ]
        },
        {
            questionID: 46,
            questionText: "IID to:",
            questionAnswers: [
                {
                    id: 1,
                    text: "inteligentny system rozpoznawania mowy dla niepełnosprawnych"
                },
                {
                    id: 2,
                    text: "różnica intensywności dźwięku odbierana miedzy uszami",
                    isCorrect: true
                },
                {
                    id: 3,
                    text: "różnica czasu w jakim dociera dźwięk "
                },
                {
                    id: 4,
                    text: "czas w jakim dźwięk odbierany jest przez mózg "
                }
            ]
        },
        {
            questionID: 47,
            questionText: "HRTF to:",
            questionAnswers: [
                {
                    id: 1,
                    text: "system sterowania komputerem falami mozgowymi"
                },
                {
                    id: 2,
                    text: "różnica czasu w jakim dociera dzwiek"
                },
                {
                    id: 3,
                    text: "efekt tlumienia/wzmacniania dźwięku przez malzowine uszna i głowę",
                    isCorrect: true
                },
                {
                    id: 4,
                    text: "stosunek ciśnienia akustycznego do natężenia dźwięku"
                }
            ]
        },
        {
            questionID: 48,
            questionText: "Formy pomocy jakie należy zapewnić w programie, to:",
            questionAnswers: [
                {
                    id: 1,
                    text: "obszerna dokumentacja dołączana w formie elektronicznej, bądź drukowanej"
                },
                {
                    id: 2,
                    text: "podpowiedzi, jako wyświetlane dymki po najechaniu na przycisk",
                    isCorrect: true
                },
                {
                    id: 3,
                    text: "samouczek"
                },
                {
                    id: 4,
                    text: "oficjalne forum internetowe"
                }
            ]
        },
        {
            questionID: 49,
            questionText: "W metodzie heurystycznej oceny interfejsu:",
            questionAnswers: [
                {
                    id: 1,
                    text: "użytkownik wykonuje pojedyncze, nieznane mu zadanie w programie"
                },
                {
                    id: 2,
                    text: "użytkownik stara się opisać błędy, które wystąpiły w czasie użytkowania programu"
                },
                {
                    id: 3,
                    text: "grupa specjalistów ocenia takie elementy jak zapobieganie błędów, prostota dialogu, szybkość uczenia się, widoczny stan systemu, używanie języka użytkownika",
                    isCorrect: true
                },
                {
                    id: 4,
                    text: "wszystkie powyższe odpowiedzi są błędne"
                }
            ]
        },
        {
            questionID: 50,
            questionText: "Który model barw nie jest ukierunkowany na sprzęt:",
            questionAnswers: [
                {
                    id: 1,
                    text: "RGB"
                },
                {
                    id: 2,
                    text: "CMYK"
                },
                {
                    id: 3,
                    text: "HSV",
                    isCorrect: true
                },
                {
                    id: 4,
                    text: "RGBA"
                }
            ]
        },
        {
            questionID: 51,
            questionText: " Wada metody projektowania interfejsu WIMP jest:",
            questionAnswers: [
                {
                    id: 1,
                    text: "występowanie tylko w wersji tekstowej"
                },
                {
                    id: 2,
                    text: "zawodzenie w przypadku użytkowników z wada wzroku",
                    isCorrect: true
                },
                {
                    id: 3,
                    text: "zawodzenie w przypadku użytkowników z wada słuchu"
                },
                {
                    id: 4,
                    text: "nie otwarta licencja należąca do amerykańskiej firmy produkującej okna"
                }
            ]
        },
        {
            questionID: 52,
            questionText: "Opisowymi metodami oceny interfejsu nie jest:",
            questionAnswers: [
                {
                    id: 1,
                    text: "UAN"
                },
                {
                    id: 2,
                    text: "drzewo menu"
                },
                {
                    id: 3,
                    text: "direct manipulation sketch"
                },
                {
                    id: 4,
                    text: "GOMS",
                    isCorrect: true
                }
            ]
        },
        {
            questionID: 53,
            questionText: "Do czego nie wykorzystuje się histogramu?",
            questionAnswers: [
                {
                    id: 1,
                    text: "poprawa kontrastu (spłaszczenie histogramu)"
                },
                {
                    id: 2,
                    text: "progowanie obrazów"
                },
                {
                    id: 3,
                    text: "porównywanie obrazów"
                },
                {
                    id: 4,
                    text: "odszumianie obrazów",
                    isCorrect: true
                }
            ]
        },
        {
            questionID: 54,
            questionText: "Jakie są wady metod roznicowych stratnej kompresji dźwięku?",
            questionAnswers: [
                {
                    id: 1,
                    text: "nawarstwianie się błędów",
                    isCorrect: true
                },
                {
                    id: 2,
                    text: "nie nadążają za zmianami wartości bitowych"
                },
                {
                    id: 3,
                    text: "występuje efekt echa"
                },
                {
                    id: 4,
                    text: "wszystkie odpowiedzi są prawidłowe"
                }
            ]
        },
        {
            questionID: 55,
            questionText: "Domowy odtwarzacz wideo nie potrzebuje:",
            questionAnswers: [
                {
                    id: 1,
                    text: "elastycznego formatu obrazu"
                },
                {
                    id: 2,
                    text: "skutecznej korekcji dźwięków"
                },
                {
                    id: 3,
                    text: "zsynchronizowanego odtwarzania obrazu i dźwięku"
                },
                {
                    id: 4,
                    text: "kompresji w czasie rzeczywistym",
                    isCorrect: true
                }
            ]
        },
        {
            questionID: 56,
            questionText: "Nowością w MPEG-2 w stosunku do poprzednika jest:",
            questionAnswers: [
                {
                    id: 1,
                    text: "obsługa trybu z przeplotem",
                    isCorrect: true
                },
                {
                    id: 2,
                    text: "wykorzystywanie dwóch, oddzielnych wektorow ruchu dla makroblokow"
                },
                {
                    id: 3,
                    text: "wszystkie powyższe odpowiedzi są prawidłowe"
                },
                {
                    id: 4,
                    text: "obsługa rozdzielczości full hd"
                }
            ]
        },
        {
            questionID: 57,
            questionText: "Do artystycznego przetwarzania obrazu nie zaliczamy",
            questionAnswers: [
                {
                    id: 1,
                    text: "retuszu"
                },
                {
                    id: 2,
                    text: "redukcji efektu czerwonych oczu"
                },
                {
                    id: 3,
                    text: "zmiany parametrów obrazka"
                },
                {
                    id: 4,
                    text: "wszystkie powyższe odpowiedzi są błędne",
                    isCorrect: true
                }
            ]
        },
        {
            questionID: 58,
            questionText: "Metodą zabezpieczenia obrazu nie jest",
            questionAnswers: [
                {
                    id: 1,
                    text: "zapisanie sygnatury autora na najbardziej znaczących bitach pikseli",
                    isCorrect: true
                },
                {
                    id: 2,
                    text: "umieszczenie elementów o bardzo dużej rozdzielczości optycznej"
                },
                {
                    id: 3,
                    text: "zapisanie sygnatury autora na najmniej znaczących bitach wybranych pikseli"
                },
                {
                    id: 4,
                    text: "znak wodny"
                }
            ]
        },
        {
            questionID: 59,
            questionText: "Rozpoznawanie obrazów to:",
            questionAnswers: [
                {
                    id: 1,
                    text: "OMR",
                    isCorrect: true
                },
                {
                    id: 2,
                    text: "MVC"
                },
                {
                    id: 3,
                    text: "OCR"
                },
                {
                    id: 4,
                    text: "ORM"
                }
            ]
        },
        {
            questionID: 60,
            questionText: "Rozpoznawanie tekstu to:",
            questionAnswers: [
                {
                    id: 1,
                    text: "OMR"
                },
                {
                    id: 2,
                    text: "MVC"
                },
                {
                    id: 3,
                    text: "OCR",
                    isCorrect: true
                },
                {
                    id: 4,
                    text: "ORM"
                }
            ]
        },
        {
            questionID: 61,
            questionText: "Jakiej platformy nigdy nie obsługiwał Unreal Engine 3?",
            questionAnswers: [
                {
                    id: 1,
                    text: "Linux "
                },
                {
                    id: 2,
                    text: "Android"
                },
                {
                    id: 3,
                    text: "Windows (directx 8)",
                    isCorrect: true
                },
                {
                    id: 4,
                    text: "Stage3D (Flash Player 11)"
                }
            ]
        },
        {
            questionID: 62,
            questionText: "SCUMM to:",
            questionAnswers: [
                {
                    id: 1,
                    text: "język skryptowy używany do obsługi zdarzeń w UDK"
                },
                {
                    id: 2,
                    text: "język skryptowy wspomagający programowanie gier typu point&click",
                    isCorrect: true
                },
                {
                    id: 3,
                    text: "heurystyczna ocena interfejsu gry komputerowej"
                },
                {
                    id: 4,
                    text: "biblioteka wspomagające programowanie gier komputerowych przeznaczona na systemy unix"
                }
            ]
        },
        {
            questionID: 63,
            questionText: "Rolą interfejsu jest:",
            questionAnswers: [
                {
                    id: 1,
                    text: "żadna z odpowiedzi nie jest prawidlowa",
                    isCorrect: true
                },
                {
                    id: 2,
                    text: "demonstracja najnowszych technologii i talentu graficznego autora"
                },
                {
                    id: 3,
                    text: "zmuszanie użytkownika do wymiany sprzętu"
                },
                {
                    id: 4,
                    text: "zmuszanie użytkownika do aktualizacji oprogramowania"
                }
            ]
        },
        {
            questionID: 64,
            questionText: "Za co odpowiadają w postrzeganiu preciki oczne?",
            questionAnswers: [
                {
                    id: 1,
                    text: "za postrzeganie jasności",
                    isCorrect: true
                },
                {
                    id: 2,
                    text: "za postrzeganie barwy"
                },
                {
                    id: 3,
                    text: "za stabilizację obrazu (złudzenia optyczne powodowane są przez błędne ich działanie)"
                },
                {
                    id: 4,
                    text: "za postrzeganie jasności oraz za stabilizację obrazu"
                }
            ]
        },
        {
            questionID: 65,
            questionText: "Za co odpowiadają w postrzeganiu czopki oczne?",
            questionAnswers: [
                {
                    id: 1,
                    text: "za postrzeganie jasności"
                },
                {
                    id: 2,
                    text: "za postrzeganie barwy",
                    isCorrect: true
                },
                {
                    id: 3,
                    text: "za stabilizację obrazu (złudzenia optyczne powodowane są przez błędne ich działanie)"
                },
                {
                    id: 4,
                    text: "za postrzeganie barwy oraz za stabilizację obrazu"
                }
            ]
        },
        {
            questionID: 66,
            questionText: "Ktore zdania są prawdziwe? W postrzeganiu czopki oczne odpowiadają za:",
            questionAnswers: [
                {
                    id: 1,
                    text: "postrzeganie barwy"
                },
                {
                    id: 2,
                    text: "postrzeganie kształtów"
                } ,
                {
                    id: 3,
                    text: "widzenie dzienne"
                },
                {
                    id: 4,
                    text: "postrzeganie barwy oraz widzenie dzienne",
                    isCorrect: true
                }
            ]
        },
        {
            questionID: 67,
            questionText: "Ktore zdania są prawdziwe? W postrzeganiu preciki oczne odpowiadają za:",
            questionAnswers: [
                {
                    id: 1,
                    text: "postrzeganie jasności"
                },
                {
                    id: 2,
                    text: "postrzeganie kształtów"
                },
                {
                    id: 3,
                    text: "widzenie nocne"
                },
                {
                    id: 4,
                    text: "wszystkie zdania są prawdziwe",
                    isCorrect: true
                }
            ]
        },
        {
            questionID: 68,
            questionText: "Mowiac o VRML prawda jest, że",
            questionAnswers: [
                {
                    id: 1,
                    text: "jest standardem zintegrowanym z HTML"
                },
                {
                    id: 2,
                    text: "służy tylko do zapisywania modelow 2D"
                },
                {
                    id: 3,
                    text: "wspiera lightmapy",
                    isCorrect: true
                },
                {
                    id: 4,
                    text: "obecnie kontynuowany jest pod nazwa WebGL"
                }
            ]
        },
        {
            questionID: 69,
            questionText: "Czym nie są spowodowane złudzenia optyczne ",
            questionAnswers: [
                {
                    id: 1,
                    text: "ograniczeniami w budowie oczu"
                },
                {
                    id: 2,
                    text: "wertykalnym rozpoznawaniem obrazów",
                    isCorrect: true
                },
                {
                    id: 3,
                    text: "wyobraźnią"
                },
                {
                    id: 4,
                    text: "przyzwyczajeniami"
                }
            ]
        },
        {
            questionID: 70,
            questionText: " OGRE i JMonkey są przykładami ",
            questionAnswers: [
                {
                    id: 1,
                    text: "interfejsami graficznymi systemów unix"
                },
                {
                    id: 2,
                    text: "programami pozwalającymi ocenić interfejs"
                },
                {
                    id: 3,
                    text: "przykładami języków modelowania rzeczywistości wirtualnej"
                },
                {
                    id: 4,
                    text: "silników gier",
                    isCorrect: true
                }
            ]
        },
        {
            questionID: 71,
            questionText: "VRML to: ",
            questionAnswers: [
                {
                    id: 1,
                    text: "język postrzegania rzeczywistości wirtualnej"
                },
                {
                    id: 2,
                    text: "standard opisujący bryły trójwymiarowe w formacie xml"
                },
                {
                    id: 3,
                    text: "język modelowania rzeczywistości wirtualnej",
                    isCorrect: true
                },
                {
                    id: 4,
                    text: "standard opisujący bryły trójwymiarowe w formacie yaml"
                }
            ]
        },
        {
            questionID: 72,
            questionText: "Do metod opisowych interfejsu możemy zaliczyć",
            questionAnswers: [
                {
                    id: 1,
                    text: "GOMS"
                },
                {
                    id: 2,
                    text: "TAG"
                },
                {
                    id: 3,
                    text: "RTD"
                },
                {
                    id: 4,
                    text: "UAN",
                    isCorrect: true
                }
            ]
        },
        {
            questionID: 73,
            questionText: "W dobrze zaprojektowanym interfejsie:",
            questionAnswers: [
                {
                    id: 1,
                    text: "strona do wydruku nie powinna zawierać adresu strony, z której powstała"
                },
                {
                    id: 2,
                    text: "w stronach internetowych powinna być oddzielona forma od treści",
                    isCorrect: true
                },
                {
                    id: 3,
                    text: "użytkowanie niestandardowych czcionek jest dowzwolone"
                },
                {
                    id: 4,
                    text: "na stronach www grafika powinna być wyswietlana w oryginalnych rozmiarach"
                }
            ]
        },
        {
            questionID: 74,
            questionText: "Twierdzenie Shannona mówi, że częstotliwość próbkowania powinna być ... którą chcemy potem odtworzyć.",
            questionAnswers: [
                {
                    id: 1,
                    text: "równa częstotliwości najwyższej w próbkowanym sygnale"
                },
                {
                    id: 2,
                    text: "dwa razy wyższa od najwyższej częstotliwości w próbkowanym sygnale",
                    isCorrect: true
                },
                {
                    id: 3,
                    text: "wyższa niż częstotliwość najwyższa w prókowanym sygnale"
                }
            ]
        },
        {
            questionID: 75,
            questionText: "Dynamika sygnału to:",
            questionAnswers: [
                {
                    id: 1,
                    text: "prędkość zmian wysokości dźwięku"
                },
                {
                    id: 2,
                    text: "wartość entropi poszczególnych częstotliwości w sygnale"
                },
                {
                    id: 3,
                    text: "odstęp pomiędzy najniższym i najwyższym poziomem przenoszonego dźwięku",
                    isCorrect: true
                }
            ]
        },
        {
            questionID: 76,
            questionText: "Jaki rozmiar ma minuta nagrania stereo o częstotliwości 44.1kHz (próbka = 16bit)",
            questionAnswers: [
                {
                    id: 1,
                    text: "10336kB",
                    isCorrect: true
                },
                {
                    id: 2,
                    text: "10584kB"
                },
                {
                    id: 3,
                    text: "1754kB"
                },
                {
                    id: 4,
                    text: "17640kB"
                }
            ]
        },
        {
            questionID: 77,
            questionText: "Wskaż fałszywe zdanie:",
            questionAnswers: [
                {
                    id: 1,
                    text: "format mp3 stosuje kodowanie stratne (niska jakość) i bezstratne (wysoka jakość)",
                    isCorrect: true
                },
                {
                    id: 2,
                    text: "format OGG pozwala zapisac wiecej niż 2 kanały"
                },
                {
                    id: 3,
                    text: "format OGG ma lepsza jakość niż mp3 przy porownywalnej wielkości"
                },
                {
                    id: 4,
                    text: "format MP3 pozwala na zapisanie dodatkowych informacji (ID Tags)"
                }
            ]
        },
        {
            questionID: 78,
            questionText: "Którego z założeń nie spełnia VRML:",
            questionAnswers: [
                {
                    id: 1,
                    text: "łączenie z innymi światami 3D"
                },
                {
                    id: 2,
                    text: "rozbudowa w oparciu o XML",
                    isCorrect: true
                },
                {
                    id: 3,
                    text: "niezależność od systemu operacyjnego"
                },
                {
                    id: 4,
                    text: "generowanie w czasie rzeczywistym"
                }
            ]
        }
    ]
};

export default questionDataBase;
