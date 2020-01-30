const questionDataBase = {
    multimediaAndInterfaces: [
        {
            questionID: 1,
            questionText: "Multimedia to:",
            questionAnswers: [
                {
                    text: "modelowanie tekstu na tekst"
                },
                {
                    text: "rozpoznawanie obrazów"
                },
                {
                    text: "generowanie obrazu z opisu (grafika)"
                },
                {
                    text: "przetwarzanie obrazów"
                },
                {
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
                    text: "efekt doplera"
                },
                {
                    text: "odbicie dźwięków",
                    isCorrect: true
                },
                {
                    text: "para uszu"
                },
                {
                    text: "tłumienie dźwięków docierających z tyłu"
                }
            ]
        },
        {
            questionID: 3,
            questionText: "Mechanizm animacji w VRML",
            questionAnswers: [
                {
                    text: "nie ma wpływu na parametry odtwarzanego dźwięku",
                    isCorrect: true
                },
                {
                    text: "korzysta wyłącznie z jednego interpolatora dla danego obiektu"
                },
                {
                    text: "nie pozwala na wielokrotne wykorzystanie timerów"
                },
                {
                    text: "samodzielnie interpoluje właściwości animowanego obiektu we wszystkich klatkach pośrednich"
                }
            ]
        },
        {
            questionID: 4,
            questionText: "Spójność i używanie standardów nie oznacza, że:",
            questionAnswers: [
                {
                    text: "system dostarcza skrótów",
                    isCorrect: true
                },
                {
                    text: "użytkownik może wykorzystać doświadczenie zdobyte przy używaniu innych programów"
                },
                {
                    text: "poszczególne części interfejsu programu wyglądają i są obsługiwane w podobny sposób jak inne programy"
                },
                {
                    text: "poszczególne części interfejsu wyglądają i są obsługiwane w podobny sposób"
                }
            ]
        },
        {
            questionID: 5,
            questionText: "Wskaż zdanie fałszywe:",
            questionAnswers: [
                {
                    text: "za widzenie koloru odpowiedzialne są pręciki",
                    isCorrect: true
                },
                {
                    text: "za widzenie nocne odpowiedzialne są pręciki"
                },
                {
                    text: "pręciki umożliwiają dobre wykrywanie krawędzi"
                },
                {
                    text: "wzrok człowieka jest bardziej wrażliwy na jasność niż na kolor"
                }
            ]
        },
        {
            questionID: 6,
            questionText: "Histogram obrazu:",
            questionAnswers: [
                {
                    text: "pozwala na wykrywnanie krawędzi w obrazie"
                },
                {
                    text: "pozwala na odszumianie obrazu"
                },
                {
                    text: "pozwala na redukcję liczby barw występujących w obrazie",
                    isCorrect: true
                },
                {
                    text: "pełny H(RGB) dla wszystystkich kanałów jest wykorzystywany w aparatach cyfrowych"
                }
            ]
        },
        {
            questionID: 7,
            questionText: "Prostota dialogu nie oznacza, że:",
            questionAnswers: [
                {
                    text: "brak jest zbędnych elementów na ekranie"
                },
                {
                    text: "elementy multimedialne są oszczędnie wykorzystywane w szczególności filmy",
                    isCorrect: true
                },
                {
                    text: "interfejs zawiera tylko te elemeny które są niezbędne"
                },
                {
                    text: "uwaga użytkownika nie jest odciągana przez dodatkowe obrazki napisy itp."
                }
            ]
        },
        {
            questionID: 8,
            questionText: "Wskaż zdanie fałszywe: kompresja stratna ...",
            questionAnswers: [
                {
                    text: "zawsze obniża jakość sygnału",
                    isCorrect: true
                },
                {
                    text: "może wykorzystywać informację o ograniczeniach percepcji człowieka"
                },
                {
                    text: "może wykorzystywać właściwości sygnału"
                },
                {
                    text: "może wykorzystywać kompresje bezstratną"
                }
            ]
        },
        {
            questionID: 9,
            questionText: "Efektem działania filtru uśredniającego o masce poziomej o wymiarze 3x1 dla wiersza obrazu o jasnościach pikseli 1 2 3 4 0 4 3 2 1 może być następujący wiersz:",
            questionAnswers: [
                {
                    text: "1 2 3 2 3 2 3 2 1",
                    isCorrect: true
                },
                {
                    text: "1 2 3 2,33 2,67 2,33 3 2"
                },
                {
                    text: "2 3 2 3 2 3 2"
                },
                {
                    text: "2 2 2 2 2 2 2 2 2"
                }
            ]
        },
        {
            questionID: 10,
            questionText: "Zapobieganie błędom oznacza, że:",
            questionAnswers: [
                {
                    text: "brak jest zbędnych elementów na ekranie"
                },
                {
                    text: "interfejs jest prosty w obsłudze"
                },
                {
                    text: "zamiast dostarczac komunikat o błędzie po wyjściu poza dozwolony zakres czyni się niedostępnymi odpowiedni klawisz lub opcję w menu",
                    isCorrect: true
                },
                {
                    text: "system dostarcza skrótów"
                }
            ]
        },
        {
            questionID: 11,
            questionText: "Widoczny stan interfejsu oznacza, że:",
            questionAnswers: [
                {
                    text: "zawsze można się wycofać z błędnych działań"
                },
                {
                    text: "komunikaty o błędach są dobrze dobrane"
                },
                {
                    text: "użytkownik zna bieżący tryb interfejsu",
                    isCorrect: true
                },
                {
                    text: "brak jest zbędnych elementów na ekranie"
                }
            ]
        },
        {
            questionID: 12,
            questionText: "Oblicz rozmiar kolorowej bitmapy w formacie TrueColor RGB powstałej w wyniku skanowania w rozdzielczości 300dpi obrazu o wymiarach 1 na 5 cali:",
            questionAnswers: [
                {
                    text: "1 800 000"
                },
                {
                    text: "    4 500"
                },
                {
                    text: "  450 000"
                },
                {
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
                    text: "brak jest zbędnych elementów na ekranie"
                },
                {
                    text: "interfejs jest prosty w obsłudze"
                },
                {
                    text: "interfejs może używać żargonu z dziedziny z której pochodza zadania wykonywane przez uzytkownika"
                },
                {
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
                    text: "postawa"
                },
                {
                    text: "stosunek"
                },
                {
                    text: "motywacja"
                },
                {
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
                    text: "44100 Hz.Ponad 2 razy większa od górnej granicy słyszalności człowieka.",
                    isCorrect: true
                },
                {
                    text: "40000 Hz. 2 razy większa od górnej granicy słyszalności człowieka."
                },
                {
                    text: "1,5 Mbit/s .Prędkość odtwarzania CD …"
                },
                {
                    text: "8 kHZ.Ograniczenia pasma w kanałach transmisji."
                }
            ]
        },
        {
            questionID: 16,
            questionText: "W pozyskiwaniu wiedzy stategia:",
            questionAnswers: [
                {
                    text: "to uporządkowanie czasowe działań"
                },
                {
                    text: "określa krok po kroku jakie działania realizują dany cel",
                    isCorrect: true
                },
                {
                    text: "odpowiada regułom  wyboru metod GOMS"
                },
                {
                    text: "umożliwia określenie czasu nauki interfejsu"
                }
            ]
        },
        {
            questionID: 17,
            questionText: "W pozyskiwaniu wiedzy plan nie:",
            questionAnswers: [
                {
                    text: "określa krok po kroku, jakie działania realizują dany cel"
                },
                {
                    text: "to uporządkowanie czasowe czynności"
                },
                {
                    text: "poznaje się szukając w wywiadach i protokołach sformułowań typu 'teraz przystępuję do...'"
                },
                {
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
                    text: "1(4) 2(3) 3(2) 4"
                },
                {
                    text: "11 11 11 11 10 10 10 01 01 00",
                    isCorrect: true
                },
                {
                    text: "1(4) 2(3) 3(2) 4(1)"
                },
                {
                    text: "1(4) 2(3) 3 3 4"
                }
            ]
        },
        {
            questionID: 19,
            questionText: "Efektem działania filtru wartości środkowej (medianowego) o masce poziomej w wymiarze 3 x 1 dla wiersza obrazu o jasnościach pixeli 1 2 3 4 0 4 3 2 1 może być następujący wiersz:",
            questionAnswers: [
                {
                    text: "2 2 2 2 2 2 2 2 2"
                },
                {
                    text: "2 3 2 3 2 3 2 3 2"
                },
                {
                    text: "3 3 3 3 3 3 3 3 3"
                },
                {
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
                    text: "zawsze można się wycofać z błędnych działań",
                    isCorrect: true
                },
                {
                    text: "użytkownik zawsze wie, w którym miejscu się znajduje"
                },
                {
                    text: "użytkownik zna bieżące wartości parametrów interfejsu np. podkreślenie/wytłuszczenie w edytorze tekstu"
                },
                {
                    text: "użytkownik zna bieżący tryb interfejsu"
                }
            ]
        },
        {
            questionID: 21,
            questionText: " W ocenie heurystycznej minimalizowanie obciążania pamięci oznacza, że:",
            questionAnswers: [
                {
                    text: "system dostarcza skrótów"
                },
                {
                    text: "interfejs jest prosty w obsłudze"
                },
                {
                    text: "użytkownik nie musi pamiętać nazw poleceń",
                    isCorrect: true
                },
                {
                    text: "komunikaty o błędach są dobrze opisane"
                }
            ]
        },
        {
            questionID: 22,
            questionText: "Oblicz rozmiar kolorowej bitmapy (w formacie TrueColorRGB) powstałej w wyniku skanowania o rozdzielczości 200 dpi obrazu o wymiarach 3 na 5 cale(i).",
            questionAnswers: [
                {
                    text: "1 800 000",
                    isCorrect: true
                },
                {
                    text: "2 400 000"
                },
                {
                    text: "9 000"
                },
                {
                    text: "600 000"
                }
            ]
        },
        {
            questionID: 23,
            questionText: "Wskaż zdanie fałszywe. Format MIDI:",
            questionAnswers: [
                {
                    text: "umożliwia dobrą kompresję muzyki instrumentalnej"
                },
                {
                    text: "służy do zapisu muzyki, która zawsze brzmi identycznie niezależnie od komputera",
                    isCorrect: true
                },
                {
                    text: "jest standardem komunikacji cfrowych urządzeń muzycznych"
                },
                {
                    text: "można traktować jako odmianę zapisu nutowego"
                }
            ]
        },
        {
            questionID: 24,
            questionText: "Wskaż zdanie fałszywe:",
            questionAnswers: [
                {
                    text: "pręciki umożliwiają dobre wykrywanie krawędzi"
                },
                {
                    text: "za widzenie koloru odpowiedzialne są pręciki",
                    isCorrect: true
                },
                {
                    text: "za widzenie nocne odpowiedzialne są pręciki"
                },
                {
                    text: "za widzenie koloru odpowiedzialne są czopki"
                }
            ]
        },
        {
            questionID: 25,
            questionText: "W ocenie heurystycznej dobre diagnozowanie błędów oznacza, że:",
            questionAnswers: [
                {
                    text: "komunikaty o błędzie pisane są inną czcionką i są innej barwy niż pozostałe komunikaty"
                },
                {
                    text: "komunikat o błędzie umożliwia usunięcie przyczyny błędu",
                    isCorrect: true
                },
                {
                    text: "komunikat o błędzie obejmuje zawartość rejestrów procesora"
                },
                {
                    text: "komunikat o błędzie wyświetlany jest na środku ekranu"
                }
            ]
        },
        {
            questionID: 26,
            questionText: "Celami kompresji MPEG 1 i 2 nie są:",
            questionAnswers: [
                {
                    text: "szybkie przeszukiwanie w przód i wstecz"
                },
                {
                    text: "małe opóźnienia kodowania i dekodowania"
                },
                {
                    text: "elastyczność formatu obrazu"
                },
                {
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
                    text: "niektóre działania interfejsu użytkownik może wywołać w mniejszej liczbie kroków(kliknięć,uderzeń w klawiaturę)"
                },
                {
                    text: "zaawansowanym użytkownikom umożliwia się szybszą obsługę interfejsu"
                },
                {
                    text: "system dostarcza skrótów"
                },
                {
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
                    text: "są trwalsze od analogicznych ( tłoczonych lub nagrywanych ) płyt CD",
                    isCorrect: true
                },
                {
                    text: "zawierają informację zapisaną w postaci zagłębień i płaskich powierzchni"
                },
                {
                    text: "muszą być odczytywane laserem o krótszej długości fali niż płyty CD"
                },
                {
                    text: "mogą występować w wersji jedno- lub dwuwarstwowej"
                }
            ]
        },
        {
            questionID: 29,
            questionText: "Wskaż zdanie fałszywe. Częstotliwość próbkowania DVDaudio...",
            questionAnswers: [
                {
                    text: "jest stosowana aby zmniejszyć składowe harmoniczne"
                },
                {
                    text: "jest stosowana aby uzyskać dźwięk o wierniejszym brzmieniu"
                },
                {
                    text: "może nie wpływać na odbiór muzyki przez melomanów o gorszym słuchu (w porównaniu z Cdaudio)"
                },
                {
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
                    text: "barwy achromatyczne"
                },
                {
                    text: "barwy podstawowe",
                    isCorrect: true
                },
                {
                    text: "barwy proste"
                }
            ]
        },
        {
            questionID: 31,
            questionText: "Barwa prosta to nie barwa:",
            questionAnswers: [
                {
                    text: "monochromatyczna"
                },
                {
                    text: "widmowa"
                },
                {
                    text: "spektralna"
                },
                {
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
                    text: "monitory CRT"
                },
                {
                    text: "monitory TV"
                },
                {
                    text: "rzutniki"
                },
                {
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
                    text: "monitory CRT"
                },
                {
                    text: "rzutniki"
                },
                {
                    text: "monitory TV"
                },
                {
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
                    text: "monitory CRT"
                },
                {
                    text: "rzutniki"
                },
                {
                    text: "skanery"
                },
                {
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
                    text: "aparat fotograficzny"
                },
                {
                    text: "monitor"
                },
                {
                    text: "rzutnik"
                },
                {
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
                    text: "drukarka"
                },
                {
                    text: "ploter"
                },
                {
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
                    text: "problem w odzwierciedlaniu czarnego"
                },
                {
                    text: "oszczędność",
                    isCorrect: true
                },
                {
                    text: "model nie mógłby istnieć bez niego"
                }
            ]
        },
        {
            questionID: 38,
            questionText: "Fala akustyczna(wskaż nieprawidłową odpowiedź):",
            questionAnswers: [
                {
                    text: "w cieczach może być falą podłużną"
                },
                {
                    text: "w gazach może być falą podłużną"
                },
                {
                    text: "w ciałach stałych może być falą podłużną"
                },
                {
                    text: "w cieczach może być falą poprzeczną",
                    isCorrect: true
                },
                {
                    text: "w ciałach stałych może być falą poprzeczną"
                }
            ]
        },
        {
            questionID: 39,
            questionText: "Co pasuje do szumu:",
            questionAnswers: [
                {
                    text: "dźwięk o ciągłym widmie",
                    isCorrect: true
                },
                {
                    text: "nieskorelowane częstotliwości"
                },
                {
                    text: "wieloton harmoniczny"
                },
                {
                    text: "harmoniczne drganie o jednej częstotliwości"
                }
            ]
        },
        {
            questionID: 40,
            questionText: "Wybierz prawidłowe:",
            questionAnswers: [
                {
                    text: "pręcików jest więcej niż czopków",
                    isCorrect: true
                },
                {
                    text: "czopków jest więcej niż pręcików"
                },
                {
                    text: "liczba pręcików jest równa ilosci czopków"
                }
            ]
        },
        {
            questionID: 41,
            questionText: "Jaka liczba klatek na sekundę wystarcza, żeby uznać, że jest płynny?",
            questionAnswers: [
                {
                    text: "100fps"
                },
                {
                    text: "60fps"
                },
                {
                    text: "30fps"
                },
                {
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
                    text: "redukcja rozdzielczości"
                },
                {
                    text: "prunning"
                },
                {
                    text: "wprowadzanie palety barw"
                },
                {
                    text: "np. grupowanie pikseli o tej samej barwie",
                    isCorrect: true
                },
                {
                    text: "redukcja chrominancji"
                }
            ]
        },
        {
            questionID: 43,
            questionText: "Spójność interfejsu oznacza:",
            questionAnswers: [
                {
                    text: "zgodność z powszechnie przyjętymi zasadami",
                    isCorrect: true
                },
                {
                    text: "ta sama czynność można wykonać na wiele rożnych sposobów w rożnych miejscach inaterfejsu"
                },
                {
                    text: "interfejs programu jest jasny i szybki do opanowania"
                },
                {
                    text: "minimalizowanie obciążenia pamięci użytkownika"
                }
            ]
        },
        {
            questionID: 44,
            questionText: "Granice slyszalnosci człowieka",
            questionAnswers: [
                {
                    text: "15Hz-20kHz"
                },
                {
                    text: "20Hz-20kHz",
                    isCorrect: true
                },
                {
                    text: "10Hz-20kHz"
                },
                {
                    text: "20kHz-20Hz"
                }
            ]
        },
        {
            questionID: 45,
            questionText: "ITD to:",
            questionAnswers: [
                {
                    text: "inteligentny system rozpoznawania mowy dla niepełnosprawnych"
                },
                {
                    text: "różnica intensywności dźwięku odbierana miedzy uszami"
                },
                {
                    text: "różnica czasu w jakim dociera dźwięk",
                    isCorrect: true
                },
                {
                    text: "czas w jakim dźwięk odbierany jest przez mózg "
                }
            ]
        },
        {
            questionID: 46,
            questionText: "IID to:",
            questionAnswers: [
                {
                    text: "inteligentny system rozpoznawania mowy dla niepełnosprawnych"
                },
                {
                    text: "różnica intensywności dźwięku odbierana miedzy uszami",
                    isCorrect: true
                },
                {
                    text: "różnica czasu w jakim dociera dźwięk "
                },
                {
                    text: "czas w jakim dźwięk odbierany jest przez mózg "
                }
            ]
        },
        {
            questionID: 47,
            questionText: "HRTF to:",
            questionAnswers: [
                {
                    text: "system sterowania komputerem falami mozgowymi"
                },
                {
                    text: "różnica czasu w jakim dociera dzwiek"
                },
                {
                    text: "efekt tlumienia/wzmacniania dźwięku przez malzowine uszna i głowę",
                    isCorrect: true
                },
                {
                    text: "stosunek ciśnienia akustycznego do natężenia dźwięku"
                }
            ]
        },
        {
            questionID: 48,
            questionText: "Formy pomocy jakie należy zapewnić w programie, to:",
            questionAnswers: [
                {
                    text: "obszerna dokumentacja dołączana w formie elektronicznej, bądź drukowanej"
                },
                {
                    text: "podpowiedzi, jako wyświetlane dymki po najechaniu na przycisk",
                    isCorrect: true
                },
                {
                    text: "samouczek"
                },
                {
                    text: "oficjalne forum internetowe"
                }
            ]
        },
        {
            questionID: 49,
            questionText: "W metodzie heurystycznej oceny interfejsu:",
            questionAnswers: [
                {
                    text: "użytkownik wykonuje pojedyncze, nieznane mu zadanie w programie"
                },
                {
                    text: "użytkownik stara się opisać błędy, które wystąpiły w czasie użytkowania programu"
                },
                {
                    text: "grupa specjalistów ocenia takie elementy jak zapobieganie błędów, prostota dialogu, szybkość uczenia się, widoczny stan systemu, używanie języka użytkownika",
                    isCorrect: true
                },
                {
                    text: "wszystkie powyższe odpowiedzi są błędne"
                }
            ]
        },
        {
            questionID: 50,
            questionText: "Który model barw nie jest ukierunkowany na sprzęt:",
            questionAnswers: [
                {
                    text: "RGB"
                },
                {
                    text: "CMYK"
                },
                {
                    text: "HSV",
                    isCorrect: true
                },
                {
                    text: "RGBA"
                }
            ]
        },
        {
            questionID: 51,
            questionText: " Wada metody projektowania interfejsu WIMP jest:",
            questionAnswers: [
                {
                    text: "występowanie tylko w wersji tekstowej"
                },
                {
                    text: "zawodzenie w przypadku użytkowników z wada wzroku",
                    isCorrect: true
                },
                {
                    text: "zawodzenie w przypadku użytkowników z wada słuchu"
                },
                {
                    text: "nie otwarta licencja należąca do amerykańskiej firmy produkującej okna"
                }
            ]
        },
        {
            questionID: 52,
            questionText: "Opisowymi metodami oceny interfejsu nie jest:",
            questionAnswers: [
                {
                    text: "UAN"
                },
                {
                    text: "drzewo menu"
                },
                {
                    text: "direct manipulation sketch"
                },
                {
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
                    text: "poprawa kontrastu (spłaszczenie histogramu)"
                },
                {
                    text: "progowanie obrazów"
                },
                {
                    text: "porównywanie obrazów"
                },
                {
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
                    text: "nawarstwianie się błędów",
                    isCorrect: true
                },
                {
                    text: "nie nadążają za zmianami wartości bitowych"
                },
                {
                    text: "występuje efekt echa"
                },
                {
                    text: "wszystkie odpowiedzi są prawidłowe"
                }
            ]
        },
        {
            questionID: 55,
            questionText: "Domowy odtwarzacz wideo nie potrzebuje:",
            questionAnswers: [
                {
                    text: "elastycznego formatu obrazu"
                },
                {
                    text: "skutecznej korekcji dźwięków"
                },
                {
                    text: "zsynchronizowanego odtwarzania obrazu i dźwięku"
                },
                {
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
                    text: "obsługa trybu z przeplotem",
                    isCorrect: true
                },
                {
                    text: "wykorzystywanie dwóch, oddzielnych wektorow ruchu dla makroblokow"
                },
                {
                    text: "wszystkie powyższe odpowiedzi są prawidłowe"
                },
                {
                    text: "obsługa rozdzielczości full hd"
                }
            ]
        },
        {
            questionID: 57,
            questionText: "Do artystycznego przetwarzania obrazu nie zaliczamy",
            questionAnswers: [
                {
                    text: "retuszu"
                },
                {
                    text: "redukcji efektu czerwonych oczu"
                },
                {
                    text: "zmiany parametrów obrazka"
                },
                {
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
                    text: "zapisanie sygnatury autora na najbardziej znaczących bitach pikseli",
                    isCorrect: true
                },
                {
                    text: "umieszczenie elementów o bardzo dużej rozdzielczości optycznej"
                },
                {
                    text: "zapisanie sygnatury autora na najmniej znaczących bitach wybranych pikseli"
                },
                {
                    text: "znak wodny"
                }
            ]
        },
        {
            questionID: 59,
            questionText: "Rozpoznawanie obrazów to:",
            questionAnswers: [
                {
                    text: "OMR",
                    isCorrect: true
                },
                {
                    text: "MVC"
                },
                {
                    text: "OCR"
                },
                {
                    text: "ORM"
                }
            ]
        },
        {
            questionID: 60,
            questionText: "Rozpoznawanie tekstu to:",
            questionAnswers: [
                {
                    text: "OMR"
                },
                {
                    text: "MVC"
                },
                {
                    text: "OCR",
                    isCorrect: true
                },
                {
                    text: "ORM"
                }
            ]
        },
        {
            questionID: 61,
            questionText: "Jakiej platformy nigdy nie obsługiwał Unreal Engine 3?",
            questionAnswers: [
                {
                    text: "Linux "
                },
                {
                    text: "Android"
                },
                {
                    text: "Windows (directx 8)",
                    isCorrect: true
                },
                {
                    text: "Stage3D (Flash Player 11)"
                }
            ]
        },
        {
            questionID: 62,
            questionText: "SCUMM to:",
            questionAnswers: [
                {
                    text: "język skryptowy używany do obsługi zdarzeń w UDK"
                },
                {
                    text: "język skryptowy wspomagający programowanie gier typu point&click",
                    isCorrect: true
                },
                {
                    text: "heurystyczna ocena interfejsu gry komputerowej"
                },
                {
                    text: "biblioteka wspomagające programowanie gier komputerowych przeznaczona na systemy unix"
                }
            ]
        },
        {
            questionID: 63,
            questionText: "Rolą interfejsu jest:",
            questionAnswers: [
                {
                    text: "żadna z odpowiedzi nie jest prawidlowa",
                    isCorrect: true
                },
                {
                    text: "demonstracja najnowszych technologii i talentu graficznego autora"
                },
                {
                    text: "zmuszanie użytkownika do wymiany sprzętu"
                },
                {
                    text: "zmuszanie użytkownika do aktualizacji oprogramowania"
                }
            ]
        },
        {
            questionID: 64,
            questionText: "Za co odpowiadają w postrzeganiu preciki oczne?",
            questionAnswers: [
                {
                    text: "za postrzeganie jasności",
                    isCorrect: true
                },
                {
                    text: "za postrzeganie barwy"
                },
                {
                    text: "za stabilizację obrazu (złudzenia optyczne powodowane są przez błędne ich działanie)"
                },
                {
                    text: "za postrzeganie jasności oraz za stabilizację obrazu"
                }
            ]
        },
        {
            questionID: 65,
            questionText: "Za co odpowiadają w postrzeganiu czopki oczne?",
            questionAnswers: [
                {
                    text: "za postrzeganie jasności"
                },
                {
                    text: "za postrzeganie barwy",
                    isCorrect: true
                },
                {
                    text: "za stabilizację obrazu (złudzenia optyczne powodowane są przez błędne ich działanie)"
                },
                {
                    text: "za postrzeganie barwy oraz za stabilizację obrazu"
                }
            ]
        },
        {
            questionID: 66,
            questionText: "Ktore zdania są prawdziwe? W postrzeganiu czopki oczne odpowiadają za:",
            questionAnswers: [
                {
                    text: "postrzeganie barwy"
                },
                {
                    text: "postrzeganie kształtów"
                } ,
                {
                    text: "widzenie dzienne"
                },
                {
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
                    text: "postrzeganie jasności"
                },
                {
                    text: "postrzeganie kształtów"
                },
                {
                    text: "widzenie nocne"
                },
                {
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
                    text: "jest standardem zintegrowanym z HTML"
                },
                {
                    text: "służy tylko do zapisywania modelow 2D"
                },
                {
                    text: "wspiera lightmapy",
                    isCorrect: true
                },
                {
                    text: "obecnie kontynuowany jest pod nazwa WebGL"
                }
            ]
        },
        {
            questionID: 69,
            questionText: "Czym nie są spowodowane złudzenia optyczne ",
            questionAnswers: [
                {
                    text: "ograniczeniami w budowie oczu"
                },
                {
                    text: "wertykalnym rozpoznawaniem obrazów",
                    isCorrect: true
                },
                {
                    text: "wyobraźnią"
                },
                {
                    text: "przyzwyczajeniami"
                }
            ]
        },
        {
            questionID: 70,
            questionText: " OGRE i JMonkey są przykładami ",
            questionAnswers: [
                {
                    text: "interfejsami graficznymi systemów unix"
                },
                {
                    text: "programami pozwalającymi ocenić interfejs"
                },
                {
                    text: "przykładami języków modelowania rzeczywistości wirtualnej"
                },
                {
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
                    text: "język postrzegania rzeczywistości wirtualnej"
                },
                {
                    text: "standard opisujący bryły trójwymiarowe w formacie xml"
                },
                {
                    text: "język modelowania rzeczywistości wirtualnej",
                    isCorrect: true
                },
                {
                    text: "standard opisujący bryły trójwymiarowe w formacie yaml"
                }
            ]
        },
        {
            questionID: 72,
            questionText: "Do metod opisowych interfejsu możemy zaliczyć",
            questionAnswers: [
                {
                    text: "GOMS"
                },
                {
                    text: "TAG"
                },
                {
                    text: "RTD"
                },
                {
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
                    text: "strona do wydruku nie powinna zawierać adresu strony, z której powstała"
                },
                {
                    text: "w stronach internetowych powinna być oddzielona forma od treści",
                    isCorrect: true
                },
                {
                    text: "użytkowanie niestandardowych czcionek jest dowzwolone"
                },
                {
                    text: "na stronach www grafika powinna być wyswietlana w oryginalnych rozmiarach"
                }
            ]
        },
        {
            questionID: 74,
            questionText: "Twierdzenie Shannona mówi, że częstotliwość próbkowania powinna być ... którą chcemy potem odtworzyć.",
            questionAnswers: [
                {
                    text: "równa częstotliwości najwyższej w próbkowanym sygnale"
                },
                {
                    text: "dwa razy wyższa od najwyższej częstotliwości w próbkowanym sygnale",
                    isCorrect: true
                },
                {
                    text: "wyższa niż częstotliwość najwyższa w prókowanym sygnale"
                }
            ]
        },
        {
            questionID: 75,
            questionText: "Dynamika sygnału to:",
            questionAnswers: [
                {
                    text: "prędkość zmian wysokości dźwięku"
                },
                {
                    text: "wartość entropi poszczególnych częstotliwości w sygnale"
                },
                {
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
                    text: "10336kB",
                    isCorrect: true
                },
                {
                    text: "10584kB"
                },
                {
                    text: "1754kB"
                },
                {
                    text: "17640kB"
                }
            ]
        },
        {
            questionID: 77,
            questionText: "Wskaż fałszywe zdanie:",
            questionAnswers: [
                {
                    text: "format mp3 stosuje kodowanie stratne (niska jakość) i bezstratne (wysoka jakość)",
                    isCorrect: true
                },
                {
                    text: "format OGG pozwala zapisac wiecej niż 2 kanały"
                },
                {
                    text: "format OGG ma lepsza jakość niż mp3 przy porownywalnej wielkości"
                },
                {
                    text: "format MP3 pozwala na zapisanie dodatkowych informacji (ID Tags)"
                }
            ]
        },
        {
            questionID: 78,
            questionText: "Którego z założeń nie spełnia VRML:",
            questionAnswers: [
                {
                    text: "łączenie z innymi światami 3D"
                },
                {
                    text: "rozbudowa w oparciu o XML",
                    isCorrect: true
                },
                {
                    text: "niezależność od systemu operacyjnego"
                },
                {
                    text: "generowanie w czasie rzeczywistym"
                }
            ]
        }
    ],

    physics: [
        {
            questionID: 2,
            questionText: "Przyspieszenie punktu materialnego o masie m zdefiniowane jest jako:",
            questionAnswers: [
                {
                    text: "iloraz prędkości punktu materialnego i czasu trwania jego ruchu"
                },
                {
                    text: "jest to wielkość niedefiniowalna"
                },
                {
                    text: "iloczyn prędkości punktu materialnego i czasu trwania jego ruchu"
                },
                {
                    text: "druga pochodna funkcji opisującej położenie punktu materialnego względem czasu",
                    isCorrect: true
                }
            ]
        }
    ],

    modernPhysics: [
        {
            questionID: 1,
            questionText: "Według prawa Gaussa (dla pola elektryczengo) strumień wektora natężenia pola elektrycznego przez dowolną powierzchnię zamkniętą S...",
            questionAnswers: [
                {
                    text: "jest zawsze zerowy, niezależnie od rozmieszczenia źródeł pola"
                },
                {
                    text: "zależy tylko od ładunków zawartych w obszarze ograniczonym powierzchnią S",
                    isCorrect: true
                },
                {
                    text: "zależy tylko od ładunków zawartych w obszarze na zewnątrz powierzchni S"
                },
                {
                    text: "zależy zarówno od ładunków zawartych wewnątrz jak i na zewnątrz powierzchni S"
                }
            ]
        },
        {
            questionID: 2,
            questionText: "Energia potencjalna ładnuku q znajdującego się w odległości r od ładunku punktowego Q wynosi:",
            questionAnswers: [
                {
                    text: "kQq/r²"
                },
                {
                    text: "kQ/r²"
                },
                {
                    text: "kQq/r",
                    isCorrect: true
                },
                {
                    "text": "żadna z odpowiedzi nie jest prawidłowa"
                }
            ]
        },
        {
            questionID: 3,
            questionText: "Strumień jednorodnego pola elektrycznego o wartości E przez ustawioną prostopadle do linii pola prostokątną powierzchnię o polu S wynosi:",
            questionAnswers: [
                {
                    text: "0"
                },
                {
                    text: "ES",
                    isCorrect: true
                },
                {
                    text: "za mało danych"
                },
                {
                    text: "ES²"
                }
            ]
        },
        {
            questionID: 4,
            questionText: "Pracę siły pola elektrycznego przy przemieszczaniu ładunku q z punktu 1 do punktu 2 można obliczyć na podstawie wyrażenia:",
            questionAnswers: [
                {
                    text: "∫F*ds, gdzie F - siła elektrostatyczna [całka oznaczona od 1 do 2, F i s to wektory]"
                },
                {
                    text: "q(V₁ - V₂), gdzie V₁ i V₂ - potencjały w punktach 1 i 2"
                },
                {
                    text: "q∫E*ds, gdzie E - natężenie pola [całka oznaczona od 1 do 2, E i s to wektory]"
                },
                {
                    text: "Wszystkie powyższe odpowiedzi są poprawne",
                    isCorrect: true
                }
            ]
        },
        {
            questionID: 5,
            questionText: "Natężenie pola elektrycznego w próżni wynosi E[wektor]. Jeśli w polu tym umieścimy dielektryk o względnej przenikalności elektrycznej εᵣ, to wektor indukcji pola elektrycznego w tym materiale wyniesie:",
            questionAnswers: [
                {
                    text: "D[wektor] = ε₀εᵣE[wektor]",
                    isCorrect: true
                },
                {
                    text: "D[wektor] = E[wektor]/(ε₀εᵣ)"
                },
                {
                    text: "D[wektor] = E[wektor]/εᵣ"
                },
                {
                    text: "D[wektor] = εᵣE[wektor]"
                }
            ]
        },
        {
            questionID: 6,
            questionText: "Energia potencjalna ładunku q poruszającego się polu ładunku punktu Q wynosi:",
            questionAnswers: [
                {
                    text: "Eₚ = kqQ/r²"
                },
                {
                    text: "Eₚ = kqQ/r",
                    isCorrect: true
                },
                {
                    text: "Eₚ = kQ/r"
                },
                {
                    text: "Eₚ = kQ/r²"
                }
            ]
        },
        {
            questionID: 7,
            questionText: "Według prawa Gaussa strumień wektora natężenia pola elektrycznego przez zamkniętą powierzchnię S jest równy (czyli ∮E[wektor]*dS[wektor] = ...)",
            questionAnswers: [
                {
                    text: "0"
                },
                {
                    text: "sumie ładunków w obszarze zamkniętym powierzchnią S"
                },
                {
                    text: "sumie ładunków w obszarze zamkniętym powierzchnią S podzielonej przez ε₀",
                    isCorrect: true
                },
                {
                    text: "żadna z odpowiedzi nie jest prawidłowa"
                }
            ]
        },
        {
            questionID: 8,
            questionText: "W pewnym punkcie umieszczony jest ładunek dodatni o wartości 2C. W odległości 0,4 m od tego ładunku umieszczony jest ładunek ujemny -2C. Ładunki te tworzą dipol. Jaka jest wartość elektrycznego momentu dipolowego tego dipola?",
            questionAnswers: [
                {
                    text: "1,6 Cm"
                },
                {
                    text: "0,8 Cm",
                    isCorrect: true
                },
                {
                    text: "0,4 Cm"
                },
                {
                    text: "żadna z odpowiedzi nie jest prawidłowa"
                }
            ]
        },
        {
            questionID: 9,
            questionText: "Jeśli dipol znajduje się w jednorodnym polu elektrycznym, działają na niego siły które...",
            questionAnswers: [
                {
                    text: "dążą do ustawienia wektora momentu dipolowego prostopadle do linii pola"
                },
                {
                    text: "dążą do ustawienia wektora momentu dipolowego tak, aby jego zwrot był równoległy do wektora natężenia pola elektrycznego",
                    isCorrect: true
                },
                {
                    text: "nie zmienią ani położenia ani ustawienia dipola, bo siła wypadkowa będzie zerowa"
                },
                {
                    text: "będą przesuwać dipol wzdłuż linii pola"
                }
            ]
        },
        {
            questionID: 10,
            questionText: "Siły działające na dipol elektryczny umieszczony w jednorodnym polu elektrycznym mogą...",
            questionAnswers: [
                {
                    text: "tylko obracać dipol, bez przesuwania jego środka ciężkości"
                },
                {
                    text: "tylko przesuwać dipol (jego środek ciężkości), bez obracania"
                },
                {
                    text: "mogą zarówno obracać jak i przesuwać dipol",
                    isCorrect: true
                },
                {
                    text: "nie mogą ani obracać ani przesuwać dipola, bo siła wypadkowa będzie równa zeru"
                }
            ]
        },
        {
            questionID: 11,
            questionText: "Jak zależy moduł wektora natężenia pola elektrycznego, wytwarzanego przez nieskończoną płaszczyznę naładowaną ładunkiem o gęstości σ, od odległości od tej płaszczyzny:",
            questionAnswers: [
                {
                    text: "jest proporcjonalny do odległości"
                },
                {
                    text: "jest odwrotnie proporcjonalny do odległości"
                },
                {
                    text: "nie zależy od odległości, jest stały i wynosi σ/(2ε₀)",
                    isCorrect: true
                },
                {
                    text: "nie zależy od odległości, jest równy 0"
                }
            ]
        },
        {
            questionID: 12,
            questionText: "Gęstość energii pola elektrycznego jest proporcjonalna do:",
            questionAnswers: [
                {
                    text: "kwadratu natężenia pola elektrycznego"
                },
                {
                    text: "kwadratu indukcji pola elektrycznego"
                },
                {
                    text: "iloczynu natężenia i indukcji pola elektrycznego"
                },
                {
                    text: "wszystkie odpowiedzi są poprawne",
                    isCorrect: true
                }
            ]
        },
        {
            questionID: 13,
            questionText: "Cyrkulacja wektora natężenia pola elektrycznego wzdłuż zamkniętego konturu L (czyli ∮E[wektor]*dl[wektor]) w przypadku braku zmiennego pola magnetycznego wynosi",
            questionAnswers: [
                {
                    text: "0",
                    isCorrect: true
                },
                {
                    text: "q"
                },
                {
                    text: "q/ε₀"
                },
                {
                    text: "ρ/ε₀"
                }
            ]
        },
        {
            questionID: 14,
            questionText: "Rotacja wektora natężenia pola elektrycznego (czyli ∇[wektor]xE[wektor]) w przypadku braku zmiennego pola magnetycznego wynosi:",
            questionAnswers: [
                {
                    text: "ρ/ε₀"
                },
                {
                    text: "q"
                },
                {
                    text: "q/ε₀"
                },
                {
                    text: "0",
                    isCorrect: true
                }
            ]
        },
        {
            questionID: 15,
            questionText: "Elektron porusza się z pewną prędkością v (skierowaną wzdłuż osi x) w polu magnetycznym o indukcji B (wektor skierowany wzdłuż osi y). Jak będzie skierowana siła Lorentza?",
            questionAnswers: [
                {
                    text: "w lewo (do -x)"
                },
                {
                    text: "w dół (do -y)"
                },
                {
                    text: "w głąb (do -z)",
                    isCorrect: true
                },
                {
                    text: "przed \"kartkę\" (do z)"
                }
            ]
        }
    ]
};

export default questionDataBase;
