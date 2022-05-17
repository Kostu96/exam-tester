// TODO: correct answer always first (but implement anwers shuffle first!)- no need for the aswer to be an object.
// TODO: is questionID needed? Maybe it can be replaced by the array index.

const questionDataBase = {
    cybersecurity: [
        {
            questionID: 0,
            questionText: "Do ataków na integralność należy:",
            questionAnswers: [
                {
                    text: "odtajnienie informacji"
                },
                {
                    text: "odmowa świadczenia usług"
                },
                {
                    text: "manipulacja informacją",
                    isCorrect: true
                },
                {
                    text: "podniesienie poziomu uprawnień"
                }
            ]
        },
        {
            questionID: 1,
            questionText: "Zagwarantowanie, że informacja nie zostanie zmodyfikowana w sposób nieuprawniony, a wszelkie modyfikacje zostaną wykryte to:",
            questionAnswers: [
                {
                    text: "poufność"
                },
                {
                    text: "niezaprzeczalność"
                },
                {
                    text: "uwierzytelnianie"
                },
                {
                    text: "integralność",
                    isCorrect: true
                }
            ]
        },
        {
            questionID: 2,
            questionText: "Krytyczne rozszerzenia certyfikatu X.509:",
            questionAnswers: [
                {
                    text: "muszą zostać zinterpretowane i przetworzone przez aplikacją, aby dany certyfikat mógł zostać wykorzystany.",
                    isCorrect: true
                },
                {
                    text: "są dodatkowo chronione dedykowanymi mechanizmami kryptograficznymi."
                },
                {
                    text: "stanowią zagrożenie, gdyż w wykorzystujących je mechanizmach wykryto luki zabezpieczeń."
                },
                {
                    text: "opisują techniczne parametry mechanizmów, które posłużyły utowrzeniu certyfikatu."
                }
            ]
        },
        {
            questionID: 3,
            questionText: "Który z poniższych protokołów pozwala na uzgodnienie wspólnego klucza pomiędzy komunikującymi się stronami:",
            questionAnswers: [
                {
                    text: "protokół Diffiego-Hellmana",
                    isCorrect: true
                },
                {
                    text: "Digital Signature Algorithm"
                },
                {
                    text: "Advanced Encryption Standard"
                },
                {
                    text: "One-Time Pad"
                }
            ]
        },
        {
            questionID: 4,
            questionText: 'W sieciach bezprzewodowych tryb "WPA2 Enterprise" oznacza, że certyfikaty są wykorzystywane w procesie:',
            questionAnswers: [
                {
                    text: "uwierzytelniania",
                    isCorrect: true
                },
                {
                    text: "szyfrowania hasła współdzielonego użytkownika"
                },
                {
                    text: "żadna z pozostałych odpowiedzi nie jest poprawna"
                },
                {
                    text: "szyfrowania pakietów danych"
                }
            ]
        },
        {
            questionID: 5,
            questionText: "Podkradanie szyfrogramu (Ciphertext stealing) to:",
            questionAnswers: [
                {
                    text: "metoda realizacji kryptograficznej funkcji skrótu"
                },
                {
                    text: "metoda ataku kruptograficznego z wykorzystaniem wybranego szyfrogramu"
                },
                {
                    text: "metoda pozwalająca na szyfrowanie wiadomości o długości mniejszej niż wielokrotność bloku algorytmu szyfrującego (padding)",
                    isCorrect: true
                },
                {
                    text: "metoda ataku kryptograficznego polegająca na wykradaniu szyfrogramu z pamięci operacyjnej atakowanego urządzenia"
                }
            ]
        },
        {
            questionID: 6,
            questionText: "Podatność SQLI (SQL Injection) należy do kategorii:",
            questionAnswers: [
                {
                    text: "odmowy świadczenia usług"
                },
                {
                    text: "błędów implementacji",
                    isCorrect: true
                },
                {
                    text: "podszywania"
                },
                {
                    text: "żadnej z wymienionych"
                }
            ]
        },
        //{
        //    questionID: 7, TODO: multiple choice
        //    questionText: "Dostęp o charakterze zamkniętym ma następującą cechę:",
        //    questionAnswers: [
        //        {
        //            text: "wykorzystywany jest dla ruchu wychodzącego do sieci Internet"
        //        },
        //        {
        //            text: "jest bardziej restrykcyjny niż dostęp o charakterze otwartym",
        //            isCorrect: true
        //        },
        //        {
        //            text: "jest mniej restrykcyjny niż dostęp o charakterze otwartym"
        //        },
        //        {
        //            text: "wykorzystywany jest dla ruchu przychodzącego z sieci Internet",
        //            isCorrect: true
        //        }
        //    ]
        //},
        {
            questionID: 8,
            questionText: "W procesie żądania certyfikatu, klient:",
            questionAnswers: [
                {
                    text: "generuje klucz publiczny i prywatny, a następnie przesyła ten drugi urzędowu certyfikacji (CA) jako część żądania CSR."
                },
                {
                    text: "generuje klucz publiczny i prywatny, a następnie przesyła ten pierwszy urzędowu certyfikacji (CA) jako część żądania CSR.",
                    isCorrect: true
                },
                {
                    text: "przed wysłaniem żądania CSR sprawdza, czy certyfikat CA jest samo-podpisany (self-signed) - jęsli nie, rezygnuje z próby uzyskania certyfikatu."
                },
                {
                    text: "przesyła urzędowi certyfikacji (CA) żądanie CSR, a CA generuje klucz prywatny i publiczny klienta."
                }
            ]
        },
        {
            questionID: 9,
            questionText: "W którym trybie pracy szyfrowania z wykorzystaniem algorytmów symetrycznyh zaobserwować mżna takie same bloki szyfrogramu dla takich samych bloków tekstu jawnego:",
            questionAnswers: [
                {
                    text: "CFB"
                },
                {
                    text: "ECB",
                    isCorrect: true
                },
                {
                    text: "CBC"
                },
                {
                    text: "CTR"
                }
            ]
        },
        {
            questionID: 10,
            questionText: "Zaznacz zdanie prawdziwe dla systemu anonimizującego TOR (The Onion Router):",
            questionAnswers: [
                {
                    text: "wykorzystuje trzy wartstwy węzłów pośredniczących",
                    isCorrect: true
                },
                {
                    text: "wykorzystuje dwie wartstwy węzłów pośredniczących"
                },
                {
                    text: "dla podniesienia bezpieczeństwa dwukrotnie szyfruje dane"
                },
                {
                    text: "szyfruje dane kluczami asymetrycznymi"
                }
            ]
        },
        {
            questionID: 11,
            questionText: "Rozwiązanie Pretty Good Privacy (PGP) wykorzystuje:",
            questionAnswers: [
                {
                    text: "certyfikaty w formacie X.509."
                },
                {
                    text: "sieć serwerów SCEP."
                },
                {
                    text: "model zaufania typu user-centric",
                    isCorrect: true
                },
                {
                    text: "hierachiczny (strict hierachy) model zaufania"
                }
            ]
        },
        {
            questionID: 12,
            questionText: "Klasyfikacja zagrożeń ze względu na naturę podatności obejmuje kategorię:",
            questionAnswers: [
                {
                    text: "ataków wykorzystujących sposób implementacji",
                    isCorrect: true
                },
                {
                    text: "ataków wewnątrz sieci lokalnej"
                },
                {
                    text: "ataków rozproszonych"
                },
                {
                    text: "ataków celowanych"
                }
            ]
        },
        //{
        //    questionID: 13, TODO: multiple choice
        //    questionText: "Zaznacz, w których rozwiązaniach wykorzystywane są typowe certyfikaty X.509:",
        //    questionAnswers: [
        //        {
        //            text: "rozwiązanie SecureBoot"
        //        },
        //        {
        //            text: "podpisywanie sterowników w systemie Windows",
        //            isCorrect: true
        //        },
        //        {
        //            text: "uwierzytelnianie i autoryzacja protokołem Kerberos"
        //        },
        //        {
        //            text: "podpisywanie aplikacji na platformie Android",
        //            isCorrect: true
        //        }
        //    ]
        //},
        {
            questionID: 14,
            questionText: "Wersja 3 standardu X.509 różni się od wersji 2 wprowadzeniem:",
            questionAnswers: [
                {
                    text: "nowych pól: Issuer Unique ID i Subject Unique ID."
                },
                {
                    text: "mozliwości użycia szyfrowania AES."
                },
                {
                    text: "mechanizmu rozszerzeń (extensions) certyfikatu.",
                    isCorrect: true
                },
                {
                    text: "wykorzystania czasu UTC w polach dotyczących czasu ważności certyfikatu."
                }
            ]
        },
        {
            questionID: 15,
            questionText: "Do ataków na autentyczność należy:",
            questionAnswers: [
                {
                    text: "manipulacja informacją"
                },
                {
                    text: "odmowa świadczenia usług"
                },
                {
                    text: "odtajnienie informacji"
                },
                {
                    text: "podszywanie",
                    isCorrect: true
                }
            ]
        },
        {
            questionID: 16,
            questionText: "Silna odporność na kolizję kryptograficznej funkcji skrótu polega na:",
            questionAnswers: [
                {
                    text: "trudności w znalezieniu wiadomości o zadanej wartości funkcji skrótu"
                },
                {
                    text: "pożądanie dużej złożoności obliczeniowej kryptograficznej funkcji skrótu"
                },
                {
                    text: "zmianie wartości funkcji skrótu przy modyfikacji wiadomości"
                },
                {
                    text: "trudności w znalezieniu dwóch wiadomości, dla któych wynik kryptograficznej funkcji skrótu byłby taki sam",
                    isCorrect: true
                }
            ]
        },
        //{
        //    questionID: 17, TODO: multiple choice
        //    questionText: "W atakach DDoS tzw. agencji (boty) są wykorzystywane do:",
        //    questionAnswers: [
        //        {
        //            text: "odpatcia ataku poprzez zmianę adresu IP serwisu"
        //        },
        //        {
        //            text: "odnalezienia źródła ataku"
        //        },
        //        {
        //            text: "generowania strumienia ruchu",
        //            isCorrect: true
        //        },
        //        {
        //            text: "ukrycia tożsamości napastnika",
        //            isCorrect: true
        //        }
        //    ]
        //},
    ],

    graphics: [
        {
            questionID: 1,
            questionText: "Widzenie skotopowe zapewniają:",
            questionAnswers: [
                {
                    text: "pręciki",
                    isCorrect: true
                },
                {
                    text: "czopki"
                }
            ]
        },
        {
            questionID: 2,
            questionText: "Widzenie fotopowe zapewniają:",
            questionAnswers: [
                {
                    text: "czopki",
                    isCorrect: true
                },
                {
                    text: "pręciki"
                }
            ]
        },
        {
            questionID: 3,
            questionText: "Dwa krzyżujące się odcinki mogą mieć:",
            questionAnswers: [
                {
                    text: "dodatnią liczbę punktów wspólnych (1, 2, 3...)"
                },
                {
                    text: "0 albo 1 pktów wspólnych"
                },
                {
                    text: "dowolną liczbę pktów wspólnych (0, 1, 2...)",
                    isCorrect: true
                }
            ]
        },
        {
            questionID: 4,
            questionText: "Algorytm Bresenhama jest algorytmem:",
            questionAnswers: [
                {
                    text: "parametrycznym"
                },
                {
                    text: "warunkowym",
                    isCorrect: true
                },
                {
                    text: "strukturalnym"
                },
                {
                    text: "rekurencyjnym"
                }
            ]
        },
        {
            questionID: 5,
            questionText: "Do modeli cieniowania nie należy:",
            questionAnswers: [
                {
                    text: "model Macha",
                    isCorrect: true
                },
                {
                    text: "model Phonga"
                },
                {
                    text: "model Gourauda"
                }
            ]
        },
        {
            questionID: 6,
            questionText: "W grafice wektorowej:",
            questionAnswers: [
                {
                    text: "obraz składa się z odcinków i wyznaczanie obrazu polega na wybieraniu koloru dla poszczególnego obiektu"
                },
                {
                    text: "obraz składa się z pixeli i wyznaczanie obrazu polega na wybieraniu koloru dla poszczególnego pixela"
                },
                {
                    text: "obraz składa się z odcinków i tworzenie obrazu polega na rysowaniu poszczególnych odcinków",
                    isCorrect: true
                },
                {
                    text: "obraz składa się z pixeli i tworzenie obrazu polega na rysowaniu kolejnych pixeli"
                }
            ]
        },
        {
            questionID: 7,
            questionText: "W modelu CMYK składowymi są:",
            questionAnswers: [
                {
                    text: "kolory: czerwony, zielony, niebieski."
                },
                {
                    text: "kolory: cyjan, magenta i żółty.",
                    isCorrect: true
                },
                {
                    text: "odcień oraz nasycenie."
                },
                {
                    text: "chrominancje U i V."
                }
            ]
        },
        {
            questionID: 8,
            questionText: "Co nazywamy szkieletem zbioru:",
            questionAnswers: [
                {
                    text: "zbiór pixeli otrzymany w wyniku cyklicznego odrzucania pixeli konturu nie będących pixelami powtarzalnymi",
                    isCorrect: true
                },
                {
                    text: "zbiór pixeli złożony z pixeli powtarzalnych"
                }
            ]
        },
        {
            questionID: 9,
            questionText: "Który filtr cyfrowy rozmazuje obraz:",
            questionAnswers: [
                {
                    text: "filtr dolnoprzepustowy",
                    isCorrect: true
                },
                {
                    text: "filtr górnoprzepustowy"
                },
                {
                    text: "filtr medianowy"
                },
                {
                    text: "filtr Laplace'a"
                }
            ]
        },
        {
            questionID: 10,
            questionText: "Który algorytm umożliwia rysowanie wygładzonego odcinka:",
            questionAnswers: [
                {
                    text: "antialiasing",
                    isCorrect: true
                },
                {
                    text: "aliasing"
                }
            ]
        },
        {
            questionID: 11,
            questionText: "światło odbite składa się z trzech składowych. Jaka składowa tam nie występuje?",
            questionAnswers: [
                {
                    text: "składowa emisyjna",
                    isCorrect: true
                },
                {
                    text: "składowa zwierciadlana"
                },
                {
                    text: "składowa rozproszona"
                }
            ]
        },
        {
            questionID: 12,
            questionText: "Filtr wygładzający (zwłaszcza krawędzie) to:",
            questionAnswers: [
                {
                    text: "medianowy"
                },
                {
                    text: "dolnoprzepustowy",
                    isCorrect: true
                },
                {
                    text: "górnoprzepustowy"
                },
                {
                    text: "La Place'a"
                }
            ]
        },
        {
            questionID: 13,
            questionText: "Teoria postrzegania trzema barwami to:",
            questionAnswers: [
                {
                    text: "Helmhotza-Younga",
                    isCorrect: true
                },
                {
                    text: "teoria Phonga"
                },
                {
                    text: "teoria Gourauda"
                },
                {
                    text: "teoria Macha"
                }
            ]
        },
        {
            questionID: 14,
            questionText: "Algorytm poprzez spójność (sianie) to algorytm:",
            questionAnswers: [
                {
                    text: "wypełniania konturu",
                    isCorrect: true
                },
                {
                    text: "znajdywania konturu"
                },
                {
                    text: "ścieniania"
                },
                {
                    text: "wygładzania"
                }
            ]
        },
        {
            questionID: 15,
            questionText: "CMYK powstał na bazie CMY poprzez dodanie koloru:",
            questionAnswers: [
                {
                    text: "czarnego",
                    isCorrect: true
                },
                {
                    text: "czerwonego"
                },
                {
                    text: "zielonego"
                },
                {
                    text: "niebieskiego"
                }
            ]
        },
        {
            questionID: 16,
            questionText: "Zjawisko zębatości to:",
            questionAnswers: [
                {
                    text: "aliasing",
                    isCorrect: true
                },
                {
                    text: "antyaliasing"
                },
                {
                    text: "metameryzm"
                }
            ]
        },
        {
            questionID: 17,
            questionText: "Algorytm midpoint jest algorytmem:",
            questionAnswers: [
                {
                    text: "strukturalnym"
                },
                {
                    text: "parametrycznym"
                },
                {
                    text: "warunkowym",
                    isCorrect: true
                }
            ]
        },
        {
            questionID: 18,
            questionText: "Krzywa Beziera przechodzi w ogólności:",
            questionAnswers: [
                {
                    text: "przez dwa punkty kontrolne",
                    isCorrect: true
                },
                {
                    text: "przez żadne punkty kontrolne"
                },
                {
                    text: "przez wszystkie punkty kontrolne"
                }
            ]
        },
        {
            questionID: 19,
            questionText: "Co nie jest cechą fontu?",
            questionAnswers: [
                {
                    text: "format zapisu",
                    isCorrect: true
                },
                {
                    text: "krój"
                },
                {
                    text: "stopień"
                },
                {
                    text: "odmiana"
                }
            ]
        },
        {
            questionID: 20,
            questionText: "Który z algorytmów stosuje metodę kompresji stratnej:",
            questionAnswers: [
                {
                    text: "falkowy",
                    isCorrect: true
                },
                {
                    text: "LZW"
                },
                {
                    text: "Huffmana"
                },
                {
                    text: "run length encoding (RLE)"
                }
            ]
        },
        {
            questionID: 21,
            questionText: "Jak nazywa się znak stanowiący połączenie dwóch liter?",
            questionAnswers: [
                {
                    text: "Ligatura",
                    isCorrect: true
                },
                {
                    text: "Metamera"
                },
                {
                    text: "Znak Helmholtza"
                }
            ]
        },
        {
            questionID: 22,
            questionText: "Co to metameryzm?",
            questionAnswers: [
                {
                    text: "przyzwyczajanie się oka do określonego natężenia światła"
                },
                {
                    text: "zjawisko, w/g którego promieniowanie o różnym składzie widmowym, może dawać identyczne wrażenie barwy",
                    isCorrect: true
                },
                {
                    text: "fakt, w/g którego promieniowanie o różnym składzie widmowym nie może dawać identycznego wrażenia barwy"
                }
            ]
        },
        {
            questionID: 23,
            questionText: "Model barw TekHVC:",
            questionAnswers: [
                {
                    text: "został specjalnie do zastosowań w urządzeniach firmy Tektronix"
                },
                {
                    text: "to model w którym odległości między są proporcjonalne do wrażeń barwnych",
                    isCorrect: true
                },
                {
                    text: "model, dzięki któremu zużycie tuszu w drukarkach jest najmniejsze"
                }
            ]
        },
        {
            questionID: 24,
            questionText: "Metody fraktalne należą do metod kompresji:",
            questionAnswers: [
                {
                    text: "stratnej",
                    isCorrect: true
                },
                {
                    text: "bezstratnej"
                }
            ]
        },
        {
            questionID: 25,
            questionText: "W wyniku kwantowania obrazu mogą pojawić się niepożądane krawędzie. Przeciwdziała temu:",
            questionAnswers: [
                {
                    text: "antyaliasing"
                },
                {
                    text: "aliasing"
                },
                {
                    text: "dithering",
                    isCorrect: true
                }
            ]
        },
        {
            questionID: 26,
            questionText: "Krzywą dyskretną nazywamy:",
            questionAnswers: [
                {
                    text: "drogą w której wszystkie piksele ciągu stanawiącego ją, są różne, i żaden z nich nie ma więcej niż dwóch sąsiadów"
                },
                {
                    text: "w każdym przypadku zbiór będący jednocześnie swoim konturem"
                },
                {
                    text: "droga w której pierwszy piksel ciągu stanowiącego drogę jest sąsiadem ostatniego piksela tego ciągu"
                },
                {
                    text: "każdy zbiór spójny pikseli nie zawierający czwórki pikseli tworzących kwadrat",
                    isCorrect: true
                }
            ]
        },
        {
            questionID: 27,
            questionText: "Czym różni się B-kontur od konturu:",
            questionAnswers: [
                {
                    text: "B-kontur jest drogą zamkniętą, kontur niekoniecznie"
                },
                {
                    text: "B-kontur musi mieć jednego sąsiada nienależącego do zbioru, kontur musi mieć jednego B-sąsiada nienależącego do zbioru",
                    isCorrect: true
                },
                {
                    text: "niczym - pojęć używa się zamiennie"
                },
                {
                    text: "pojęcie konturu nie występuje w grafice"
                }
            ]
        },
        {
            questionID: 28,
            questionText: "Przykładem strukturalnej metody rysowania odcinka jest:",
            questionAnswers: [
                {
                    text: "algorytm midpoint"
                },
                {
                    text: "algorytm Bresenhama"
                },
                {
                    text: "Metzgera-Bronsa",
                    isCorrect: true
                },
                {
                    text: "Jordana"
                }
            ]
        },
        {
            questionID: 29,
            questionText: "Który filtr cyfrowy redukuje szumy:",
            questionAnswers: [
                {
                    text: "filtr dolnoprzepustowy"
                },
                {
                    text: "filtr górnoprzepustowy"
                },
                {
                    text: "filtr medianowy",
                    isCorrect: true
                },
                {
                    text: "filtr Laplace'a"
                }
            ]
        },
        {
            questionID: 30,
            questionText: "Algorytm rysowania łuków Honga jest algorytmem:",
            questionAnswers: [
                {
                    text: "parametrycznym",
                    isCorrect: true
                },
                {
                    text: "warunkowym"
                },
                {
                    text: "okantnym"
                },
                {
                    text: "bezwarunkowym"
                }
            ]
        },
        {
            questionID: 31,
            questionText: "Punkt P przesłania odcinek l wtedy gdy:",
            questionAnswers: [
                {
                    text: "P leży na odcinku"
                },
                {
                    text: "P leży na którymś z końcuów odcinku"
                },
                {
                    text: "P jest duży i zasłania cały odcinek"
                },
                {
                    text: "półprosta poziomej, wychodzącej z P w lewą stronę przecina się z l",
                    isCorrect: true
                }
            ]
        },
        {
            questionID: 32,
            questionText: "Przykładem konstruktywnej reprezentacji obiektów graficznych jest:",
            questionAnswers: [
                {
                    text: "woksel(voxel)"
                },
                {
                    text: "wierzchołki A,B,C,D i z nich utworzone ściany ABCD lub CDBA"
                },
                {
                    text: "przeskalowany o 2 sześcian jednostkowy",
                    isCorrect: true
                }
            ]
        },
        {
            questionID: 33,
            questionText: "Przesłanianie ścian jest relacją:",
            questionAnswers: [
                {
                    text: "przechodnią"
                },
                {
                    text: "symetryczną"
                },
                {
                    text: "antysymetryczną"
                },
                {
                    text: "żadną z wymienionych",
                    isCorrect: true
                }
            ]
        },
        {
            questionID: 34,
            questionText: "Do algorytmow warunkowych rysujacych odcinki nie zaliczamy:",
            questionAnswers: [
                {
                    text: "midpoint"
                },
                {
                    text: "Metzgera-Bronsa",
                    isCorrect: true
                },
                {
                    text: "Bresenhama"
                },
                {
                    text: "porownawczy Jordana"
                }
            ]
        },
        {
            questionID: 35,
            questionText: "Probkowanie powierzchni przy jej wygladzaniu może być:",
            questionAnswers: [
                {
                    text: "Wagowe i bezwagowe",
                    isCorrect: true
                },
                {
                    text: "Względne i bezwzględne"
                },
                {
                    text: "Dyskretne i rzeczywiste"
                },
                {
                    text: "Żadna odpowiedzi nie jest poprawna"
                }
            ]
        },
        {
            questionID: 36,
            questionText: "Za pomocą ktorego algorytmu nie narysujesz elipsy:",
            questionAnswers: [
                {
                    text: "Honga"
                },
                {
                    text: "midpoint"
                },
                {
                    text: "Wszystkie odpowiedzi są poprawne"
                },
                {
                    text: "decyzyjnego Jordana",
                    isCorrect: true
                }
            ]
        },
        {
            questionID: 37,
            questionText: "Konturem danego zbioru pikseli nazywamy:",
            questionAnswers: [
                {
                    text: "Zbiór pikseli należących do tego zbioru i mających dokladnie jednego b-sąsiada nie należącego do tego zbioru."
                },
                {
                    text: "Zbiór pikseli należących do tego zbioru i mających co najmniej jednego b-sąsiada nie należącego do tego zbioru.",
                    isCorrect: true
                },
                {
                    text: "Zbiór pikseli należących do tego zbioru i mających co najmniej jednego n-sąsiada nie należącego do tego zbioru."
                },
                {
                    text: "Zbiór pikseli nienależących do tego zbioru i mających co najmniej jednego b-sąsiada należącego do tego zbioru"
                }
            ]
        },
        {
            questionID: 38,
            questionText: "Chcesz wyostrzyć obraz, w super programie od Daciuka użyjesz do tego:",
            questionAnswers: [
                {
                    text: "Filtru dolnoprzepustowego"
                },
                {
                    text: "Laplasjana albo maski Sobela",
                    isCorrect: true
                },
                {
                    text: "Laplasjana"
                },
                {
                    text: "Maski Sobela"
                }
            ]
        },
        {
            questionID: 39,
            questionText: "Ludzkie oko jest w stanie przechowywać wrażenie wzrokowe w czasie",
            questionAnswers: [
                {
                    text: "0.1 ms"
                },
                {
                    text: "0.5 s"
                },
                {
                    text: "0.1 s",
                    isCorrect: true
                },
                {
                    text: "100ns"
                }
            ]
        },
        {
            questionID: 40,
            questionText: "Do modeli teoretycznych kolorów należy",
            questionAnswers: [
                {
                    text: "RGB"
                },
                {
                    text: "CMYK"
                },
                {
                    text: "TekHVC",
                    isCorrect: true
                },
                {
                    text: "YUV"
                }
            ]
        },
        {
            questionID: 41,
            questionText: "Mówiąc o HSV, które zdanie jest falszywe:",
            questionAnswers: [
                {
                    text: "Powstał przez transformacje modelu RGB"
                },
                {
                    text: "Jest rozwinięciem modelu HLS",
                    isCorrect: true
                },
                {
                    text: "Reprezentacją graficzną tego modelu jest odwrócony stożek o podstawie sześciokąta"
                },
                {
                    text: "Na środku podstawy znajduje się kolor biały"
                }
            ]
        },
        {
            questionID: 42,
            questionText: "Rendering to:",
            questionAnswers: [
                {
                    text: "Proces generacji obrazu na podstawie modelu",
                    isCorrect: true
                },
                {
                    text: "Proces transformacji obrazu na podstawie modelu"
                },
                {
                    text: "Dodawanie do CMY skladowej BLACK"
                },
                {
                    text: "Algorytm malarski"
                }
            ]
        },
        {
            questionID: 43,
            questionText: "Wskaz zdanie wybitnie nieprawdziwe:",
            questionAnswers: [
                {
                    text: "Bufor Z to jakiś tam obszar pamięci."
                },
                {
                    text: "Bufor Z pozwalaja wyeliminować z renderowania niewidoczne elementy krzywych."
                },
                {
                    text: "Bufor Z służy do zapisywania tektur.",
                    isCorrect: true
                },
                {
                    text: "Wszystkie odpowiedzi są niepoprawne"
                }
            ]
        },
        {
            questionID: 44,
            questionText: "Co nie ma wpływu na wyznaczanie cieni",
            questionAnswers: [
                {
                    text: "Punkt widzenia źródła światła"
                },
                {
                    text: "Punkt widzenia kamery w Tomb Raiderze"
                },
                {
                    text: "Punkt widzenia postaci w Quake'u"
                },
                {
                    text: "Lustro przy którym siedzi Lena",
                    isCorrect: true
                }
            ]
        },
        {
            questionID: 45,
            questionText: "Co nie jest przeksztalceniem morfologicznym obrazu:",
            questionAnswers: [
                {
                    text: "erozja"
                },
                {
                    text: "dylatacja"
                },
                {
                    text: "odszumienie",
                    isCorrect: true
                },
                {
                    text: "erozja i odszumienie"
                }
            ]
        },
        {
            questionID: 46,
            questionText: "Metoda oswietlenia globalnego zależna od położenia obserwatora to:",
            questionAnswers: [
                {
                    text: "radiosity"
                },
                {
                    text: "raytracing",
                    isCorrect: true
                },
                {
                    text: "raindancing"
                },
                {
                    text: "illuminacja"
                }
            ]
        },
        {
            questionID: 47,
            questionText: "Metoda oswietlenia globalnego niezależna od położenia obserwatora to:",
            questionAnswers: [
                {
                    text: "raytracing"
                },
                {
                    text: "antialiasing"
                },
                {
                    text: "radiosity",
                    isCorrect: true
                },
                {
                    text: "vertex shader"
                }
            ]
        },
        {
            questionID: 48,
            questionText: "Radiosity to metoda oświetlenia (rodzaj oswietlenia, nazwa metody):",
            questionAnswers: [
                {
                    text: "globalnego, śledzenia promieni"
                },
                {
                    text: "globalnego, energetyczna",
                    isCorrect: true
                },
                {
                    text: "lokalnego, Gourauda"
                },
                {
                    text: "lokalnego, Phonga"
                }
            ]
        },
        {
            questionID: 49,
            questionText: "Czcionka nie jest:",
            questionAnswers: [
                {
                    text: "Arial"
                },
                {
                    text: "Verdana"
                },
                {
                    text: "Times New Roman"
                },
                {
                    text: "Żadno z wymienionych",
                    isCorrect: true
                }
            ]
        },
        {
            questionID: 50,
            questionText: "Antykwy nie są:",
            questionAnswers: [
                {
                    text: "Ukryte"
                },
                {
                    text: "Belkowe"
                },
                {
                    text: "Klinowe"
                },
                {
                    text: "Poprzeczne",
                    isCorrect: true
                }
            ]
        },
        {
            questionID: 51,
            questionText: "Cyfry nautyczne to:",
            questionAnswers: [
                {
                    text: "Jednolita linia pisma, równa wysokość"
                },
                {
                    text: "Jednolita linia pisma, różna wysokość"
                },
                {
                    text: "Niejednolita linia pisma, różna wysokość",
                    isCorrect: true
                },
                {
                    text: "Niejednolita linia pisma, równa wysokość"
                }
            ]
        },
        {
            questionID: 52,
            questionText: "Język polski nie wyksztalcil:",
            questionAnswers: [
                {
                    text: "Abrewiatur",
                    isCorrect: true
                },
                {
                    text: "Ligatur"
                }
            ]
        },
        {
            questionID: 53,
            questionText: "Format fontów Type 1 opracowano w:",
            questionAnswers: [
                {
                    text: "Adobe",
                    isCorrect: true
                },
                {
                    text: "Apple"
                },
                {
                    text: "HP"
                },
                {
                    text: "IBM"
                }
            ]
        },
        {
            questionID: 54,
            questionText: "Format fontów TrueType opracowano w:",
            questionAnswers: [
                {
                    text: "Microsoft"
                },
                {
                    text: "Apple",
                    isCorrect: true
                },
                {
                    text: "HP"
                },
                {
                    text: "Adobe"
                }
            ]
        },
        {
            questionID: 55,
            questionText: "Format fontów OpenType opracowano w:",
            questionAnswers: [
                {
                    text: "Microsoft i Adobe",
                    isCorrect: true
                },
                {
                    text: "Microsoft i HP"
                },
                {
                    text: "Apple i Adobe"
                },
                {
                    text: "Apple i HP"
                }
            ]
        },
        {
            questionID: 56,
            questionText: "Skladowymi liter w Type 1 są:",
            questionAnswers: [
                {
                    text: "Kubiczne krzywe Beziera",
                    isCorrect: true
                },
                {
                    text: "Krzywe Beziera drugiego stopnia"
                },
                {
                    text: "Krzywe Beziera kubiczne oraz drugiego stopnia"
                },
                {
                    text: "Krzywe Beziera czwartego stopnia"
                }
            ]
        },
        {
            questionID: 57,
            questionText: "Składowymi liter w TrueType są:",
            questionAnswers: [
                {
                    text: "Krzywe Beziera drugiego stopnia"
                },
                {
                    text: "Paraboliczne krzywe Beziera"
                },
                {
                    text: "Krzywe Beziera paraboliczne i drugiego stopnia",
                    isCorrect: true
                },
                {
                    text: "Kubiczne krzywe Beziera"
                }
            ]
        },
        {
            questionID: 58,
            questionText: "Który z Windowsów jako pierwszy w pełni obsługiwał format TrueType?",
            questionAnswers: [
                {
                    text: "XP"
                },
                {
                    text: "3.11"
                },
                {
                    text: "95",
                    isCorrect: true
                },
                {
                    text: "98"
                }
            ]
        },
        {
            questionID: 59,
            questionText: "który symbol oznacza ułożenie w algorytmie Gilla bitow 0010?",
            questionAnswers: [
                {
                    text: "_ - - -"
                },
                {
                    text: "_ _ _ -"
                },
                {
                    text: "_ _ _ _"
                },
                {
                    text: "_ _ - -",
                    isCorrect: true
                }
            ]
        },
        {
            questionID: 60,
            questionText: "Algorytm cienowania wielokątów wykorzystujący interpolacje wektorów normalnych to:",
            questionAnswers: [
                {
                    text: "Algorytm Helmhotza-Younga"
                },
                {
                    text: "Algorytm Phonga",
                    isCorrect: true
                },
                {
                    text: "Algorytm Gourauda"
                },
                {
                    text: "śledzenie promieni"
                }
            ]
        },
        {
            questionID: 61,
            questionText: "Jakiemu fraktalowi odpowiada część wspólna dywanu Sierpińskiego i prostej poprowadzonej przez środek niego:",
            questionAnswers: [
                {
                    text: "zbiorowi Mandelbrota"
                },
                {
                    text: "zbiorowi Julii"
                },
                {
                    text: "zbiorowi Cantora",
                    isCorrect: true
                },
                {
                    text: "kostce Mengera"
                }
            ]
        },
        {
            questionID: 62,
            questionText: "Który z shaderów został wprowadzony w DirectX 11:",
            questionAnswers: [
                {
                    text: "Pixel shader"
                },
                {
                    text: "Vertex shader"
                },
                {
                    text: "Geometry shader"
                },
                {
                    text: "Domain shader",
                    isCorrect: true
                }
            ]
        },
        {
            questionID: 63,
            questionText: "Co nie jest wykonywane podczas postprocessingu?",
            questionAnswers: [
                {
                    text: "desaturacja"
                },
                {
                    text: "głębia ostrości"
                },
                {
                    text: "rozmycie ruchu"
                },
                {
                    text: "odbicia lustrzane",
                    isCorrect: true
                }
            ]
        },
        {
            questionID: 64,
            questionText: "Model barw RGB jest:",
            questionAnswers: [
                {
                    text: "subtraktywny"
                },
                {
                    text: "addytywny",
                    isCorrect: true
                }
            ]
        },
        {
            questionID: 65,
            questionText: "Który z poniższych to język programowania shaderów?",
            questionAnswers: [
                {
                    text: "SPL"
                },
                {
                    text: "HLSL",
                    isCorrect: true
                },
                {
                    text: "HSL"
                },
                {
                    text: "HLSC"
                }
            ]
        },
        {
            questionID: 66,
            questionText: "Który z poniższych to język programowania shaderów?",
            questionAnswers: [
                {
                    text: "GSL"
                },
                {
                    text: "SPL"
                },
                {
                    text: "GLSL",
                    isCorrect: true
                },
                {
                    text: "Perl"
                }
            ]
        },
        {
            questionID: 67,
            questionText: "Ile punktow kontrolnych ma krzywa beziera n-tego stopnia?",
            questionAnswers: [
                {
                    text: "n-1"
                },
                {
                    text: "n"
                },
                {
                    text: "n+1",
                    isCorrect: true
                },
                {
                    text: "n+2"
                }
            ]
        },
        {
            questionID: 68,
            questionText: "Który shader został dodany w DX10?",
            questionAnswers: [
                {
                    text: "Hull Shader"
                },
                {
                    text: "Pixel Shader"
                },
                {
                    text: "Geometry Shader",
                    isCorrect: true
                },
                {
                    text: "Vertex Shader"
                }
            ]
        },
        {
            questionID: 69,
            questionText: "Kiedy wprowadzono teselację?",
            questionAnswers: [
                {
                    text: "DX9"
                },
                {
                    text: "DX10"
                },
                {
                    text: "DX11",
                    isCorrect: true
                }
            ]
        },
        {
            questionID: 70,
            questionText: "Cienowanie wielokątów wykorzystujące interpolacje wartosci obliczonych dla poszczególnych wierzchołków to:",
            questionAnswers: [
                {
                    text: "Metoda energetyczna"
                },
                {
                    text: "Algorytm Phonga"
                },
                {
                    text: "Algorytm Gourauda",
                    isCorrect: true
                },
                {
                    text: "śledzenie promieni"
                }
            ]
        },
        {
            questionID: 71,
            questionText: "Co to jest glif (ang. glyph)?",
            questionAnswers: [
                {
                    text: "pisemna/graficzna reprezentacja znaku",
                    isCorrect: true
                },
                {
                    text: "odstęp pomiędzy wierszami"
                },
                {
                    text: "odstęp pomiędzy znakami"
                },
                {
                    text: "połączenie dwóch znaków w jeden"
                }
            ]
        },
        {
            questionID: 72,
            questionText: "O czopkach można powiedzieć, że:",
            questionAnswers: [
                {
                    text: "działają już w słabym świetle i umożliwiają rozróżnianie barw"
                },
                {
                    text: "działają już w słabym świetle i nie umożliwiają rozróżniania barw"
                },
                {
                    text: "działają w dobrym świetle i umożliwiają postrzeganie barw",
                    isCorrect: true
                },
                {
                    text: "działają w dobrym świetle i nie umożliwiają postrzegania barw"
                }
            ]
        },
        {
            questionID: 73,
            questionText: "Składowe YUV to:",
            questionAnswers: [
                {
                    text: "Kolory: czerwony, zielony, niebieski"
                },
                {
                    text: "Luminancja i dwie chrominancje",
                    isCorrect: true
                },
                {
                    text: "Kolory: zielononiebieski, fioletowy i żółty"
                },
                {
                    text: "Odcień, nasycenie, jasność"
                }
            ]
        },
        {
            questionID: 74,
            questionText: "Jaki shader nie należy do pipeline'u renderującego DX11?",
            questionAnswers: [
                {
                    text: "Vertex Shader"
                },
                {
                    text: "Domain Shader"
                },
                {
                    text: "Compute Shader",
                    isCorrect: true
                },
                {
                    text: "Pixel Shader"
                }
            ]
        },
        {
            questionID: 75,
            questionText: "Co oznacza skrót SIMD?",
            questionAnswers: [
                {
                    text: "Single Instruction Multiple Data",
                    isCorrect: true
                },
                {
                    text: "Shader Information Matrix Data"
                },
                {
                    text: "Structured Information Manipulation Data"
                }
            ]
        },
        {
            questionID: 76,
            questionText: "Co odpowiada za odbicia światła od matowych powierzchni?",
            questionAnswers: [
                {
                    text: "complex"
                },
                {
                    text: "diffuse",
                    isCorrect: true
                },
                {
                    text: "seismic"
                },
                {
                    text: "retro"
                }
            ]
        },
        {
            questionID: 77,
            questionText: "Który z podanych algorytmów nie jest liniowy?",
            questionAnswers: [
                {
                    text: "laplasjan"
                },
                {
                    text: "medianowy",
                    isCorrect: true
                },
                {
                    text: "dolnoprzepustowy"
                },
                {
                    text: "górnoprzepustowy"
                }
            ]
        },
        {
            questionID: 78,
            questionText: "Jaki shader odpowiada za cieniowanie pikseli w DirectX?",
            questionAnswers: [
                {
                    text: "Pixel Shader",
                    isCorrect: true
                },
                {
                    text: "Fragment Shader"
                },
                {
                    text: "Vertex Shader"
                },
                {
                    text: "Geometry Shader"
                }
            ]
        },
        {
            questionID: 79,
            questionText: "Jaki shader odpowiada za cieniowanie pikseli w OpenGL?",
            questionAnswers: [
                {
                    text: "Pixel Shader"
                },
                {
                    text: "Fragment Shader",
                    isCorrect: true
                },
                {
                    text: "Vertex Shader"
                },
                {
                    text: "Geometry Shader"
                }
            ]
        },
        {
            questionID: 80,
            questionText: "Jakie jest rozwinięcie skrótu VBS narzędzia służącego do przeprowadzania symulacji (np. pociągów)?",
            questionAnswers: [
                {
                    text: "Virtual Basic Scripts"
                },
                {
                    text: "Virtual Brutal Sociopath"
                },
                {
                    text: "Virtual Battlespace",
                    isCorrect: true
                },
                {
                    text: "Vertex Basic Simulations"
                }
            ]
        },
        {
            questionID: 81,
            questionText: "Czym jest antialiasing?",
            questionAnswers: [
                {
                    text: "Metodą usuwania szumów"
                },
                {
                    text: "Algorytmem szukania konturu"
                },
                {
                    text: "Algorytmem rysowania linii"
                },
                {
                    text: "Metodą wygładzania obrazu",
                    isCorrect: true
                }
            ]
        },
        {
            questionID: 82,
            questionText: "Które biblioteki graficzne są wysokopoziomowe?",
            questionAnswers: [
                {
                    text: "Vulkan"
                },
                {
                    text: "OpenGL i Direct3D",
                    isCorrect: true
                },
                {
                    text: "OpenGL"
                },
                {
                    text: "Direct3D"
                }
            ]
        },
        {
            questionID: 83,
            questionText: "Na czym operuje shader teselacji?",
            questionAnswers: [
                {
                    text: "Na pixelach"
                },
                {
                    text: "Na trójkątach"
                },
                {
                    text: "Na innych prymitywach"
                },
                {
                    text: "Na łatach (patches)",
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
            questionText: "Siły działające na dipol elektryczny umieszczony w niejednorodnym polu elektrycznym mogą...",
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
            questionText: "Elektron porusza się z pewną prędkością v w polu magnetycznym o indukcji B (rysunek). Jak będzie skierowana siła Lorentza?",
            imageSrc: "img/modern_physics/15.jpg",
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
        },
        {
            questionID: 16,
            questionText: "Czy pole magnetyczne, działając na poruszający się ładunek, zmienia jego energię kinetyczną?",
            questionAnswers: [
                {
                    text: "tak, niezależnie od kąta pomiędzy wektorami B i v"
                },
                {
                    text: "tak, ale tylko jeśli wektory B i v są równoległe"
                },
                {
                    text: "tak, ale tylko jeśli wektory B i v są prostopadłe"
                },
                {
                    text: "nie, niezaleznie od kąta pomiędzy wektorami B i v",
                    isCorrect: true
                }
            ]
        },
        {
            questionID: 17,
            questionText: "Zgodnie z prawem Biota-Savarta, pole magnetyczne wytwarzane przez odcinek przednika ds, przez który płynie prąd o natężeniu I (zwrot jest zgodny z kierunkiem prądu), w punkcie, którego połozenie względem odcinka opisuje wektor r, wynosi:",
            questionAnswers: [
                {
                    text: "dB[wektor] = (μ₀μᵣI)/(4π)*(r[wektor] x ds[wektor])/r²"
                },
                {
                    text: "dB[wektor] = (μ₀μᵣI)/(4π)*(r[wektor] x ds[wektor])/rł"
                },
                {
                    text: "dB[wektor] = (μ₀μᵣI)/(4π)*(ds[wektor] x r[wektor])/r²"
                },
                {
                    text: "dB[wektor] = (μ₀μᵣI)/(4π)*(ds[wektor] x r[wektor])/rł",
                    isCorrect: true
                }
            ]
        },
        {
            questionID: 18,
            questionText: "Przez przewód s płynie prąd o natężeniu I. Jaki będzie kierunek i zwrot wektora indukcji pola magnetycznego pochodzącego od tego przewodnika w punkcie wskazywanym wektorem r?",
            imageSrc: "img/modern_physics/18.jpg",
            questionAnswers: [
                {
                    text: "w lewo (do -x)"
                },
                {
                    text: "w dół (do -y)"
                },
                {
                    text: "w głąb (do -z)"
                },
                {
                    text: "przed \"kartkę\" (do z)",
                    isCorrect: true
                }
            ]
        },
        {
            questionID: 19,
            questionText: "Które z poniższych stwierdzeń jest prawdą?",
            questionAnswers: [
                {
                    text: "Istnieją pojedyncze ładunki magnetyczne (odpowiedniki ładunków elektrycznych)"
                },
                {
                    text: "Linie pola magnetycznego mają swoje początki i konce"
                },
                {
                    text: "linie pola magnetycznego są krzywymi zamkniętymi",
                    isCorrect: true
                },
                {
                    text: "linie pola magnetyczengo mogą być zarówno krzywymi zamkniętymi jak i otwartymi"
                }
            ]
        },
        {
            questionID: 20,
            questionText: "Zgodnie z prawem Gaussa dla magnetyzmu, dywergencja wektora indukcji pola magnetycznego, czyli ∇[wektor]*B[wektor], jest ...",
            questionAnswers: [
                {
                    text: "zawsze równa zeru",
                    isCorrect: true
                },
                {
                    text: "zależna od położenia; w pobliżu biegunów magnetycznych jest niezerowa"
                },
                {
                    text: "zależna od odległości od przewodników z prądem"
                },
                {
                    text: "żadna z odpowiedzi nie jest prawidłowa"
                }
            ]
        },
        {
            questionID: 21,
            questionText: "Przez fragment przewodu o długości ds, umieszczony w polu o indukcji B, płynie prąd o natężeniu I. Siła działająca na ten przewód wynosi:",
            questionAnswers: [
                {
                    text: "0"
                },
                {
                    text: "Ids∇[wektor]*B[wektor]"
                },
                {
                    text: "Ids[wektor]xB[wektor]",
                    isCorrect: true
                },
                {
                    text: "żadna z odpowiedzi nie jest prawidłowa"
                }
            ]
        },
        {
            questionID: 22,
            questionText: "Przez fragment przewodu o długości ds, umieszczony w polu o indukcji B, płynie prąd o natężeniu I. Siła działająca na ten przeówd jest skierowana:",
            imageSrc: "img/modern_physics/22.jpg",
            questionAnswers: [
                {
                    text: "przed \"kartkę\" (do z)"
                },
                {
                    text: "w dół (do -y)"
                },
                {
                    text: "w głąb (do -z)",
                    isCorrect: true
                },
                {
                    text: "w tym przypadku siła będzie wektorem zerowym"
                }
            ]
        },
        {
            questionID: 23,
            questionText: "W próżni mamy wybrany pewnien zamknięty kontur L, powierzchnia ograniczona tym konturem to S. Cyrkulacja wektora indukcji pola magnetycznego wzdłuż konturu L, czyli ∮B ⃗ ⋅​d ⃗ l wynosi:",
            questionAnswers: [
                {
                    text: "zero, niezależnie od prądów płynących przez powierzchnię S"
                },
                {
                    text: "suma prądów przecinających powierzchnię S, niezależnie od ich kierunków, przemnożona przez μ₀"
                },
                {
                    text: "suma prądów przecinających powierzchnię S, z uwzględnieniem ich kierunków (znaków), przemnożona przez μ₀",
                    isCorrect: true
                },
                {
                    text: "żadna z odpowiedzi nie jest prawidłowa"
                }
            ]
        },
        {
            questionID: 24,
            questionText: "Magnes oddala się od metalowej obręczy wzdłuż jej osi (rysunek). W obręczy tej...",
            imageSrc: "img/modern_physics/24.jpg",
            questionAnswers: [
                {
                    text: "popłynie prąd w kierunku zgodnym z ruchem wskazówek zegara (patrząc od strony magnesu)",
                    isCorrect: true
                },
                {
                    text: "popłynie prąd w kierunku przeciwnym do ruchu wskazówek zegara"
                },
                {
                    text: "nie będzie płynąć prąd"
                },
                {
                    text: "za mało informacji, by stwierdzić możliwy efekt"
                }
            ]
        },
        {
            questionID: 25,
            questionText: "Zgodnie z regułą Lenza...",
            questionAnswers: [
                {
                    text: "linie pola magnetycznego w pobliżu przewodnika z prądem są okręgami"
                },
                {
                    text: "linie pola magnetycznego w pobliżu przewodnika z prądem są prostymi"
                },
                {
                    text: "prąd indukowany w przewodniku w wyniku zmian pola magnetycznego przeciwdziała zmianom tego pola",
                    isCorrect: true
                },
                {
                    text: "prąd indukowany w przewodniku w wyniku zmian pola magnetycznego wzmacnia zmiany tego pola"
                }
            ]
        },
        {
            questionID: 26,
            questionText: "Określając zależność między współczynnikiem samoindukcji L solenoidu a koncentracją zwojów n można powiedzieć, że L jest proporcjonalne do",
            questionAnswers: [
                {
                    text: "n"
                },
                {
                    text: "1/n"
                },
                {
                    text: "n²",
                    isCorrect: true
                },
                {
                    text: "1/n²"
                }
            ]
        },
        {
            questionID: 27,
            questionText: "Gęstość energii pola magnetycznego jest proporcjonalna do",
            questionAnswers: [
                {
                    text: "kwadratu natężenia pola magnetycznego"
                },
                {
                    text: "kwadratu indukcji pola magnetycznego"
                },
                {
                    text: "iloczynu natężenia i indukcji pola magnego"
                },
                {
                    text: "wszystkie z odpowiedzi są poprawne",
                    isCorrect: true
                }
            ]
        },
        {
            questionID: 28,
            questionText: "Zgodnie z prawem Faradaya źródłem wirowego pola elektrycznego może być",
            questionAnswers: [
                {
                    text: "tylko zmienne pole magnetyczne",
                    isCorrect: true
                },
                {
                    text: "tylko elektryczny ładunek punktowy lub układ ładunków punktowych"
                },
                {
                    text: "zarówno zmienne pole magnetyczne jak i elektryczne ładunki punktowe"
                },
                {
                    text: "żadna z odpowiedzi nie jest prawidłowa"
                }
            ]
        },
        {
            questionID: 29,
            questionText: "Astronauta twierdzi, że rakieta, którą leci, ma długość 100m (chodzi o długość mierzoną w kierunku ruchu). Jaką długość będzie miała ta rakieta dla obserwatora, od którego rakieta oddala się prędkością 0,8c?",
            questionAnswers: [
                {
                    text: "100m"
                },
                {
                    text: "80m"
                },
                {
                    text: "60m",
                    isCorrect: true
                },
                {
                    text: "40m"
                }
            ]
        },
        {
            questionID: 30,
            questionText: "Astronauta leci rakietą z prędkością 0,6c względem obserwatora na Ziemi. Jakiemu przedziałowi czasu dla obserwatora na Ziemi odpowiada rok dla astronauty?",
            questionAnswers: [
                {
                    text: "1 rok"
                },
                {
                    text: "1,25 roku",
                    isCorrect: true
                },
                {
                    text: "1,6 roku"
                },
                {
                    text: "0,6 roku"
                }
            ]
        },
        {
            questionID: 31,
            questionText: "Z rakiety oddalającej się od Ziemi z prędkością 0,8c wystrzelono do przodu pocisk z prędkością 0,625c względem rakiety. Jaka jest prędkość pocisku względem Ziemi?",
            questionAnswers: [
                {
                    text: "0,95c",
                    isCorrect: true
                },
                {
                    text: "1c"
                },
                {
                    text: "1,425c"
                },
                {
                    text: "0,86c"
                }
            ]
        },
        {
            questionID: 32,
            questionText: "Mamy układ współrzędnych K (w którym mierzymy położenie x i czas t) oraz poruszający się względem niego wzdłuż osi x z prędkością v0 układ K' (w którym mierzymy położenie x' i czas t'). W chwili t = t' = 0 początki układów pokrywały się. Zgodnie z przekształceniami odwrotnymi Lorentza zapiszemy",
            questionAnswers: [
                {
                    text: "x' = (x - v0t)/sqrt(1 - v0^2/c^2)",
                    isCorrect: true
                },
                {
                    text: "x' = (x - v0t)/sqrt(1 - v0/c)"
                },
                {
                    text: "x' = (x + v0t)/sqrt(1 - v0/c)"
                },
                {
                    text: "x' = (x + v0t)/sqrt(1 - v0^2/c^2)"
                }
            ]
        },
        {
            questionID: 33,
            questionText: "Mamy układ współrzędnych K (w którym mierzymy położenie x i czas t) oraz poruszający się względem niego wzdłuż osi x z prędkością v0 układ K' (w którym mierzymy położenie x' i czas t'). W chwili t = t' = 0 początki układów pokrywały się. Zgodnie z przekształceniami Lorentza zapiszemy",
            questionAnswers: [
                {
                    text: "t = (t' + x'*v0/c^2)/sqrt(1 - v0^2/c^2)",
                    isCorrect: true
                },
                {
                    text: "t = (t' - x'*v0/c^2)/sqrt(1 - v0^2/c^2)"
                },
                {
                    text: "t = (t' + x'*v0/c^2)/sqrt(1 - v0/c)"
                },
                {
                    text: "t = (t' - x'*v0/c^2)/sqrt(1 - v0/c)"
                }
            ]
        },
        {
            questionID: 34,
            questionText: "Każda powierzchnia o temperaturze T wyższej niż 0K wypromieniowuje energię. Ilość energii wypromieniowywanej z jednostkowej powierzchni w jednostce czasu jest proporcjonalna do...",
            questionAnswers: [
                {
                    text: "T"
                },
                {
                    text: "T²"
                },
                {
                    text: "Tł"
                },
                {
                    text: "T⁴",
                    isCorrect: true
                }
            ]
        },
        {
            questionID: 35,
            questionText: "Długość fali przy której widmowa zdolność emisyjna ciała doskonale czarnego ma maksimum, ...",
            questionAnswers: [
                {
                    text: "nie zależy od temperatury"
                },
                {
                    text: "rośnie liniowo wraz z temperaturą"
                },
                {
                    text: "jest proporcjonalna do kwadratu temperatury"
                },
                {
                    text: "jest odwrotnie proporcjonalna do temperatury",
                    isCorrect: true
                }
            ]
        },
        {
            questionID: 36,
            questionText: "Podczas obserwacji zjawiska fotoelektrycznego przyłożenie napięcia hamującego pozwala na",
            questionAnswers: [
                {
                    text: "ocenę maksymalnej energii kinetycznej uzyskiwanej przez elektrony",
                    isCorrect: true
                },
                {
                    text: "ocenę energii fotonów będących przyczyną zjawiska fotoelektrycznego"
                },
                {
                    text: "żadna z odpowiedzi (tych dwóch z normalną treścią) nie jest poprawna"
                },
                {
                    text: "obie odpowiedzi (te dwie z normalną treścią) są poprawne"
                }
            ]
        },
        {
            questionID: 37,
            questionText: "Na materiał pada światło. Aby z materiału mógł wydostać się elektron (zjawisko fotoelektryczne) niezbędne jest...",
            questionAnswers: [
                {
                    text: "odpowiednio duże natężenie światła"
                },
                {
                    text: "aby do powierzchni materiału dotarło tyle fotonów, by ich łączna energia była większa od pracy wyjścia"
                },
                {
                    text: "aby do powierzchni materiału dotarł foton, którego energia będzie większa lub równa pracy wyjścia",
                    isCorrect: true
                },
                {
                    text: "żadna z powyższych odpowiedzi nie jest prawidłowa"
                }
            ]
        },
        {
            questionID: 38,
            questionText: "Jak zależy maksymalna energia kinetyczna Ek od częstotliwości fali elektromagnetycznej padającej na materiał (zakładamy, że energia fotonów jest większa od pracy wyjścia)?",
            questionAnswers: [
                {
                    text: "Ek jest stała, nie zależy od częstotliwości fali"
                },
                {
                    text: "Ek rośnie liniowo ze wzrostem częstotliwości fali",
                    isCorrect: true
                },
                {
                    text: "Ek maleje liniowo ze wzrostem częstotliwości fali"
                },
                {
                    text: "za mało danych, trzeba uwzględnić wpływ innych czynników"
                }
            ]
        },
        {
            questionID: 39,
            questionText: "Przesunięcie comptonowskie przy rozpraszaniu promieniowania X na elektronach zależy",
            questionAnswers: [
                {
                    text: "tylko od kąta rozproszenia i długości fali promieniowania X"
                },
                {
                    text: "tylko od długości fali promieniowania X"
                },
                {
                    text: "tylko od kąta rozproszenia",
                    isCorrect: true
                },
                {
                    text: "tylko od długości fali promieniowania X i polaryzacji"
                }
            ]
        },
        {
            questionID: 40,
            questionText: "Aby poprawnie wyjaśnić zjawisko Comptona, należy",
            questionAnswers: [
                {
                    text: "założyć, że światło jest falą i dokonać bilansu energii w układzie"
                },
                {
                    text: "założyć, że światło wykazuje naturę cząsteczkową i zastosować zasady zachowania energii i pędu",
                    isCorrect: true
                },
                {
                    text: "współczesna fizyka nadal nie potrafi wyjaśnić zjawiska Comptona"
                },
                {
                    text: "żadna z odpowiedzi nie jest prawidłowa"
                }
            ]
        },
        {
            questionID: 41,
            questionText: "Pierwszy postulat Bohra zakłada skwantowanie",
            questionAnswers: [
                {
                    text: "pędu elektronu"
                },
                {
                    text: "orbitalnego momentu pędu elektronu",
                    isCorrect: true
                },
                {
                    text: "energii elektronu"
                },
                {
                    text: "promienia orbity elektronu"
                }
            ]
        },
        {
            questionID: 42,
            questionText: "Drugi postulat Bohra zakłada, że",
            questionAnswers: [
                {
                    text: "elektron posiada tzw. spin"
                },
                {
                    text: "elektron ma skwantowany promień orbity"
                },
                {
                    text: "elektron ma skwantowany orbitalny moment pędu"
                },
                {
                    text: "przejściu elektronu pomiędzy dwoma poziomami odpowiada emisja lub absorpcja fotonu o energii odpowiadającej różnicy energii między poziomami",
                    isCorrect: true
                }
            ]
        },
        {
            questionID: 43,
            questionText: "Pierwszemu poziomowi energetycznemu w atomie wodoru odpowiada energia E₁. Energia n-tego poziomu wynosi:",
            questionAnswers: [
                {
                    text: "Rₙ = nE₁"
                },
                {
                    text: "Rₙ = E₁/n"
                },
                {
                    text: "Rₙ = n²*E₁"
                },
                {
                    text: "Rₙ = E₁/n²",
                    isCorrect: true
                }
            ]
        },
        {
            questionID: 44,
            questionText: "Eksperyment Davissona i Germera polega na...",
            questionAnswers: [
                {
                    text: "obserwacji falowej natury elektronów (zgodność z warunkiem na konstruktywną interferencję)",
                    isCorrect: true
                },
                {
                    text: "wytwarzaniu wirowego pola magnetycznego wokół przewodnika z prądem"
                },
                {
                    text: "\"wygaszeniu\" światła przechodzącego przez układ dwóch polaryzatorów o wzajemnie prostopadłych kierunkach polaryzacji"
                },
                {
                    text: "rozpraszaniu promieniowania rentgenowskiego na elektronach, co prowadzi zmiany długości fali promieniowania (zależnej od kąta rozproszenia)"
                }
            ]
        },
        {
            questionID: 45,
            questionText: "W precyzyjnie wykonanym eksperymencie badającym falową naturę materii wiązka elektronów pada prostopadle na płytę zawierającą dwie szczeliny. Obraz powstający na ekranie za płytą będzie zawierał:",
            questionAnswers: [
                {
                    text: "dokładnie jedno maksimum"
                },
                {
                    text: "dokładnie dwa maksima"
                },
                {
                    text: "jedno lub dwa maksima"
                },
                {
                    text: "co najmniej kilka wyraźnych maksimów",
                    isCorrect: true
                }
            ]
        },
        {
            questionID: 46,
            questionText: "Ciało o masie 1 kg porusza się z prędkością 1 m/s. Jaka długość fali materii odpowiada temu ciału (wartość stałej Plancka: h =6,6*10^-34 Js)?",
            questionAnswers: [
                {
                    text: "6,6*10^-34 m",
                    isCorrect: true
                },
                {
                    text: "3,3*10^-34 m"
                },
                {
                    text: "6,6*10^-19 m"
                },
                {
                    text: "3,3*10^-19 m"
                }
            ]
        },
        {
            questionID: 47,
            questionText: "Które stwierdzenie jest prawdziwe?",
            questionAnswers: [
                {
                    text: "Funkcja falowa może być nieskończona"
                },
                {
                    text: "funkcja falowa może być nieciągła"
                },
                {
                    text: "funkcja falowa może zależeć od czasu",
                    isCorrect: true
                },
                {
                    text: "funkcja falowa może być równa zeru w całej swojej dziedzinie (w całym obszarze)"
                }
            ]
        },
        {
            questionID: 48,
            questionText: "Zgodnie z zasadą odpowiedniości Bohra, gdy rozpatruje się np. energię cząstki,...",
            questionAnswers: [
                {
                    text: "nie ma możliwości porównywania wyników uzyskanych mechaniką klasyczną i kwantową"
                },
                {
                    text: "Wyniki kwantowe uzyskane dla najniższych poziomów zgadzają się z klasycznymi"
                },
                {
                    text: "wyniki kwantowe uzyskane dla bardzo wysokich poziomów zgadzają się z klasycznymi",
                    isCorrect: true
                },
                {
                    text: "wszystkie wyniki uzyskane mechaniką kwantową w pełni pokrywają się z wynikami klasycznymi"
                }
            ]
        },
        {
            questionID: 49,
            questionText: "Absorpcja wymuszona to",
            questionAnswers: [
                {
                    text: "sytuacja, w której w ośrodku czynnym atomów w stanie wzbudzonym jest więcej niż w stanie podstawowym"
                },
                {
                    text: "Przejście atomu z niższego do wyższego stanu energetycznego związane z pochłonięciem fotonu o energii równej różnicy energii tych dwóch stanów",
                    isCorrect: true
                },
                {
                    text: "Przejście atomu z wyższego do niższego stanu energetycznego wywołane fotonem o energii równej różnicy energii tych dwóch stanów i związane z wyemitowaniem takiego samego fotonu"
                },
                {
                    text: "żadna z odpowiedzi nie jest prawidłowa"
                }
            ]
        },
        {
            questionID: 50,
            questionText: "Inwersja obsadzeń to",
            questionAnswers: [
                {
                    text: "sytuacja, w której w ośrodku czynnym atomów w stanie wzbudzonym jest więcej niż w stanie podstawowym",
                    isCorrect: true
                },
                {
                    text: "Przejście atomu z niższego do wyższego stanu energetycznego związane z pochłonięciem fotonu o energii równej różnicy energii tych dwóch stanów"
                },
                {
                    text: "Przejście atomu z wyższego do niższego stanu energetycznego wywołane fotonem o energii równej różnicy energii tych dwóch stanów i związane z wyemitowaniem takiego samego fotonu"
                },
                {
                    text: "żadna z odpowiedzi nie jest prawidłowa"
                }
            ]
        }
    ],

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
            questionID: 1,
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
        },
        {
            questionID: 2,
            questionText: "Testing question 1",
            questionAnswers: [
                {
                    text: "qwerty"
                },
                {
                    text: "Answer 2"
                },
                {
                    text: "Answer 3"
                },
                {
                    text: "Answer 4 good one",
                    isCorrect: true
                }
            ]
        },
        {
            questionID: 3,
            isMultipleChoice: 2,
            questionText: "Testing question 2",
            questionAnswers: [
                {
                    text: "Answer 1"
                },
                {
                    text: "Answer 2 good one",
                    isCorrect: true
                },
                {
                    text: "Answer 3"
                },
                {
                    text: "Answer 4 good one",
                    isCorrect: true
                }
            ]
        }
    ],

    ham: [
        {
            questionID: 1,
            questionText: "Czy opór elektryczny przewodu zależy od materiału z którego jest wykonany?",
            questionAnswers: [
                {
                    text: "zależy",
                    isCorrect: true
                },
                {
                    text: "nie zależy"
                },
                {
                    text: "zależy od izolacji przewodu"
                }
            ]
        },
        {
            questionID: 2,
            questionText: "Izolatorami nazywamy materiały które:",
            questionAnswers: [
                {
                    text: "nie przewodzą prądu elektrycznego",
                    isCorrect: true
                },
                {
                    text: "przewodzą słabo"
                },
                {
                    text: "przewodzą prąd przy wysokim napięciu"
                }
            ]
        },
        {
            questionID: 3,
            questionText: "Który przewód o tej samej długości i przekroju będzie miał największą oporność?",
            questionAnswers: [
                {
                    text: "wykonany z aluminium"
                },
                {
                    text: "wykonany z żelaza",
                    isCorrect: true
                },
                {
                    text: "wykonany z miedzi"
                }
            ]
        }
    ]
};

export default questionDataBase;
