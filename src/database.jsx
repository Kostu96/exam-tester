//NOTE: correct answer has to be first in aswers array

const questionDataBase = {
    swim: [
        {
            questionText: "1. Do usypiania mikrokontrolerów AVR służy instrukcja SLEEP.",
            questionAnswers: [
                "Fałsz",
                "Prawda"
            ]
        },
        {
            questionText: "2. Interfejs szeregowy, który zawsze wymaga wymiany danych, to SPI.",
            questionAnswers: [
                "Prawda",
                "Fałsz"
            ]
        },
        {
            questionText: "3. Do realizacji transmisji za pomocą interfejsu I2C wykorzystywane są linia danych, linia zegarowa oraz przewód masy (GND).",
            questionAnswers: [
                "Prawda",
                "Fałsz"
            ]
        },
        {
            questionText: "4. Obsługa pinów wej/wyj na poziomie sprzętowym w mikrokontrolerze AVR realizowana jest za pomocą 1 dedykowanego rejestru.",
            questionAnswers: [
                "Fałsz",
                "Prawda"
            ]
        },
        {
            questionText: "5. Do usypiania mikrokontrolerów PIC służy instrukcja SLEEP.",
            questionAnswers: [
                "Prawda",
                "Fałsz"
            ]
        },
        {
            questionText: "6. Źródłem sygnału RESET w mikrokontrolerze AVR może być układ kontroli zasilania.",
            questionAnswers: [
                "Prawda",
                "Fałsz"
            ]
        },
        {
            questionText: "7. W interfejsie 1-wire transmisja odbywa się za pomocą tzw. slotów (szczelin czasowych) , w których najważniejsze jest określenie rozmiaru i kierunku przesyłanych danych na etapie inicjalizacji.",
            questionAnswers: [
                "Fałsz",
                "Prawda"
            ]
        },
        {
            questionText: "8. Po wybudzeniu mikrokontrolera PIC ze stanu uśpienia wykonywanie programu zawsze rozpoczyna się od początku (dla dowolnego mikrokontrolera).",
            questionAnswers: [
                "Fałsz",
                "Prawda"
            ]
        },
        {
            questionText: "9.W interfejsie 1-wire transmisja odbywa się za pomocą tzw. slotów (szczelin czasowych) , w których najważniejsze jest zachowanie reżimu czasowego dla stanów logicznych na linii danych.",
            questionAnswers: [
                "Prawda",
                "Fałsz"
            ]
        },
        {
            questionText: "10. W architekturze von Neumana mikroprocesor nie może jednocześnie pobrać rozkazu i danej z pamięci.",
            questionAnswers: [
                "Prawda",
                "Fałsz"
            ]
        },
        {
            questionText: "11. Licznik mikrokontrolera AVR w trybie CTC zlicza od 0 do wartości zadanej. Po doliczeniu do niej liczy od 0.",
            questionAnswers: [
                "Prawda",
                "Fałsz"
            ]
        },
        {
            questionText: "12. Obsługa pinów wej/wyj na poziomie sprzętowym w mikrokontrolerze PIC realizowana jest za pomocą 1 dedykowanego rejestru.",
            questionAnswers: [
                "Fałsz",
                "Prawda"
            ]
        },
        {
            questionText: "13. W interfejsie SPI wykorzystywane są 2 linie danych, linia zegarowe oraz linie wyboru urządzenia SLAVE.",
            questionAnswers: [
                "Prawda",
                "Fałsz"
            ]
        },
        {
            questionText: "14. Obsługa pinów wej/wyj na poziomie sprzętowym w mikrokontrolerze PIC realizowana jest za pomocą 3 dedykowanych rejestrów.",
            questionAnswers: [
                "Prawda",
                "Fałsz"
            ]
        },
        {
            questionText: "15. Dla interfejsu USB transfer masowy danych ma charakter asynchroniczny. W tego typu transmisji powtórne przesłanie uszkodzonych pakietów danych jest zabronione.",
            questionAnswers: [
                "Fałsz",
                "Prawda"
            ]
        },
        {
            questionText: "16. Pamięć EEPROM jest rodzajem pamięci nieulotnej o ograniczonej liczbie zapisów i kasowań.",
            questionAnswers: [
                "Prawda",
                "Fałsz"
            ]
        },
        {
            questionText: "17. Mikrokontrolery PIC mają zestaw instrukcji CISC.",
            questionAnswers: [
                "Fałsz",
                "Prawda"
            ]
        },
        {
            questionText: "18. Obsługa pinów wej/wyj na poziomie sprzętowym w mikrokontrolerze AVR realizowana jest za pomocą 3 dedykowanych rejestrów.",
            questionAnswers: [
                "Prawda",
                "Fałsz"
            ]
        },
        {
            questionText: "19. W architekturze Harwardzkiej mikroprocesor nie może jednocześnie pobrać rozkazu i danej z pamięci.",
            questionAnswers: [
                "Fałsz",
                "Prawda"
            ]
        },
        {
            questionText: "20. Architektura von Neumana charakteryzuje się wspólną szyną danych i programu.",
            questionAnswers: [
                "Prawda",
                "Fałsz"
            ]
        },
        {
            questionText: "21. Licznik mikrokontrolera AVR w trybie CTC zlicza od 0 do wartości zadanej. Po doliczeniu do niej liczy w dół.",
            questionAnswers: [
                "Fałsz",
                "Prawda"
            ]
        },
        {
            questionText: "22. Źródłem sygnału RESET w mikrokontrolerze AVR może być zewnętrzny sygnał podany do pinu o nazwie RESET.",
            questionAnswers: [
                "Prawda",
                "Fałsz"
            ]
        },
        {
            questionText: "23. W architekturze Harwardzkiej program może się sam modyfikować.",
            questionAnswers: [
                "Fałsz",
                "Prawda"
            ]
        },
        {
            questionText: "24. W interfejsie I2C transmisja jest typu half-duplex.",
            questionAnswers: [
                "Prawda",
                "Fałsz"
            ]
        },
        {
            questionText: "25. Pamięć EEPROM jest rodzajem pamięci ulotnej o ograniczonej liczbie zapisów i kasowań.",
            questionAnswers: [
                "Fałsz",
                "Prawda"
            ]
        },
        {
            questionText: "26. W interfejsie SPI transmisja jest typu half-duplex.",
            questionAnswers: [
                "Fałsz",
                "Prawda"
            ]
        },
        {
            questionText: "27. Interfejs szeregowy synchroniczny nie wymagający zwiększenia ilości linii przy dołączeniu dodatkowych urządzeń, to SPI.",
            questionAnswers: [
                "Fałsz",
                "Prawda"
            ]
        },
        {
            questionText: "28. Interfejs USB ma możliwość zagwarantowania stałej prędkości przesyłu danych dla urządzeń tego wymagających.",
            questionAnswers: [
                "Prawda",
                "Fałsz"
            ]
        },
        {
            questionText: "29. W mikrokontrolerze PIC szerokość szyny danych i rozkazów nie musi być taka sama.",
            questionAnswers: [
                "Prawda",
                "Fałsz"
            ]
        },
        {
            questionText: "30. W architekturze von Neumana pamięć danych i programu może różnić się długością słowa.",
            questionAnswers: [
                "Fałsz",
                "Prawda"
            ]
        },
        {
            questionText: "31. Źródłem sygnału RESET w mikrokontrolerze AVR może być układ startu po włączeniu zasilania.",
            questionAnswers: [
                "Prawda",
                "Fałsz"
            ]
        },
        {
            questionText: "32. Interfejs szeregowy, który zawsze wymaga wymiany danych, to RS232.",
            questionAnswers: [
                "Fałsz",
                "Prawda"
            ]
        },
        {
            questionText: "33. W interfejsie USB mamy możliwość podłączenia do hosta do 7 urządzeń ze względu liczbę bitów (3) przewidzianych na ich adresowanie.",
            questionAnswers: [
                "Fałsz",
                "Prawda"
            ]
        },
        {
            questionText: "34. Mikrokontrolery AVR mają zestaw instrukcji CISC.",
            questionAnswers: [
                "Fałsz",
                "Prawda"
            ]
        },
        {
            questionText: "35. Źródłem sygnału RESET w mikrokontrolerze AVR może być sygnał generowany przez układ WATCHDOG.",
            questionAnswers: [
                "Prawda",
                "Fałsz"
            ]
        },
        {
            questionText: "36. Mikrokontroler bywa zwany komputerem wieloukładowym.",
            questionAnswers: [
                "Fałsz",
                "Prawda"
            ]
        },
        {
            questionText: "37. Po wybudzeniu mikrokontrolera AVR program jest kontynuowany od kolejnej instrukcji po instrukcji usypiania.",
            questionAnswers: [
                "Prawda",
                "Fałsz"
            ]
        },
        {
            questionText: "38. Dla 10-bitowego przetwornika analogowo-cyfrowego mikrokontrolera AVR, jako źródło napięcia referencyjnego wybrano napięcie zasilania (Vcc). Maksymalna wartość napięcia zmierzonego przez ten przetwornik wynosi 1024V.",
            questionAnswers: [
                "Fałsz",
                "Prawda"
            ]
        },
        {
            questionText: "39. Interfejs USB umożliwia automatycznego instalowania sterowników urządzeń dzięki identyfikatorom VID i PID.",
            questionAnswers: [
                "Prawda",
                "Fałsz"
            ]
        },
        {
            questionText: "40. Do realizacji najprostszej transmisji szeregowej za pomocą interfejsu RS232 wymagane są linia danych, linia zegarowa oraz przewód masy (GND).",
            questionAnswers: [
                "Fałsz",
                "Prawda"
            ]
        },
        {
            questionText: "41. W mikrokontrolerze AVR procedury (wektory) obsługi przerwań domyślnie znajdują się w pamięci FLASH począwszy od adresu 0xF000.",
            questionAnswers: [
                "Fałsz",
                "Prawda"
            ]
        },
        {
            questionText: "42. Architektura Harwardzka charakteryzuje się wspólną szyną danych i programu.",
            questionAnswers: [
                "Fałsz",
                "Prawda"
            ]
        },
        {
            questionText: "43. W interfejsie I2C transmisja jest typu peer-2-peer.",
            questionAnswers: [
                "Fałsz",
                "Prawda"
            ]
        },
        {
            questionText: "44. Mikrokontroler bywa zwany komputerem jednoukładowym.",
            questionAnswers: [
                "Prawda",
                "Fałsz"
            ]
        },
        {
            questionText: "45. Dla 10-bitowego przetwornika analogowo-cyfrowego mikrokontrolera AVR, jako źródło napięcia referencyjnego wybrano napięcie zasilania (Vcc). Maksymalna wartość napięcia zmierzonego przez ten przetwornik wynosi Vcc.",
            questionAnswers: [
                "Prawda",
                "Fałsz"
            ]
        },
        {
            questionText: "46. Interfejs SPI jest interfejsem szeregowym synchronicznym.",
            questionAnswers: [
                "Prawda",
                "Fałsz"
            ]
        },
        {
            questionText: "47. Interfejs I2C jest interfejsem szeregowym, asynchronicznym.",
            questionAnswers: [
                "Fałsz",
                "Prawda"
            ]
        },
        {
            questionText: "48. W architekturze Harwardzkiej pamięć danych i programu może różnić się długością słowa.",
            questionAnswers: [
                "Prawda",
                "Fałsz"
            ]
        },
        {
            questionText: "49. Po wybudzeniu mikrokontrolera PIC ze stanu uśpienia wykonywanie programu może rozpocząć się od początku, lub być kontynuowane, zależnie od danego mikrokontrolera.",
            questionAnswers: [
                "Prawda",
                "Fałsz"
            ]
        },
        {
            questionText: "50. W architekturze von Neumana program może się sam modyfikować.",
            questionAnswers: [
                "Prawda",
                "Fałsz"
            ]
        }
    ],
    
    cybersecurity: [
        {
            questionText: "1. Do ataków na integralność należy:",
            questionAnswers: [
                "manipulacja informacją",
                "odtajnienie informacji",
                "odmowa świadczenia usług",
                "podniesienie poziomu uprawnień"
            ]
        },
        {
            questionText: "2. Zagwarantowanie, że informacja nie zostanie zmodyfikowana w sposób nieuprawniony, a wszelkie modyfikacje zostaną wykryte to:",
            questionAnswers: [
                "integralność",
                "poufność",
                "niezaprzeczalność",
                "uwierzytelnianie"
            ]
        },
        {
            questionText: "3. Krytyczne rozszerzenia certyfikatu X.509:",
            questionAnswers: [
                "muszą zostać zinterpretowane i przetworzone przez aplikacją, aby dany certyfikat mógł zostać wykorzystany.",
                "są dodatkowo chronione dedykowanymi mechanizmami kryptograficznymi.",
                "stanowią zagrożenie, gdyż w wykorzystujących je mechanizmach wykryto luki zabezpieczeń.",
                "opisują techniczne parametry mechanizmów, które posłużyły utowrzeniu certyfikatu."
            ]
        },
        {
            questionText: "4. Który z poniższych protokołów pozwala na uzgodnienie wspólnego klucza pomiędzy komunikującymi się stronami:",
            questionAnswers: [
                "protokół Diffiego-Hellmana",
                "Digital Signature Algorithm",
                "Advanced Encryption Standard",
                "One-Time Pad"
            ]
        },
        {
            questionText: "5. W sieciach bezprzewodowych tryb \"WPA2 Enterprise\" oznacza, że certyfikaty są wykorzystywane w procesie:",
            questionAnswers: [
                "uwierzytelniania",
                "szyfrowania hasła współdzielonego użytkownika",
                "żadna z pozostałych odpowiedzi nie jest poprawna",
                "szyfrowania pakietów danych"
            ]
        },
        {
            questionText: "6. Podkradanie szyfrogramu (Ciphertext stealing) to:",
            questionAnswers: [
                "metoda pozwalająca na szyfrowanie wiadomości o długości mniejszej niż wielokrotność bloku algorytmu szyfrującego (padding)",
                "metoda realizacji kryptograficznej funkcji skrótu",
                "metoda ataku kryptograficznego z wykorzystaniem wybranego szyfrogramu",
                "metoda ataku kryptograficznego polegająca na wykradaniu szyfrogramu z pamięci operacyjnej atakowanego urządzenia"
            ]
        },
        {
            questionText: "7. Podatność SQLI (SQL Injection) należy do kategorii:",
            questionAnswers: [
                "błędów implementacji",
                "odmowy świadczenia usług",
                "podszywania",
                "żadnej z wymienionych"
            ]
        },
        //{
        //    questionText: " 8. Dostęp o charakterze zamkniętym ma następującą cechę:", TODO: multiple choice
        //    questionAnswers: [
        //        "wykorzystywany jest dla ruchu wychodzącego do sieci Internet"
        //        "jest bardziej restrykcyjny niż dostęp o charakterze otwartym", dobra
        //        "jest mniej restrykcyjny niż dostęp o charakterze otwartym"
        //        "wykorzystywany jest dla ruchu przychodzącego z sieci Internet", dobra
        //    ]
        //},
        {
            questionText: "9. W procesie żądania certyfikatu, klient:",
            questionAnswers: [
                "generuje klucz publiczny i prywatny, a następnie przesyła ten pierwszy urzędowu certyfikacji (CA) jako część żądania CSR.",
                "generuje klucz publiczny i prywatny, a następnie przesyła ten drugi urzędowu certyfikacji (CA) jako część żądania CSR.",
                "przed wysłaniem żądania CSR sprawdza, czy certyfikat CA jest samo-podpisany (self-signed) - jęsli nie, rezygnuje z próby uzyskania certyfikatu.",
                "przesyła urzędowi certyfikacji (CA) żądanie CSR, a CA generuje klucz prywatny i publiczny klienta."
            ]
        },
        {
            questionText: "10. W którym trybie pracy szyfrowania z wykorzystaniem algorytmów symetrycznyh zaobserwować mżna takie same bloki szyfrogramu dla takich samych bloków tekstu jawnego:",
            questionAnswers: [
                "ECB",
                "CFB",
                "CBC",
                "CTR"
            ]
        },
        {
            questionText: "11. Zaznacz zdanie prawdziwe dla systemu anonimizującego TOR (The Onion Router):",
            questionAnswers: [
                "wykorzystuje trzy wartstwy węzłów pośredniczących",
                "wykorzystuje dwie wartstwy węzłów pośredniczących",
                "dla podniesienia bezpieczeństwa dwukrotnie szyfruje dane",
                "szyfruje dane kluczami asymetrycznymi"
            ]
        },
        {
            questionText: "12. Rozwiązanie Pretty Good Privacy (PGP) wykorzystuje:",
            questionAnswers: [
                "model zaufania typu user-centric",
                "certyfikaty w formacie X.509.",
                "sieć serwerów SCEP.",
                "hierachiczny (strict hierachy) model zaufania"
            ]
        },
        {
            questionText: "13. Klasyfikacja zagrożeń ze względu na naturę podatności obejmuje kategorię:",
            questionAnswers: [
                "ataków wykorzystujących sposób implementacji",
                "ataków wewnątrz sieci lokalnej",
                "ataków rozproszonych",
                "ataków celowanych"
            ]
        },
        //{
        //    questionText: "14. Zaznacz, w których rozwiązaniach wykorzystywane są typowe certyfikaty X.509:", TODO: multiple choice
        //    questionAnswers: [
        //        "rozwiązanie SecureBoot"
        //        "podpisywanie sterowników w systemie Windows", dobra
        //        "uwierzytelnianie i autoryzacja protokołem Kerberos"
        //        "podpisywanie aplikacji na platformie Android", dobra
        //    ]
        //},
        {
            questionText: "15. Wersja 3 standardu X.509 różni się od wersji 2 wprowadzeniem:",
            questionAnswers: [
                "mechanizmu rozszerzeń (extensions) certyfikatu.",
                "nowych pól: Issuer Unique ID i Subject Unique ID.",
                "mozliwości użycia szyfrowania AES.",
                "wykorzystania czasu UTC w polach dotyczących czasu ważności certyfikatu."
            ]
        },
        {
            questionText: "16. Do ataków na autentyczność należy:",
            questionAnswers: [
                "podszywanie",
                "manipulacja informacją",
                "odmowa świadczenia usług",
                "odtajnienie informacji"
            ]
        },
        {
            questionText: "17. Silna odporność na kolizję kryptograficznej funkcji skrótu polega na:",
            questionAnswers: [
                "trudności w znalezieniu dwóch wiadomości, dla któych wynik kryptograficznej funkcji skrótu byłby taki sam",
                "trudności w znalezieniu wiadomości o zadanej wartości funkcji skrótu",
                "pożądanie dużej złożoności obliczeniowej kryptograficznej funkcji skrótu",
                "zmianie wartości funkcji skrótu przy modyfikacji wiadomości"
            ]
        },
        //{
        //    questionText: "18. W atakach DDoS tzw. agencji (boty) są wykorzystywane do:", TODO: multiple choice
        //    questionAnswers: [
        //        "odpatcia ataku poprzez zmianę adresu IP serwisu"
        //        "odnalezienia źródła ataku"
        //        "generowania strumienia ruchu", dobra
        //        "ukrycia tożsamości napastnika", dobra
        //    ]
        //}
    ],

    graphics: [
        {
            questionText: "Widzenie skotopowe zapewniają:",
            questionAnswers: [
                "pręciki",
                "czopki"
            ]
        },
        {
            questionText: "Widzenie fotopowe zapewniają:",
            questionAnswers: [
                "czopki",
                "pręciki"
            ]
        },
        {
            questionText: "Dwa krzyżujące się odcinki mogą mieć:",
            questionAnswers: [
                "dowolną liczbę pktów wspólnych (0, 1, 2...)",
                "dodatnią liczbę punktów wspólnych (1, 2, 3...)",
                "0 albo 1 pktów wspólnych"
            ]
        },
        {
            questionText: "Algorytm Bresenhama jest algorytmem:",
            questionAnswers: [
                "warunkowym",
                "parametrycznym",
                "strukturalnym",
                "rekurencyjnym"
            ]
        },
        {
            questionText: "Do modeli cieniowania nie należy:",
            questionAnswers: [
                "model Macha",
                "model Phonga",
                "model Gourauda"
            ]
        },
        {
            questionText: "W grafice wektorowej:",
            questionAnswers: [
                "obraz składa się z odcinków i tworzenie obrazu polega na rysowaniu poszczególnych odcinków",
                "obraz składa się z odcinków i wyznaczanie obrazu polega na wybieraniu koloru dla poszczególnego obiektu",
                "obraz składa się z pixeli i wyznaczanie obrazu polega na wybieraniu koloru dla poszczególnego pixela",
                "obraz składa się z pixeli i tworzenie obrazu polega na rysowaniu kolejnych pixeli"
            ]
        },
        {
            questionText: "W modelu CMYK składowymi są:",
            questionAnswers: [
                "kolory: cyjan, magenta i żółty.",
                "kolory: czerwony, zielony, niebieski.",
                "odcień oraz nasycenie.",
                "chrominancje U i V."
            ]
        },
        {
            questionText: "Co nazywamy szkieletem zbioru:",
            questionAnswers: [
                "zbiór pixeli otrzymany w wyniku cyklicznego odrzucania pixeli konturu nie będących pixelami powtarzalnymi",
                "zbiór pixeli złożony z pixeli powtarzalnych"
            ]
        },
        {
            questionText: "Który filtr cyfrowy rozmazuje obraz:",
            questionAnswers: [
                "filtr dolnoprzepustowy",
                "filtr górnoprzepustowy",
                "filtr medianowy",
                "filtr Laplace'a"
            ]
        },
        {
            questionText: "Który algorytm umożliwia rysowanie wygładzonego odcinka:",
            questionAnswers: [
                "antialiasing",
                "aliasing"
            ]
        },
        {
            questionText: "światło odbite składa się z trzech składowych. Jaka składowa tam nie występuje?",
            questionAnswers: [
                "składowa emisyjna",
                "składowa zwierciadlana",
                "składowa rozproszona"
            ]
        },
        {
            questionText: "Filtr wygładzający (zwłaszcza krawędzie) to:",
            questionAnswers: [
                "dolnoprzepustowy",
                "medianowy",
                "górnoprzepustowy",
                "La Place'a"
            ]
        },
        {
            questionText: "Teoria postrzegania trzema barwami to:",
            questionAnswers: [
                "Helmhotza-Younga",
                "teoria Phonga",
                "teoria Gourauda",
                "teoria Macha"
            ]
        },
        {
            questionText: "Algorytm poprzez spójność (sianie) to algorytm:",
            questionAnswers: [
                "wypełniania konturu",
                "znajdywania konturu",
                "ścieniania",
                "wygładzania"
            ]
        },
        {
            questionText: "CMYK powstał na bazie CMY poprzez dodanie koloru:",
            questionAnswers: [
                "czarnego",
                "czerwonego",
                "zielonego",
                "niebieskiego"
            ]
        },
        {
            questionText: "Zjawisko zębatości to:",
            questionAnswers: [
                "aliasing",
                "antyaliasing",
                "metameryzm"
            ]
        },
        {
            questionText: "Algorytm midpoint jest algorytmem:",
            questionAnswers: [
                "warunkowym",
                "strukturalnym",
                "parametrycznym"
            ]
        },
        {
            questionText: "Krzywa Beziera przechodzi w ogólności:",
            questionAnswers: [
                "przez dwa punkty kontrolne",
                "przez żadne punkty kontrolne",
                "przez wszystkie punkty kontrolne"
            ]
        },
        {
            questionText: "Co nie jest cechą fontu?",
            questionAnswers: [
                "format zapisu",
                "krój",
                "stopień",
                "odmiana"
            ]
        },
        {
            questionText: "Który z algorytmów stosuje metodę kompresji stratnej:",
            questionAnswers: [
                "falkowy",
                "LZW",
                "Huffmana",
                "Run Length Encoding (RLE)"
            ]
        },
        {
            questionText: "Jak nazywa się znak stanowiący połączenie dwóch liter?",
            questionAnswers: [
                "Ligatura",
                "Metamera",
                "Znak Helmholtza"
            ]
        },
        {
            questionText: "Co to metameryzm?",
            questionAnswers: [
                "zjawisko, w/g którego promieniowanie o różnym składzie widmowym, może dawać identyczne wrażenie barwy",
                "przyzwyczajanie się oka do określonego natężenia światła",
                "fakt, w/g którego promieniowanie o różnym składzie widmowym nie może dawać identycznego wrażenia barwy"
            ]
        },
        {
            questionText: "Model barw TekHVC:",
            questionAnswers: [
                "to model w którym odległości między są proporcjonalne do wrażeń barwnych",
                "został specjalnie do zastosowań w urządzeniach firmy Tektronix",
                "model, dzięki któremu zużycie tuszu w drukarkach jest najmniejsze"
            ]
        },
        {
            questionText: "Metody fraktalne należą do metod kompresji:",
            questionAnswers: [
                "stratnej",
                "bezstratnej"
            ]
        },
        {
            questionText: "W wyniku kwantowania obrazu mogą pojawić się niepożądane krawędzie. Przeciwdziała temu:",
            questionAnswers: [
                "dithering",
                "antyaliasing",
                "aliasing"
            ]
        },
        {
            questionText: "Krzywą dyskretną nazywamy:",
            questionAnswers: [
                "każdy zbiór spójny pikseli nie zawierający czwórki pikseli tworzących kwadrat",
                "drogą w której wszystkie piksele ciągu stanawiącego ją, są różne, i żaden z nich nie ma więcej niż dwóch sąsiadów",
                "w każdym przypadku zbiór będący jednocześnie swoim konturem",
                "droga w której pierwszy piksel ciągu stanowiącego drogę jest sąsiadem ostatniego piksela tego ciągu"
            ]
        },
        {
            questionText: "Czym różni się B-kontur od konturu:",
            questionAnswers: [
                "B-kontur musi mieć jednego sąsiada nienależącego do zbioru, kontur musi mieć jednego B-sąsiada nienależącego do zbioru",
                "B-kontur jest drogą zamkniętą, kontur niekoniecznie",
                "niczym - pojęć używa się zamiennie",
                "pojęcie konturu nie występuje w grafice"
            ]
        },
        {
            questionText: "Przykładem strukturalnej metody rysowania odcinka jest:",
            questionAnswers: [
                "Metzgera-Bronsa",
                "algorytm midpoint",
                "algorytm Bresenhama",
                "Jordana"
            ]
        },
        {
            questionText: "Który filtr cyfrowy redukuje szumy:",
            questionAnswers: [
                "filtr medianowy",
                "filtr dolnoprzepustowy",
                "filtr górnoprzepustowy",
                "filtr Laplace'a"
            ]
        },
        {
            questionText: "Algorytm rysowania łuków Honga jest algorytmem:",
            questionAnswers: [
                "parametrycznym",
                "warunkowym",
                "okantnym",
                "bezwarunkowym"
            ]
        },
        {
            questionText: "Punkt P przesłania odcinek l wtedy gdy:",
            questionAnswers: [
                "półprosta poziomej, wychodzącej z P w lewą stronę przecina się z l",
                "P leży na odcinku",
                "P leży na którymś z końcuów odcinku",
                "P jest duży i zasłania cały odcinek"
            ]
        },
        {
            questionText: "Przykładem konstruktywnej reprezentacji obiektów graficznych jest:",
            questionAnswers: [
                "przeskalowany o 2 sześcian jednostkowy",
                "woksel(voxel)",
                "wierzchołki A,B,C,D i z nich utworzone ściany ABCD lub CDBA"
            ]
        },
        {
            questionText: "Przesłanianie ścian jest relacją:",
            questionAnswers: [
                "żadną z wymienionych",
                "przechodnią",
                "symetryczną",
                "antysymetryczną"
            ]
        },
        {
            questionText: "Do algorytmow warunkowych rysujacych odcinki nie zaliczamy:",
            questionAnswers: [
                "Metzgera-Bronsa",
                "midpoint",
                "Bresenhama",
                "porownawczy Jordana"
            ]
        },
        {
            questionText: "Probkowanie powierzchni przy jej wygladzaniu może być:",
            questionAnswers: [
                "Wagowe i bezwagowe",
                "Względne i bezwzględne",
                "Dyskretne i rzeczywiste",
                "Żadna odpowiedzi nie jest poprawna"
            ]
        },
        {
            questionText: "Za pomocą ktorego algorytmu nie narysujesz elipsy:",
            questionAnswers: [
                "decyzyjnego Jordana",
                "Honga",
                "midpoint",
                "Wszystkie odpowiedzi są poprawne"
            ]
        },
        {
            questionText: "Konturem danego zbioru pikseli nazywamy:",
            questionAnswers: [
                "Zbiór pikseli należących do tego zbioru i mających co najmniej jednego b-sąsiada nie należącego do tego zbioru.",
                "Zbiór pikseli należących do tego zbioru i mających dokladnie jednego b-sąsiada nie należącego do tego zbioru.",
                "Zbiór pikseli należących do tego zbioru i mających co najmniej jednego n-sąsiada nie należącego do tego zbioru.",
                "Zbiór pikseli nienależących do tego zbioru i mających co najmniej jednego b-sąsiada należącego do tego zbioru"
            ]
        },
        {
            questionText: "Chcesz wyostrzyć obraz, w super programie od Daciuka użyjesz do tego:",
            questionAnswers: [
                "Laplasjana albo maski Sobela",
                "Filtru dolnoprzepustowego",
                "Laplasjana",
                "Maski Sobela"
            ]
        },
        {
            questionText: "Ludzkie oko jest w stanie przechowywać wrażenie wzrokowe w czasie",
            questionAnswers: [
                "0.1 s",
                "0.1 ms",
                "0.5 s",
                "100ns"
            ]
        },
        {
            questionText: "Do modeli teoretycznych kolorów należy",
            questionAnswers: [
                "TekHVC",
                "RGB",
                "CMYK",
                "YUV"
            ]
        },
        {
            questionText: "Mówiąc o HSV, które zdanie jest falszywe:",
            questionAnswers: [
                "Jest rozwinięciem modelu HLS",
                "Powstał przez transformacje modelu RGB",
                "Reprezentacją graficzną tego modelu jest odwrócony stożek o podstawie sześciokąta",
                "Na środku podstawy znajduje się kolor biały"
            ]
        },
        {
            questionText: "Rendering to:",
            questionAnswers: [
                "Proces generacji obrazu na podstawie modelu",
                "Proces transformacji obrazu na podstawie modelu",
                "Dodawanie do CMY skladowej BLACK",
                "Algorytm malarski"
            ]
        },
        {
            questionText: "Wskaz zdanie wybitnie nieprawdziwe:",
            questionAnswers: [
                "Bufor Z służy do zapisywania tektur.",
                "Bufor Z to jakiś tam obszar pamięci.",
                "Bufor Z pozwalaja wyeliminować z renderowania niewidoczne elementy krzywych.",
                "Wszystkie odpowiedzi są niepoprawne"
            ]
        },
        {
            questionText: "Co nie ma wpływu na wyznaczanie cieni",
            questionAnswers: [
                "Lustro przy którym siedzi Lena",
                "Punkt widzenia źródła światła",
                "Punkt widzenia kamery w Tomb Raiderze",
                "Punkt widzenia postaci w Quake'u"
            ]
        },
        {
            questionText: "Co nie jest przeksztalceniem morfologicznym obrazu:",
            questionAnswers: [
                "odszumienie",
                "erozja",
                "dylatacja",
                "erozja i odszumienie"
            ]
        },
        {
            questionText: "Metoda oswietlenia globalnego zależna od położenia obserwatora to:",
            questionAnswers: [
                "raytracing",
                "radiosity",
                "raindancing",
                "illuminacja"
            ]
        },
        {
            questionText: "Metoda oswietlenia globalnego niezależna od położenia obserwatora to:",
            questionAnswers: [
                "radiosity",
                "raytracing",
                "antialiasing",
                "vertex shader"
            ]
        },
        {
            questionText: "Radiosity to metoda oświetlenia (rodzaj oswietlenia, nazwa metody):",
            questionAnswers: [
                "globalnego, energetyczna",
                "globalnego, śledzenia promieni",
                "lokalnego, Gourauda",
                "lokalnego, Phonga"
            ]
        },
        {
            questionText: "Czcionką nie jest:",
            questionAnswers: [
                "Żadno z wymienionych",
                "Arial",
                "Verdana",
                "Times New Roman"
            ]
        },
        {
            questionText: "Antykwy nie są:",
            questionAnswers: [
                "Poprzeczne",
                "Ukryte",
                "Belkowe",
                "Klinowe"
            ]
        },
        {
            questionText: "Cyfry nautyczne to:",
            questionAnswers: [
                "Niejednolita linia pisma, różna wysokość",
                "Jednolita linia pisma, równa wysokość",
                "Jednolita linia pisma, różna wysokość",
                "Niejednolita linia pisma, równa wysokość"
            ]
        },
        {
            questionText: "Język polski nie wyksztalcił:",
            questionAnswers: [
                "Abrewiatur",
                "Ligatur"
            ]
        },
        {
            questionText: "Format fontów Type 1 opracowano w:",
            questionAnswers: [
                "Adobe",
                "Apple",
                "HP",
                "IBM"
            ]
        },
        {
            questionText: "Format fontów TrueType opracowano w:",
            questionAnswers: [
                "Apple",
                "Microsoft",
                "HP",
                "Adobe"
            ]
        },
        {
            questionText: "Format fontów OpenType opracowano w:",
            questionAnswers: [
                "Microsoft i Adobe",
                "Microsoft i HP",
                "Apple i Adobe",
                "Apple i HP"
            ]
        },
        {
            questionText: "Skladowymi liter w Type 1 są:",
            questionAnswers: [
                "Kubiczne krzywe Beziera",
                "Krzywe Beziera drugiego stopnia",
                "Krzywe Beziera kubiczne oraz drugiego stopnia",
                "Krzywe Beziera czwartego stopnia"
            ]
        },
        {
            questionText: "Składowymi liter w TrueType są:",
            questionAnswers: [
                "Krzywe Beziera paraboliczne i drugiego stopnia",
                "Krzywe Beziera drugiego stopnia",
                "Paraboliczne krzywe Beziera",
                "Kubiczne krzywe Beziera"
            ]
        },
        {
            questionText: "Który z Windowsów jako pierwszy w pełni obsługiwał format TrueType?",
            questionAnswers: [
                "95",
                "XP",
                "3.11",
                "98"
            ]
        },
        {
            questionText: "który symbol oznacza ułożenie w algorytmie Gilla bitow 0010?",
            questionAnswers: [
                "_ _ - -",
                "_ - - -",
                "_ _ _ -",
                "_ _ _ _"
            ]
        },
        {
            questionText: "Algorytm cienowania wielokątów wykorzystujący interpolacje wektorów normalnych to:",
            questionAnswers: [
                "Algorytm Phonga",
                "Algorytm Helmhotza-Younga",
                "Algorytm Gourauda",
                "śledzenie promieni"
            ]
        },
        {
            questionText: "Jakiemu fraktalowi odpowiada część wspólna dywanu Sierpińskiego i prostej poprowadzonej przez środek niego:",
            questionAnswers: [
                "zbiorowi Cantora",
                "zbiorowi Mandelbrota",
                "zbiorowi Julii",
                "kostce Mengera"
            ]
        },
        {
            questionText: "Który z shaderów został wprowadzony w DirectX 11:",
            questionAnswers: [
                "Domain shader",
                "Pixel shader",
                "Vertex shader",
                "Geometry shader"
            ]
        },
        {
            questionText: "Co nie jest wykonywane podczas postprocessingu?",
            questionAnswers: [
                "odbicia lustrzane",
                "desaturacja",
                "głębia ostrości",
                "rozmycie ruchu"
            ]
        },
        {
            questionText: "Model barw RGB jest:",
            questionAnswers: [
                "addytywny",
                "subtraktywny"
            ]
        },
        {
            questionText: "Który z poniższych to język programowania shaderów?",
            questionAnswers: [
                "HLSL",
                "SPL",
                "HSL",
                "HLSC"
            ]
        },
        {
            questionText: "Który z poniższych to język programowania shaderów?",
            questionAnswers: [
                "GLSL",
                "GSL",
                "SPL",
                "Perl"
            ]
        },
        {
            questionText: "Ile punktow kontrolnych ma krzywa beziera n-tego stopnia?",
            questionAnswers: [
                "n + 1",
                "n - 1",
                "n",
                "n + 2"
            ]
        },
        {
            questionText: "Który shader został dodany w DX10?",
            questionAnswers: [
                "Geometry Shader",
                "Hull Shader",
                "Pixel Shader",
                "Vertex Shader"
            ]
        },
        {
            questionText: "Kiedy wprowadzono teselację?",
            questionAnswers: [
                "DX11",
                "DX9",
                "DX10"
            ]
        },
        {
            questionText: "Cienowanie wielokątów wykorzystujące interpolacje wartosci obliczonych dla poszczególnych wierzchołków to:",
            questionAnswers: [
                "Algorytm Gourauda",
                "Metoda energetyczna",
                "Algorytm Phonga",
                "śledzenie promieni"
            ]
        },
        {
            questionText: "Co to jest glif (ang. glyph)?",
            questionAnswers: [
                "pisemna/graficzna reprezentacja znaku",
                "odstęp pomiędzy wierszami",
                "odstęp pomiędzy znakami",
                "połączenie dwóch znaków w jeden"
            ]
        },
        {
            questionText: "O czopkach można powiedzieć, że:",
            questionAnswers: [
                "działają w dobrym świetle i umożliwiają postrzeganie barw",
                "działają już w słabym świetle i umożliwiają rozróżnianie barw",
                "działają już w słabym świetle i nie umożliwiają rozróżniania barw",
                "działają w dobrym świetle i nie umożliwiają postrzegania barw"
            ]
        },
        {
            questionText: "Składowe YUV to:",
            questionAnswers: [
                "Luminancja i dwie chrominancje",
                "Kolory: czerwony, zielony, niebieski",
                "Kolory: zielononiebieski, fioletowy i żółty",
                "Odcień, nasycenie, jasność"
            ]
        },
        {
            questionText: "Jaki shader nie należy do pipeline'u renderującego DX11?",
            questionAnswers: [
                "Compute Shader",
                "Vertex Shader",
                "Domain Shader",
                "Pixel Shader"
            ]
        },
        {
            questionText: "Co oznacza skrót SIMD?",
            questionAnswers: [
                "Single Instruction Multiple Data",
                "Shader Information Matrix Data",
                "Structured Information Manipulation Data"
            ]
        },
        {
            questionText: "Co odpowiada za odbicia światła od matowych powierzchni?",
            questionAnswers: [
                "diffuse",
                "complex",
                "seismic",
                "retro"
            ]
        },
        {
            questionText: "Który z podanych algorytmów nie jest liniowy?",
            questionAnswers: [
                "medianowy",
                "laplasjan",
                "dolnoprzepustowy",
                "górnoprzepustowy"
            ]
        },
        {
            questionText: "Jaki shader odpowiada za cieniowanie pikseli w DirectX?",
            questionAnswers: [
                "Pixel Shader",
                "Fragment Shader",
                "Vertex Shader",
                "Geometry Shader"
            ]
        },
        {
            questionText: "Jaki shader odpowiada za cieniowanie pikseli w OpenGL?",
            questionAnswers: [
                "Fragment Shader",
                "Pixel Shader",
                "Vertex Shader",
                "Geometry Shader"
            ]
        },
        {
            questionText: "Jakie jest rozwinięcie skrótu VBS narzędzia służącego do przeprowadzania symulacji (np. pociągów)?",
            questionAnswers: [
                "Virtual Battlespace",
                "Virtual Basic Scripts",
                "Virtual Brutal Sociopath",
                "Vertex Basic Simulations"
            ]
        },
        {
            questionText: "Czym jest antialiasing?",
            questionAnswers: [
                "Metodą wygładzania obrazu",
                "Metodą usuwania szumów",
                "Algorytmem szukania konturu",
                "Algorytmem rysowania linii"
            ]
        },
        {
            questionText: "Które biblioteki graficzne są wysokopoziomowe?",
            questionAnswers: [
                "OpenGL i Direct3D",
                "Vulkan",
                "OpenGL",
                "Direct3D"
            ]
        },
        {
            questionText: "Na czym operuje shader teselacji?",
            questionAnswers: [
                "Na łatach (patches)",
                "Na pixelach",
                "Na trójkątach",
                "Na innych prymitywach"
            ]
        }
    ],

    modernPhysics: [
        {
            questionText: "Według prawa Gaussa (dla pola elektryczengo) strumień wektora natężenia pola elektrycznego przez dowolną powierzchnię zamkniętą S...",
            questionAnswers: [
                "zależy tylko od ładunków zawartych w obszarze ograniczonym powierzchnią S",
                "jest zawsze zerowy, niezależnie od rozmieszczenia źródeł pola",
                "zależy tylko od ładunków zawartych w obszarze na zewnątrz powierzchni S",
                "zależy zarówno od ładunków zawartych wewnątrz jak i na zewnątrz powierzchni S"
            ]
        },
        {
            questionText: "Energia potencjalna ładnuku q znajdującego się w odległości r od ładunku punktowego Q wynosi:",
            questionAnswers: [
                "kQq/r",
                "kQq/r²",
                "kQ/r²",
                "żadna z odpowiedzi nie jest prawidłowa"
            ]
        },
        {
            questionText: "Strumień jednorodnego pola elektrycznego o wartości E przez ustawioną prostopadle do linii pola prostokątną powierzchnię o polu S wynosi:",
            questionAnswers: [
                "ES",
                "0",
                "za mało danych",
                "ES²"
            ]
        },
        {
            questionText: "Pracę siły pola elektrycznego przy przemieszczaniu ładunku q z punktu 1 do punktu 2 można obliczyć na podstawie wyrażenia:",
            questionAnswers: [
                "Wszystkie odpowiedzi są poprawne",
                "∫F*ds, gdzie F - siła elektrostatyczna [całka oznaczona od 1 do 2, F i s to wektory]",
                "q(V₁ - V₂), gdzie V₁ i V₂ - potencjały w punktach 1 i 2",
                "q∫E*ds, gdzie E - natężenie pola [całka oznaczona od 1 do 2, E i s to wektory]"
            ]
        },
        {
            questionText: "Natężenie pola elektrycznego w próżni wynosi E[wektor]. Jeśli w polu tym umieścimy dielektryk o względnej przenikalności elektrycznej εᵣ, to wektor indukcji pola elektrycznego w tym materiale wyniesie:",
            questionAnswers: [
                "D[wektor] = ε₀εᵣE[wektor]",
                "D[wektor] = E[wektor]/(ε₀εᵣ)",
                "D[wektor] = E[wektor]/εᵣ",
                "D[wektor] = εᵣE[wektor]"
            ]
        },
        {
            questionText: "Energia potencjalna ładunku q poruszającego się polu ładunku punktu Q wynosi:",
            questionAnswers: [
                "Eₚ = kqQ/r",
                "Eₚ = kqQ/r²",
                "Eₚ = kQ/r",
                "Eₚ = kQ/r²"
            ]
        },
        {
            questionText: "Według prawa Gaussa strumień wektora natężenia pola elektrycznego przez zamkniętą powierzchnię S jest równy (czyli ∮E[wektor]*dS[wektor] = ...)",
            questionAnswers: [
                "sumie ładunków w obszarze zamkniętym powierzchnią S podzielonej przez ε₀",
                "0",
                "sumie ładunków w obszarze zamkniętym powierzchnią S",
                "żadna z odpowiedzi nie jest prawidłowa"
            ]
        },
        {
            questionText: "W pewnym punkcie umieszczony jest ładunek dodatni o wartości 2C. W odległości 0,4 m od tego ładunku umieszczony jest ładunek ujemny -2C. Ładunki te tworzą dipol. Jaka jest wartość elektrycznego momentu dipolowego tego dipola?",
            questionAnswers: [
                "0,8 Cm",
                "1,6 Cm",
                "0,4 Cm",
                "żadna z odpowiedzi nie jest prawidłowa"
            ]
        },
        {
            questionText: "Jeśli dipol znajduje się w jednorodnym polu elektrycznym, działają na niego siły które...",
            questionAnswers: [
                "dążą do ustawienia wektora momentu dipolowego tak, aby jego zwrot był równoległy do wektora natężenia pola elektrycznego",
                "dążą do ustawienia wektora momentu dipolowego prostopadle do linii pola",
                "nie zmienią ani położenia ani ustawienia dipola, bo siła wypadkowa będzie zerowa",
                "będą przesuwać dipol wzdłuż linii pola"
            ]
        },
        {
            questionText: "Siły działające na dipol elektryczny umieszczony w niejednorodnym polu elektrycznym mogą...",
            questionAnswers: [
                "mogą zarówno obracać jak i przesuwać dipol",
                "tylko obracać dipol, bez przesuwania jego środka ciężkości",
                "tylko przesuwać dipol (jego środek ciężkości), bez obracania",
                "nie mogą ani obracać ani przesuwać dipola, bo siła wypadkowa będzie równa zeru"
            ]
        },
        {
            questionText: "Jak zależy moduł wektora natężenia pola elektrycznego, wytwarzanego przez nieskończoną płaszczyznę naładowaną ładunkiem o gęstości σ, od odległości od tej płaszczyzny:",
            questionAnswers: [
                "nie zależy od odległości, jest stały i wynosi σ/(2ε₀)",
                "jest proporcjonalny do odległości",
                "jest odwrotnie proporcjonalny do odległości",
                "nie zależy od odległości, jest równy 0"
            ]
        },
        {
            questionText: "Gęstość energii pola elektrycznego jest proporcjonalna do:",
            questionAnswers: [
                "wszystkie odpowiedzi są poprawne",
                "kwadratu natężenia pola elektrycznego",
                "kwadratu indukcji pola elektrycznego",
                "iloczynu natężenia i indukcji pola elektrycznego"
            ]
        },
        {
            questionText: "Cyrkulacja wektora natężenia pola elektrycznego wzdłuż zamkniętego konturu L (czyli ∮E[wektor]*dl[wektor]) w przypadku braku zmiennego pola magnetycznego wynosi",
            questionAnswers: [
                "0",
                "q",
                "q/ε₀",
                "ρ/ε₀"
            ]
        },
        {
            questionText: "Rotacja wektora natężenia pola elektrycznego (czyli ∇[wektor]xE[wektor]) w przypadku braku zmiennego pola magnetycznego wynosi:",
            questionAnswers: [
                "0",
                "ρ/ε₀",
                "q",
                "q/ε₀"
            ]
        },
        {
            questionText: "Elektron porusza się z pewną prędkością v w polu magnetycznym o indukcji B (rysunek). Jak będzie skierowana siła Lorentza?",
            imageSrc: "/img/modern_physics/15.JPG",
            questionAnswers: [
                "w głąb (do -z)",
                "w lewo (do -x)",
                "w dół (do -y)",
                "przed \"kartkę\" (do z)"
            ]
        },
        {
            questionText: "Czy pole magnetyczne, działając na poruszający się ładunek, zmienia jego energię kinetyczną?",
            questionAnswers: [
                "nie, niezaleznie od kąta pomiędzy wektorami B i v",
                "tak, niezależnie od kąta pomiędzy wektorami B i v",
                "tak, ale tylko jeśli wektory B i v są równoległe",
                "tak, ale tylko jeśli wektory B i v są prostopadłe"
            ]
        },
        {
            questionText: "Zgodnie z prawem Biota-Savarta, pole magnetyczne wytwarzane przez odcinek przednika ds, przez który płynie prąd o natężeniu I (zwrot jest zgodny z kierunkiem prądu), w punkcie, którego połozenie względem odcinka opisuje wektor r, wynosi:",
            questionAnswers: [
                "dB[wektor] = (μ₀μᵣI)/(4π)*(ds[wektor] x r[wektor])/r³",
                "dB[wektor] = (μ₀μᵣI)/(4π)*(r[wektor] x ds[wektor])/r²",
                "dB[wektor] = (μ₀μᵣI)/(4π)*(r[wektor] x ds[wektor])/r³",
                "dB[wektor] = (μ₀μᵣI)/(4π)*(ds[wektor] x r[wektor])/r²"
            ]
        },
        {
            questionText: "Przez przewód s płynie prąd o natężeniu I. Jaki będzie kierunek i zwrot wektora indukcji pola magnetycznego pochodzącego od tego przewodnika w punkcie wskazywanym wektorem r?",
            imageSrc: "/img/modern_physics/18.JPG",
            questionAnswers: [
                "przed \"kartkę\" (do z)",
                "w lewo (do -x)",
                "w dół (do -y)",
                "w głąb (do -z)"
            ]
        },
        {
            questionText: "Które z poniższych stwierdzeń jest prawdą?",
            questionAnswers: [
                "linie pola magnetycznego są krzywymi zamkniętymi",
                "Istnieją pojedyncze ładunki magnetyczne (odpowiedniki ładunków elektrycznych)",
                "Linie pola magnetycznego mają swoje początki i konce",
                "linie pola magnetyczengo mogą być zarówno krzywymi zamkniętymi jak i otwartymi"
            ]
        },
        {
            questionText: "Zgodnie z prawem Gaussa dla magnetyzmu, dywergencja wektora indukcji pola magnetycznego, czyli ∇[wektor]*B[wektor], jest ...",
            questionAnswers: [
                "zawsze równa zeru",
                "zależna od położenia; w pobliżu biegunów magnetycznych jest niezerowa",
                "zależna od odległości od przewodników z prądem",
                "żadna z odpowiedzi nie jest prawidłowa"
            ]
        },
        {
            questionText: "Przez fragment przewodu o długości ds, umieszczony w polu o indukcji B, płynie prąd o natężeniu I. Siła działająca na ten przewód wynosi:",
            questionAnswers: [
                "Ids[wektor]xB[wektor]",
                "0",
                "Ids∇[wektor]*B[wektor]",
                "żadna z odpowiedzi nie jest prawidłowa"
            ]
        },
        {
            questionText: "Przez fragment przewodu o długości ds, umieszczony w polu o indukcji B, płynie prąd o natężeniu I. Siła działająca na ten przeówd jest skierowana:",
            imageSrc: "/img/modern_physics/22.JPG",
            questionAnswers: [
                "w głąb (do -z)",
                "przed \"kartkę\" (do z)",
                "w dół (do -y)",
                "w tym przypadku siła będzie wektorem zerowym"
            ]
        },
        {
            questionText: "W próżni mamy wybrany pewnien zamknięty kontur L, powierzchnia ograniczona tym konturem to S. Cyrkulacja wektora indukcji pola magnetycznego wzdłuż konturu L, czyli ∮B ⃗ ⋅​d ⃗ l wynosi:",
            questionAnswers: [
                "suma prądów przecinających powierzchnię S, z uwzględnieniem ich kierunków (znaków), przemnożona przez μ₀",
                "zero, niezależnie od prądów płynących przez powierzchnię S",
                "suma prądów przecinających powierzchnię S, niezależnie od ich kierunków, przemnożona przez μ₀",
                "żadna z odpowiedzi nie jest prawidłowa"
            ]
        },
        {
            questionText: "Magnes oddala się od metalowej obręczy wzdłuż jej osi (rysunek). W obręczy tej...",
            imageSrc: "/img/modern_physics/24.JPG",
            questionAnswers: [
                "popłynie prąd w kierunku zgodnym z ruchem wskazówek zegara (patrząc od strony magnesu)",
                "popłynie prąd w kierunku przeciwnym do ruchu wskazówek zegara",
                "nie będzie płynąć prąd",
                "za mało informacji, by stwierdzić możliwy efekt"
            ]
        },
        {
            questionText: "Zgodnie z regułą Lenza...",
            questionAnswers: [
                "prąd indukowany w przewodniku w wyniku zmian pola magnetycznego przeciwdziała zmianom tego pola",
                "linie pola magnetycznego w pobliżu przewodnika z prądem są okręgami",
                "linie pola magnetycznego w pobliżu przewodnika z prądem są prostymi",
                "prąd indukowany w przewodniku w wyniku zmian pola magnetycznego wzmacnia zmiany tego pola"
            ]
        },
        {
            questionText: "Określając zależność między współczynnikiem samoindukcji L solenoidu a koncentracją zwojów n można powiedzieć, że L jest proporcjonalne do",
            questionAnswers: [
                "n²",
                "n",
                "1/n",
                "1/n²"
            ]
        },
        {
            questionText: "Gęstość energii pola magnetycznego jest proporcjonalna do",
            questionAnswers: [
                "wszystkie z odpowiedzi są poprawne",
                "kwadratu natężenia pola magnetycznego",
                "kwadratu indukcji pola magnetycznego",
                "iloczynu natężenia i indukcji pola magnego"
            ]
        },
        {
            questionText: "Zgodnie z prawem Faradaya źródłem wirowego pola elektrycznego może być",
            questionAnswers: [
                "tylko zmienne pole magnetyczne",
                "tylko elektryczny ładunek punktowy lub układ ładunków punktowych",
                "zarówno zmienne pole magnetyczne jak i elektryczne ładunki punktowe",
                "żadna z odpowiedzi nie jest prawidłowa"
            ]
        },
        {
            questionText: "Astronauta twierdzi, że rakieta, którą leci, ma długość 100m (chodzi o długość mierzoną w kierunku ruchu). Jaką długość będzie miała ta rakieta dla obserwatora, od którego rakieta oddala się prędkością 0,8c?",
            questionAnswers: [
                "60m",
                "100m",
                "80m",
                "40m"
            ]
        },
        {
            questionText: "Astronauta leci rakietą z prędkością 0,6c względem obserwatora na Ziemi. Jakiemu przedziałowi czasu dla obserwatora na Ziemi odpowiada rok dla astronauty?",
            questionAnswers: [
                "1,25 roku",
                "1 rok",
                "1,6 roku",
                "0,6 roku"
            ]
        },
        {
            questionText: "Z rakiety oddalającej się od Ziemi z prędkością 0,8c wystrzelono do przodu pocisk z prędkością 0,625c względem rakiety. Jaka jest prędkość pocisku względem Ziemi?",
            questionAnswers: [
                "0,95c",
                "1c",
                "1,425c",
                "0,86c"
            ]
        },
        {
            questionText: "Mamy układ współrzędnych K (w którym mierzymy położenie x i czas t) oraz poruszający się względem niego wzdłuż osi x z prędkością v0 układ K' (w którym mierzymy położenie x' i czas t'). W chwili t = t' = 0 początki układów pokrywały się. Zgodnie z przekształceniami odwrotnymi Lorentza zapiszemy",
            questionAnswers: [
                "x' = (x - v0t)/sqrt(1 - v0^2/c^2)",
                "x' = (x - v0t)/sqrt(1 - v0/c)",
                "x' = (x + v0t)/sqrt(1 - v0/c)",
                "x' = (x + v0t)/sqrt(1 - v0^2/c^2)"
            ]
        },
        {
            questionText: "Mamy układ współrzędnych K (w którym mierzymy położenie x i czas t) oraz poruszający się względem niego wzdłuż osi x z prędkością v0 układ K' (w którym mierzymy położenie x' i czas t'). W chwili t = t' = 0 początki układów pokrywały się. Zgodnie z przekształceniami Lorentza zapiszemy",
            questionAnswers: [
                "t = (t' + x'*v0/c^2)/sqrt(1 - v0^2/c^2)",
                "t = (t' - x'*v0/c^2)/sqrt(1 - v0^2/c^2)",
                "t = (t' + x'*v0/c^2)/sqrt(1 - v0/c)",
                "t = (t' - x'*v0/c^2)/sqrt(1 - v0/c)"
            ]
        },
        {
            questionText: "Każda powierzchnia o temperaturze T wyższej niż 0K wypromieniowuje energię. Ilość energii wypromieniowywanej z jednostkowej powierzchni w jednostce czasu jest proporcjonalna do...",
            questionAnswers: [
                "T⁴",
                "T",
                "T²",
                "T³"
            ]
        },
        {
            questionText: "Długość fali przy której widmowa zdolność emisyjna ciała doskonale czarnego ma maksimum, ...",
            questionAnswers: [
                "jest odwrotnie proporcjonalna do temperatury",
                "nie zależy od temperatury",
                "rośnie liniowo wraz z temperaturą",
                "jest proporcjonalna do kwadratu temperatury"
            ]
        },
        {
            questionText: "Podczas obserwacji zjawiska fotoelektrycznego przyłożenie napięcia hamującego pozwala na",
            questionAnswers: [
                "ocenę maksymalnej energii kinetycznej uzyskiwanej przez elektrony",
                "ocenę energii fotonów będących przyczyną zjawiska fotoelektrycznego",
                "żadna z odpowiedzi (tych dwóch z normalną treścią) nie jest poprawna",
                "obie odpowiedzi (te dwie z normalną treścią) są poprawne"
            ]
        },
        {
            questionText: "Na materiał pada światło. Aby z materiału mógł wydostać się elektron (zjawisko fotoelektryczne) niezbędne jest...",
            questionAnswers: [
                "aby do powierzchni materiału dotarł foton, którego energia będzie większa lub równa pracy wyjścia",
                "odpowiednio duże natężenie światła",
                "aby do powierzchni materiału dotarło tyle fotonów, by ich łączna energia była większa od pracy wyjścia",
                "żadna z powyższych odpowiedzi nie jest prawidłowa"
            ]
        },
        {
            questionText: "Jak zależy maksymalna energia kinetyczna Ek od częstotliwości fali elektromagnetycznej padającej na materiał (zakładamy, że energia fotonów jest większa od pracy wyjścia)?",
            questionAnswers: [
                "Ek rośnie liniowo ze wzrostem częstotliwości fali",
                "Ek jest stała, nie zależy od częstotliwości fali",
                "Ek maleje liniowo ze wzrostem częstotliwości fali",
                "za mało danych, trzeba uwzględnić wpływ innych czynników"
            ]
        },
        {
            questionText: "Przesunięcie comptonowskie przy rozpraszaniu promieniowania X na elektronach zależy",
            questionAnswers: [
                "tylko od kąta rozproszenia",
                "tylko od kąta rozproszenia i długości fali promieniowania X",
                "tylko od długości fali promieniowania X",
                "tylko od długości fali promieniowania X i polaryzacji"
            ]
        },
        {
            questionText: "Aby  wyjaśnić zjawisko Comptona, należy",
            questionAnswers: [
                "założyć, że światło wykazuje naturę cząsteczkową i zastosować zasady zachowania energii i pędu",
                "założyć, że światło jest falą i dokonać bilansu energii w układzie",
                "współczesna fizyka nadal nie potrafi wyjaśnić zjawiska Comptona",
                "żadna z odpowiedzi nie jest prawidłowa"
            ]
        },
        {
            questionText: "Pierwszy postulat Bohra zakłada skwantowanie",
            questionAnswers: [
                "orbitalnego momentu pędu elektronu",
                "pędu elektronu",
                "energii elektronu",
                "promienia orbity elektronu"
            ]
        },
        {
            questionText: "Drugi postulat Bohra zakłada, że",
            questionAnswers: [
                "przejściu elektronu pomiędzy dwoma poziomami odpowiada emisja lub absorpcja fotonu o energii odpowiadającej różnicy energii między poziomami",
                "elektron posiada tzw. spin",
                "elektron ma skwantowany promień orbity",
                "elektron ma skwantowany orbitalny moment pędu"
            ]
        },
        {
            questionText: "Pierwszemu poziomowi energetycznemu w atomie wodoru odpowiada energia E₁. Energia n-tego poziomu wynosi:",
            questionAnswers: [
                "Rₙ = E₁/n²",
                "Rₙ = nE₁",
                "Rₙ = E₁/n",
                "Rₙ = n²*E₁"
            ]
        },
        {
            questionText: "Eksperyment Davissona i Germera polega na...",
            questionAnswers: [
                "obserwacji falowej natury elektronów (zgodność z warunkiem na konstruktywną interferencję)",
                "wytwarzaniu wirowego pola magnetycznego wokół przewodnika z prądem",
                "\"wygaszeniu\" światła przechodzącego przez układ dwóch polaryzatorów o wzajemnie prostopadłych kierunkach polaryzacji",
                "rozpraszaniu promieniowania rentgenowskiego na elektronach, co prowadzi zmiany długości fali promieniowania (zależnej od kąta rozproszenia)"
            ]
        },
        {
            questionText: "W precyzyjnie wykonanym eksperymencie badającym falową naturę materii wiązka elektronów pada prostopadle na płytę zawierającą dwie szczeliny. Obraz powstający na ekranie za płytą będzie zawierał:",
            questionAnswers: [
                "co najmniej kilka wyraźnych maksimów",
                "dokładnie jedno maksimum",
                "dokładnie dwa maksima",
                "jedno lub dwa maksima"
            ]
        },
        {
            questionText: "Ciało o masie 1 kg porusza się z prędkością 1 m/s. Jaka długość fali materii odpowiada temu ciału (wartość stałej Plancka: h =6,6*10^-34 Js)?",
            questionAnswers: [
                "6,6*10^-34 m",
                "3,3*10^-34 m",
                "6,6*10^-19 m",
                "3,3*10^-19 m"
            ]
        },
        {
            questionText: "Które stwierdzenie jest prawdziwe?",
            questionAnswers: [
                "Funkcja falowa może zależeć od czasu",
                "Funkcja falowa może być nieskończona",
                "Funkcja falowa może być nieciągła",
                "Funkcja falowa może być równa zeru w całej swojej dziedzinie (w całym obszarze)"
            ]
        },
        {
            questionText: "Zgodnie z zasadą odpowiedniości Bohra, gdy rozpatruje się np. energię cząstki,...",
            questionAnswers: [
                "Wyniki kwantowe uzyskane dla bardzo wysokich poziomów zgadzają się z klasycznymi",
                "Nie ma możliwości porównywania wyników uzyskanych mechaniką klasyczną i kwantową",
                "Wyniki kwantowe uzyskane dla najniższych poziomów zgadzają się z klasycznymi",
                "Wszystkie wyniki uzyskane mechaniką kwantową w pełni pokrywają się z wynikami klasycznymi"
            ]
        },
        {
            questionText: "Absorpcja wymuszona to",
            questionAnswers: [
                "Przejście atomu z niższego do wyższego stanu energetycznego związane z pochłonięciem fotonu o energii równej różnicy energii tych dwóch stanów",
                "Sytuacja, w której w ośrodku czynnym atomów w stanie wzbudzonym jest więcej niż w stanie podstawowym",
                "Przejście atomu z wyższego do niższego stanu energetycznego wywołane fotonem o energii równej różnicy energii tych dwóch stanów i związane z wyemitowaniem takiego samego fotonu",
                "Żadna z odpowiedzi nie jest prawidłowa"
            ]
        },
        {
            questionText: "Inwersja obsadzeń to",
            questionAnswers: [
                "sytuacja, w której w ośrodku czynnym atomów w stanie wzbudzonym jest więcej niż w stanie podstawowym",
                "Przejście atomu z niższego do wyższego stanu energetycznego związane z pochłonięciem fotonu o energii równej różnicy energii tych dwóch stanów",
                "Przejście atomu z wyższego do niższego stanu energetycznego wywołane fotonem o energii równej różnicy energii tych dwóch stanów i związane z wyemitowaniem takiego samego fotonu",
                "żadna z odpowiedzi nie jest prawidłowa"
            ]
        }
    ],

    multimediaAndInterfaces: [
        {
            questionText: "Multimedia to:",
            questionAnswers: [
                "wszystkie odpowiedzi są poprawne",
                "modelowanie tekstu na tekst",
                "rozpoznawanie obrazów",
                "generowanie obrazu z opisu (grafika)",
                "przetwarzanie obrazów"
            ]
        },
        {
            questionText: "Który czynnik utrudnia człowiekowi słyszenie przestrzenne:",
            questionAnswers: [
                "odbicie dźwięków",
                "efekt doplera",
                "para uszu",
                "tłumienie dźwięków docierających z tyłu"
            ]
        },
        {
            questionText: "Mechanizm animacji w VRML",
            questionAnswers: [
                "nie ma wpływu na parametry odtwarzanego dźwięku",
                "korzysta wyłącznie z jednego interpolatora dla danego obiektu",
                "nie pozwala na wielokrotne wykorzystanie timerów",
                "samodzielnie interpoluje właściwości animowanego obiektu we wszystkich klatkach pośrednich"
            ]
        },
        {
            questionText: "Spójność i używanie standardów nie oznacza, że:",
            questionAnswers: [
                "system dostarcza skrótów",
                "użytkownik może wykorzystać doświadczenie zdobyte przy używaniu innych programów",
                "poszczególne części interfejsu programu wyglądają i są obsługiwane w podobny sposób jak inne programy",
                "poszczególne części interfejsu wyglądają i są obsługiwane w podobny sposób"
            ]
        },
        {
            questionText: "Wskaż zdanie fałszywe:",
            questionAnswers: [
                "za widzenie koloru odpowiedzialne są pręciki",
                "za widzenie nocne odpowiedzialne są pręciki",
                "pręciki umożliwiają dobre wykrywanie krawędzi",
                "wzrok człowieka jest bardziej wrażliwy na jasność niż na kolor"
            ]
        },
        {
            questionText: "Histogram obrazu:",
            questionAnswers: [
                "pozwala na redukcję liczby barw występujących w obrazie",
                "pozwala na wykrywnanie krawędzi w obrazie",
                "pozwala na odszumianie obrazu",
                "pełny H(RGB) dla wszystystkich kanałów jest wykorzystywany w aparatach cyfrowych"
            ]
        },
        {
            questionText: "Prostota dialogu nie oznacza, że:",
            questionAnswers: [
                "elementy multimedialne są oszczędnie wykorzystywane w szczególności filmy",
                "brak jest zbędnych elementów na ekranie",
                "interfejs zawiera tylko te elemeny które są niezbędne",
                "uwaga użytkownika nie jest odciągana przez dodatkowe obrazki napisy itp."
            ]
        },
        {
            questionText: "Wskaż zdanie fałszywe: kompresja stratna ...",
            questionAnswers: [
                "zawsze obniża jakość sygnału",
                "może wykorzystywać informację o ograniczeniach percepcji człowieka",
                "może wykorzystywać właściwości sygnału",
                "może wykorzystywać kompresje bezstratną"
            ]
        },
        {
            questionText: "Efektem działania filtru uśredniającego o masce poziomej o wymiarze 3x1 dla wiersza obrazu o jasnościach pikseli 1 2 3 4 0 4 3 2 1 może być następujący wiersz:",
            questionAnswers: [
                "1 2 3 2 3 2 3 2 1",
                "1 2 3 2,33 2,67 2,33 3 2",
                "2 3 2 3 2 3 2",
                "2 2 2 2 2 2 2 2 2"
            ]
        },
        {
            questionText: "Zapobieganie błędom oznacza, że:",
            questionAnswers: [
                "zamiast dostarczac komunikat o błędzie po wyjściu poza dozwolony zakres czyni się niedostępnymi odpowiedni klawisz lub opcję w menu",
                "brak jest zbędnych elementów na ekranie",
                "interfejs jest prosty w obsłudze",
                "system dostarcza skrótów"
            ]
        },
        {
            questionText: "Widoczny stan interfejsu oznacza, że:",
            questionAnswers: [
                "użytkownik zna bieżący tryb interfejsu",
                "zawsze można się wycofać z błędnych działań",
                "komunikaty o błędach są dobrze dobrane",
                "brak jest zbędnych elementów na ekranie"
            ]
        },
        {
            questionText: "Oblicz rozmiar kolorowej bitmapy w formacie TrueColor RGB powstałej w wyniku skanowania w rozdzielczości 300dpi obrazu o wymiarach 1 na 5 cali:",
            questionAnswers: [
                "1 350 000",
                "1 800 000",
                "    4 500",
                "  450 000"
            ]
        },
        {
            questionText: "Używanie języka użytkownika oznacza, że:",
            questionAnswers: [
                "komunikaty o błędach sa dobrze opisane",
                "brak jest zbędnych elementów na ekranie",
                "interfejs jest prosty w obsłudze",
                "interfejs może używać żargonu z dziedziny z której pochodza zadania wykonywane przez uzytkownika"
            ]
        },
        {
            questionText: "Które z podanych miar oceny sa obiektywne:",
            questionAnswers: [
                "zachowanie niewerbalne",
                "postawa",
                "stosunek",
                "motywacja"
            ]
        },
        {
            questionText: "Jaka jest częstotliwość próbkowania muzyki jakości CD i z czego ona wynika?",
            questionAnswers: [
                "44100 Hz. Ponad 2 razy większa od górnej granicy słyszalności człowieka.",
                "40000 Hz. 2 razy większa od górnej granicy słyszalności człowieka.",
                "1,5 Mbit/s. Prędkość odtwarzania CD",
                "8 kHZ. Ograniczenia pasma w kanałach transmisji."
            ]
        },
        {
            questionText: "W pozyskiwaniu wiedzy stategia:",
            questionAnswers: [
                "określa krok po kroku jakie działania realizują dany cel",
                "to uporządkowanie czasowe działań",
                "odpowiada regułom  wyboru metod GOMS",
                "umożliwia określenie czasu nauki interfejsu"
            ]
        },
        {
            questionText: "W pozyskiwaniu wiedzy plan nie:",
            questionAnswers: [
                "umożliwia wyznaczenie najkrótszego czasu realizacji zadania",
                "określa krok po kroku, jakie działania realizują dany cel",
                "jest uporządkowaniem czasowym czynności",
                "poznaje się szukając w wywiadach i protokołach sformułowań typu 'teraz przystępuję do...'"
            ]
        },
        {
            questionText: "W wyniku wykonania algorytmu RLE(run length encoding) dla ciągu 1111222334 nie można uzyskać następującego kodu:",
            questionAnswers: [
                "11 11 11 11 10 10 10 01 01 00",
                "1(4) 2(3) 3(2) 4",
                "1(4) 2(3) 3(2) 4(1)",
                "1(4) 2(3) 3 3 4"
            ]
        },
        {
            questionText: "Efektem działania filtru wartości środkowej (medianowego) o masce poziomej w wymiarze 3 x 1 dla wiersza obrazu o jasnościach pixeli 1 2 3 4 0 4 3 2 1 może być następujący wiersz:",
            questionAnswers: [
                "1 2 3 3 4 3 3 2 1",
                "2 2 2 2 2 2 2 2 2",
                "2 3 2 3 2 3 2 3 2",
                "3 3 3 3 3 3 3 3 3"
            ]
        },
        {
            questionText: "W ocenie heurystycznej widoczny stan interfejsu nie oznacza, że:",
            questionAnswers: [
                "zawsze można się wycofać z błędnych działań",
                "użytkownik zawsze wie, w którym miejscu się znajduje",
                "użytkownik zna bieżące wartości parametrów interfejsu np. podkreślenie/wytłuszczenie w edytorze tekstu",
                "użytkownik zna bieżący tryb interfejsu"
            ]
        },
        {
            questionText: " W ocenie heurystycznej minimalizowanie obciążania pamięci oznacza, że:",
            questionAnswers: [
                "użytkownik nie musi pamiętać nazw poleceń",
                "system dostarcza skrótów",
                "interfejs jest prosty w obsłudze",
                "komunikaty o błędach są dobrze opisane"
            ]
        },
        {
            questionText: "Oblicz rozmiar kolorowej bitmapy (w formacie TrueColorRGB) powstałej w wyniku skanowania o rozdzielczości 200 dpi obrazu o wymiarach 3 na 5 cale(i).",
            questionAnswers: [
                "1 800 000",
                "2 400 000",
                "9 000",
                "600 000"
            ]
        },
        {
            questionText: "Wskaż zdanie fałszywe. Format MIDI:",
            questionAnswers: [
                "służy do zapisu muzyki, która zawsze brzmi identycznie niezależnie od komputera",
                "umożliwia dobrą kompresję muzyki instrumentalnej",
                "jest standardem komunikacji cfrowych urządzeń muzycznych",
                "można traktować jako odmianę zapisu nutowego"
            ]
        },
        {
            questionText: "Wskaż zdanie fałszywe:",
            questionAnswers: [
                "za widzenie koloru odpowiedzialne są pręciki",
                "pręciki umożliwiają dobre wykrywanie krawędzi",
                "za widzenie nocne odpowiedzialne są pręciki",
                "za widzenie koloru odpowiedzialne są czopki"
            ]
        },
        {
            questionText: "W ocenie heurystycznej dobre diagnozowanie błędów oznacza, że:",
            questionAnswers: [
                "komunikat o błędzie umożliwia usunięcie przyczyny błędu",
                "komunikaty o błędzie pisane są inną czcionką i są innej barwy niż pozostałe komunikaty",
                "komunikat o błędzie obejmuje zawartość rejestrów procesora",
                "komunikat o błędzie wyświetlany jest na środku ekranu"
            ]
        },
        {
            questionText: "Celami kompresji MPEG 1 i 2 nie są:",
            questionAnswers: [
                "skuteczna korekcja błędów",
                "szybkie przeszukiwanie w przód i wstecz",
                "małe opóźnienia kodowania i dekodowania",
                "elastyczność formatu obrazu"
            ]
        },
        {
            questionText: "W ocenie heurystycznej elastyczność i wydajność nie oznacza, że:",
            questionAnswers: [
                "interfejs jest prosty w obsłudze",
                "niektóre działania interfejsu użytkownik może wywołać w mniejszej liczbie kroków(kliknięć,uderzeń w klawiaturę)",
                "zaawansowanym użytkownikom umożliwia się szybszą obsługę interfejsu",
                "system dostarcza skrótów"
            ]
        },
        {
            questionText: "Wskaż zdanie fałszywe. Płyty DVD...",
            questionAnswers: [
                "są trwalsze od analogicznych ( tłoczonych lub nagrywanych ) płyt CD",
                "zawierają informację zapisaną w postaci zagłębień i płaskich powierzchni",
                "muszą być odczytywane laserem o krótszej długości fali niż płyty CD",
                "mogą występować w wersji jedno- lub dwuwarstwowej"
            ]
        },
        {
            questionText: "Wskaż zdanie fałszywe. Częstotliwość próbkowania DVDaudio...",
            questionAnswers: [
                "wynosi 48 lub 96 kHz",
                "jest stosowana aby zmniejszyć składowe harmoniczne",
                "jest stosowana aby uzyskać dźwięk o wierniejszym brzmieniu",
                "może nie wpływać na odbiór muzyki przez melomanów o gorszym słuchu (w porównaniu z Cdaudio)"
            ]
        },
        {
            questionText: "Jeżeli trzy barwy tworzą układ niezależnych liniowo barw to są to:",
            questionAnswers: [
                "barwy podstawowe",
                "barwy achromatyczne",
                "barwy proste"
            ]
        },
        {
            questionText: "Barwa prosta to nie barwa:",
            questionAnswers: [
                "achromatyczna",
                "monochromatyczna",
                "widmowa",
                "spektralna"
            ]
        },
        {
            questionText: "Addytywne mieszanie kolorów nie jest wykorzystywane przez:",
            questionAnswers: [
                "plotery",
                "monitory CRT",
                "monitory TV",
                "rzutniki"
            ]
        },
        {
            questionText: "Substraktywne uzyskiwanie kolorów jest wykorzystywane przez:",
            questionAnswers: [
                "drukarki",
                "monitory CRT",
                "rzutniki",
                "monitory TV"
            ]
        },
        {
            questionText: "Model CMY(K) jest wykorzystywany przez:",
            questionAnswers: [
                "maszyny offsetowe",
                "monitory CRT",
                "rzutniki",
                "skanery"
            ]
        },
        {
            questionText: "Modelu RGB nie wykorzystuje:",
            questionAnswers: [
                "skaner",
                "aparat fotograficzny",
                "monitor",
                "rzutnik"
            ]
        },
        {
            questionText: "Modelu CMY(K) nie wykorzystuje:",
            questionAnswers: [
                "rzutnik",
                "drukarka",
                "ploter"
            ]
        },
        {
            questionText: " W model CMY(K) kolor K jest potrzebny ze względu na:",
            questionAnswers: [
                "oszczędność",
                "problem w odzwierciedlaniu czarnego",
                "model nie mógłby istnieć bez niego",
            ]
        },
        {
            questionText: "Fala akustyczna(wskaż nieprawidłową odpowiedź):",
            questionAnswers: [
                "w cieczach może być falą poprzeczną",
                "w cieczach może być falą podłużną",
                "w gazach może być falą podłużną",
                "w ciałach stałych może być falą podłużną",
                "w ciałach stałych może być falą poprzeczną"
            ]
        },
        {
            questionText: "Co pasuje do szumu:",
            questionAnswers: [
                "dźwięk o ciągłym widmie",
                "nieskorelowane częstotliwości",
                "wieloton harmoniczny",
                "harmoniczne drganie o jednej częstotliwości"
            ]
        },
        {
            questionText: "Wybierz prawidłowe:",
            questionAnswers: [
                "pręcików jest więcej niż czopków",
                "czopków jest więcej niż pręcików",
                "liczba pręcików jest równa ilosci czopków"
            ]
        },
        {
            questionText: "Jaka liczba klatek na sekundę wystarcza, żeby uznać, że jest płynny?",
            questionAnswers: [
                "15fps",
                "100fps",
                "60fps",
                "30fps"
            ]
        },
        {
            questionText: "Która metoda nie dotyczy bezpośrednio kompresji stratnej?",
            questionAnswers: [
                "np. grupowanie pikseli o tej samej barwie",
                "redukcja rozdzielczości",
                "prunning",
                "wprowadzanie palety barw",
                "redukcja chrominancji"
            ]
        },
        {
            questionText: "Spójność interfejsu oznacza:",
            questionAnswers: [
                "zgodność z powszechnie przyjętymi zasadami",
                "ta sama czynność można wykonać na wiele rożnych sposobów w rożnych miejscach inaterfejsu",
                "interfejs programu jest jasny i szybki do opanowania",
                "minimalizowanie obciążenia pamięci użytkownika"
            ]
        },
        {
            questionText: "Granice slyszalnosci człowieka",
            questionAnswers: [
                "20Hz-20kHz",
                "15Hz-20kHz",
                "10Hz-20kHz",
                "20kHz-20Hz"
            ]
        },
        {
            questionText: "ITD to:",
            questionAnswers: [
                "różnica czasu w jakim dociera dźwięk",
                "inteligentny system rozpoznawania mowy dla niepełnosprawnych",
                "różnica intensywności dźwięku odbierana miedzy uszami",
                "czas w jakim dźwięk odbierany jest przez mózg "
            ]
        },
        {
            questionText: "IID to:",
            questionAnswers: [
                "różnica intensywności dźwięku odbierana miedzy uszami",
                "inteligentny system rozpoznawania mowy dla niepełnosprawnych",
                "różnica czasu w jakim dociera dźwięk",
                "czas w jakim dźwięk odbierany jest przez mózg"
            ]
        },
        {
            questionText: "HRTF to:",
            questionAnswers: [
                "efekt tlumienia/wzmacniania dźwięku przez malzowine uszna i głowę",
                "system sterowania komputerem falami mozgowymi",
                "różnica czasu w jakim dociera dzwiek",
                "stosunek ciśnienia akustycznego do natężenia dźwięku"
            ]
        },
        {
            questionText: "Formy pomocy jakie należy zapewnić w programie, to:",
            questionAnswers: [
                "podpowiedzi, jako wyświetlane dymki po najechaniu na przycisk",
                "obszerna dokumentacja dołączana w formie elektronicznej, bądź drukowanej",
                "samouczek",
                "oficjalne forum internetowe"
            ]
        },
        {
            questionText: "W metodzie heurystycznej oceny interfejsu:",
            questionAnswers: [
                "grupa specjalistów ocenia takie elementy jak zapobieganie błędów, prostota dialogu, szybkość uczenia się, widoczny stan systemu, używanie języka użytkownika",
                "użytkownik wykonuje pojedyncze, nieznane mu zadanie w programie",
                "użytkownik stara się opisać błędy, które wystąpiły w czasie użytkowania programu",
                "wszystkie odpowiedzi są błędne"
            ]
        },
        {
            questionText: "Który model barw nie jest ukierunkowany na sprzęt:",
            questionAnswers: [
                "HSV",
                "RGB",
                "CMYK",
                "RGBA"
            ]
        },
        {
            questionText: " Wada metody projektowania interfejsu WIMP jest:",
            questionAnswers: [
                "zawodzenie w przypadku użytkowników z wada wzroku",
                "występowanie tylko w wersji tekstowej",
                "zawodzenie w przypadku użytkowników z wada słuchu",
                "nie otwarta licencja należąca do amerykańskiej firmy produkującej okna"
            ]
        },
        {
            questionText: "Opisową metodą oceny interfejsu nie jest:",
            questionAnswers: [
                "GOMS",
                "UAN",
                "drzewo menu",
                "direct manipulation sketch"
            ]
        },
        {
            questionText: "Do czego nie wykorzystuje się histogramu?",
            questionAnswers: [
                "odszumianie obrazów",
                "poprawa kontrastu (spłaszczenie histogramu)",
                "progowanie obrazów",
                "porównywanie obrazów"
            ]
        },
        {
            questionText: "Jakie są wady metod roznicowych stratnej kompresji dźwięku?",
            questionAnswers: [
                "nawarstwianie się błędów",
                "nie nadążają za zmianami wartości bitowych",
                "występuje efekt echa",
                "wszystkie odpowiedzi są prawidłowe"
            ]
        },
        {
            questionText: "Domowy odtwarzacz wideo nie potrzebuje:",
            questionAnswers: [
                "kompresji w czasie rzeczywistym",
                "elastycznego formatu obrazu",
                "skutecznej korekcji dźwięków",
                "zsynchronizowanego odtwarzania obrazu i dźwięku"
            ]
        },
        {
            questionText: "Nowością w MPEG-2 w stosunku do poprzednika jest:",
            questionAnswers: [
                "obsługa trybu z przeplotem",
                "wykorzystywanie dwóch, oddzielnych wektorow ruchu dla makroblokow",
                "wszystkie powyższe odpowiedzi są prawidłowe",
                "obsługa rozdzielczości full hd"
            ]
        },
        {
            questionText: "Do artystycznego przetwarzania obrazu nie zaliczamy",
            questionAnswers: [
                "wszystkie odpowiedzi są błędne",
                "retuszu",
                "redukcji efektu czerwonych oczu",
                "zmiany parametrów obrazka"
            ]
        },
        {
            questionText: "Metodą zabezpieczenia obrazu nie jest",
            questionAnswers: [
                "zapisanie sygnatury autora na najbardziej znaczących bitach pikseli",
                "umieszczenie elementów o bardzo dużej rozdzielczości optycznej",
                "zapisanie sygnatury autora na najmniej znaczących bitach wybranych pikseli",
                "znak wodny"
            ]
        },
        {
            questionText: "Rozpoznawanie obrazów to:",
            questionAnswers: [
                "OMR",
                "MVC",
                "OCR",
                "ORM"
            ]
        },
        {
            questionText: "Rozpoznawanie tekstu to:",
            questionAnswers: [
                "OCR",
                "OMR",
                "MVC",
                "ORM"
            ]
        },
        {
            questionText: "Jakiej platformy nigdy nie obsługiwał Unreal Engine 3?",
            questionAnswers: [
                "Windows (directx 8)",
                "Linux",
                "Android",
                "Stage3D (Flash Player 11)"
            ]
        },
        {
            questionText: "SCUMM to:",
            questionAnswers: [
                "język skryptowy wspomagający programowanie gier typu point&click",
                "język skryptowy używany do obsługi zdarzeń w UDK",
                "heurystyczna ocena interfejsu gry komputerowej",
                "biblioteka wspomagające programowanie gier komputerowych przeznaczona na systemy unix"
            ]
        },
        {
            questionText: "Rolą interfejsu jest:",
            questionAnswers: [
                "żadna z odpowiedzi nie jest prawidlowa",
                "demonstracja najnowszych technologii i talentu graficznego autora",
                "zmuszanie użytkownika do wymiany sprzętu",
                "zmuszanie użytkownika do aktualizacji oprogramowania"
            ]
        },
        {
            questionText: "Za co odpowiadają w postrzeganiu preciki oczne?",
            questionAnswers: [
                "za postrzeganie jasności",
                "za postrzeganie barwy",
                "za stabilizację obrazu (złudzenia optyczne powodowane są przez błędne ich działanie)",
                "za postrzeganie jasności oraz za stabilizację obrazu"
            ]
        },
        {
            questionText: "Za co odpowiadają w postrzeganiu czopki oczne?",
            questionAnswers: [
                "za postrzeganie barwy",
                "za postrzeganie jasności",
                "za stabilizację obrazu (złudzenia optyczne powodowane są przez błędne ich działanie)",
                "za postrzeganie barwy oraz za stabilizację obrazu"
            ]
        },
        {
            questionText: "Ktore zdania są prawdziwe? W postrzeganiu czopki oczne odpowiadają za:",
            questionAnswers: [
                "postrzeganie barwy oraz widzenie dzienne",
                "postrzeganie barwy",
                "postrzeganie kształtów",
                "widzenie dzienne"
            ]
        },
        {
            questionText: "Ktore zdania są prawdziwe? W postrzeganiu preciki oczne odpowiadają za:",
            questionAnswers: [
                "wszystkie zdania są prawdziwe",
                "postrzeganie jasności",
                "postrzeganie kształtów",
                "widzenie nocne"
            ]
        },
        {
            questionText: "Mowiac o VRML prawda jest, że",
            questionAnswers: [
                "wspiera lightmapy",
                "jest standardem zintegrowanym z HTML",
                "służy tylko do zapisywania modelow 2D",
                "obecnie kontynuowany jest pod nazwa WebGL"
            ]
        },
        {
            questionText: "Czym nie są spowodowane złudzenia optyczne ",
            questionAnswers: [
                "wertykalnym rozpoznawaniem obrazów",
                "ograniczeniami w budowie oczu",
                "wyobraźnią",
                "przyzwyczajeniami"
            ]
        },
        {
            questionText: " OGRE i JMonkey są przykładami ",
            questionAnswers: [
                "silników gier",
                "interfejsami graficznymi systemów unix",
                "programami pozwalającymi ocenić interfejs",
                "przykładami języków modelowania rzeczywistości wirtualnej"
            ]
        },
        {
            questionText: "VRML to: ",
            questionAnswers: [
                "język modelowania rzeczywistości wirtualnej",
                "język postrzegania rzeczywistości wirtualnej",
                "standard opisujący bryły trójwymiarowe w formacie xml",
                "standard opisujący bryły trójwymiarowe w formacie yaml"
            ]
        },
        {
            questionText: "Do metod opisowych interfejsu możemy zaliczyć",
            questionAnswers: [
                "UAN",
                "GOMS",
                "TAG",
                "RTD"
            ]
        },
        {
            questionText: "W dobrze zaprojektowanym interfejsie:",
            questionAnswers: [
                "w stronach internetowych powinna być oddzielona forma od treści",
                "strona do wydruku nie powinna zawierać adresu strony, z której powstała",
                "użytkowanie niestandardowych czcionek jest dowzwolone",
                "na stronach www grafika powinna być wyswietlana w oryginalnych rozmiarach"
            ]
        },
        {
            questionText: "Twierdzenie Shannona mówi, że częstotliwość próbkowania powinna być ... którą chcemy potem odtworzyć.",
            questionAnswers: [
                "dwa razy wyższa od najwyższej częstotliwości w próbkowanym sygnale",
                "równa częstotliwości najwyższej w próbkowanym sygnale",
                "wyższa niż częstotliwość najwyższa w prókowanym sygnale"
            ]
        },
        {
            questionText: "Dynamika sygnału to:",
            questionAnswers: [
                "odstęp pomiędzy najniższym i najwyższym poziomem przenoszonego dźwięku",
                "prędkość zmian wysokości dźwięku",
                "wartość entropi poszczególnych częstotliwości w sygnale"
            ]
        },
        {
            questionText: "Jaki rozmiar ma minuta nagrania stereo o częstotliwości 44.1kHz (próbka = 16bit)",
            questionAnswers: [
                "10336 kB",
                "10584 kB",
                "1754 kB",
                "17640 kB"
            ]
        },
        {
            questionText: "Wskaż fałszywe zdanie:",
            questionAnswers: [
                "format mp3 stosuje kodowanie stratne (niska jakość) i bezstratne (wysoka jakość)",
                "format OGG pozwala zapisac wiecej niż 2 kanały",
                "format OGG ma lepsza jakość niż mp3 przy porownywalnej wielkości",
                "format MP3 pozwala na zapisanie dodatkowych informacji (ID Tags)"
            ]
        },
        {
            questionText: "Którego z założeń nie spełnia VRML:",
            questionAnswers: [
                "rozbudowa w oparciu o XML",
                "łączenie z innymi światami 3D",
                "niezależność od systemu operacyjnego",
                "generowanie w czasie rzeczywistym"
            ]
        }
    ],

    pr: [
        {
            questionText: "1. Lokalny brak żywotności:",
            questionAnswers: [
                "Nie można tego definitywnie stwierdzić przy obserwacji (testowaniu) aplikacji",
                "Ma miejsce, gdy kilka procesów wchodzi jednocześnie do sekcji krytycznej",
                "Polega na całkowitym zatrzymaniu pracy części aplikacji współbieżnej",
                "To sytuacja gdy jeden lub kilka procesów jest wykluczony, ale nie wiadomo który"
            ]
        },
        {
            questionText: "2. Lokalny brak żywotności:",
            questionAnswers: [
                "Jeżeli aplikacja jest niepoprawna, to może wystąpić lub nie",
                "Powoduje całkowite zatrzymanie całości (lub części) aplikacji",
                "Występuje wtedy gdy 2 lub więcej procesów wejdzie do sekcji krytycznej jednocześnie",
                "Polega na głodzeniu części procesów, może być to stwierdzone poprzez testowanie"
            ]
        },
        {
            questionText: "3. Globalny brak żywotności:",
            questionAnswers: [
                "Powoduje całkowite zatrzymanie całości (lub części) aplikacji",
                "Występuje wtedy gdy 2 lub więcej procesów wejdzie do sekcji krytycznej jednocześnie",
                "Polega na głodzeniu części procesów",
                "Jest mniej groźny w skutkach niz. lokalny brak żywotności"
            ]
        },
        {
            questionText: "3. Globalny brak żywotności (deadlock):",
            questionAnswers: [
                "Można to jednoznacznie stwierdzić przy obserwacji zachowania procesów",
                "Ma miejsce, gdy kilka procesów wchodzi jednocześnie do sekcji krytycznej",
                "Polega na zaobserwowaniu chwilowego zatrzymania pracy części procesów aplikacji współbieżnej",
                "To sytuacja, gdy kilka procesów jest czasowo wykluczonych"
            ]
        },
        {
            questionText: "4. Instrukcje atomowe w przetwarzaniu współbieżnym:",
            questionAnswers: [
                "Zakłada się ich atomowość na poziomie abstrakcji programowania",
                "Nie istnieją na żadnym poziomie abstrakcji",
                "Polega na współbieżnej realizacji wykonania procedur krytycznych",
                "Ich implementacja na poziomie systemowym (niższym) jest niepodzielna"
            ]
        },
        {
            questionText: "5. Instrukcje atomowe w przetwarzaniu współbieżnym:",
            questionAnswers: [
                "Żadna z odpowiedzi nie jest poprawna",
                "Nie istnieją na żadnym poziomie abstrakcji",
                "Polegają na współbieżnej realizacji wykonania procedur krytycznych",
                "Ich implementacja na poziomie systemowym (niższym) jest niepodzielna"
            ]
        },
        {
            questionText: "6. Program współbieżny jest poprawny:",
            questionAnswers: [
                "Żadna z odpowiedzi nie jest poprawna",
                "Gdy realizuje w sposób właściwy zadane operacje dla zadanych scenariuszy",
                "Posiada poprawne mechanizmy synchronizacji przy wejściu do sekcji krytycznej",
                "Wszystkie procesy działają zgodnie ze specyfikacjami"
            ]
        },
        {
            questionText: "7. Program współbieżny jest poprawny:",
            questionAnswers: [
                "Wszystkie odpowiedzi są błędne",
                "gdy realizuje w sposób właściwy zadane operacje dla zadanych scenariuszy", 
                "gdy posiada poprawne mechanizmy synchronizacji przy wejściu do sekcji krytycznej",
                "gdy wszystkie procesy działają zgodnie ze specyfikacjami"
            ]
        },
        {
            questionText: "8. Semafor binarny:",
            questionAnswers: [
                "Operacje podnoszenia i opuszczania są dla niego atomowe",
                "Nie można go podnosić, gdy jest podniesiony",
                "Przyjmuje wartości dodatnie oraz zero gdy jest opuszczony",
                "Nie można go wykorzystywać do kontroli dostępu wyjścia do sekcji krytycznej"
            ]
        },
        {
            questionText: "9. Semafor uogólniony",
            questionAnswers: [
                "Można go wykorzystać do kontroli dostępu wyjścia do sekcji krytycznej",
                "Operacje podnoszenia i opuszczania nie są dla niego atomowe",
                "Przyjmuje wartości dodatnie oraz 0, a gdy opuszczony to ujemne",
                "Na podstawie jego wartości aplikacja określa jego stan"
            ]
        },
        {
            questionText: "10. Monitory:",
            questionAnswers: [
                "Mogą posiadać stan (zmienne) oraz dostarczają współdzielonych procedur",
                "To obiekty aktywne mogą realizować operacje współbieżne",
                "Proces jeżeli rozpocznie wykonywanie procedury monitora to na pewno ją zakończy",
                "Dwa procesy mogą być w monitorze, jeden wykonuje procedurę \"wait\", drugi \"signal\""
            ]
        },
        {
            questionText: "11. Monitory:",
            questionAnswers: [
                "Wykonując procedurę wait proces zawsze zatrzymuje się",
                "To obiekty pasywne, mogą realizować procedury współbieżne",
                "Nie mogą posiadać stanu (zmiennych), dostarczają tylko współdzielonych procedur",
                "Proces jeżeli rozpocznie procedurę monitora to ją zakończy w określonym czasie"
            ]
        },
        {
            questionText: "12. Operacje na zmiennej typu condition:",
            questionAnswers: [
                "Żadna z odpowiedzi nie jest poprawna",
                "Implementują koncepcje semafora w procedurach monitorowych",
                "Po sprawdzeniu warunku condition proces jest wstrzymywany lub nie",
                "Są zmienne do operacji semaforowych w programowaniu współbieżnym"
            ]
        },
        {
            questionText: "13. Operacje na zmiennej typu condition:",
            questionAnswers: [
                "Wykonywane są w sposób wykluczający",
                "Implementują koncepcję współbieżności w wielowejściowych procedurach monitorowych",
                "Po sprawdzeniu warunku condition proces może zostać wstrzymany",
                "Są zamienne do operacji semaforowych w programowaniu współbieżnym"
            ]
        },
        {
            questionText: "14. Monitory w zestawieniu z semaforami ...",
            questionAnswers: [
                "nie występują w klasycznym (czystym) języku C",
                "są bardziej efektywne i powodują lepszy stopień faktycznej współbieżności",
                "są wygodne ze względu na systemową implementację sekcji krytycznej",
                "są dostarczane z poziomu systemowego"
            ]
        },
        {
            questionText: "15. Monitory w zestawieniu z semaforami ...",
            questionAnswers: [
                "żadna odpowiedź nie jest prawdziwa",
                "są efektywniejsze i powodują wyższy stopień faktycznej współbieżności",
                "występują w klasycznym (czystym) języku C",
                "są niepraktyczne ze względu na skomplikowaną implementację operacji wykluczających"
            ]
        },
        {
            questionText: "16. Wątek w odróżnieniu od procesu:",
            questionAnswers: [
                "Może powodować niespójność stanu dla zmiennych w programie",
                "Nie posiada własnego wskaźnika stosu",
                "Może wywoływać wszystkie procedury dostępne w programie",
                "Ma dostęp do wartości dostępnych zmiennych w programie"
            ]
        },
        {
            questionText: "17. Wątek w odróżnieniu od procesu:",
            questionAnswers: [
                "Żadna odpowiedź nie jest poprawna",
                "Nie posiada własnego wskaźnika stosu",
                "Może wywoływać wszystkie procedury dostępne w programie",
                "Ma dostęp do wartości dostępnych zmiennych w programie"
            ]
        },
        {
            questionText: "18. Procesy w środowisku LINDA synchronizują się:",
            questionAnswers: [
                "Poprzez przestrzeń krotek: proces wystawia krotkę, którą inny może ew. pobrać",
                "Poprzez przestrzeń krotek: bezpośrednio nadawca-adresat",
                "Nie mogą się synchronizować z natury stosowanych mechanizmów",
                "Procesy są całkowicie niezależne, mogą być synchronizowane przez proces zarządcy"
            ]
        },
        {
            questionText: "19. Globalny brak żywotności (deadlock):",
            questionAnswers: [
                "Jest nie do wykrycia przez procesy będące częścią aplikacji rozproszonej",         
                "Ma miejsce, gdy proces zatrzymuje się wewnątrz sekcji krytycznej",
                "Polega na zaobserwowaniu zatrzymania pracy części procesów w aplikacji rozproszonej",
                "To sytuacja, gdy procesy błędnie realizują swoje specyfikacje",
                "Nie wystąpi, o ile procesy poprawnie komunikują się pomiędzy sobą"
            ]
        },
        {
            questionText: "20. Lokalny brak żywotności:",
            questionAnswers: [
                "Może być zidentyfikowany jedynie na drodze rozważań teoretycznych",
                "Powoduje czasowe zatrzymanie określonej części aplikacji",
                "Występuje wtedy gdy 2 lub więcej procesów wejdzie do sekcji krytycznej jednocześnie",
                "Polega na głodzeniu części procesów, może być stwierdzony poprzez testowanie",
                "Jeżeli aplikacja jest niepoprawna, to wystąpi w skończonym czasie"
            ]
        },
        {
            questionText: "21. Instrukcje atomowe w przetwarzaniu współbieżnym:",
            questionAnswers: [
                "Żadna z odpowiedzi nie jest poprawna",
                "Zakłada się ich istnienie na każdym poziomie abstrakcji",
                "Polegają na jednoczesnej realizacji wykonania procedur krytycznych",
                "Ich realizacja na poziomie niższym (np. systemowym) jest niepodzielna",
                "Wszystkie wywołania procedur z poziomu niższego są atomowe"
            ]
        },
        {
            questionText: "22. Program rozproszony jest poprawny:",
            questionAnswers: [
                "Wszystkie odpowiedzi są niepoprawne",
                "gdy realizuje w sposób właściwy zadane operacje dla zadanych scenariuszy",
                "gdy posiada poprawne mechanizmy synchronizacji przy wejściu do sekcji krytycznej",
                "gdy wszystkie procesy działają zgodnie ze specyfikacjami",
                "gdy nie można w praktyce pokazać żadnego błędnego scenariusza wykonania"
            ]
        },
        {
            questionText: "23. Które zdanie dotyczy semafora uogólnionego i jest prawdziwe?",
            questionAnswers: [
                "Można go wykorzystywać do kontroli dostępu do sekcji krytycznej",
                "Operacje podnoszenia i opuszczania nie są dla niego atomowe",
                "W założeniu przyjmuje wartości dodatnie oraz zero gdy jest opuszczony",
                "Na podstawie jego wartości aplikacja określa jego stan i zatrzymuje się lub nie",
                "Wszystkie odpowiedzi są błędne"
            ]
        },
        {
            questionText: "24. Co jest prawdą jeżeli mówimy o \"monitorach\"?",
            questionAnswers: [
                "Są mniej efektywne wydajnościowo w implementacji w porównaniu z semaforami",
                "To obiekty pasywne, eksportują procedury, które mogą być wykonywane jednocześnie",
                "Nie posiadają stanu (zmiennych), dostarczają tylko współdzielonych procedur",
                "Proces jeżeli rozpocznie procedurę monitora to ją zakończy w określonym czasie",
                "Procedura wait wykonywana może być tylko po sprawdzeniu określonego warunku stanu"
            ]
        },
        {
            questionText: "25. Operacje na zmiennej typu condition w monitorze:",
            questionAnswers: [
                "Wykonywane są w sposób wykluczający",
                "Implementują koncepcję atomowości w procedurach monitorowych",
                "Po sprawdzeniu warunku condition proces może zostać wstrzymany",
                "Są zamienne do operacji semaforowych w programowaniu współbieżnym",
                "Wszystkie odpowiedzi są błędne"
            ]
        },
        {
            questionText: "26. Monitory w zestawieniu z semaforami:",
            questionAnswers: [
                "Mogą powodować wstrzymywanie procesów z powodów niezwiązanych ze specyfikacjami",
                "Są wygodniejsze w zastosowaniu i zapewniają wyższą efektywność aplikacji",
                "Występują w klasycznym (czystym) języku C",
                "Są niepraktyczne ze względu na skomplikowaną implementację operacji wykluczających",
                "Żadna z odpowiedzi nie jest prawdziwa"
            ]
        },
        {
            questionText: "27. Wątek w odróżnieniu od procesu:",
            questionAnswers: [
                "Żadna z odpowiedzi nie jest poprawna",
                "Nie posiada własnego stosu",
                "Jego wykonanie może powodować głodzenie innych wątków (procesów)",
                "Może wywoływać wszystkie procedury dostępne w programie",
                "Ma dostęp do wartości dostępnych zmiennych w programie"
            ]
        },
        /*{
            questionText: "28. Globalny brak żywotności (2 odpowiedzi poprawne):",
            questionAnswers: [
                "Powoduje całkowite zatrzymanie całości (lub części) aplikacji",
                "Jest łatwy do zaobserwowania, gdy zaistnieje",
                "Występuje wtedy gdy 2 lub więcej procesów wejdzie do sekcji krytycznej jednocześnie",
                "Polega na głodzeniu części procesów",
                "Jest mniej groźny w skutkach niż lokalny brak żywotności",
        ab]
                },
        {
            questionText: "29. Instrukcje atomowe w przetwarzaniu współbieżnym (2 odpowiedzi poprawne):
                "Nie istnieją na żadnym poziomie abstrakcji",
                "Polegają na współbieżnej realizacji wykonania procedur krytycznych",
                "Zakłada się ich atomowość na poziomie abstrakcji programowania",
                "Są realizowane na pewnym poziomie abstrakcji programowania",
                "Ich implementacja na poziomie systemowym (niższym) jest niepodzielna",
        cd]
                },*/
        {
            questionText: "30. Program współbieżny jest poprawny:",
            questionAnswers: [
                "Przeprowadzono (formalny) dowód poprawności (dla wszystkich scenariuszy)",
                "Gdy realizuje w sposób właściwy zadane operacje dla zadanych scenariuszy",
                "Posiada poprawne mechanizmy synchronizacji przy wejściu do sekcji krytycznej",
                "Wszystkie procesy działają zgodnie ze specyfikacjami",
                "Żadna z odpowiedzi nie jest poprawna"
            ]
        },
        /*{
            questionText: "31. Semafor binarny (2 odpowiedzi poprawne):,
            questionAnswers: [
                "Nie można go podnosić, gdy jest podniesiony",
                "Operacje podnoszenia i opuszczania są dla niego atomowe",
                "Nie pamięta ilości operacji podnoszenia",
                "Przyjmuje wartości dodatnie oraz zero gdy jest opuszczony",
                "Nie można go wykorzystywać do kontroli dostępu wyjścia do sekcji krytycznej",
        bc]
                },*/
        {
            questionText: "32. Problemy: czytelników - pisarzy oraz producentów - konsumentów:",
            questionAnswers: [
                "Mogą być zrealizowane poprawnie przy pomocy semaforów lub monitorów",
                "Są tym samym problemem, różnica jest jedynie w nazwie",
                "Nie mogą być zrealizowane poprawnie w środowisku LINDU",
                "Problemy te nie dotyczą zagadnień związanych z omawianą tematyką"
            ]
        },
        {
            questionText: "33. Jako przykład miary obciążenia procesora w stacji roboczej mogącej być podstawą do równoważenia tego obciążenia może być:",
            questionAnswers: [
                "Ważona liczba procesów w kolejce procesów aktywnych",
                "Systemowy miernik obciążenia podający obciążenie procesora w %",
                "Ważona liczba procesów oczekujących w kolejce do zasobów" ,
                "Ilość otwartych połączeń internetowych"
            ]
        }
    ],

    ham: [
        {
            questionText: "Czy opór elektryczny przewodu zależy od materiału z którego jest wykonany?",
            questionAnswers: [
                "zależy",
                "nie zależy",
                "zależy od izolacji przewodu"
            ]
        },
        {
            questionText: "Izolatorami nazywamy materiały które:",
            questionAnswers: [
                "nie przewodzą prądu elektrycznego",
                "przewodzą słabo",
                "przewodzą prąd przy wysokim napięciu"
            ]
        },
        {
            questionText: "Który przewód o tej samej długości i przekroju będzie miał największą oporność?",
            questionAnswers: [
                "wykonany z żelaza",
                "wykonany z aluminium",
                "wykonany z miedzi"
            ]
        },
        {
            questionText: "Który z materiałów ma własności półprzewodnikowe?",
            questionAnswers: [
                "german",
                "złoto",
                "platyna"
            ]
        },
        {
            questionText: "Żarówka 12 V pobiera z baterii 0,1 A. Jaką oporność ma żarówka?",
            questionAnswers: [
                "oporność 120 om",
                "oporność 12 om",
                "oporność 1,2 kom"
            ]
        },
        {
            questionText: "Żarówka ma moc 24 W i pobiera z akumulatora 2 A. Jakie jest napięcie akumulatora?",
            questionAnswers: [
                "napięcie wynosi 12 V",
                "napięcie wynosi 24 V",
                "napięcie wynosi 48 V"
            ]
        },
        {
            questionText: "Źródła chemiczne prądu dają prąd:",
            questionAnswers: [
                "stały",
                "zmienny",
                "pulsujący"
            ]
        },
        {
            questionText: "Akumulator ma pojemność 20 Ah. Jak długo będzie świecić z niego żarówka pobierająca 4 A?",
            questionAnswers: [
                "5 godzin",
                "4 godziny",
                "80 godzin"
            ]
        },
        {
            questionText: "Ile bateryjek 4,5 V potrzebujemy połączyć w szereg, by uzyskać baterię anodową o napięciu 90 V?",
            questionAnswers: [
                "20 szt.",
                "15 szt.",
                "10 szt."
            ]
        },
        {
            questionText: "Ładunki elektryczne w przestrzeni przyciągają się, jeżeli:",
            questionAnswers: [
                "są różnoimienne",
                "są jednoimienne",
                "są nieskończenie daleko"
            ]
        },
        {
            questionText: "Materiały ferromagnetyczne to materiały, które przewodzą pole magnetyczne:",
            questionAnswers: [
                "lepiej niż powietrze",
                "tak jak powietrze",
                "gorzej niż powietrze"
            ]
        },
        {
            questionText: "Jaki kierunek przyjmuje pole magnetyczne wokół przewodnika z prądem?",
            questionAnswers: [
                "jest prostopadłe do przewodu",
                "jest do niego równoległe",
                "jest ukośne do przewodu"
            ]
        },
        {
            questionText: "Jeżeli składowa elektryczna fali jest prostopadła do ziemi to fala ma polaryzację?",
            questionAnswers: [
                "pionową",
                "poziomą",
                "kołową"
            ]
        },
        {
            questionText: "Czy prędkość fali elektromagnetycznej zależy od ośrodka, w którym się rozchodzi?",
            questionAnswers: [
                "tak",
                "nie zależy",
                "jest zawsze jednakowa"
            ]
        },
        {
            questionText: "Długość fali wynosi 1500 metrów. Jaka jest częstotliwość tej fali?",
            questionAnswers: [
                "200 kHz",
                "2 MHz",
                "233 kHz"
            ]
        },
        {
            questionText: "Jaki zakres częstotliwości dźwięków wystarcza dla zrozumiałego nadawania mowy?",
            questionAnswers: [
                "od 300 Hz do 3,2 kHz",
                "od 100 Hz do 5 kHz",
                "od 20 Hz do 15 kHz"
            ]
        },
        {
            questionText: "Nadajnik UKF ma kwarc kanałowy 12 MHz. Ile razy musi być powielony by uzyskać 144 MHz?",
            questionAnswers: [
                "12 razy",
                "16 razy",
                "18 razy"
            ]
        },
        {
            questionText: "Modulacja telegraficzna CW polega na:",
            questionAnswers: [
                "przerywaniu fali nośnej",
                "zmianie jej częstotliwości",
                "zmianie jej amplitudy"
            ]
        },
        {
            questionText: "Kanał radiowy nadajnika telegraficznego CW jest:",
            questionAnswers: [
                "bardzo wąski",
                "bardzo szeroki",
                "średni"
            ]
        },
        {
            questionText: "Przy modulacji częstotliwości FM szerokość kanału radiowego dla nadajników amatorskich UKF wynosi:",
            questionAnswers: [
                "12,5 kHz",
                "50 kHz",
                "200 kHz"
            ]
        },
        {
            questionText: "Jaka jest szerokość kanału radiowego przy emisji SSB?",
            questionAnswers: [
                "3,5 kHz",
                "9 kHz",
                "1,5 kHz"
            ]
        },
        {
            questionText: "Amatorska telewizja z powolnym analizowaniem SSTV może być stosowana do łączności prowadzonych:",
            questionAnswers: [
                "na duże odległości na falach krótkich",
                "tylko na UKF",
                "tylko w internecie"
            ]
        },
        {
            questionText: "Która z podanych mocy PEP odpowiada napiciu maksymalnemu U max = 100 V, zmierzonemu oscyloskopem na wyjściu nadajnika, na obciążeniu 50 om?",
            questionAnswers: [
                "100 W",
                "200 W",
                "50 W"
            ]
        },
        {
            questionText: "Opornik warstwowy metalizowany jest wykonany jako:",
            questionAnswers: [
                "metalowa warstwa oporowa na wałku ceramicznym",
                "warstwa drutu oporowego nawiniętego na wałku ceramicznym",
                "warstwa oporowa węglowa na wałku ceramicznym"
            ]
        },
        {
            questionText: "Do cewki powietrznej 100 uH wkładamy rdzeń ferrytowy o względnej przenikalności u = 10. Ile wyniesie indukcyjność cewki?",
            questionAnswers: [
                "wzrośnie do 1000 uH",
                "nie zmieni się",
                "zmaleje do 10 uH"
            ]
        },
        {
            questionText: "Są dwie cewki powietrzne. Przy tej samej średnicy i ilości zwojów, L1 jest nawinięta drutem dwa razy grubszym niż L2. Która z nich ma większą dobroć Q?",
            questionAnswers: [
                "cewka L1",
                "cewka L2",
                "obie mają taką samą dobroć, bo mają tą samą średnicę"
            ]
        },
        {
            questionText: "Przekładnia transformatora wynosi 20 do 1. Strona pierwotna włączona jest na napicie sieci 240 V. Jakie napicie będzie po stronie wtórnej?",
            questionAnswers: [
                "12 V",
                "24 V",
                "20 V"
            ]
        },
        {
            questionText: "Diody prostownicze zasilające są stosowane do:",
            questionAnswers: [
                "do prostowania prądu w zasilaczach",
                "prostowania prądów wysokiej częstotliwości",
                "do stabilizacji napięć"
            ]
        },
        {
            questionText: "Diody Zenera to diody do:",
            questionAnswers: [
                "stabilizacji napięć",
                "świecące",
                "na bardzo wysokie częstotliwości"
            ]
        },
        {
            questionText: "Warikap to dioda:",
            questionAnswers: [
                "dioda pojemnościowa",
                "dioda mikrofalowa",
                "dioda stabilizacyjna"
            ]
        },
        {
            questionText: "Z jakich pierwiastków wykonywane są tranzystory i obwody scalone?",
            questionAnswers: [
                "z czystego krzemu i germanu z domieszkami boru i arsenu",
                "z absolutnie czystego krzemu i germanu",
                "z krzemu i tlenków krzemu"
            ]
        },
        {
            questionText: "Do jakiego typu układów scalonych należy scalony wzmacniacz akustyczny?",
            questionAnswers: [
                "do układów scalonych analogowych",
                "do układów scalonych cyfrowych",
                "do scalonych pamięci"
            ]
        },
        {
            questionText: "Kalkulator zawiera jeden układ scalony, wyświetlacz i klawiaturę. Do jakiej grupy zaliczymy układ scalony?",
            questionAnswers: [
                "wielkiej skali integracji",
                "małej skali integracji",
                "średniej skali integracji"
            ]
        },
        {
            questionText: "Lampa elektronowa pentoda posiada:",
            questionAnswers: [
                "pięć elektrod",
                "cztery elektrody",
                "trzy elektrody"
            ]
        },
        {
            questionText: "Cztery oporniki o wartościach 5 om zostały połączone szeregowo. Ile wynosi oporność zastępcza tych oporów?",
            questionAnswers: [
                "20 om",
                "10 om",
                "40 om"
            ]
        },
        {
            questionText: "Ile oporników o wartości 200 om należy połączyć równolegle by uzyska sztuczne obciążenie antenowe 50 om?",
            questionAnswers: [
                "4 szt.",
                "5 szt.",
                "2 szt."
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat prostownika. Jak nazywa się ten rodzaj prostownika?",
            questionAnswers: [
                "prostownik jednopołówkowy",
                "prostownik dwupołówkowy",
                "prostownik mostkowy dwupołówkowy"
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat prostownika. Jak nazywa się ten rodzaj prostownika?",
            questionAnswers: [
                "prostownik dwupołówkowy",
                "prostownik jednopołówkowy",
                "prostownik mostkowy dwupołówkowy"
            ]
        },
        {
            questionText: "Wzmacniacz wzmacnia sygnały w zakresie od 100Hz do 10 kHz. Wzmacniacz ten nazywamy wzmacniaczem:",
            questionAnswers: [
                "niskiej częstotliwości",
                "wzmacniaczem pośredniej częstotliwości",
                "wzmacniaczem selektywnym"
            ]
        },
        {
            questionText: "Kiedy wzmacniacz jest przesterowany?",
            questionAnswers: [
                "jak ma za duże napięcie wejściowe",
                "jak ma za duże napięcie zasilania",
                "jak pracuje w klasie C"
            ]
        },
        {
            questionText: "W jakiej klasie ma pracować wzmacniacz rezonansowy w.cz. do wzmacniania sygnału SSB?",
            questionAnswers: [
                "w klasie AB",
                "w klasie C",
                "impulsowo"
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat stabilizacji PLL w formie ponumerowanych, ale nieopisanych bloków. Blok 1 to:",
            questionAnswers: [
                "generator stabilizowany",
                "komparator",
                "dzielnik wzorca"
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat stabilizacji PLL w formie ponumerowanych, ale nieopisanych bloków. Blok 4 to:",
            questionAnswers: [
                "generator wzorca",
                "dzielnik wzorca",
                "komparator"
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat blokowy odbiornika bezpośredniego wzmocnienia z reakcją. Blok 3 to:",
            questionAnswers: [
                "wzmacniacz akustyczny",
                "detektor z reakcją",
                "wzmacniacz w.cz."
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat blokowy odbiornika superheterodynowego AM z pojedynczą przemianą. Blok 1 to:",
            questionAnswers: [
                "filtr wejściowy",
                "wzmacniacz akustyczny",
                "detektor AM"
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat blokowy odbiornika superheterodynowego AM z pojedynczą przemianą. Blok 5 to:",
            questionAnswers: [
                "wzmacniacz akustyczny",
                "heterodyna",
                "detektor AM"
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat blokowy odbiornika superheterodynowego AM, CW, SSB z podwójną przemianą częstotliwości. Blok 1 to:",
            questionAnswers: [
                "wzmacniacz w.cz.",
                "wzmacniacz akustyczny",
                "detektor AM CW SSB"
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat blokowy odbiornika superheterodynowego AM, CW, SSB z podwójną przemianą częstotliwości. Blok 9 to:",
            questionAnswers: [
                "wzmacniacz akustyczny",
                "wzmacniacz pośredniej cz.",
                "heterodyna"
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat blokowy odbiornika homodynowego CW i SSB, na jedno pasmo amatorskie. Blok 1 to:",
            questionAnswers: [
                "filtr wejściowy",
                "wzmacniacz akustyczny",
                "heterodyna"
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat blokowy odbiornika superheterodynowego FM na pasmo 144 MHz z podwójną przemianą częstotliwości, pracującego w kanałach fonicznych, stabilizowany kwarcami. Blok 2 to:",
            questionAnswers: [
                "I mieszacz",
                "wzmacniacz akustyczny",
                "wzmacniacz II p.cz."
            ]
        },
        {
            questionText: "Jaka powinna być stabilność heterodyny w odbiorniku komunikacyjnym ? Częstotliwość heterodyny na najwyższym zakresie po włączeniu odbiornika powinna zmieniać się nie więcej jak:",
            questionAnswers: [
                "o 200 Hz",
                "o 500 Hz",
                "o 1000 Hz"
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat blokowy nadajnika telegraficznego na jedno pasmo amatorskie. Blok 4 to:",
            questionAnswers: [
                "filtr wyjściowy",
                "wzmacniacz mocy (PA)",
                "separator"
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat blokowy nadajnika telegraficznego na kilka pasm amatorskich z powielaniem częstotliwości. Blok 1 to:",
            questionAnswers: [
                "oscylator (VFO)",
                "wzmacniacz mocy (PA)",
                "separator"
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat blokowy nadajnika SSB na dwa pasma amatorskie z wzbudnicą 9 MHz. Blok 1 to:",
            questionAnswers: [
                "wzbudnica SSB 9 MHz",
                "wzmacniacz mocy (PA)",
                "oscylator (VFO) 5 - 5.5 MHz"
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat blokowy nadajnika SSB na dwa pasma amatorskie z wzbudnic 9 MHz. Blok 2 to:",
            questionAnswers: [
                "mieszacz",
                "wzmacniacz sterujący",
                "filtr wyjściowy"
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat blokowy nadajnika UKF na pasmo 144MHz z powielaniem częstotliwości kanałowego generatora kwarcowego 8 MHz. Blok 1 to:",
            questionAnswers: [
                "modulator",
                "wzmacniacz mocy (PA)",
                "generator kwarcowy modulowany"
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat blokowy nadajnika UKF na pasmo 144MHz z powielaniem częstotliwości kanałowego generatora kwarcowego 8 MHz. Blok 7 to:",
            questionAnswers: [
                "filtr wyjściowy",
                "modulator",
                "I powielacz x 3"
            
            ]
        },
        {
            questionText: "Jaka jest horyzontalna charakterystyka promieniowania dipola półfalowego zawieszonego poziomo?",
            questionAnswers: [
                "ósemkowa",
                "dookólna",
                "kierunkowa w linii zawieszenia"
            ]
        },
        {
            questionText: "Jaka jest horyzontalna charakterystyka promieniowania pionowej anteny ćwierćfalowej?",
            questionAnswers: [
                "dookólna",
                "kierunkowa",
                "w kształcie koniczyny"
            ]
        },
        {
            questionText: "Na rysunku przedstawiona jest antena typu Yagi. Element 1 to:",
            questionAnswers: [
                "reflektor",
                "radiator",
                "I direktor"
            ]
        },
        {
            questionText: "Na rysunku przedstawiona jest antena typu Yagi. Element 2 to:",
            questionAnswers: [
                "radiator",
                "II direktor",
                "reflektor"
            ]
        },
        {
            questionText: "Na rysunku przedstawiona jest antena typu Yagi. Element 3 to:",
            questionAnswers: [
                "I direktor",
                "radiator",
                "II direktor"
            ]
        },
        {
            questionText: "Na rysunku przedstawiona jest antena typu Yagi. Element 4 to:",
            questionAnswers: [
                "II direktor",
                "I direktor",
                "radiator"
            ]
        },
        {
            questionText: "Dlaczego kable koncentryczne nadawcze wykonywane są z opornością falową 50 om?",
            questionAnswers: [
                "bo jest ona zbliżona do oporności dipola półfalowego",
                "bo najłatwiej takie wykonać",
                "bo wymagają do wykonania najmniejszej ilości materiału"
            ]
        },
        {
            questionText: "W jakim przypadku powstaje w linii przesyłowej w.cz. fala stojąca?",
            questionAnswers: [
                "kiedy oporność obciążenia nie jest zgodna z opornością falową kabla",
                "kiedy kabel nie jest ułożony prosto",
                "kiedy obok kabla koncentrycznego przechodzi inny kabel"
            ]
        },
        {
            questionText: "Jak nazywa się przyrząd do mierzenia fali stojącej w kablu koncentrycznym?",
            questionAnswers: [
                "reflektometr",
                "rezystomierz",
                "refraktometr"
            ]
        },
        {
            questionText: "Reflektometr wskazuje, że fala padająca jest równa fali odbitej. WFS równy jest nieskończoności. Co może być przyczyną takiego stanu?",
            questionAnswers: [
                "zwarcie lub przerwa w kablu",
                "niewielka zmiana oporności falowej anteny",
                "zamoczenie izolacji w kablu"
            ]
        },
        {
            questionText: "Połączenie niesymetrycznego kabla koncentrycznego 50 om do symetrycznej anteny o oporności falowej 50 om wymaga zastosowania:",
            questionAnswers: [
                "symetryzatora 1 do 1",
                "transformatora impedancji 1 do 4",
                "baluna o przekładni 1 do 2"
            ]
        },
        {
            questionText: "Czy stan jonosfery ma wpływ na rozchodzenie się fal krótkich?",
            questionAnswers: [
                "ma bardzo duży wpływ",
                "słaby",
                "tylko okresowo, w dzień"
            ]
        },
        {
            questionText: "Co jaki okres czasu następują bardzo dobre warunki propagacyjne i z czym to jest związane?",
            questionAnswers: [
                "regularnie co 11 lat przy maksymalnej aktywności słonecznej",
                "nieregularnie",
                "co kilka lat w związku z ociepleniem"
            ]
        },
        {
            questionText: "Co to jest zasięg horyzontalny na UKF?",
            questionAnswers: [
                "zasięg wyznaczony linią horyzontu przy prostoliniowym rozchodzeniu się fal",
                "zasięg obliczony z mocy promieniowanej e.i.r.p.",
                "zasięg teoretyczny nadajnika"
            ]
        },
        {
            questionText: "Dalekie rozchodzenie się fal UKF podczas inwersji temperaturowej w troposferze polega na:",
            questionAnswers: [
                "prowadzeniu fal przez dukty powstałe z warstw ciepłego i zimnego powietrza",
                "na wielokrotnym odbijaniu się fal od ciepłej ziemi",
                "na odbijaniu fal radiowych od ciepłego powietrza"
            ]
        },
        {
            questionText: "Skrót EME oznacza łączności na UKF:",
            questionAnswers: [
                "z wykorzystaniem odbicia sygnału od Księżyca",
                "wykorzystaniem do łączności siły elektromotorycznej SEM",
                "za pomocą elektromagnetycznej emisji EME na UKF"
            ]
        },
        {
            questionText: "Jak nazywa się przyrząd do pomiaru napięcia?",
            questionAnswers: [
                "woltomierz",
                "omomierz",
                "amperomierz"
            ]
        },
        {
            questionText: "Jakim przyrządem możemy zmierzyć wartość opornika?",
            questionAnswers: [
                "omomierzem",
                "woltomierzem",
                "amperomierzem"
            ]
        },
        {
            questionText: "Co to jest przyrząd uniwersalny wielozakresowy?",
            questionAnswers: [
                "przyrząd do pomiarów, napięć, prądów, oporności, w wielu zakresach",
                "przyrząd do pomiaru tylko jednego napięcia",
                "przyrząd do pomiaru wielu napięć"
            ]
        },
        {
            questionText: "Jak zmierzyć moc prądu stałego?",
            questionAnswers: [
                "zmierzyć prąd i napięcie w obwodzie i obliczyć",
                "zmierzyć oporność obwodu i obliczyć",
                "zmierzyć prąd i obliczyć"
            ]
        },
        {
            questionText: "Jak w warunkach amatorskich zmierzyć moc wyjściową nadajnika?",
            questionAnswers: [
                "poprzez pomiar napięcia skutecznego na oporze sztucznej anteny 50 om i obliczenie",
                "poprzez pomiar prądu i napięcia stałego doprowadzonego do stopnia mocy (PA)",
                "poprzez uzyskanie raportu od korespondenta"
            ]
        },
        {
            questionText: "Jakim przyrządem mierzymy dopasowanie obciążenia do kabla koncentrycznego?",
            questionAnswers: [
                "za pomocą reflektometru przelotowego",
                "żarówką włączoną w szereg na maksimum świecenia",
                "sprawdzeniem czy kabel się nie grzeje"
            ]
        },
        {
            questionText: "Jak zwalczamy zakłócenia rozprowadzane siecią energetyczną?",
            questionAnswers: [
                "przez stosowanie filtrów sieciowych i ekranowanie urządzeń, odpowiednią konstrukcję",
                "przez stosowanie grubych przewodów",
                "przez zasilanie bateryjne urządzeń"
            ]
        },
        {
            questionText: "Co to jest kompatybilność elektromagnetyczna (EMC)?",
            questionAnswers: [
                "taka konstrukcja sprzętu, by urządzenia nie wpływały na siebie i mogły pracować bez powodowania wzajemnych zakłóceń",
                "zamienność urządzeń",
                "wymogi co do podobnej obsługi urządzeń elektrycznych"
            ]
        },
        {
            questionText: "Jeżeli nadajnik amatorski powoduje zakłócenia, to jakie elementy sprawdzamy w pierwszej kolejności?",
            questionAnswers: [
                "liniowość stopnia mocy (PA) i filtr wyjściowy",
                "zawieszenie anteny",
                "odbiornik"
            ]
        },
        {
            questionText: "Dlaczego w zabudowie miejskiej stosujemy do anten kable koncentryczne?",
            questionAnswers: [
                "bo przy dopasowaniu nie promieniują energii i mogą przechodzić obok innych anten i urządzeń",
                "bo są ogólnie dostępne",
                "bo są trwałe"
            ]
        },
        {
            questionText: "Jeżeli nadajnik promieniuje energię w.cz. poprzez sieć zasilającą to stosujemy:",
            questionAnswers: [
                "uziemiamy obudowę i włączamy filtr sieciowy w zasilanie",
                "filtr w.cz. na wyjściu antenowym nadajnika",
                "uziemiamy obudowę"
            ]
        },
        {
            questionText: "Jaka instytucja zajmuje się lokalizowaniem zakłóceń radiowych i radioelektrycznych oraz badaniem sprzętu radionadawczego?",
            questionAnswers: [
                "Urząd Komunikacji Elektronicznej",
                "Ministerstwo Ochrony Środowiska",
                "Sztaby antykryzysowe"
            ]
        },
        {
            questionText: "Prąd elektryczny w przewodzie metalowym płynie dzięki obecności w nim:",
            questionAnswers: [
                "wolnych elektronów",
                "swobodnych jonów",
                "wolnych atomów"
            ]
        },
        {
            questionText: "Jak zmienia się opór przewodu miedzianego podczas wzrostu temperatury?",
            questionAnswers: [
                "opór rośnie",
                "opór maleje",
                "nie zmienia się"
            ]
        },
        {
            questionText: "Jaki ładunek ma elektron?",
            questionAnswers: [
                "ujemny",
                "dodatni",
                "nie posiada ładunku"
            ]
        },
        {
            questionText: "W obwodach elektrycznych przyjmujemy, że kierunek przepływu prądu odbywa się od:",
            questionAnswers: [
                "od wyższego potencjału (+) do niższego (-)",
                "w prawo zgodnie z wskazówkami zegara",
                "przeciwnie do wskazówek zegara"
            ]
        },
        {
            questionText: "W obwodzie prądu stałego przez opornik 1000 om płynie prąd 2 mA. Jaki jest spadek napięcia na oporze?",
            questionAnswers: [
                "spadek wynosi 2 V",
                "spadek wynosi 500 V",
                "spadek wynosi 2000 V"
            ]
        },
        {
            questionText: "Akumulator ma napięcie 6.5 V. Do akumulatora chcemy podłączyć żarówkę 3,5 V 0,3 A. Jaki opornik należy włączyć w szereg by ograniczyć prąd?",
            questionAnswers: [
                "opornik 10 om",
                "opornik 3.5 om",
                "opornik 100 om"
            ]
        },
        {
            questionText: "Opornik ma 200 om. Płynie przez niego prąd 300 mA. Jaka jest moc tracona w oporze?",
            questionAnswers: [
                "18 W",
                "1800 W",
                "1,8 W"
            ]
        },
        {
            questionText: "Jakie napięcie występuje na oporze 50 om przy dostarczeniu do niego mocy 200 W?",
            questionAnswers: [
                "100 V",
                "200 V",
                "50 V"
            ]
        },
        {
            questionText: "Mamy opornik 100 om dołączony do napięcia 3 V. Z jakiej grupy mocy wybierzemy opornik?",
            questionAnswers: [
                "grupa 0,125 W",
                "grupa 1 W",
                "grupa 0,5 W"
            ]
        },
        {
            questionText: "Jaka jest częstotliwość prądu zmiennego, którego okres wynosi 0,02 sek.?",
            questionAnswers: [
                "50 Hz",
                "100 Hz",
                "60 Hz"
            ]
        },
        {
            questionText: "Wartość amplitudy napięcia sinusoidalnego wynosi 200 V. Jaka jest wartość skuteczna napięcia?",
            questionAnswers: [
                "141,8 V",
                "200 V",
                "400 V"
            ]
        },
        {
            questionText: "Napięcie międzyszczytowe sinusoidalnego napięcia zmiennego wynosi 678 V. Ile wynosi wartość skuteczna tego napięcia?",
            questionAnswers: [
                "240 V",
                "340 V",
                "680 V"
            ]
        },
        {
            questionText: "Siła elektromotoryczna ogniwa wynosi 1,5 V. Oporność wewnętrzna ogniwa wynosi 0,1 oma. Z ogniwa pobieramy prąd 1 A. Jakie będzie napięcie na zaciskach ogniwa?",
            questionAnswers: [
                "1,4 V",
                "1.5 V",
                "1 V"
            ]
        },
        {
            questionText: "Pole elektryczne nazywamy jednorodnym jeżeli:",
            questionAnswers: [
                "linie sił są równoległe",
                "linie sił pola są prostopadłe",
                "linie układają się w koła"
            ]
        },
        {
            questionText: "Pole elektryczne może być ekranowane za pomocą:",
            questionAnswers: [
                "ekranów z blach metalowych",
                "ekranów z izolatorów",
                "ekranów z luster"
            ]
        },
        {
            questionText: "Do jakich materiałów magnetycznych należą magnesy stałe?",
            questionAnswers: [
                "materiałów magnetycznie twardych",
                "materiałów paramagnetycznych",
                "magnetycznie miękkich"
            ]
        },
        {
            questionText: "Dlaczego rdzenie transformatorów wykonywane są z blaszek a nie z litego materiału?",
            questionAnswers: [
                "ze względu na mniejsze straty przy prądach wirowych",
                "ze względu na lepsze chłodzenie",
                "ze względu na łatwiejsze wykonanie"
            ]
        },
        {
            questionText: "Ekranowanie pól magnetycznych wykonujemy z materiałów:",
            questionAnswers: [
                "z materiałów o wysokiej przenikalności magnetycznej",
                "izolacyjnych",
                "z materiałów o małym oporze właściwym"
            ]
        },
        {
            questionText: "Fala elektromagnetyczna ma dwie składowe. Zaznacz która kombinacja jest poprawna:",
            questionAnswers: [
                "składowa elektryczna i magnetyczna",
                "składowa elektryczna i składowa prędkości",
                "składowa magnetyczna i składowa prędkości"
            ]
        },
        {
            questionText: "Częstotliwość pracy nadajnika amatorskiego wynosi 3,5714 MHz. Jaka jest dokładna długość fali tego nadajnika?",
            questionAnswers: [
                "84 m",
                "80 m",
                "81,08 m"
            ]
        },
        {
            questionText: "Czy czysty sygnał sinusoidalny 1000 Hz, zawiera harmoniczne 2000 Hz i 3000 Hz?",
            questionAnswers: [
                "nie zawiera w ogóle harmonicznych",
                "zawiera tylko 2000 Hz",
                "zawiera obie harmoniczne"
            ]
        },
        {
            questionText: "Czy można prowadzić powielanie częstotliwości w stopniu mocy nadajnika?",
            questionAnswers: [
                "nie",
                "tak",
                "jest to bez znaczenia"
            ]
        },
        {
            questionText: "Przy modulacji amplitudy AM szerokość kanału radiowego zależy od:",
            questionAnswers: [
                "najwyższych częstotliwości modulujących",
                "najniższych częstotliwości modulujących",
                "amplitudy modulującego sygnału"
            ]
        },
        {
            questionText: "Modulacja cyfrowa FSK oznacza przesyłanie sygnału telegrafii maszynowej RTTY za pomocą:",
            questionAnswers: [
                "modulacji z przesuwem częstotliwości",
                "modulacji amplitudy",
                "modulacji fazy"
            ]
        },
        {
            questionText: "Moc wyjściową nadajnika FM podano w dBW i wynosi ona 13 dBW. Ile to jest w watach? (dla ułatwienia podajemy, że 10 dBW odpowiada 10 W",
            questionAnswers: [
                "20 W",
                "5 W",
                "130 W"
            ]
        },
        {
            questionText: "Napięcie na wejściu odbiornika na oporności 50 om wynosi 10 uV. Napięcie to wzrosło do 100 uV. O ile wzrosło napięcie wyrażone w dB?",
            questionAnswers: [
                "o 20 dB",
                "o 10 dB",
                "o 40 dB"
            ]
        },
        {
            questionText: "Zasilacz nadajnika dostarcza do stopnia końcowego nadajnika napięcie 500 V i prąd 200 mA. Jaka jest sprawność energetyczna stopnia końcowego w % jeżeli na wyjściu zmierzyliśmy moc PEP = 40 W?",
            questionAnswers: [
                "40 %",
                "50 %",
                "60 %"
            ]
        },
        {
            questionText: "Tolerancja wykonania opornika 1 kom wynosi 5 %. W jakich granicach zawiera się jego oporność?",
            questionAnswers: [
                "od 950 om do 1050 om",
                "od 0,9 do 1,1 kom",
                "od 0,98 do 1,02 kom"
            ]
        },
        {
            questionText: "Spadek napięcia na oporniku wynosi 100 V, przy prądzie 10 mA. Opornik jakiej mocy zastosujemy w tym miejscu?",
            questionAnswers: [
                "1 W",
                "0,125 W",
                "0,5 W"
            ]
        },
        {
            questionText: "Kondensator mikowy ma pojemność 6800 pF, i napięcie pracy 500V. Czy można go zastosować w miejsce kondensatora 6,8 nF o napięciu pracy 250 V?",
            questionAnswers: [
                "tak można",
                "nie można",
                "można, ale potrzebne są dwa takie kondensatory"
            ]
        },
        {
            questionText: "W obwodzie prądu zmiennego przy tej samej częstotliwości zmieniono kondensator 2200 pF na 22 nF. Ile razy zmniejszyła się zawada Xc?",
            questionAnswers: [
                "10 razy",
                "2 razy",
                "100 razy"
            ]
        },
        {
            questionText: "Prąd zmienny płynący przez kondensator C:",
            questionAnswers: [
                "wyprzedza napięcie na kondensatorze o 90 stopni",
                "jest w fazie z napięciem",
                "opóźnia się o 90 stopni wobec napięcia"
            ]
        },
        {
            questionText: "Tranzystor krzemowy ma wzmocnienie prądowe B = 100. Napięcie zasilania wynosi 5 V. Przez kolektor tego tranzystora płynie prąd 100 mA. Jaki jest prąd bazy tego tranzystora?",
            questionAnswers: [
                "1 mA",
                "5 mA",
                "20 mA"
            ]
        },
        {
            questionText: "Przy jakich napięciach anodowych pracują amatorskie lampowe wzmacniacze mocy?",
            questionAnswers: [
                "od 1,5 kV do 3 kV",
                "do 200 V",
                "do 50 V"
            ]
        },
        {
            questionText: "W jakiej klasie wzmacniacza pracuje lampowy stopień mocy nadajnika telegraficznego?",
            questionAnswers: [
                "w klasie C",
                "w klasie A",
                "w klasie AB"
            ]
        },
        {
            questionText: "Mamy dwa kondensatory o pojemności jeden 4,7 nF a drugi 300 pF. Jak należy je połączyć by uzyskać pojemność 5000 pF?",
            questionAnswers: [
                "równolegle",
                "szeregowo",
                "nie da się z nich złożyć 5000 pF"
            ]
        },
        {
            questionText: "W układzie były trzy kondensatory po 30 uF połączone szeregowo . Każdy z nich ma napięcie pracy 100V. Czy możemy je zastąpić jednym kondensatorem 10 uF i o jakim napięciu pracy?",
            questionAnswers: [
                "możemy, stosując kondensator na napięcie 300V",
                "nie możemy",
                "możemy stosując kondensator na napięcie 100 V"
            ]
        },
        {
            questionText: "Dwie indukcyjności nie sprzężone mają 30 uH i 60 uH. Ile wynosi indukcyjność zastępcza przy połączeniu szeregowym tych indukcyjności?",
            questionAnswers: [
                "90 uH",
                "20 uH",
                "45 uH"
            ]
        },
        {
            questionText: "Dwa oporniki 1 kom połączone są w szereg i dołączone do napięcia 200 V. Jaki jest spadek napięcia na każdym z tych oporników?",
            questionAnswers: [
                "100 V",
                "50 V",
                "200 V"
            ]
        },
        {
            questionText: "Obwód rezonansowy równoległy LC, w punkcie rezonansu przedstawia oporność:",
            questionAnswers: [
                "rzeczywistą omową",
                "reaktancję pojemnościową",
                "reaktancję indukcyjną"
            ]
        },
        {
            questionText: "Mamy obwód rezonansowy o częstotliwości 3,5 MHz. W jego skład wchodzi pojemność C = 400 pF. Jaką pojemność należy dołączyć zamiast C, by przestroić obwód na 7 MHz?",
            questionAnswers: [
                "100 pF",
                "200 pF",
                "57 pF"
            ]
        },
        {
            questionText: "Pasmo obwodu rezonansowego zależy od dobroci Q obwodu. Jeżeli Q = 100 to ile wynosi pasmo przy częstotliwości obwodu 14 MHz?",
            questionAnswers: [
                "280 kHz",
                "14 kHz",
                "140 kHz"
            ]
        },
        {
            questionText: "Jakie pasmo musi posiadać filtr pasmowy dla poprawnego odbioru stacji radiofonicznej AM?",
            questionAnswers: [
                "9 kHz",
                "20 kHz",
                "3.5 kHz"
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat prostownika. Jak nazywa się ten rodzaj prostownika?",
            questionAnswers: [
                "prostownik mostkowy dwupołówkowy",
                "prostownik dwupołówkowy",
                "prostownik jednopołówkowy"
            ]
        },
        {
            questionText: "Transformator zasilacza ma napięcie Usk = 300 V. Czy w prostowniku jednopołówkowym można użyć diody wytrzymującej wstecznie 400 V?",
            questionAnswers: [
                "nie",
                "tak",
                "tak, ale z opornikiem w szereg"
            ]
        },
        {
            questionText: "Napięcie na wyjściu zasilacza nieobciążonego z filtrem pojemnościowym, wynosi 25 V. Jakie jest napięcie Usk transformatora zasilającego diody?",
            questionAnswers: [
                "17,7 V",
                "25 V",
                "20 V"
            ]
        },
        {
            questionText: "Wzmacniacz posiada wzmocnienie napięciowe 10 razy. Wyraź to wzmocnienie w decybelach (dB)",
            questionAnswers: [
                "20 dB",
                "10 dB",
                "40 dB"
            ]
        },
        {
            questionText: "Wzmacniacz wysokiej częstotliwości obciążony obwodem rezonansowym jest:",
            questionAnswers: [
                "wzmacniaczem selektywnym",
                "wzmacniaczem szerokopasmowym",
                "wzmacniaczem akustycznym"
            ]
        },
        {
            questionText: "Czy w wzmacniaczu mocy pracującym idealnie liniowo, powstają harmoniczne?",
            questionAnswers: [
                "nie",
                "tak",
                "tak ale małe"
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat detektora diodowego. Jaką rolę spełnia w nim kondensator C1?",
            questionAnswers: [
                "jest kondensatorem filtrującym prądy w.cz.",
                "poprawia odtwarzanie wysokich tonów",
                "chroni słuchawki przed uszkodzeniem"
            ]
        },
        {
            questionText: "Dlaczego do detekcji sygnałów telegrafii CW używamy produkt detektora i pomocniczego generatora BFO?",
            questionAnswers: [
                "musimy wytworzyć słyszalne dudnienia z niemodulowanym sygnałem CW",
                "bo sygnał CW jest przerywany",
                "bo sygnał CW jest słaby"
            ]
        },
        {
            questionText: "Aby czytelnie odebrać sygnał SSB, to przy odbiorze dolnej wstęgi (LSB) sygnał odtwarzający falę nośną powinien być:",
            questionAnswers: [
                "powyżej wstęgi LSB",
                "poniżej wstęgi LSB",
                "w środku LSB"
            ]
        },
        {
            questionText: "Czy dyskryminator sygnału FM powinien reagować na modulację amplitudy sygnału FM?",
            questionAnswers: [
                "nie",
                "tak",
                "nie ma to znaczenia"
            ]
        },
        {
            questionText: "Warunkiem wzbudzenia się generatora z obwodem rezonansowym jest:",
            questionAnswers: [
                "spełnienie warunku amplitudy i fazy",
                "zastosowanie obwodu rezonansu szeregowego",
                "zastosowanie ujemnego sprzężenia zwrotnego"
            ]
        },
        {
            questionText: "Na rysunku przedstawiono kilka układów generatorów. Są one ponumerowane od 1 do 4. Wybierz pod którą literą znajdują się poprawne nazwy generatorów zgodne z kolejnością ich narysowania.",
            questionAnswers: [
                "Meissner , Hartley, Colpitts, Clapp",
                "Colpits, Hartley, Clapp, Meisner",
                "Clapp, Colpitts, Hartley, Meissner"
            ]
        },
        {
            questionText: "Oscylator kwarcowy ma wysoką stabilność częstotliwości. Zawdzięcza ją:",
            questionAnswers: [
                "zastosowaniu rezonatora kwarcowego",
                "zasilaniu z stabilizowanego zasilacza",
                "zastosowaniu specjalnego tranzystora"
            ]
        },
        {
            questionText: "Kwarce owertonowe to rezonatory kwarcowe pracujące na:",
            questionAnswers: [
                "częstotliwościach harmonicznych",
                "na częstotliwościach podstawowych",
                "na częstotliwościach pasożytniczych"
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat stabilizacji PLL w formie ponumerowanych ale nie opisanych bloków. Blok 2 to:",
            questionAnswers: [
                "dzielnik nastawny",
                "komparator",
                "generator wzorca"
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat stabilizacji PLL w formie ponumerowanych ale nie opisanych bloków. Blok 3 to:",
            questionAnswers: [
                "komparator",
                "dzielnik nastawny",
                "wzmacniacz błędu"
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat stabilizacji PLL w formie ponumerowanych ale nie opisanych bloków. Blok 5 to:",
            questionAnswers: [
                "dzielnik wzorca",
                "generator stabilizowany",
                "komparator"
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat stabilizacji PLL w formie ponumerowanych ale nie opisanych bloków. Blok 6 to:",
            questionAnswers: [
                "wzmacniacz błędu",
                "komparator",
                "dzielnik nastawny"
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat blokowy odbiornika bezpośredniego wzmocnienia z reakcją. Blok 1 to:",
            questionAnswers: [
                "wzmacniacz w. cz",
                "detektor z reakcją",
                "wzmacniacz akustyczny"
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat blokowy odbiornika bezpośredniego wzmocnienia z reakcją. Blok 2 to:",
            questionAnswers: [
                "detektor z reakcją",
                "wzmacniacz w. cz.",
                "wzmacniacz akustyczny"
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat blokowy odbiornika superheterodynowego AM z pojedynczą przemianą. Blok 2 to:",
            questionAnswers: [
                "mieszacz",
                "wzmacniacz akustyczny",
                "detektor AM"
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat blokowy odbiornika superheterodynowego AM z pojedynczą przemianą. Blok 3 to:",
            questionAnswers: [
                "wzmacniacz pośredniej cz.",
                "filtr wejściowy",
                "heterodyna"
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat blokowy odbiornika superheterodynowego AM z pojedynczą przemianą. Blok 4 to:",
            questionAnswers: [
                "detektor AM",
                "wzmacniacz akustyczny",
                "filtr wejściowy"
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat blokowy odbiornika superheterodynowego AM z pojedynczą przemianą. Blok 6 to:",
            questionAnswers: [
                "heterodyna",
                "filtr wejściowy",
                "wzmacniacz akustyczny"
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat blokowy odbiornika superheterodynowego AM, CW, SSB z podwójną przemianą częstotliwości. Blok 2 to:",
            questionAnswers: [
                "I mieszacz",
                "wzmacniacz akustyczny",
                "filtr przełączany II p.cz."
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat blokowy odbiornika superheterodynowego AM, CW, SSB z podwójną przemianą częstotliwości. Blok 3 to:",
            questionAnswers: [
                "wzmacniacz I pośredniej cz.",
                "BFO",
                "heterodyna"
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat blokowy odbiornika superheterodynowego AM, CW, SSB z podwójną przemianą częstotliwości. Blok 4 to:",
            questionAnswers: [
                "II mieszacz",
                "wzmacniacz akustyczny",
                "BFO"
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat blokowy odbiornika superheterodynowego AM, CW, SSB z podwójną przemianą częstotliwości. Blok 5 to:",
            questionAnswers: [
                "II heterodyna stała",
                "wzmacniacz akustyczny",
                "detektor AM CW SSB"
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat blokowy odbiornika superheterodynowego AM, CW, SSB z podwójną przemianą częstotliwości. Blok 6 to:",
            questionAnswers: [
                "filtr przełączany II p.cz.",
                "wzmacniacz akustyczny",
                "II heterodyna stała"
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat blokowy odbiornika superheterodynowego AM, CW, SSB z podwójną przemianą częstotliwości. Blok 7 to:",
            questionAnswers: [
                "wzmacniacz II pośredniej cz.",
                "BFO",
                "detektor AM , CW, SSB"
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat blokowy odbiornika superheterodynowego AM, CW, SSB z podwójną przemianą częstotliwości. Blok 8 to:",
            questionAnswers: [
                "detektor AM, CW, SSB",
                "wzmacniacz akustyczny",
                "wzmacniacz w.cz."
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat blokowy odbiornika superheterodynowego AM, CW, SSB z podwójną przemianą częstotliwości. Blok 10 to:",
            questionAnswers: [
                "BFO",
                "wzmacniacz akustyczny",
                "detektor AM, CW, SSB"
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat blokowy odbiornika superheterodynowego AM, CW, SSB z podwójną przemianą częstotliwości. Blok 11 to:",
            questionAnswers: [
                "I heterodyna strojona",
                "wzmacniacz akustyczny",
                "detektor AM"
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat blokowy odbiornika homodynowego CW i SSB, na jedno pasmo amatorskie. Blok 2 to:",
            questionAnswers: [
                "mieszacz zrównoważony",
                "wzmacniacz akustyczny",
                "filtr wejściowy"
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat blokowy odbiornika homodynowego CW i SSB, na jedno pasmo amatorskie. Blok 3 to:",
            questionAnswers: [
                "wzmacniacz akustyczny",
                "heterodyna",
                "filtr wejściowy"
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat blokowy odbiornika homodynowego CW i SSB, na jedno pasmo amatorskie. Blok 4 to:",
            questionAnswers: [
                "heterodyna",
                "filtr wejściowy",
                "wzmacniacz akustyczny"
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat blokowy odbiornika superheterodynowego FM na pasmo 144 MHz z podwójną przemianą częstotliwości, pracującego w kanałach fonicznych, stabilizowany kwarcami. Blok 1 to:",
            questionAnswers: [
                "wzmacniacz w.cz.",
                "wzmacniacz akustyczny",
                "detektor FM"
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat blokowy odbiornika superheterodynowego FM na pasmo 144 MHz z podwójną przemianą częstotliwości, pracującego w kanałach fonicznych, stabilizowany kwarcami. Blok 3 to:",
            questionAnswers: [
                "wzmacniacz I pośredniej cz. 10,7 MHz",
                "wzmacniacz w.cz.",
                "I heterodyna"
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat blokowy odbiornika superheterodynowego FM na pasmo 144 MHz z podwójną przemianą częstotliwości, pracującego w kanałach fonicznych, stabilizowany kwarcami. Blok 4 to:",
            questionAnswers: [
                "II mieszacz",
                "wzmacniacz akustyczny",
                "blokada szumów"
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat blokowy odbiornika superheterodynowego FM na pasmo 144 MHz z podwójną przemianą częstotliwości, pracującego w kanałach fonicznych, stabilizowany kwarcami. Blok 5 to:",
            questionAnswers: [
                "wzmacniacz II p.cz. 455 kHz",
                "II heterodyna stała",
                "detektor FM"
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat blokowy odbiornika superheterodynowego FM na pasmo 144 MHz z podwójną przemianą częstotliwości, pracującego w kanałach fonicznych, stabilizowany kwarcami. Blok 6 to:",
            questionAnswers: [
                "detektor FM",
                "wzmacniacz akustyczny",
                "II heterodyna stała"
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat blokowy odbiornika superheterodynowego FM na pasmo 144 MHz z podwójną przemianą częstotliwości, pracującego w kanałach fonicznych, stabilizowany kwarcami. Blok 7 to:",
            questionAnswers: [
                "wzmacniacz akustyczny",
                "wzmacniacz II p. cz. 455kHz",
                "detektor FM"
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat blokowy odbiornika superheterodynowego FM na pasmo 144 MHz z podwójną przemianą częstotliwości, pracującego w kanałach fonicznych, stabilizowany kwarcami. Blok 8 to:",
            questionAnswers: [
                "blokada szumów",
                "wzmacniacz akustyczny",
                "detektor FM"
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat blokowy odbiornika superheterodynowego FM na pasmo 144 MHz z podwójną przemianą częstotliwości, pracującego w kanałach fonicznych, stabilizowany kwarcami. Blok 9 to:",
            questionAnswers: [
                "II heterodyna stała",
                "wzmacniacz akustyczny",
                "blokada szumów"
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat blokowy odbiornika superheterodynowego FM na pasmo 144 MHz z podwójną przemianą częstotliwości, pracującego w kanałach fonicznych, stabilizowany kwarcami. Blok 10 to:",
            questionAnswers: [
                "I heterodyna kwarcowa",
                "wzmacniacz akustyczny",
                "detektor FM"
            ]
        },
        {
            questionText: "Miarą selektywności odbiornika jest szerokość pasma odbieranego przez odbiornik. Przy jakim poziomie od poziomu maksymalnego mierzymy selektywność?",
            questionAnswers: [
                "przy -6dB",
                "przy -10dB",
                "przy -12dB"
            ]
        },
        {
            questionText: "Przy jakim stosunku sygnału do szumu mierzymy czułość odbiornika?",
            questionAnswers: [
                "przy 10 dB",
                "przy 6 dB",
                "przy 20 dB"
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat blokowy nadajnika telegraficznego na jedno pasmo amatorskie. Blok 1 to:",
            questionAnswers: [
                "oscylator (VFO)",
                "separator",
                "wzmacniacz mocy (PA)"
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat blokowy nadajnika telegraficznego na jedno pasmo amatorskie. Blok 2 to:",
            questionAnswers: [
                "separator",
                "wzmacniacz mocy (PA)",
                "oscylator (VFO)"
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat blokowy nadajnika telegraficznego na jedno pasmo amatorskie. Blok 3 to:",
            questionAnswers: [
                "wzmacniacz mocy (PA)",
                "oscylator (VFO)",
                "filtr wyjściowy"
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat blokowy nadajnika telegraficznego na kilka pasm amatorskich z powielaniem częstotliwości. Blok 2 to:",
            questionAnswers: [
                "separator",
                "wzmacniacz sterujący",
                "I powielacz x2"
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat blokowy nadajnika telegraficznego na kilka pasm amatorskich z powielaniem częstotliwości. Blok 3 to:",
            questionAnswers: [
                "I powielacz x2",
                "wzmacniacz mocy (PA)",
                "oscylator (VFO)"
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat blokowy nadajnika telegraficznego na kilka pasm amatorskich z powielaniem częstotliwości. Blok 4 to:",
            questionAnswers: [
                "II powielacz x2",
                "wzmacniacz sterujący",
                "filtr wyjściowy"
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat blokowy nadajnika telegraficznego na kilka pasm amatorskich z powielaniem częstotliwości. Blok 5 to:",
            questionAnswers: [
                "wzmacniacz sterujący",
                "I powielacz x2",
                "oscylator (VFO)"
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat blokowy nadajnika telegraficznego na kilka pasm amatorskich z powielaniem częstotliwości. Blok 6 to:",
            questionAnswers: [
                "wzmacniacz mocy (PA)",
                "filtr wyjściowy",
                "II powielacz x2"
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat blokowy nadajnika telegraficznego na kilka pasm amatorskich z powielaniem częstotliwości. Blok 7 to:",
            questionAnswers: [
                "filtr wyjściowy",
                "oscylator (VFO)",
                "separator"
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat blokowy nadajnika SSB na dwa pasma amatorskie z wzbudnicą 9 MHz. Blok 3 to:",
            questionAnswers: [
                "filtr pasmowy 3.5 - 14 MHz",
                "wzmacniacz mocy (PA)",
                "VFO 5 - 5.5 MHz"
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat blokowy nadajnika SSB na dwa pasma amatorskie z wzbudnicą 9 MHz. Blok 4 to:",
            questionAnswers: [
                "wzmacniacz sterujący",
                "filtr wyjściowy",
                "wzbudnica SSB 9 MHz"
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat blokowy nadajnika SSB na dwa pasma amatorskie z wzbudnicą 9 MHz. Blok 5 to:",
            questionAnswers: [
                "wzmacniacz mocy (PA)",
                "mieszacz",
                "oscylator (VFO) 5 - 5.5 MHz"
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat blokowy nadajnika SSB na dwa pasma amatorskie z wzbudnicą 9 MHz. Blok 6 to:",
            questionAnswers: [
                "filtr wyjściowy",
                "wzmacniacz mocy (PA)",
                "mieszacz"
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat blokowy nadajnika SSB na dwa pasma amatorskie z wzbudnicą 9 MHz. Blok 7 to:",
            questionAnswers: [
                "oscylator (VFO) 5-5.5 MHz",
                "filtr wyjściowy",
                "filtr pasmowy 3.5 - 14 MHz"
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat blokowy nadajnika UKF na pasmo 144MHz z powielaniem częstotliwości kanałowego generatora kwarcowego 8 MHz. Blok 2 to:",
            questionAnswers: [
                "generator kwarcowy modulowany",
                "modulator",
                "I powielacz x3"
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat blokowy nadajnika UKF na pasmo 144MHz z powielaniem częstotliwości kanałowego generatora kwarcowego 8 MHz. Blok 3 to:",
            questionAnswers: [
                "I powielacz x3",
                "II powielacz x3",
                "generator kwarcowy modulowany"
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat blokowy nadajnika UKF na pasmo 144MHz z powielaniem częstotliwości kanałowego generatora kwarcowego 8 MHz. Blok 4 to:",
            questionAnswers: [
                "II powielacz x3",
                "wzmacniacz mocy (PA)",
                "filtr wyjściowy"
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat blokowy nadajnika UKF na pasmo 144MHz z powielaniem częstotliwości kanałowego generatora kwarcowego 8 MHz. Blok 5 to:",
            questionAnswers: [
                "III powielacz x2",
                "filtr wyjściowy",
                "modulator"
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat blokowy nadajnika UKF na pasmo 144MHz z powielaniem częstotliwości kanałowego generatora kwarcowego 8 MHz. Blok 6 to:",
            questionAnswers: [
                "wzmacniacz mocy (PA)",
                "filtr wyjściowy",
                "II powielacz x3"
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat blokowy nadajnika UKF na pasmo 144 MHz z generatorem PLL. Blok 1 to:",
            questionAnswers: [
                "modulator",
                "wzmacniacz mocy (PA)",
                "generator PLL"
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat blokowy nadajnika UKF na pasmo 144 MHz z generatorem PLL. Blok 2 to:",
            questionAnswers: [
                "generator PLL",
                "modulator",
                "wzmacniacz sterujący"
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat blokowy nadajnika UKF na pasmo 144 MHz z generatorem PLL. Blok 3 to:",
            questionAnswers: [
                "wzmacniacz sterujący",
                "modulator",
                "generator PLL"
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat blokowy nadajnika UKF na pasmo 144 MHz z generatorem PLL. Blok 4 to:",
            questionAnswers: [
                "wzmacniacz mocy (PA)",
                "filtr wyjściowy",
                "modulator"
            ]
        },
        {
            questionText: "Na rysunku przedstawiono schemat blokowy nadajnika UKF na pasmo 144 MHz z generatorem PLL. Blok 5 to:",
            questionAnswers: [
                "filtr wyjściowy",
                "wzmacniacz sterujący",
                "modulator"
            ]
        },
        {
            questionText: "Jak zmienia się oporność dipola półfalowego przy niskim zawieszeniu nad ziemią?",
            questionAnswers: [
                "maleje",
                "nie zmienia się",
                "rośnie"
            ]
        },
        {
            questionText: "W antenie dipolowej W3DZZ na pasma 80, 40, 20 metrów zastosowano trapy. Na jaką częstotliwość muszą być nastrojone?",
            questionAnswers: [
                "7,05 MHz",
                "10 MHz",
                "14,1 MHz"
            ]
        },
        {
            questionText: "Zysk anteny kierunkowej wyrażony jest w dBi. Względem jakiego źródła jest określony?",
            questionAnswers: [
                "źródła izotropowego",
                "dipola pomiarowego",
                "innej anteny kierunkowej"
            ]
        },
        {
            questionText: "Jaka jest różnica pomiędzy efektywną mocą promieniowaną e.r.p. a efektywną mocą promieniowaną izotropowo e.i.r.p?",
            questionAnswers: [
                "e.i.r.p. jest większe o 2,16 dB od e.r.p.",
                "e.i.r.p. jest mniejsze o 2,16 dB od e.r.p.",
                "nie ma różnicy",
            ]
        },
        {
            questionText: "Antena kierunkowa na UKF w miejscu odbioru daje napięcie 4 razy większe jak dipol półfalowy. Jaki ma zysk dBd?",
            questionAnswers: [
                "12 dBd",
                "6 dBd",
                "4 dBd"
            ]
        },
        {
            questionText: "Kabel koncentryczny wprowadza straty sygnału. Kabel przy częstotliwości 150 MHz ma straty 12 dB na 100 m. Długość kabla między anteną a odbiornikiem wynosi 50 m. Ile razy napięcie na wejściu odbiornika będzie mniejsze niż w antenie?",
            questionAnswers: [
                "2 razy",
                "4 razy",
                "6 razy"
            ]
        },
        {
            questionText: "Jakie długości fal zaliczamy do zakresu fal krótkich?",
            questionAnswers: [
                "od 100 m do 10 m",
                "od 80 m do 13 m",
                "od 160 m do 10 m"
            ]
        },
        {
            questionText: "Do jakiej wysokości sięgają najwyższe warstwy jonosfery w lecie w dzień?",
            questionAnswers: [
                "450 km",
                "do 200 km",
                "100 km"
            ]
        },
        {
            questionText: "O czym mówi podawana w prognozach propagacji częstotliwość MUF?",
            questionAnswers: [
                "o maksymalnej częstotliwości do łączności na danej trasie",
                "o zakłóceniach odbioru",
                "o zaniku łączności w danym kierunku"
            ]
        },
        {
            questionText: "Co to jest strefa martwa na falach krótkich?",
            questionAnswers: [
                "strefa bez odbioru leżąca pomiędzy końcem fali przyziemnej a powrotem fali przestrzennej",
                "strefa bez odbioru z powodu dużych zakłóceń w mieście",
                "strefa w której brak odbioru z powodu interferencji fal przychodzących z różnych kierunków"
            ]
        },
        {
            questionText: "Jakim przyrządem możemy sprawdzić kształt napięcia zmiennego w.cz. i wykryć zniekształcenia sygnału?",
            questionAnswers: [
                "oscyloskopem",
                "miernikiem napięcia",
                "słuchając odbiornikiem"
            ]
        },
        {
            questionText: "Jakie dodatkowe zabezpieczenie, oprócz umieszczenia jej na bezpiecznej wysokości, są zalecane dla anteny na terenowym QTH?",
            questionAnswers: [
                "wykonanie anteny z drutu miedzianego w igielicie",
                "nie są potrzebne żadne dodatkowe zabezpieczenia",
                "zakaz przebywania pod anteną podczas nadawania"
            ]
        },
        {
            questionText: "Czy można wykorzystać sieć wodociągową jako uziemienie?",
            questionAnswers: [
                "jedynie po zbocznikowaniu wodomierza i upewnieniu się, że jest ona uziemiona oraz po uzyskaniu zgody jednostki eksploatującej tę sieć",
                "tak",
                "nie, jest to zabronione"
            ]
        },
        {
            questionText: "Resuscytację krążeniowo-oddechową u osoby dorosłej, bez widocznych obrażeń ciała, wykonujemy w stosunku:",
            questionAnswers: [
                "30 uciśnięć klatki piersiowej na dwa wdechy",
                "20 uciśnięć klatki piersiowej na cztery wdechy",
                "15 uciśnięć klatki piersiowej na sześć wdechów"
            ]
        },
        {
            questionText: "Podczas pracy z monitorem komputerowym minimalne zalecane przerwy wynoszą:",
            questionAnswers: [
                "co godzinę pięć minut",
                "co dwie godziny po 20 minut",
                "co trzy godziny po dziesięć minut"
            ]
        },
        {
            questionText: "Jakie oznaczenie na rękojeści narzędzia ma istotne znaczenie przy pracach elektrycznych?",
            questionAnswers: [
                "dopuszczalne napięcie pracy",
                "rodzaj zastosowanej izolacji",
                "nazwa producenta"
            ]
        },
        {
            questionText: "Dlaczego stosuje się ograniczenia w przebywaniu (zamieszkaniu) w bezpośrednim sąsiedztwie dużych obiektów nadawczych radiowych i telewizyjnych?",
            questionAnswers: [
                "ze względu na duże natężenie pola elektromagnetycznego mogące mieć negatywny wpływ na zdrowie",
                "ze względu na wyładowania atmosferyczne",
                "ze względu na możliwość przewrócenia się masztu"
            ]
        },
        {
            questionText: "Czy wolno wykonywać prace antenowe przy włączonym nadajniku?",
            questionAnswers: [
                "kategorycznie nie wolno",
                "wolno, bez żadnych ograniczeń",
                "wolno, ale tylko przy małych mocach nadajnika"
            ]
        },
        {
            questionText: "Na polu antenowym mamy kilka anten na różne pasma. Czy można regulować nieczynne anteny, jeżeli obok pracuje na podobnej antenie nadajnik KF?",
            questionAnswers: [
                "nie wolno",
                "można",
                "można, ale tylko gdy nadajnik ten pracuje z małą mocą"
            ]
        },
        {
            questionText: "Spełnienie jakich warunków konstrukcyjnych ogranicza przedostawanie się energii w.cz. niepożądanymi drogami?",
            questionAnswers: [
                "dobre uziemienie i szczelność ekranowania",
                "filtrowany zasilacz",
                "odpowiedni przekrój kabla sieciowego"
            ]
        },
        {
            questionText: "Czy źle wykonany uziom może być przyczyną szkodliwego promieniowania w.cz.?",
            questionAnswers: [
                "tak",
                "nie",
                "nie zawsze"
            ]
        },
        {
            questionText: "Jakie niebezpieczeństwo grozi, gdy trzymamy w rękach naładowany kondensator elektrolityczny?",
            questionAnswers: [
                "porażenie prądem elektrycznym",
                "nie ma żadnego niebezpieczeństwa",
                "implozja kondensatora"
            ]
        },
        {
            questionText: "Czy zwarcie drutem biegunów źródła prądu (bateria, akumulator) może być niebezpieczne?",
            questionAnswers: [
                "tak, może spowodować pożar",
                "nie ma żadnego zagrożenia",
                "tak, może spowodować stopienie się drutu i poparzenie roztopionym metalem"
            ]
        },
        {
            questionText: "Czy kondensator elektrolityczny musi mieć napięcie pracy równe lub większe niż napięcie występujące w układzie w jakim pracuje?",
            questionAnswers: [
                "koniecznie, gdyż może ulec zniszczeniu",
                "napięcie pracy kondensatora nie ma znaczenia",
                "napięcie pracy kondensatora ma znaczenia tylko w niektórych typach układów"
            ]
        },
        {
            questionText: "Czy brak filtru przeciw zakłóceniowego na obwodzie zasilania sieciowego może być przyczyną zakłóceń w pracy urządzenia?",
            questionAnswers: [
                "zawsze, bez względu na moc",
                "tak, ale tylko przy dużej mocy",
                "to nie ma znaczenia, rolę filtru pełni transformator zasilacza"
            ]
        },
        {
            questionText: "Czy promieniowanie elektromagnetyczne w.cz. może mieć wpływ na zdrowie człowieka?",
            questionAnswers: [
                "tak",
                "nie",
                "nie, jeśli używamy specjalnego ubrania ochronnego"
            ]
        },
        {
            questionText: "Czy sztuczne obciążenie w postaci opornika bezindukcyjnego powinno być ekranowane?",
            questionAnswers: [
                "tak, zawsze powinno być ekranowane i uziemione w tym samym punkcie co radiostacja",
                "nie ma takiej potrzeby",
                "tylko w przypadku gdy wzmacniacz mocy nie jest właściwie dostrojony"
            ]
        },
        {
            questionText: "Czy można uruchomić urządzenie po przeniesieniu z zimnego pomieszczenia do ciepłego?",
            questionAnswers: [
                "można, ale po odczekaniu pewnego czasu",
                "istnieje bezwzględny zakaz",
                "można natychmiast, bez żadnego ryzyka"
            ]
        },
        {
            questionText: "Czy plastikowa obudowa urządzenia nadawczego stanowi odpowiednie zabezpieczenie przed oddziaływaniem energii w.cz.?",
            questionAnswers: [
                "nie stanowi żadnego zabezpieczenia przed energią w.cz.",
                "jest to wystarczające zabezpieczenie przed energią w.cz.",
                "urządzenia te używa się głównie na terenowym QTH więc takie zabezpieczenie nie jest potrzebne"
            ]
        },
        {
            questionText: "Czy dopuszczalne jest użycie sieci CO (np. kaloryfera) do uziemienia radiostacji?",
            questionAnswers: [
                "tylko po upewnieniu się, że jest ona właściwie uziemiona oraz po uzyskaniu zgody jednostki eksploatującej tę sieć",
                "tak",
                "nie"
            ]
        },
        {
            questionText: "Jaki zapas mocy powinien mieć zasilacz urządzeń AM i FM przewidziany do ciągłej bezawaryjnej pracy?",
            questionAnswers: [
                "50% więcej",
                "20% więcej",
                "10 % więcej powyżej mocy maksymalnej"
            ]
        },
        {
            questionText: "Czy można wykorzystać jako uziemienie rurę instalacji gazowej?",
            questionAnswers: [
                "bezwzględnie nie wolno",
                "wolno bez żadnych ograniczeń",
                "wolno jedynie w sytuacji, gdy nie dysponuje się innym uziemieniem"
            ]
        },
        {
            questionText: "Jakie działania należy podjąć, aby udzielić pomocy porażonemu prądem elektrycznym?",
            questionAnswers: [
                "zadbać o własne bezpieczeństwo, odłączyć porażonego od prądy, sprawdzić funkcje życiowe, wezwać lekarza, w razie konieczności przeprowadzać resuscytację krążeniowo-oddechową",
                "odłączyć porażonego od prądu, podjąć działania w celu wyeliminowania skutków ewentualnych poparzeń",
                "zadbać o własne bezpieczeństwo, wezwać znajomych w celu prowadzenia wspólnej akcji ratowniczej"
            ]
        },
        {
            questionText: "Pomieszczenie, w którym znajduje się indywidualna stacja amatorska, powinno być wyposażone w następujące środki ochrony p-poż:",
            questionAnswers: [
                "gaśnicę do gaszenia urządzeń pod napięciem",
                "środki gaśnicze wymagane dla obiektów użytku publicznego",
                "koc gaśniczy i gaśnicę do gaszenia urządzeń elektrycznych"
            ]
        },
        {
            questionText: "Przewody zasilające prądu stałego oznaczone są kolorami:",
            questionAnswers: [
                "czerwony i czarny",
                "żółty i czarny",
                "niebieski i czarny"
            ]
        },
        {
            questionText: "Uszkodzonych tranzystorów nie powinno się otwierać, gdyż:",
            questionAnswers: [
                "zawierają szkodliwe substancje, mogące spowodować ciężkie zatrucie",
                "można się pokaleczyć",
                "zawierają tajemnice produkcji, których i tak nie jesteśmy w stanie wykorzystać"
            ]
        },
        {
            questionText: "Narzędzia do prac elektrycznych powinny:",
            questionAnswers: [
                "posiadać izolowane uchwyty z nadrukowaną informacją o dopuszczalnym napięciu pracy np. 500 V",
                "charakteryzować się estetyką wykonania",
                "posiadać homologację Ministerstwa Łączności"
            ]
        },
        {
            questionText: "Na terenowym QTH uziemienie można wykonać:",
            questionAnswers: [
                "wbijając uziom do ziemi jako osobne uziemienie dla swojej stacji",
                "podłączając się do uziomu roboczego na słupie kratowym",
                "podłączając się do uziomu w energetycznej szafie rozdzielczej"
            ]
        },
        {
            questionText: "Uruchomienie nieznanego urządzenia rozpoczyna się od:",
            questionAnswers: [
                "sprawdzenia, czy ustawione jest właściwe napięcie sieci oraz zainstalowany jest właściwy bezpiecznik",
                "włożenia wtyczki do kontaktu i przełączenia przełącznika",
                "podłączenia anteny i uziemienia"
            ]
        },
        {
            questionText: "Czy radiostację i urządzenia pomocnicze można podłączać do gniazd zasilanych z dwóch różnych faz?",
            questionAnswers: [
                "kategorycznie nie można, grozi to zniszczeniem sprzętu i porażeniem operatora",
                "można, nie ma żadnych przeciwwskazań",
                "można, jeżeli jednocześnie nie używa się wszystkich urządzeń"
            ]
        },
        {
            questionText: "Po zakończeniu pracy radiostacji należy:",
            questionAnswers: [
                "wyłączyć zasilanie, uziemić anteny i odłączyć uziemienie od radia",
                "wyłączyć zasilanie",
                "wyłączyć zasilanie i uziemić anteny"
            ]
        },
        {
            questionText: "Podczas wieszania anteny na wysokościach należy:",
            questionAnswers: [
                "zapewnić sobie pomoc innej osoby, stosować sprzęt ochronny, starać się maksymalnie zabezpieczyć osoby na dole przez ogrodzenie miejsc zagrożonych linką i zawieszenie tablic: Na górze pracują, oraz zapewnić łączność za pomocą radiotelefonów przenośnych, aby prace wykonać na komendę pomagającej nam osoby kiedy nie ma zagrożenia dla innych ludzi",
                "jedynie zapewnić sobie pomoc innej osoby",
                "zapewnić sobie pomoc innej osoby oraz stosować sprzęt ochronny"
            ]
        },
        {
            questionText: "Środki ochrony osobistej przy pracy na wysokości to:",
            questionAnswers: [
                "szelki bezpieczeństwa z podwójną linką plus lina asekuracyjna, kask i rękawice",
                "rękawice i okulary ochronne",
                "drabina rozstawna"
            ]
        },
        {
            questionText: "Jaka powinna być rezystancja uziemienia radiostacji?",
            questionAnswers: [
                "pomiędzy 10 a 1 Om, im mniejsza tym lepsza",
                "50 Omów",
                "zależnie od kabla antenowego: 50 lub 75 Omów"
            ]
        },
        {
            questionText: "W momencie stwierdzenia pożaru urządzenia należy:",
            questionAnswers: [
                "odłączyć urządzenie od zasilania i przystąpić do gaszenia, w razie potrzeby wezwać straż pożarną",
                "zadzwonić po straż pożarną",
                "wezwać kolegów i wspólnie przystąpić do gaszenia"
            ]
        },
        {
            questionText: "Zwody (połączenia) uziemiające od radiostacji należy poprowadzić następująco:",
            questionAnswers: [
                "skrzynka antenowa jako pierwsza do uziemienia, następnie radiostacja osobnym zwodem do skrzynki i zasilacz osobnym zwodem do tejże skrzynki",
                "zasilacz do ziemi, skrzynka antenowa do radia i do zasilacza",
                "sposób prowadzenia połączeń uziemiających nie ma znaczenia"
            ]
        },
        {
            questionText: "Transformator ochronny stosujemy, gdy:",
            questionAnswers: [
                "jak w pozostałych odpowiedziach i w innych sytuacjach, jeżeli zachodzi niebezpieczeństwo porażenia prądem np. przy pracach naprawczych",
                "zachodzi obawa, że użycie narzędzi elektrycznych zasilanych napięciem 230 V może spowodować porażenie prądem, np. pracując na zewnątrz pomieszczeń",
                "wykonujemy prace w wilgotnym pomieszczeniu"
            ]
        },
        {
            questionText: "W przypadku poparzenia elektrolitem należy:",
            questionAnswers: [
                "zdjąć odzież z oparzonego miejsca, płukać wodą oparzone miejsce, zabezpieczyć sterylnym opatrunkiem i udać się do lekarza",
                "sprawdzić czy nie oblane zostało ubranie i buty, jeśli tak to należy zdjąć takie ubranie lub buty",
                "spłukać wodą oparzone miejsce - kontakt z lekarzem nie jest konieczny"
            ]
        },
        {
            questionText: "W przypadku zaprószenia oka ciałem obcym należy:",
            questionAnswers: [
                "spróbować usunąć obce ciało, przemywając oko wodą, a jeżeli się to nie uda skorzystać z pomocy lekarza",
                "odczekać aż ciało obce samo wypadnie",
                "usunąć ciało obce samodzielnie za pomocą pęsety"
            ]
        },
        {
            questionText: "Podstawowe wyposażenie ochronne do prac z elektrolitem to:",
            questionAnswers: [
                "ubranie ochronne, okulary, rękawice ochronne",
                "maska na twarz, nakrycie głowy, obuwie ochronne",
                "nie ma potrzeby stosować żadnego wyposażenia ochronnego"
            ]
        },
        {
            questionText: "Mierząc miernikiem napięcie o niemożliwej do oszacowania wartości należy:",
            questionAnswers: [
                "ustawić miernik na najwyższy zakres pomiarowy i stopniowo zmniejszać zakres",
                "ustawić miernik na najniższy zakres pomiarowy i stopniowo zwiększać zakres",
                "rozpocząć pomiary od środkowego zakresu miernika"
            ]
        },
        {
            questionText: "Przygotowując się do wykonania prac pod napięciem, oprócz przygotowania odpowiednich przyrządów należy:",
            questionAnswers: [
                "jak w pozostałych odpowiedziach oraz zapewnić sobie obecność i ewentualną pomoc drugiej osoby",
                "sprawdzić czy zastosowano prawidłowe bezpieczniki w mierzonych obwodach",
                "przygotować schemat elektryczny urządzenia i zapoznać się z nim"
            ]
        },
        {
            questionText: "Podczas pracy nadajnika KF na jednej z anten, w celu zabezpieczenia się przed przypadkowym porażeniem od innych anten należy:",
            questionAnswers: [
                "uziemić wszystkie nieużywane w danym momencie anteny, aby nie ulec porażeniu w wyniku ich przypadkowego dotknięcia",
                "ułożyć przewody zasilające pod stołem luźno, lecz tak, aby się nie stykały",
                "nie jest konieczne stosowanie jakichkolwiek zabezpieczeń"
            ]
        },
        {
            questionText: "Przy podłączeniu zasilacza stacji przekrój sieci i wartość zabezpieczeń powinny być dobrany tak, aby zapewnić dostarczenie mocy:",
            questionAnswers: [
                "wyższej niż moc określona w tabliczce znamionowej urządzenia",
                "równej mocy określonej w tabliczce znamionowej urządzenia",
                "niższej niż moc określona w tabliczce znamionowej urządzenia"
            ]
        },
        {
            questionText: "Odległość pomiędzy masztem antenowym budowanym na ziemi a pasem drogowym, chodnikiem i innymi przeszkodami:",
            questionAnswers: [
                "powinna być większa niż wysokość masztu",
                "powinna być równa połowie wysokości masztu",
                "nie ma żadnego znaczenia"
            ]
        },
        {
            questionText: "Maszt kratowy uziemiamy:",
            questionAnswers: [
                "czterema zwodami, po jednym na każdej nodze",
                "jednym zwodem odgromowym",
                "po przekątnej dwoma zwodami"
            ]
        },
        {
            questionText: "Naprawa bezpieczników topikowych jest:",
            questionAnswers: [
                "bezwzględnie zabroniona",
                "dopuszczalna dla bezpieczników stosowanych przy niskim napięciu",
                "dopuszczalna przy zastosowaniu drutu topikowego o odpowiedniej grubości"
            ]
        },
        {
            questionText: "Jakie oznaczenia ochronne należy umieścić na maszcie anteny nadawczej?",
            questionAnswers: [
                "promieniowanie elektromagnetyczne",
                "uwaga antena nadawcza",
                "zakaz dotykania masztu"
            ]
        },
        {
            questionText: "Czy radiotelefon UKF należy uziemiać w czasie pracy?",
            questionAnswers: [
                "tylko jeśli posiada zacisk uziemiający",
                "nie ma takiej potrzeby",
                "tak, obowiązkowo"
            ]
        },
        {
            questionText: "Czy podczas pracy z wiertarką wymagane jest stosowanie rękawic ochronnych?",
            questionAnswers: [
                "jest zabronione",
                "tak, obowiązkowo",
                "można stosować według uznania"
            ]
        },
        {
            questionText: "Przy wymianie lampy stopnia mocy nadajnika należy:",
            questionAnswers: [
                "wyłączyć zasilanie i poczekać aż rozładują się kondensatory zasilacza",
                "wyłączyć zasilanie i natychmiast przystąpić do wymiany",
                "przy pracującym wzmacniaczu zdjąć osłonę lampy i przystąpić do jej wymiany"
            ]
        },
        {
            questionText: "Kondensator sprzęgający obwód anodowy PA z Pi-filtrem powinien:",
            questionAnswers: [
                "być wytrzymały na duże napięcie",
                "posiadać dużą pojemność",
                "posiadać małe wymiary"
            ]
        },
        {
            questionText: "Najlepszą formą zabezpieczenia anteny krótkofalowej przed burzą jest:",
            questionAnswers: [
                "odłączenie anteny od radiostacji i połączenie anteny z uziemieniem",
                "odłączenie anteny od radiostacji i wystawienie kabla anteny za okno",
                "nie są wymagane żadne działania"
            ]
        },
        {
            questionText: "Czy można umieścić kabel antenowy w kanale wywietrznika kominowego, jeżeli obok przebiega czynny komin?",
            questionAnswers: [
                "bezwzględnie nie można",
                "można",
                "można, ale tylko w okresie poza sezonem grzewczym"
            ]
        },
        {
            questionText: "Czy można używać kołków rozporowych do montażu anteny na kominie?",
            questionAnswers: [
                "nie wolno, można stosować jedynie opaski wokół komina",
                "można",
                "można, po spełnieniu dodatkowych warunków"
            ]
        },
        {
            questionText: "Czy nasza radiostacja może wywołać zakłócenia poza granicami kraju?",
            questionAnswers: [
                "może",
                "nie może",
                "może, ale tylko podczas strojenia"
            ]
        },
        {
            questionText: "Czy osoba posiadająca rozrusznik serca może przebywać w pobliżu anten nadawczych dużej mocy?",
            questionAnswers: [
                "kategorycznie nie powinna",
                "może, nie ma żadnego zagrożenia",
                "może, pod pewnymi warunkami"
            ]
        },
        {
            questionText: "Podczas regulacji urządzeń pod napięciem (o ile jest to konieczne) pracę wykonujemy:",
            questionAnswers: [
                "jedną ręką w asyście drugiej osoby, wskazane jest również stosowanie chodnika lub obuwia izolacyjnego",
                "dwoma rękoma",
                "jedną ręką"
            ]
        },
        {
            questionText: "Jakim przewodem podłączysz nadajnik dużej mocy do źródła zasilania?",
            questionAnswers: [
                "przewodem o przekroju żył, odpowiednim do pobieranej przez urządzenie mocy",
                "zwykłym przewodem dwużyłowym",
                "kablem w oplocie bawełnianym"
            ]
        },
        {
            questionText: "Czy podczas naprawy oscyloskopu można go włączyć bez założonego na lampę cylindra ochronnego?",
            questionAnswers: [
                "kategorycznie nie wolno",
                "można bez żadnego ryzyka",
                "można, ale należy uważać na wysokie napięcie"
            ]
        },
        {
            questionText: "Jaka lokalizacja będzie bezpieczniejsza (najbardziej właściwa pod kątem narażenia na działanie pola elektromagnetycznego) dla anteny emitującej moc 1 kW?",
            questionAnswers: [
                "terenowe QTH ze specjalnie wybudowanym polem antenowym",
                "dach naszego budynku w środku miasta",
                "dach 12-piętrowego sąsiedniego wieżowca"
            ]
        },
        {
            questionText: "Czy fider antenowy radiostacji nadawczej może być prowadzony razem z kablem anteny odbiorczej TV?",
            questionAnswers: [
                "nie, kable powinny być maksymalnie oddalone",
                "może, gdy moc nadajnika nie jest zbyt duża",
                "odległość miedzy kablami jest nieistotna"
            ]
        },
        {
            questionText: "Czy świadectwo operatora urządzeń radiowych upoważnia do naprawy sieci elektrycznej w mieszkaniu?",
            questionAnswers: [
                "nie, do tego potrzebne jest posiadanie stosownych uprawnień",
                "tak, bez żadnych ograniczeń",
                "tak, ale wyłącznie sieci jednofazowej"
            ]
        },
        {
            questionText: "W którym miejscu należy podłączyć filtr przeciwzakłóceniowy (dolnoprzepustowy) przy pracy ze wzmacniaczem mocy?",
            questionAnswers: [
                "pomiędzy transceiver a wzmacniacz mocy",
                "po końcówce mocy na fider antenowy",
                "miejsce podłączenia jest dowolne"
            ]
        },
        {
            questionText: "Jakie są skutki uszkodzenia ekranu fidera antenowego?",
            questionAnswers: [
                "następuje wzrost zakłóceń i zmiana impedancji kabla grożąca uszkodzeniem nadajnika",
                "nie ma żadnych",
                "następuje wzrost zakłóceń, bez względu na pogodę"
            ]
        },
        {
            questionText: "Przed eksplozją kondensatorów elektrolitycznych w zasilaczu chroni nas:",
            questionAnswers: [
                "opornik upływowy tzw. bleder",
                "stabilizator napięcia",
                "właściwe uziemienie zasilacza"
            ]
        },
        {
            questionText: "Co oznacza wg kodu Q symbol QRG?",
            questionAnswers: [
                "moja częstotliwość jest ...",
                "włączam większą moc nadajnika",
                "siła twoich sygnałów waha się"
            ]
        },
        {
            questionText: "Co oznacza wg kodu Q symbol QSY?",
            questionAnswers: [
                "przejdź na częstotliwość, zmień częstotliwość",
                "do usłyszenia na innej częstotliwości",
                "mam uszkodzoną antenę"
            ]
        },
        {
            questionText: "Co oznacza wg kodu Q symbol QRM?",
            questionAnswers: [
                "mam zakłócenia od innych stacji",
                "jestem czynny w eterze od miesiąca",
                "odbieram twoje sygnały bardzo dobrze zmniejsz moc"
            ]
        },
        {
            questionText: "Co oznacza wg kodu Q symbol QRN?",
            questionAnswers: [
                "mam zakłócenia atmosferyczne",
                "jestem czynny w eterze od niedawna",
                "pracuję na radiostacji tylko w niedzielę"
            ]
        },
        {
            questionText: "Co oznacza wg kodu Q symbol QSB?",
            questionAnswers: [
                "siła twoich sygnałów waha się",
                "w okolicy jest burza, wyłączam radiostację",
                "używam anteny dookolnej"
            ]
        },
        {
            questionText: "Co oznacza wg kodu Q symbol QRV?",
            questionAnswers: [
                "jestem gotów do pracy, jestem czynny w eterze",
                "o której godzinie rozpoczęliśmy łączność",
                "proszę powtórzyć ostatnią relację"
            ]
        },
        {
            questionText: "Co oznacza wg kodu Q symbol QTH?",
            questionAnswers: [
                "moje położenie geograficzne jest...",
                "nie mam ochoty z tobą dalej rozmawiać",
                "przekazuję wiadomość od..."
            ]
        },
        {
            questionText: "Co oznacza wg kodu Q symbol QRP?",
            questionAnswers: [
                "zmniejsz moc, zmniejszam moc",
                "nadawaj powoli",
                "powtórz swój znak wywoławczy"
            ]
        },
        {
            questionText: "Co oznacza wg kodu Q symbol QTC?",
            questionAnswers: [
                "mam dla ciebie pilną wiadomość",
                "wyłączam stację",
                "na jaką częstotliwość mam się przestroić"
            ]
        },
        {
            questionText: "Co oznacza wg kodu Q symbol QSO?",
            questionAnswers: [
                "łączność, mam łączność",
                "moje położenie geograficzne jest...",
                "siła twoich sygnałów waha się"
            ]
        },
        {
            questionText: "Co oznacza wg kodu Q symbol QSL?",
            questionAnswers: [
                "potwierdzam odbiór, przyślę kartę potwierdzającą łączność",
                "nadawaj szybciej",
                "słucham na częstotliwości"
            ]
        },
        {
            questionText: "Co oznacza skrót slangu radioamatorskiego RX?",
            questionAnswers: [
                "odbiornik",
                "antena pionowa",
                "klucz elektroniczny"
            ]
        },
        {
            questionText: "Co oznacza skrót slangu radioamatorskiego Unlis?",
            questionAnswers: [
                "nielicencjonowany nadawca",
                "zakłócenia w odbiorze telewizji",
                "zawody w łowach na lisa"
            ]
        },
        {
            questionText: "Co oznacza skrót slangu radioamatorskiego YL?",
            questionAnswers: [
                "panna - młoda pani",
                "antena z linki miedzianej",
                "czas uniwersalny"
            ]
        },
        {
            questionText: "Co oznacza skrót slangu radioamatorskiego RPT?",
            questionAnswers: [
                "proszę powtórzyć, powtórzę, powtarzam",
                "proszę",
                "przechodzę na inny kanał"
            ]
        },
        {
            questionText: "Kiedy należy podawać raport o słyszalności?",
            questionAnswers: [
                "na początku łączności i na życzenie korespondenta",
                "w odstępach 5-10 minut",
                "po każdym przekazaniu mikrofonu"
            ]
        },
        {
            questionText: "Czy po uzyskaniu świadectwa operatora urządzeń radiowych można samodzielnie obsługiwać stację amatorską?",
            questionAnswers: [
                "można, w określonych przepisami zakresach częstotliwości",
                "można, ale tylko pod nadzorem radioamatora posiadającego pozwolenie radiowe",
                "nie można, ponieważ do obsługi stacji amatorskiej upoważnia jedynie pozwolenie radiowe"
            ]
        },
        {
            questionText: "Jakie należy spełnić warunki aby uzyskać pozwolenie radiowe na używanie radiostacji amatorskiej?",
            questionAnswers: [
                "należy posiadać świadectwo operatora urządzeń radiowych",
                "należy posiadać świadectwo operatora urządzeń radiowych i odbyć trzymiesięczną praktykę na stacji klubowej",
                "należy posiadać świadectwo operatora urządzeń radiowych i co najmniej średnie wykształcenie"
            ]
        },
        {
            questionText: "Czy razem ze świadectwem operatora urządzeń radiowych przydzielany jest znak wywoławczy dla radiostacji amatorskiej?",
            questionAnswers: [
                "nie, znak wywoławczy przydzielany jest w pozwoleniu radiowym",
                "tak",
                "tak, jeżeli dana osoba posiada radiostację"
            ]
        },
        {
            questionText: "Co to jest znak wywoławczy?",
            questionAnswers: [
                "jest to kombinacja liter i cyfr stanowiąca unikalny w skali światowej identyfikator radiostacji amatorskiej",
                "jest to symbol określający typ (model) radiostacji amatorskiej",
                "jest to hasło pozwalające wywołać konkretnego rozmówcę"
            ]
        },
        {
            questionText: "Czy można radioamatorski znak wywoławczy używać podczas pracy w zakresach częstotliwości nieprzeznaczonych dla służby amatorskiej?",
            questionAnswers: [
                "absolutnie nie, znak radioamatorski można używać tylko w zakresach częstotliwości przeznaczonych dla radioamatorów",
                "można, po uzyskaniu specjalnej zgody UKE",
                "nie jest to zabronione i zależy od decyzji radioamatora"
            ]
        },
        {
            questionText: "Jak zbudowany jest znak wywoławczy w pozwoleniach kategorii 1, 3 i 5?",
            questionAnswers: [
                "składa się z prefiksu, cyfry i kombinacji maksymalnie czterech liter i cyfr",
                "nie ma określonej budowy, składa się z liter i cyfr",
                "składa się z prefiksu i dwóch liter"
            ]
        },
        {
            questionText: "Jak zbudowany jest znak wywoławczy w pozwoleniu dodatkowym?",
            questionAnswers: [
                "składa się z prefiksu, cyfry i kombinacji maksymalnie siedmiu liter i cyfr",
                "nie ma określonej budowy, składa się liter i cyfr",
                "składa się z prefiksu i pięciu liter"
            ]
        },
        {
            questionText: "Co to jest dziennik łączności LOG?",
            questionAnswers: [
                "jest to dokument radiostacji amatorskiej zawierający informacje o korespondencji z innymi radiostacjami amatorskimi, zawierający znak stacji, imię operatora, datę, godzinę, pasmo w jakim przeprowadzono QSO",
                "jest to informacja o procedurach obowiązujących podczas łączności z innymi stacjami",
                "jest to informacja o kontroli radiostacji przez inspektorów UKE"
            ]
        },
        {
            questionText: "Czy prowadzenie dziennika łączności LOG jest obowiązkowe?",
            questionAnswers: [
                "jest to podstawowy obowiązek każdego radioamatora",
                "prowadzenie Logu nie jest obowiązkowe, lecz wskazane",
                "prowadzenie dziennika łączności może być nakazane jako zalecenie pokontrolne inspektorów ochrony środowiska"
            ]
        },
        {
            questionText: "Co znaczy określenie czas uniwersalny UTC?",
            questionAnswers: [
                "czas odpowiadający południkowi zerowemu (GMT), stosowany przez radioamatorów do odnotowania w Logu godz. łączności",
                "czas w którym nie należy nawiązywać QSO",
                "czas w którym można nawiązywać łączności z krajami europejskimi"
            ]
        },
        {
            questionText: "Okręg wywoławczy SP1 to obszar:",
            questionAnswers: [
                "województwa zachodniopomorskiego",
                "województwa pomorskiego",
                "województwa mazowieckiego"
            ]
        },
        {
            questionText: "Okręg wywoławczy SP2 to obszar:",
            questionAnswers: [
                "województw kujawsko-pomorskiego i pomorskiego",
                "województwa zachodniopomorskiego",
                "województwa mazowieckiego"
            ]
        },
        {
            questionText: "Okręg wywoławczy SP3 to obszar:",
            questionAnswers: [
                "województw lubuskiego i wielkopolskiego",
                "województwa mazowieckiego",
                "województw kujawsko-pomorskie i pomorskie"
            ]
        },
        {
            questionText: "Okręg wywoławczy SP4 to obszar:",
            questionAnswers: [
                "województw podlaskiego i warmińsko-mazurskiego",
                "województwa mazowieckiego",
                "województw lubuskiego i wielkopolskiego"
            ]
        },
        {
            questionText: "Okręg wywoławczy SP5 to obszar:",
            questionAnswers: [
                "województwa mazowieckiego",
                "województw kujawsko-pomorskiego i pomorskiego",
                "województwa zachodnio-pomorskiego"
            ]
        },
        {
            questionText: "Okręg wywoławczy SP6 to obszar:",
            questionAnswers: [
                "województw dolnośląskiego i opolskiego",
                "województwa mazowieckiego",
                "województwa zachodniopomorskiego"
            ]
        },
        {
            questionText: "Okręg wywoławczy SP7 to obszar:",
            questionAnswers: [
                "województw łódzkiego i świętokrzyskiego",
                "województwa mazowieckiego",
                "województw dolnośląskiego i opolskiego"
            ]
        },
        {
            questionText: "Okręg wywoławczy SP8 to obszar:",
            questionAnswers: [
                "województw lubelskiego i podkarpackiego",
                "województw dolnośląskiego i opolskiego",
                "województwa zachodniopomorskiego"
            ]
        },
        {
            questionText: "Okręg wywoławczy SP9 to obszar:",
            questionAnswers: [
                "województw małopolskiego i śląskiego",
                "województw lubelskiego i podkarpackiego",
                "województwa zachodniopomorskiego"
            ]
        },
        {
            questionText: "Poprawne literowanie w j. polskim litery A i R:",
            questionAnswers: [
                "Adam, Roman",
                "Ala, Romuald",
                "Alfa, Romeo"
            ]
        },
        {
            questionText: "Poprawne literowanie w j. polskim litery G i K:",
            questionAnswers: [
                "Grażyna, Karol",
                "Genowefa, Ksawer",
                "Golf, Kazek"
            ]
        },
        {
            questionText: "Poprawne literowanie w j. polskim litery W i Z:",
            questionAnswers: [
                "Wanda, Zygmunt",
                "Walery, Zosia",
                "Warta, Zamek"
            ]
        },
        {
            questionText: "Poprawne literowanie w j. polskim litery X i C:",
            questionAnswers: [
                "Xawery, Cezary",
                "Iks, Centrum",
                "Xymena, Czesław"
            ]
        },
        {
            questionText: "Poprawne literowanie w j. polskim litery P i N:",
            questionAnswers: [
                "Paweł, Natalia",
                "Piotr, Niwa",
                "Przemek, Nina"
            ]
        },
        {
            questionText: "Poprawne literowanie wg alfabetu ITU litery B i F:",
            questionAnswers: [
                "Bravo, Foxtrot",
                "Bil, Fox",
                "Box, Florida"
            ]
        },
        {
            questionText: "Poprawne literowanie wg alfabetu ITU litery C i G:",
            questionAnswers: [
                "Charlie, Golf",
                "Canada, Gold",
                "Chile, Grenada"
            ]
        },
        {
            questionText: "Poprawne literowanie wg alfabetu ITU litery I i K:",
            questionAnswers: [
                "India, Kilo",
                "India, Kanada",
                "Italia, Kaz"
            ]
        },
        {
            questionText: "Poprawne literowanie wg alfabetu ITU litery R i V:",
            questionAnswers: [
                "Romeo, Viktor",
                "Ren, Viktor",
                "Radio, Viola"
            ]
        },
        {
            questionText: "Poprawne literowanie wg alfabetu ITU litery X i S:",
            questionAnswers: [
                "X-Rey, Sierra",
                "Xsen, Santiago",
                "X-Rey, Syria"
            ]
        },
        {
            questionText: "Co to jest międzynarodowy kod Q?",
            questionAnswers: [
                "zbiór symboli składających się z 3 liter, zaczynających się zawsze na literę Q, którym przypisane są proste zdanie lub słowa",
                "symbole składające się z litery Q i 2-3 cyfr określających jakość odbieranego sygnału",
                "wykaz zawierający prefiksy znaków wywoławczych wg ITU"
            ]
        },
        {
            questionText: "Do czego służy międzynarodowy kod Q?",
            questionAnswers: [
                "skrócenia czasu nadawania informacji",
                "podania informacji o czasie rozpoczęcia łączności",
                "informowania o sile odbieranego sygnału radiowego"
            ]
        },
        {
            questionText: "Co oznacza wg kodu Q symbol QRL?",
            questionAnswers: [
                "jestem zajęty, proszę nie przeszkadzać",
                "źle się czuję, odezwę się później",
                "do zobaczenia latem"
            ]
        },
        {
            questionText: "Co oznacza wg kodu Q symbol QRT?",
            questionAnswers: [
                "kończę nadawanie, wyłączam stację",
                "która jest godzina",
                "nadawaj wolniej"
            ]
        },
        {
            questionText: "Co oznacza wg kodu Q symbol QRZ?",
            questionAnswers: [
                "kto mnie woła",
                "zmień częstotliwość na zapasową",
                "jestem zajęty, proszę nie przeszkadzać"
            ]
        },
        {
            questionText: "Co oznacza wg kodu Q symbol QRX?",
            questionAnswers: [
                "proszę czekać",
                "nadawaj wolniej",
                "mam zakłócenia od innych stacji"
            ]
        },
        {
            questionText: "Co oznacza wg kodu Q symbol QRO?",
            questionAnswers: [
                "zwiększ moc, zwiększam moc",
                "nic dla ciebie nie mam",
                "przerwij nadawanie, kończę pracę"
            ]
        },
        {
            questionText: "Który z poniższych kodów Q oznacza: Moja częstotliwość jest ...?",
            questionAnswers: [
                "QRG",
                "QRJ",
                "QRK"
            ]
        },
        {
            questionText: "Który z poniższych kodów Q oznacza: Przejdź na częstotliwość, zmień częstotliwość?",
            questionAnswers: [
                "QSY",
                "QTR",
                "QSA"
            ]
        },
        {
            questionText: "Który z poniższych kodów Q oznacza: Mam zakłócenia od innych stacji?",
            questionAnswers: [
                "QRM",
                "QWO",
                "QQQ"
            ]
        },
        {
            questionText: "Który z poniższych kodów Q oznacza: Siła twoich sygnałów waha się?",
            questionAnswers: [
                "QSB",
                "QAZ",
                "QRY"
            ]
        },
        {
            questionText: "Który z poniższych kodów Q oznacza: Jestem gotów do pracy, jestem czynny w eterze?",
            questionAnswers: [
                "QRV",
                "QWX",
                "QRU"
            ]
        },
        {
            questionText: "Który z poniższych kodów Q oznacza: Moje położenie geograficzne jest ...?",
            questionAnswers: [
                "QTH",
                "QLP",
                "QRG"
            ]
        },
        {
            questionText: "Który z poniższych kodów Q oznacza: Zmniejsz moc, zmniejszam moc?",
            questionAnswers: [
                "QRP",
                "QUB",
                "QRA"
            ]
        },
        {
            questionText: "Który z poniższych kodów Q oznacza: Mam dla ciebie telegram, wiadomość?",
            questionAnswers: [
                "QTC",
                "QRT",
                "QSV"
            ]
        },
        {
            questionText: "Który z poniższych kodów Q oznacza: Łączność, mam łączność?",
            questionAnswers: [
                "QSO",
                "QSL",
                "QRS"
            ]
        },
        {
            questionText: "Który z poniższych kodów Q oznacza: Potwierdzam odbiór, przyślę kartę potwierdzającą łączność?",
            questionAnswers: [
                "QSL",
                "QSA",
                "QRT"
            ]
        },
        {
            questionText: "Co oznaczają skróty slangu radioamatorskiego: BAND; CFM?",
            questionAnswers: [
                "pasmo; potwierdzam",
                "zakres; godzina",
                "raport; popołudnie"
            ]
        },
        {
            questionText: "Co oznaczają skróty slangu radioamatorskiego: BK; CALL?",
            questionAnswers: [
                "przerwa; znak wywoławczy",
                "później; kalibrator",
                "stop; odebrałem wszystko"
            ]
        },
        {
            questionText: "Co oznaczają skróty slangu radioamatorskiego: BEST; DX?",
            questionAnswers: [
                "najlepszy; daleka łączność",
                "daleki; niezły",
                "dobry; szybki"
            ]
        },
        {
            questionText: "Co oznaczają skróty slangu radioamatorskiego: BCI; BOX?",
            questionAnswers: [
                "zakłócenia odbioru radiowego; skrytka pocztowa",
                "zakłócenia od sieciowe; radiolatarnia amatorska",
                "podaj dokładny czas; zmieniam kanał radiowy"
            ]
        },
        {
            questionText: "Co oznaczają skróty slangu radioamatorskiego: OK; NAME?",
            questionAnswers: [
                "wszystko w porządku; imię",
                "stary, nie przeszkadzaj; moje nazwisko jest",
                "przestrajam się; podaj adres"
            ]
        },
        {
            questionText: "Co oznaczają skróty slangu radioamatorskiego: SWR; RX?",
            questionAnswers: [
                "współczynnik fali stojącej; odbiornik",
                "pasmo w metrach; antena pionowa",
                "nasłuchowiec; klucz elektroniczny"
            ]
        },
        {
            questionText: "Które z poniższych skrótów slangu radioamatorskiego oznaczają: Zakłócenia w odbiorze telewizji; nielicencjonowany nadawca?",
            questionAnswers: [
                "TVI; UNLIS",
                "TRX; LIS",
                "RBM; ICP"
            ]
        },
        {
            questionText: "Które z poniższych skrótów slangu radioamatorskiego oznaczają: Panna, młoda pani; czas uniwersalny?",
            questionAnswers: [
                "YL; UTC",
                "XYL; UT",
                "LY; TRO"
            ]
        },
        {
            questionText: "Co oznaczają skróty slangu radioamatorskiego: PSE; RPT?",
            questionAnswers: [
                "proszę; powtórzyć, powtórzę, powtarzam",
                "proszę; zmieniam pasmo o 10 kHz",
                "przechodzę na inny kanał; raport podam na koniec łączności"
            ]
        },
        {
            questionText: "Co oznaczają skróty slangu radioamatorskiego: 99; UTC?",
            questionAnswers: [
                "idź precz, przepadnij; czas uniwersalny",
                "pozdrawiam; czas ukraiński",
                "ściskam dłoń; mam pilną wiadomość"
            ]
        },
        {
            questionText: "Co oznaczają skróty slangu radioamatorskiego: LOG; DIRECT?",
            questionAnswers: [
                "dziennik pracy stacji; bezpośrednio",
                "długa antena; dyrektor",
                "długi; bezpośredni kontakt"
            ]
        },
        {
            questionText: "Co to jest raport R S stosowany podczas łączności fonicznych?",
            questionAnswers: [
                "informacja o jakości odbieranego sygnału radiowego - czytelności i sił sygnału wyrażana w postaci cyfr",
                "informacja o stanie technicznym radiostacji",
                "informacja o stanie pogody przekazana w postaci zakodowanej"
            ]
        },
        {
            questionText: "Co to jest raport R S T stosowany podczas łączności telegraficznych?",
            questionAnswers: [
                "informacja o jakości odbieranego sygnału radiowego ? czytelności, siły i tonu akustycznego sygnału",
                "informacja o stanie technicznym radiostacji",
                "informacja o stanie pogody"
            ]
        },
        {
            questionText: "Co oznaczają w raporcie o słyszalności i jakości sygnałów korespondenta litery R S?",
            questionAnswers: [
                "R - czytelność, S - siła sygnału",
                "R - jakość sygnału, S- słyszalność",
                "R - stabilność sygnału, S- siła sygnału"
            ]
        },
        {
            questionText: "Co oznaczają w raporcie o słyszalności i jakości sygnałów korespondenta litery R S T?",
            questionAnswers: [
                "R - czytelność, S - siła sygnału, T - ton sygnału",
                "R - jakość sygnału, S - słyszalność, T - częstotliwość",
                "R - stabilność sygnału, S - siła sygnału, T - ton sygnału"
            ]
        },
        {
            questionText: "Jaka jest skala czytelności i skala siły sygnału w raporcie R S?",
            questionAnswers: [
                "skala czytelności 1-5 i skala siły sygnału 1-9",
                "skala czytelności 1-9 i skala siły sygnału 1-5",
                "skala czytelności 0-5 i skala siły sygnału 0-9"
            ]
        },
        {
            questionText: "Co oznacza w łączności fonicznej raport 59?",
            questionAnswers: [
                "dobrze czytelny, bardzo silny sygnał",
                "czytelny, silny sygnał",
                "słaby, czytelny z trudnościami sygnał"
            ]
        },
        {
            questionText: "Co oznacza w łączności fonicznej raport 43?",
            questionAnswers: [
                "czytelny, słaby sygnał",
                "dobrze czytelny, bardzo silny sygnał",
                "czytelny z trudnościami, słaby sygnał"
            ]
        },
        {
            questionText: "Co oznacza w łączności telegraficznej raport 599?",
            questionAnswers: [
                "dobrze czytelny, bardzo silny sygnał, bardzo dobry ton",
                "czytelny, silny sygnał, dobry ton",
                "czytelny z trudnościami, sygnał słaby, dobry ton"
            ]
        },
        {
            questionText: "Co oznacza w łączności telegraficznej raport 438?",
            questionAnswers: [
                "czytelny, słaby sygnał, dobry ton sygnału",
                "dobrze czytelny, bardzo silny sygnał, dobry ton",
                "czytelny z trudnościami, słaby sygnał, bardzo dobry ton"
            ]
        },
        {
            questionText: "Co to jest okręg wywoławczy?",
            questionAnswers: [
                "zwyczajowo przyjęty obszar w granicach jednego lub dwóch województw",
                "obszar, na którym pracuje maksimum 1000 radiostacji amatorskich",
                "obszar odpowiadający podziałowi terytorialnemu Polski na województwa"
            ]
        },
        {
            questionText: "Na ile okręgów wywoławczych podzielona jest Polska?",
            questionAnswers: [
                "9",
                "16",
                "10"
            ]
        },
        {
            questionText: "Jak zbudowane są znaki wywoławcze radiostacji amatorskich?",
            questionAnswers: [
                "dwie litery lub cyfra i litera, cyfra, jeden do czterech znaków (liter lub cyfr), gdzie ostatni jest literą, np. SP3A lub SP3ABCD",
                "dwie litery, cyfra, dwie do pięciu liter, np. SP3AB lub SP3ABCDE",
                "dwie litery, cyfra, dwie do trzech liter, np. SP3AB lub SP3ABC"
            ]
        },
        {
            questionText: "Które prefiksy znaków wywoławczych przeznaczone są dla Polski?",
            questionAnswers: [
                "HF, SN, SO, SP, SQ, SR, 3Z",
                "HF, SN, SO, SP, SQ, 3Z, 3X",
                "HA, SM, SO, SP, SQ, SR, 3Z"
            ]
        },
        {
            questionText: "Zakres częstotliwości przeznaczony dla służby amatorskiej w paśmie 160 m to:",
            questionAnswers: [
                "1810 kHz - 2000 kHz",
                "1810 kHz - 1950 kHz",
                "1810 kHz - 1980 kHz"
            ]
        },
        {
            questionText: "Zakres częstotliwości przeznaczony dla służby amatorskiej w paśmie 80 m to:",
            questionAnswers: [
                "3500 kHz - 3800 kHz",
                "3550 kHz - 3750 kHz",
                "3500 kHz - 3750 kHz"
            ]
        },
        {
            questionText: "Zakres częstotliwości przeznaczony dla służby amatorskiej w paśmie 40 m to:",
            questionAnswers: [
                "7000 kHz - 7200 kHz",
                "7100 kHz - 7300 kHz",
                "7050 kHz - 7200 kHz"
            ]
        },
        {
            questionText: "Zakres częstotliwości przeznaczony dla służby amatorskiej w paśmie 30 m to:",
            questionAnswers: [
                "10100 kHz - 10150 kHz",
                "10050 kHz - 10200 kHz",
                "10100 kHz - 10200 kHz"
            ]
        },
        {
            questionText: "Zakres częstotliwości przeznaczony dla służby amatorskiej w paśmie 20 m to:",
            questionAnswers: [
                "14000 kHz - 14350 kHz",
                "14000 kHz - 14450 kHz",
                "14100 kHz - 14350 kHz"
            ]
        },
        {
            questionText: "Zakres częstotliwości przeznaczony dla służby amatorskiej w paśmie 17 m to:",
            questionAnswers: [
                "18068 kHz - 18168 kHz",
                "18050 kHz - 18250 kHz",
                "18000 kHz - 18168 kHz"
            ]
        },
        {
            questionText: "Zakres częstotliwości przeznaczony dla służby amatorskiej w paśmie 15 m to:",
            questionAnswers: [
                "21000 kHz - 21450 kHz",
                "21000 kHz - 21500 kHz",
                "21100 kHz - 21450 kHz"
            ]
        },
        {
            questionText: "Zakres częstotliwości przeznaczony dla służby amatorskiej w paśmie 12 m to:",
            questionAnswers: [
                "24890 kHz - 24990 kHz",
                "24690 kHz - 24990 kHz",
                "24680 kHz - 24990 kHz"
            ]
        },
        {
            questionText: "Zakres częstotliwości przeznaczony dla służby amatorskiej w paśmie 10 m to:",
            questionAnswers: [
                "28000 kHz - 29700 kHz",
                "28500 kHz - 29800 kHz",
                "28000 kHz - 29500 kHz"
            ]
        },
        {
            questionText: "Zakres częstotliwości przeznaczony dla służby amatorskiej w paśmie 6 m to:",
            questionAnswers: [
                "50 MHz - 52 MHz",
                "50 MHz - 54 MHz",
                "50 MHz - 53,5 MHz"
            ]
        },
        {
            questionText: "Zakres częstotliwości przeznaczony dla służby amatorskiej w paśmie 2 m to:",
            questionAnswers: [
                "144 MHz - 146 MHz",
                "144 MHz - 148 MHz",
                "143 MHz - 146 MHz"
            ]
        },
        {
            questionText: "Co jest bandpan IARU?",
            questionAnswers: [
                "podział zakresów częstotliwości na segmenty przeznaczone dla poszczególnych rodzajów emisji lub kanały robocze",
                "podział częstotliwości osobno nadawczych i odbiorczych",
                "plan przydziału częstotliwości dla poszczególnych krajów"
            ]
        },
        {
            questionText: "Czy dopuszcza się w band planie IARU możliwość pracy emisją jednowstęgową (SSB) w zakresie częstotliwości 10100 kHz ? 10150 kHz (pasmo 30 m)?",
            questionAnswers: [
                "dopuszcza się użycie SSB w sytuacjach bezpośredniego zagrożenia dla bezpieczeństwa życia i mienia i wyłącznie przez stacje uczestniczące w akcji ratunkowej",
                "nie ma żadnych ograniczeń co do stosowanych emisji",
                "jest całkowity zakaz używania emisji jednowstęgowej w tym zakresie"
            ]
        },
        {
            questionText: "Jaki jest odstęp między częstotliwością nadawczą a odbiorczą przemienników pracujących w paśmie 2 m?",
            questionAnswers: [
                "600 kHz",
                "650 kHz",
                "800 kHz"
            ]
        },
        {
            questionText: "Jak nazywa się organ międzynarodowy ustalający ogólnoświatowe zasady wykonywania działalności telekomunikacyjnej i radiokomunikacyjnej?",
            questionAnswers: [
                "Międzynarodowy Związek Telekomunikacyjny (ITU)",
                "Organizacja Narodów Zjednoczonych (ONZ)",
                "Światowa Organizacja Handlu (WTO)"
            ]
        },
        {
            questionText: "Gdzie mieści się siedziba Międzynarodowego Związku Telekomunikacyjnego (ITU)?",
            questionAnswers: [
                "w Genewie",
                "w Nowym Jorku",
                "w Wiedniu"
            ]
        },
        {
            questionText: "Ile krajów zrzesza Międzynarodowy Związek Telekomunikacyjny?",
            questionAnswers: [
                "150-200",
                "50-100",
                "100-150"
            ]
        },
        {
            questionText: "Jaki organ Międzynarodowego Związku Telekomunikacyjnego (ITU) decyduje o przeznaczeniach poszczególnych zakresów częstotliwości dla różnych służb radiokomunikacyjnych?",
            questionAnswers: [
                "Światowe Konferencje Radiokomunikacyjne",
                "Rada Międzynarodowego Związku Telekomunikacyjnego (ITU)",
                "Biuro Radiokomunikacji ITU"
            ]
        },
        {
            questionText: "Jaki dokument obowiązujący wszystkie kraje członkowskie Międzynarodowego Związku Telekomunikacyjnego (ITU) określa zasady wykonywania służby radiokomunikacyjnej amatorskiej i służby amatorskiej satelitarnej oraz wymienia przyznane tym służbom zakresy częstotliwości?",
            questionAnswers: [
                "Regulamin Radiokomunikacyjny (Radio Regulations) ITU",
                "Konstytucja ITU",
                "Konwencja ITU"
            ]
        },
        {
            questionText: "W którym roku Rzeczpospolita Polska przystąpiła do Międzynarodowego Związku Telekomunikacyjnego (ITU)?",
            questionAnswers: [
                "1921",
                "1935",
                "1956"
            ]
        },
        {
            questionText: "Jak brzmi definicja służby amatorskiej zamieszczona w Regulaminie Radiokomunikacyjnym Międzynarodowego Związku Telekomunikacyjnego (ITU)?",
            questionAnswers: [
                "służba radiokomunikacyjna mająca na celu samokształcenie, wzajemne komunikowanie się i eksperymenty techniczne prowadzone przez amatorów, to jest przez odpowiednio upoważnione osoby interesujące się techniką radiową wyłącznie z pobudek osobistych, bez celów zarobkowych",
                "służba radiokomunikacyjna wykonywana przez radioamatorów w celu nawiązywania wzajemnych znajomości i wymiany informacji technicznych",
                "służba radiokomunikacyjna mająca na celu badanie propagacji fal radiowych w zakresach krótkofalowym i ultrakrótkofalowym oraz warunków meteorologicznych"
            ]
        },
        {
            questionText: "Regulamin Radiokomunikacyjny ITU dzieli świat na trzy regiony. W którym regionie radiokomunikacyjnym znajduje się Polska?",
            questionAnswers: [
                "w pierwszym",
                "w trzecim",
                "w drugim"
            ]
        },
        {
            questionText: "Czy Regulamin Radiokomunikacyjny ITU przewiduje wykorzystanie stacji amatorskich w akcjach humanitarnych, niesienia pomocy w przypadkach katastrof, klęsk żywiołowych i innych zagrożeń?",
            questionAnswers: [
                "usilnie zaleca się wykorzystywanie stacji amatorskich w powyższych przypadkach",
                "nie zezwala na takie wykorzystanie stacji amatorskich",
                "niezbędny jest specjalny wpis do pozwolenia radioamatorskiego"
            ]
        },
        {
            questionText: "Czy Regulamin Radiokomunikacyjny reguluje zasady przyznawania znaków wywoławczych stacjom amatorskim?",
            questionAnswers: [
                "tak, Regulamin Radiokomunikacyjny określa ściśle zasady przyznawania znaków",
                "nie, regulują to przepisy krajowe",
                "nie, znak wywoławczy obiera sobie sam operator stacji"
            ]
        },
        {
            questionText: "Czy postanowienia Regulaminu Radiokomunikacyjnego ITU dotyczące służby amatorskiej obowiązuj również w służbie amatorskiej satelitarnej?",
            questionAnswers: [
                "tak, obowiązują",
                "nie, obowiązują odrębne przepisy",
                "nie obowiązują żadne przepisy"
            ]
        },
        {
            questionText: "Co zgodnie z Regulaminem Radiokomunikacyjnym ITU musi zapewnić operator amatorskiej orbitalnej stacji satelitarnej?",
            questionAnswers: [
                "niezwłoczne zdalne wyłączenie amatorskiej stacji satelitarnej w przypadku powodowania przez nią szkodliwych zakłóceń dla innych służb radiokomunikacyjnych",
                "nadawanie przez amatorską stację satelitarną jej znaku wywoławczego",
                "nadawanie przez amatorską stację satelitarną komunikatów meteorologicznych"
            ]
        },
        {
            questionText: "Jak nazywa się organ międzynarodowy zrzeszający krajowe administracje łączności z terenu Europy?",
            questionAnswers: [
                "Europejska Konferencja Administracji Pocztowych i Telekomunikacyjnych (CEPT)",
                "Rada Europy (EC)",
                "Organizacja Bezpieczeństwa i Współpracy w Europie (OBWE)"
            ]
        },
        {
            questionText: "Gdzie mieści się siedziba Europejskiego Biura Radiokomunikacji (ERO)?",
            questionAnswers: [
                "w Kopenhadze",
                "w Brukseli",
                "w Helsinkach"
            ]
        },
        {
            questionText: "Jakiego rodzaju dokumenty regulujące działalność radiokomunikacyjną w Europie przyjmuje i wprowadza Europejska Konferencja Administracji Pocztowych i Telekomunikacyjnych (CEPT) i publikuje Europejskie Biuro Radiokomunikacji (ERO)?",
            questionAnswers: [
                "decyzje, zalecenia i raporty",
                "decyzje",
                "decyzje i zalecenia"
            ]
        },
        {
            questionText: "Jakie dokumenty Europejskiej Konferencji Administracji Pocztowych i Telekomunikacyjnych (CEPT) regulują sprawy międzynarodowego uznawania pozwoleń i międzynarodowych wymagań egzaminacyjnych w służbie amatorskiej?",
            questionAnswers: [
                "Zalecenia CEPT T/R 61-01 i T/R 61-02",
                "Uchwały Komitetu Komunikacji Elektronicznej CEPT",
                "Zalecenia CEPT T/R 22-01 i T/R 22-02"
            ]
        },
        {
            questionText: "Przez jaki okres czasu może posiadacz międzynarodowego pozwolenia amatorskiego zgodnego z zaleceniem CEPT T/R 61-01 pracować z terytorium innego kraju uznającego to zalecenie, bez konieczności uzyskiwania pozwolenia od miejscowej administracji łączności?",
            questionAnswers: [
                "3 miesiące",
                "1 miesiąc",
                "1 rok"
            ]
        },
        {
            questionText: "Czy przepisy Międzynarodowego Związku Telekomunikacyjnego (ITU) i Europejskiej Konferencji Administracji Pocztowych i Telekomunikacyjnych (CEPT) wprowadzają obowiązkowy wymóg umiejętności odbioru i nadawania znaków w kodzie Morse-a przy egzaminie na świadectwo radiooperatora w służbie amatorskiej?",
            questionAnswers: [
                "pozostawiaj powyższy wymóg do decyzji krajowych administracji łączności",
                "wprowadzają wymóg jako obowiązkowy",
                "znoszą całkowicie powyższy wymóg"
            ]
        },
        {
            questionText: "Kto określa maksymalną moc wyjściową radiostacji amatorskiej podawaną w pozwoleniu?",
            questionAnswers: [
                "krajowa administracja łączności",
                "Międzynarodowy Związek Telekomunikacyjny (ITU)",
                "Europejskie Biuro Radiokomunikacji (ERO)"
            ]
        },
        {
            questionText: "Jaka organizacja reprezentuje służbę amatorską na forum międzynarodowym?",
            questionAnswers: [
                "Międzynarodowy Związek Radioamatorów (IARU)",
                "Międzynarodowy Związek Telekomunikacyjny (ITU)",
                "Europejskie Biuro Radiokomunikacji (ERO)"
            ]
        },
        {
            questionText: "Ile organizacji regionalnych składa się na ogólnoświatowy Międzynarodowy Związek Radioamatorów (IARU ? the International Amateur Radio Union)?",
            questionAnswers: [
                "trzy",
                "cztery",
                "pięć"
            ]
        },
        {
            questionText: "W którym roku i w jakim miejscu powstał Międzynarodowy Związek Radioamatorów (IARU)?",
            questionAnswers: [
                "w roku 1925 w Paryżu",
                "w roku 1930 w Genewie",
                "w roku 1910 w Berlinie"
            ]
        },
        {
            questionText: "W którym roku powstał Polski Związek Krótkofalowców (PZK)?",
            questionAnswers: [
                "w roku 1930",
                "w roku 1924",
                "w roku 1946"
            ]
        },
        {
            questionText: "Jaki organ krajowy reguluje i kontroluje pracę stacji amatorskich, przeprowadza egzaminy na świadectwa operatora urządzeń radiowych i wydaje pozwolenia w służbie amatorskiej?",
            questionAnswers: [
                "Prezes Urzędu Komunikacji Elektronicznej",
                "Minister właściwy do spraw łączności",
                "Minister właściwy do spraw wewnętrznych"
            ]
        },
        {
            questionText: "Jaki podstawowy akt prawny reguluje działalność telekomunikacyjną i radiokomunikacyjną w Polsce?",
            questionAnswers: [
                "ustawa Prawo telekomunikacyjne",
                "statut Urzędu Komunikacji Elektronicznej (UKE)",
                "ustawa Prawo ochrony środowiska"
            ]
        },
        {
            questionText: "W jakim dokumencie określone są zakresy częstotliwości przeznaczone w Polsce dla służby amatorskiej i służby amatorskiej satelitarnej?",
            questionAnswers: [
                "w rozporządzeniu Rady Ministrów w sprawie Krajowej Tablicy Przeznaczeń Częstotliwości",
                "w ustawie Prawo telekomunikacyjne",
                "w decyzjach Prezesa Urzędu Komunikacji Elektronicznej"
            ]
        },
        {
            questionText: "Czy stosowane w Krajowej Tablicy Przeznaczeń Częstotliwości określenie służba pierwszej ważności oznacza, że:",
            questionAnswers: [
                "służba taka może żądać ochrony przed szkodliwymi zakłóceniami ze strony stacji tej samej lub innych służb, którym częstotliwości mogą zostać przydzielone w późniejszym terminie, służba taka nie może powodować szkodliwych zakłóceń w pracy stacji służb pierwszej ważności, którym przydzielono częstotliwości lub mogą być przydzielone w późniejszym terminie",
                "służba taka jest chroniona przed szkodliwymi zakłóceniami ze strony służb drugiej ważności",
                "służba taka może żądać ochrony przed szkodliwymi zakłóceniami ze strony stacji tej samej lub innych służb, którym częstotliwości mogą zostać przydzielone w późniejszym terminie"
            ]
        },
        {
            questionText: "Czy stosowane w Krajowej Tablicy Przeznaczeń Częstotliwości określenie służba drugiej ważności - oznacza, że:",
            questionAnswers: [
                "służba taka nie może powodować szkodliwych zakłóceń w pracy stacji służb pierwszej ważności, którym przydzielono częstotliwości lub mogą być przydzielone w późniejszym terminie; służba taka nie może żądać ochrony przed szkodliwymi zakłóceniami ze strony stacji służb pierwszej ważności; którym przydzielono częstotliwości lub mogą być przydzielone w późniejszym terminie; służba taka może jednak żądać ochrony przed szkodliwymi zakłóceniami ze strony stacji tej samej lub innych służb drugiej ważności, którym częstotliwości mogą być przydzielone w późniejszym terminie.",
                "służba taka nie może powodować szkodliwych zakłóceń w pracy stacji służb pierwszej ważności, którym przydzielono częstotliwości lub mogą być przydzielone w późniejszym terminie",
                "służba taka może żądać ochrony przed szkodliwymi zakłóceniami ze strony stacji tej samej lub innych służb drugiej ważności, którym częstotliwości mogą być przydzielone w późniejszym terminie"
            ]
        },
        {
            questionText: "Jaki dokument określa kategorie pozwoleń w służbie amatorskiej i dozwolone moce wyjściowe radiostacji amatorskiej?",
            questionAnswers: [
                "rozporządzenie ministra właściwego do spraw łączności",
                "ustawa Prawo telekomunikacyjne",
                "zarządzenie Prezesa Urzędu Komunikacji Elektronicznej"
            ]
        },
        {
            questionText: "Do czego upoważnia świadectwo operatora klasy A w służbie radiokomunikacyjnej amatorskiej?",
            questionAnswers: [
                "do uzyskania pozwolenia amatorskiego kategorii 1",
                "do uzyskania pozwolenia amatorskiego kategorii 3",
                "wyłącznie do pracy na radiostacji klubowej"
            ]
        },
        {
            questionText: "Do czego upoważnia świadectwo operatora klasy C w służbie radiokomunikacyjnej amatorskiej?",
            questionAnswers: [
                "do uzyskania pozwolenia amatorskiego kategorii 3",
                "do uzyskania pozwolenia amatorskiego kategorii 2",
                "do organizowania zawodów w amatorskiej radiolokacji sportowej"
            ]
        },
        {
            questionText: "Na jaki okres czasu wydawane są indywidualne pozwolenia amatorskie kategorii 1 i 3?",
            questionAnswers: [
                "10 lat",
                "15 lat",
                "dożywotnio"
            ]
        },
        {
            questionText: "Na jaki okres czasu wydawane są pozwolenia amatorskie kategorii 5?",
            questionAnswers: [
                "5 lat",
                "10 lat",
                "15 lat"
            ]
        },
        {
            questionText: "Jaka jest maksymalna moc wyjściowa radiostacji amatorskiej w przypadku pozwolenia kategorii 1 uzyskanego po raz pierwszy?",
            questionAnswers: [
                "500 watów",
                "50 watów",
                "250 watów"
            ]
        },
        {
            questionText: "Jaka jest maksymalna moc wyjściowa radiostacji amatorskiej w przypadku pozwolenia kategorii 3?",
            questionAnswers: [
                "100 watów",
                "15 watów",
                "150 watów"
            ]
        },
        {
            questionText: "Jaka jest moc maksymalna wyjściowa radiostacji amatorskiej w przypadku pozwolenia kategorii 5?",
            questionAnswers: [
                "50 watów dla nadajnika poniżej 30MHz a 15 watów dla nadajnika powyżej 30MHz",
                "50 watów",
                "150 watów"
            ]
        },
        {
            questionText: "Jaka jest maksymalna moc wyjściowa radiostacji w przypadku pozwolenia dodatkowego?",
            questionAnswers: [
                "1500 watów",
                "500 watów",
                "1000 watów"
            ]
        },
        {
            questionText: "W jakich zakresach krótkofalowych może pracować operator posiadający pozwolenie kategorii 1?",
            questionAnswers: [
                "we wszystkich zakresach częstotliwości przeznaczonych dla służby radiokomunikacyjnej amatorskiej na terytorium RP",
                "3500 - 3800 kHz oraz 7000 - 7100 kHz",
                "7000 - 7100 kHz oraz 28000 - 29700 kHz"
            ]
        },
        {
            questionText: "W jakich zakresach częstotliwości może pracować operator posiadający pozwolenie kategorii 3?",
            questionAnswers: [
                "1,81-2 MHz; 3,5-3,8 MHz; 7-7,2 MHz; 14-14,35 MHz; 21-21,45 MHz; 28-29,7 MHz, 144-146 MHz; 430-440 MHz oraz 10-10,5 GHz.",
                "28000-29700 kHz oraz 144-146 MHz",
                "28000-29700 kHz oraz 430-440 MHz"
            ]
        },
        {
            questionText: "Jaki jest minimalny wiek, w którym można przystąpić do egzaminu i uzyskać świadectwo operatora urządzeń radiowych w służbie amatorskiej oraz uzyskać pozwolenie dla służby radiokomunikacyjnej amatorskiej?",
            questionAnswers: [
                "10 lat dla uzyskania świadectwa klasy C oraz 15 lat dla uzyskania świadectwa klasy A",
                "15 lat dla uzyskania świadectwa klasy A i C",
                "nie określono minimalnego wieku"
            ]
        },
        {
            questionText: "Jakimi rodzajami emisji radiowych wolno pracować operatorowi w służbie amatorskiej w zakresie częstotliwości 50-52 MHz?",
            questionAnswers: [
                "wszystkimi rodzajami emisji z wyjątkiem F3E",
                "wyłącznie emisją A1A (telegrafia)",
                "wyłącznie emisją F3E (telefonia z modulacją częstotliwości)"
            ]
        },
        {
            questionText: "Jakimi rodzajami emisji radiowych i z jaką mocą wolno pracować operatorowi w służbie amatorskiej w zakresie częstotliwości 135,7-137,8 kHz?",
            questionAnswers: [
                "wyłącznie emisją A1A (telegrafia) z mocą 1 wat e.i.r.p. (równoważna moc promieniowana izotropowo)",
                "wyłącznie emisją A1A (telegrafia) z mocą wyjściową 150 watów",
                "wszystkimi rodzajami emisji z mocą wyjściową 250 watów"
            ]
        },
        {
            questionText: "Jaki dokument określa klasy świadectw operatora radiowego w służbie amatorskiej i wymagania egzaminacyjne na poszczególne klasy świadectw?",
            questionAnswers: [
                "rozporządzenie ministra właściwego do spraw łączności",
                "ustawa Prawo telekomunikacyjne",
                "Krajowa Tablica Przeznaczeń Częstotliwości"
            ]
        },
        {
            questionText: "Jak powinien postąpić operator stacji amatorskiej w razie przypadkowego odebrania wiadomości nie przeznaczonej dla służby amatorskiej?",
            questionAnswers: [
                "zachować treść wiadomości w ścisłej tajemnicy, zaś w przypadku gdy odebrana wiadomość zawiera istotne dla funkcjonowania Pastwa lub porządku publicznego informacje - powiadomić najbliższą jednostkę Urzędu Komunikacji Elektronicznej",
                "rozpowszechnić odebraną wiadomość w internecie",
                "zachować treść wiadomości w ścisłej tajemnicy"
            ]
        },
        {
            questionText: "Czy operator stacji amatorskiej może przekazywać przy pomocy swej radiostacji wiadomości pochodzące od osób trzecich i przeznaczone dla osób trzecich?",
            questionAnswers: [
                "jest to dopuszczalne, jeśli stacja amatorska za wiedzą Urzędu Komunikacji Elektronicznej bierze udział w akcji niesienia pomocy lub likwidacji skutków klęsk żywiołowych i katastrof",
                "jest to dopuszczalne",
                "jest to surowo zabronione"
            ]
        },
        {
            questionText: "Jak często operator radiostacji amatorskiej powinien podawać podczas łączności znak wywoławczy swej stacji?",
            questionAnswers: [
                "tak często, jak jest to w praktyce możliwe, przynajmniej na początku i na kocu każdego nadawania",
                "co pół godziny",
                "nie musi podawać znaku wywoławczego"
            ]
        }
    ]
};

export default questionDataBase;
