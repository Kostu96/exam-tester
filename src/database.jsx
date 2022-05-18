//TODO: is questionID needed? Maybe it can be replaced by the array index.

const questionDataBase = {
    cybersecurity: [
        {
            questionID: 1,
            questionText: "Do ataków na integralność należy:",
            questionAnswers: [
                "manipulacja informacją",
                "odtajnienie informacji",
                "odmowa świadczenia usług",
                "podniesienie poziomu uprawnień"
            ]
        },
        {
            questionID: 2,
            questionText: "Zagwarantowanie, że informacja nie zostanie zmodyfikowana w sposób nieuprawniony, a wszelkie modyfikacje zostaną wykryte to:",
            questionAnswers: [
                "integralność",
                "poufność",
                "niezaprzeczalność",
                "uwierzytelnianie"
            ]
        },
        {
            questionID: 3,
            questionText: "Krytyczne rozszerzenia certyfikatu X.509:",
            questionAnswers: [
                "muszą zostać zinterpretowane i przetworzone przez aplikacją, aby dany certyfikat mógł zostać wykorzystany.",
                "są dodatkowo chronione dedykowanymi mechanizmami kryptograficznymi.",
                "stanowią zagrożenie, gdyż w wykorzystujących je mechanizmach wykryto luki zabezpieczeń.",
                "opisują techniczne parametry mechanizmów, które posłużyły utowrzeniu certyfikatu."
            ]
        },
        {
            questionID: 4,
            questionText: "Który z poniższych protokołów pozwala na uzgodnienie wspólnego klucza pomiędzy komunikującymi się stronami:",
            questionAnswers: [
                "protokół Diffiego-Hellmana",
                "Digital Signature Algorithm",
                "Advanced Encryption Standard",
                "One-Time Pad"
            ]
        },
        {
            questionID: 5,
            questionText: 'W sieciach bezprzewodowych tryb "WPA2 Enterprise" oznacza, że certyfikaty są wykorzystywane w procesie:',
            questionAnswers: [
                "uwierzytelniania",
                "szyfrowania hasła współdzielonego użytkownika",
                "żadna z pozostałych odpowiedzi nie jest poprawna",
                "szyfrowania pakietów danych"
            ]
        },
        {
            questionID: 6,
            questionText: "Podkradanie szyfrogramu (Ciphertext stealing) to:",
            questionAnswers: [
                "metoda pozwalająca na szyfrowanie wiadomości o długości mniejszej niż wielokrotność bloku algorytmu szyfrującego (padding)",
                "metoda realizacji kryptograficznej funkcji skrótu",
                "metoda ataku kryptograficznego z wykorzystaniem wybranego szyfrogramu",
                "metoda ataku kryptograficznego polegająca na wykradaniu szyfrogramu z pamięci operacyjnej atakowanego urządzenia"
            ]
        },
        {
            questionID: 7,
            questionText: "Podatność SQLI (SQL Injection) należy do kategorii:",
            questionAnswers: [
                "błędów implementacji",
                "odmowy świadczenia usług",
                "podszywania",
                "żadnej z wymienionych"
            ]
        },
        //{
        //    questionID: 8, TODO: multiple choice
        //    questionText: "Dostęp o charakterze zamkniętym ma następującą cechę:",
        //    questionAnswers: [
        //        "wykorzystywany jest dla ruchu wychodzącego do sieci Internet"
        //        "jest bardziej restrykcyjny niż dostęp o charakterze otwartym", dobra
        //        "jest mniej restrykcyjny niż dostęp o charakterze otwartym"
        //        "wykorzystywany jest dla ruchu przychodzącego z sieci Internet", dobra
        //    ]
        //},
        {
            questionID: 9,
            questionText: "W procesie żądania certyfikatu, klient:",
            questionAnswers: [
                "generuje klucz publiczny i prywatny, a następnie przesyła ten pierwszy urzędowu certyfikacji (CA) jako część żądania CSR.",
                "generuje klucz publiczny i prywatny, a następnie przesyła ten drugi urzędowu certyfikacji (CA) jako część żądania CSR.",
                "przed wysłaniem żądania CSR sprawdza, czy certyfikat CA jest samo-podpisany (self-signed) - jęsli nie, rezygnuje z próby uzyskania certyfikatu.",
                "przesyła urzędowi certyfikacji (CA) żądanie CSR, a CA generuje klucz prywatny i publiczny klienta."
            ]
        },
        {
            questionID: 10,
            questionText: "W którym trybie pracy szyfrowania z wykorzystaniem algorytmów symetrycznyh zaobserwować mżna takie same bloki szyfrogramu dla takich samych bloków tekstu jawnego:",
            questionAnswers: [
                "ECB",
                "CFB",
                "CBC",
                "CTR"
            ]
        },
        {
            questionID: 11,
            questionText: "Zaznacz zdanie prawdziwe dla systemu anonimizującego TOR (The Onion Router):",
            questionAnswers: [
                "wykorzystuje trzy wartstwy węzłów pośredniczących",
                "wykorzystuje dwie wartstwy węzłów pośredniczących",
                "dla podniesienia bezpieczeństwa dwukrotnie szyfruje dane",
                "szyfruje dane kluczami asymetrycznymi"
            ]
        },
        {
            questionID: 12,
            questionText: "Rozwiązanie Pretty Good Privacy (PGP) wykorzystuje:",
            questionAnswers: [
                "model zaufania typu user-centric",
                "certyfikaty w formacie X.509.",
                "sieć serwerów SCEP.",
                "hierachiczny (strict hierachy) model zaufania"
            ]
        },
        {
            questionID: 13,
            questionText: "Klasyfikacja zagrożeń ze względu na naturę podatności obejmuje kategorię:",
            questionAnswers: [
                "ataków wykorzystujących sposób implementacji",
                "ataków wewnątrz sieci lokalnej",
                "ataków rozproszonych",
                "ataków celowanych"
            ]
        },
        //{
        //    questionID: 14, TODO: multiple choice
        //    questionText: "Zaznacz, w których rozwiązaniach wykorzystywane są typowe certyfikaty X.509:",
        //    questionAnswers: [
        //        "rozwiązanie SecureBoot"
        //        "podpisywanie sterowników w systemie Windows", dobra
        //        "uwierzytelnianie i autoryzacja protokołem Kerberos"
        //        "podpisywanie aplikacji na platformie Android", dobra
        //    ]
        //},
        {
            questionID: 15,
            questionText: "Wersja 3 standardu X.509 różni się od wersji 2 wprowadzeniem:",
            questionAnswers: [
                "mechanizmu rozszerzeń (extensions) certyfikatu.",
                "nowych pól: Issuer Unique ID i Subject Unique ID.",
                "mozliwości użycia szyfrowania AES.",
                "wykorzystania czasu UTC w polach dotyczących czasu ważności certyfikatu."
            ]
        },
        {
            questionID: 16,
            questionText: "Do ataków na autentyczność należy:",
            questionAnswers: [
                "podszywanie",
                "manipulacja informacją",
                "odmowa świadczenia usług",
                "odtajnienie informacji"
            ]
        },
        {
            questionID: 17,
            questionText: "Silna odporność na kolizję kryptograficznej funkcji skrótu polega na:",
            questionAnswers: [
                "trudności w znalezieniu dwóch wiadomości, dla któych wynik kryptograficznej funkcji skrótu byłby taki sam",
                "trudności w znalezieniu wiadomości o zadanej wartości funkcji skrótu",
                "pożądanie dużej złożoności obliczeniowej kryptograficznej funkcji skrótu",
                "zmianie wartości funkcji skrótu przy modyfikacji wiadomości"
            ]
        },
        //{
        //    questionID: 18, TODO: multiple choice
        //    questionText: "W atakach DDoS tzw. agencji (boty) są wykorzystywane do:",
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
            questionID: 1,
            questionText: "Widzenie skotopowe zapewniają:",
            questionAnswers: [
                "pręciki",
                "czopki"
            ]
        },
        {
            questionID: 2,
            questionText: "Widzenie fotopowe zapewniają:",
            questionAnswers: [
                "czopki",
                "pręciki"
            ]
        },
        {
            questionID: 3,
            questionText: "Dwa krzyżujące się odcinki mogą mieć:",
            questionAnswers: [
                "dowolną liczbę pktów wspólnych (0, 1, 2...)",
                "dodatnią liczbę punktów wspólnych (1, 2, 3...)",
                "0 albo 1 pktów wspólnych"
            ]
        },
        {
            questionID: 4,
            questionText: "Algorytm Bresenhama jest algorytmem:",
            questionAnswers: [
                "warunkowym",
                "parametrycznym",
                "strukturalnym",
                "rekurencyjnym"
            ]
        },
        {
            questionID: 5,
            questionText: "Do modeli cieniowania nie należy:",
            questionAnswers: [
                "model Macha",
                "model Phonga",
                "model Gourauda"
            ]
        },
        {
            questionID: 6,
            questionText: "W grafice wektorowej:",
            questionAnswers: [
                "obraz składa się z odcinków i tworzenie obrazu polega na rysowaniu poszczególnych odcinków",
                "obraz składa się z odcinków i wyznaczanie obrazu polega na wybieraniu koloru dla poszczególnego obiektu",
                "obraz składa się z pixeli i wyznaczanie obrazu polega na wybieraniu koloru dla poszczególnego pixela",
                "obraz składa się z pixeli i tworzenie obrazu polega na rysowaniu kolejnych pixeli"
            ]
        },
        {
            questionID: 7,
            questionText: "W modelu CMYK składowymi są:",
            questionAnswers: [
                "kolory: cyjan, magenta i żółty.",
                "kolory: czerwony, zielony, niebieski.",
                "odcień oraz nasycenie.",
                "chrominancje U i V."
            ]
        },
        {
            questionID: 8,
            questionText: "Co nazywamy szkieletem zbioru:",
            questionAnswers: [
                "zbiór pixeli otrzymany w wyniku cyklicznego odrzucania pixeli konturu nie będących pixelami powtarzalnymi",
                "zbiór pixeli złożony z pixeli powtarzalnych"
            ]
        },
        {
            questionID: 9,
            questionText: "Który filtr cyfrowy rozmazuje obraz:",
            questionAnswers: [
                "filtr dolnoprzepustowy",
                "filtr górnoprzepustowy",
                "filtr medianowy",
                "filtr Laplace'a"
            ]
        },
        {
            questionID: 10,
            questionText: "Który algorytm umożliwia rysowanie wygładzonego odcinka:",
            questionAnswers: [
                "antialiasing",
                "aliasing"
            ]
        },
        {
            questionID: 11,
            questionText: "światło odbite składa się z trzech składowych. Jaka składowa tam nie występuje?",
            questionAnswers: [
                "składowa emisyjna",
                "składowa zwierciadlana",
                "składowa rozproszona"
            ]
        },
        {
            questionID: 12,
            questionText: "Filtr wygładzający (zwłaszcza krawędzie) to:",
            questionAnswers: [
                "dolnoprzepustowy",
                "medianowy",
                "górnoprzepustowy",
                "La Place'a"
            ]
        },
        {
            questionID: 13,
            questionText: "Teoria postrzegania trzema barwami to:",
            questionAnswers: [
                "Helmhotza-Younga",
                "teoria Phonga",
                "teoria Gourauda",
                "teoria Macha"
            ]
        },
        {
            questionID: 14,
            questionText: "Algorytm poprzez spójność (sianie) to algorytm:",
            questionAnswers: [
                "wypełniania konturu",
                "znajdywania konturu",
                "ścieniania",
                "wygładzania"
            ]
        },
        {
            questionID: 15,
            questionText: "CMYK powstał na bazie CMY poprzez dodanie koloru:",
            questionAnswers: [
                "czarnego",
                "czerwonego",
                "zielonego",
                "niebieskiego"
            ]
        },
        {
            questionID: 16,
            questionText: "Zjawisko zębatości to:",
            questionAnswers: [
                "aliasing",
                "antyaliasing",
                "metameryzm"
            ]
        },
        {
            questionID: 17,
            questionText: "Algorytm midpoint jest algorytmem:",
            questionAnswers: [
                "warunkowym",
                "strukturalnym",
                "parametrycznym"
            ]
        },
        {
            questionID: 18,
            questionText: "Krzywa Beziera przechodzi w ogólności:",
            questionAnswers: [
                "przez dwa punkty kontrolne",
                "przez żadne punkty kontrolne",
                "przez wszystkie punkty kontrolne"
            ]
        },
        {
            questionID: 19,
            questionText: "Co nie jest cechą fontu?",
            questionAnswers: [
                "format zapisu",
                "krój",
                "stopień",
                "odmiana"
            ]
        },
        {
            questionID: 20,
            questionText: "Który z algorytmów stosuje metodę kompresji stratnej:",
            questionAnswers: [
                "falkowy",
                "LZW",
                "Huffmana",
                "Run Length Encoding (RLE)"
            ]
        },
        {
            questionID: 21,
            questionText: "Jak nazywa się znak stanowiący połączenie dwóch liter?",
            questionAnswers: [
                "Ligatura",
                "Metamera",
                "Znak Helmholtza"
            ]
        },
        {
            questionID: 22,
            questionText: "Co to metameryzm?",
            questionAnswers: [
                "zjawisko, w/g którego promieniowanie o różnym składzie widmowym, może dawać identyczne wrażenie barwy",
                "przyzwyczajanie się oka do określonego natężenia światła",
                "fakt, w/g którego promieniowanie o różnym składzie widmowym nie może dawać identycznego wrażenia barwy"
            ]
        },
        {
            questionID: 23,
            questionText: "Model barw TekHVC:",
            questionAnswers: [
                "to model w którym odległości między są proporcjonalne do wrażeń barwnych",
                "został specjalnie do zastosowań w urządzeniach firmy Tektronix",
                "model, dzięki któremu zużycie tuszu w drukarkach jest najmniejsze"
            ]
        },
        {
            questionID: 24,
            questionText: "Metody fraktalne należą do metod kompresji:",
            questionAnswers: [
                "stratnej",
                "bezstratnej"
            ]
        },
        {
            questionID: 25,
            questionText: "W wyniku kwantowania obrazu mogą pojawić się niepożądane krawędzie. Przeciwdziała temu:",
            questionAnswers: [
                "dithering",
                "antyaliasing",
                "aliasing"
            ]
        },
        {
            questionID: 26,
            questionText: "Krzywą dyskretną nazywamy:",
            questionAnswers: [
                "każdy zbiór spójny pikseli nie zawierający czwórki pikseli tworzących kwadrat",
                "drogą w której wszystkie piksele ciągu stanawiącego ją, są różne, i żaden z nich nie ma więcej niż dwóch sąsiadów",
                "w każdym przypadku zbiór będący jednocześnie swoim konturem",
                "droga w której pierwszy piksel ciągu stanowiącego drogę jest sąsiadem ostatniego piksela tego ciągu"
            ]
        },
        {
            questionID: 27,
            questionText: "Czym różni się B-kontur od konturu:",
            questionAnswers: [
                "B-kontur musi mieć jednego sąsiada nienależącego do zbioru, kontur musi mieć jednego B-sąsiada nienależącego do zbioru",
                "B-kontur jest drogą zamkniętą, kontur niekoniecznie",
                "niczym - pojęć używa się zamiennie",
                "pojęcie konturu nie występuje w grafice"
            ]
        },
        {
            questionID: 28,
            questionText: "Przykładem strukturalnej metody rysowania odcinka jest:",
            questionAnswers: [
                "Metzgera-Bronsa",
                "algorytm midpoint",
                "algorytm Bresenhama",
                "Jordana"
            ]
        },
        {
            questionID: 29,
            questionText: "Który filtr cyfrowy redukuje szumy:",
            questionAnswers: [
                "filtr medianowy",
                "filtr dolnoprzepustowy",
                "filtr górnoprzepustowy",
                "filtr Laplace'a"
            ]
        },
        {
            questionID: 30,
            questionText: "Algorytm rysowania łuków Honga jest algorytmem:",
            questionAnswers: [
                "parametrycznym",
                "warunkowym",
                "okantnym",
                "bezwarunkowym"
            ]
        },
        {
            questionID: 31,
            questionText: "Punkt P przesłania odcinek l wtedy gdy:",
            questionAnswers: [
                "półprosta poziomej, wychodzącej z P w lewą stronę przecina się z l",
                "P leży na odcinku",
                "P leży na którymś z końcuów odcinku",
                "P jest duży i zasłania cały odcinek"
            ]
        },
        {
            questionID: 32,
            questionText: "Przykładem konstruktywnej reprezentacji obiektów graficznych jest:",
            questionAnswers: [
                "przeskalowany o 2 sześcian jednostkowy",
                "woksel(voxel)",
                "wierzchołki A,B,C,D i z nich utworzone ściany ABCD lub CDBA"
            ]
        },
        {
            questionID: 33,
            questionText: "Przesłanianie ścian jest relacją:",
            questionAnswers: [
                "żadną z wymienionych",
                "przechodnią",
                "symetryczną",
                "antysymetryczną"
            ]
        },
        {
            questionID: 34,
            questionText: "Do algorytmow warunkowych rysujacych odcinki nie zaliczamy:",
            questionAnswers: [
                "Metzgera-Bronsa",
                "midpoint",
                "Bresenhama",
                "porownawczy Jordana"
            ]
        },
        {
            questionID: 35,
            questionText: "Probkowanie powierzchni przy jej wygladzaniu może być:",
            questionAnswers: [
                "Wagowe i bezwagowe",
                "Względne i bezwzględne",
                "Dyskretne i rzeczywiste",
                "Żadna odpowiedzi nie jest poprawna"
            ]
        },
        {
            questionID: 36,
            questionText: "Za pomocą ktorego algorytmu nie narysujesz elipsy:",
            questionAnswers: [
                "decyzyjnego Jordana",
                "Honga",
                "midpoint",
                "Wszystkie odpowiedzi są poprawne"
            ]
        },
        {
            questionID: 37,
            questionText: "Konturem danego zbioru pikseli nazywamy:",
            questionAnswers: [
                "Zbiór pikseli należących do tego zbioru i mających co najmniej jednego b-sąsiada nie należącego do tego zbioru.",
                "Zbiór pikseli należących do tego zbioru i mających dokladnie jednego b-sąsiada nie należącego do tego zbioru.",
                "Zbiór pikseli należących do tego zbioru i mających co najmniej jednego n-sąsiada nie należącego do tego zbioru.",
                "Zbiór pikseli nienależących do tego zbioru i mających co najmniej jednego b-sąsiada należącego do tego zbioru"
            ]
        },
        {
            questionID: 38,
            questionText: "Chcesz wyostrzyć obraz, w super programie od Daciuka użyjesz do tego:",
            questionAnswers: [
                "Laplasjana albo maski Sobela",
                "Filtru dolnoprzepustowego",
                "Laplasjana",
                "Maski Sobela"
            ]
        },
        {
            questionID: 39,
            questionText: "Ludzkie oko jest w stanie przechowywać wrażenie wzrokowe w czasie",
            questionAnswers: [
                "0.1 s",
                "0.1 ms",
                "0.5 s",
                "100ns"
            ]
        },
        {
            questionID: 40,
            questionText: "Do modeli teoretycznych kolorów należy",
            questionAnswers: [
                "TekHVC",
                "RGB",
                "CMYK",
                "YUV"
            ]
        },
        {
            questionID: 41,
            questionText: "Mówiąc o HSV, które zdanie jest falszywe:",
            questionAnswers: [
                "Jest rozwinięciem modelu HLS",
                "Powstał przez transformacje modelu RGB",
                "Reprezentacją graficzną tego modelu jest odwrócony stożek o podstawie sześciokąta",
                "Na środku podstawy znajduje się kolor biały"
            ]
        },
        {
            questionID: 42,
            questionText: "Rendering to:",
            questionAnswers: [
                "Proces generacji obrazu na podstawie modelu",
                "Proces transformacji obrazu na podstawie modelu",
                "Dodawanie do CMY skladowej BLACK",
                "Algorytm malarski"
            ]
        },
        {
            questionID: 43,
            questionText: "Wskaz zdanie wybitnie nieprawdziwe:",
            questionAnswers: [
                "Bufor Z służy do zapisywania tektur.",
                "Bufor Z to jakiś tam obszar pamięci.",
                "Bufor Z pozwalaja wyeliminować z renderowania niewidoczne elementy krzywych.",
                "Wszystkie odpowiedzi są niepoprawne"
            ]
        },
        {
            questionID: 44,
            questionText: "Co nie ma wpływu na wyznaczanie cieni",
            questionAnswers: [
                "Lustro przy którym siedzi Lena",
                "Punkt widzenia źródła światła",
                "Punkt widzenia kamery w Tomb Raiderze",
                "Punkt widzenia postaci w Quake'u"
            ]
        },
        {
            questionID: 45,
            questionText: "Co nie jest przeksztalceniem morfologicznym obrazu:",
            questionAnswers: [
                "odszumienie",
                "erozja",
                "dylatacja",
                "erozja i odszumienie"
            ]
        },
        {
            questionID: 46,
            questionText: "Metoda oswietlenia globalnego zależna od położenia obserwatora to:",
            questionAnswers: [
                "raytracing",
                "radiosity",
                "raindancing",
                "illuminacja"
            ]
        },
        {
            questionID: 47,
            questionText: "Metoda oswietlenia globalnego niezależna od położenia obserwatora to:",
            questionAnswers: [
                "radiosity",
                "raytracing",
                "antialiasing",
                "vertex shader"
            ]
        },
        {
            questionID: 48,
            questionText: "Radiosity to metoda oświetlenia (rodzaj oswietlenia, nazwa metody):",
            questionAnswers: [
                "globalnego, energetyczna",
                "globalnego, śledzenia promieni",
                "lokalnego, Gourauda",
                "lokalnego, Phonga"
            ]
        },
        {
            questionID: 49,
            questionText: "Czcionką nie jest:",
            questionAnswers: [
                "Żadno z wymienionych",
                "Arial",
                "Verdana",
                "Times New Roman"
            ]
        },
        {
            questionID: 50,
            questionText: "Antykwy nie są:",
            questionAnswers: [
                "Poprzeczne",
                "Ukryte",
                "Belkowe",
                "Klinowe"
            ]
        },
        {
            questionID: 51,
            questionText: "Cyfry nautyczne to:",
            questionAnswers: [
                "Niejednolita linia pisma, różna wysokość",
                "Jednolita linia pisma, równa wysokość",
                "Jednolita linia pisma, różna wysokość",
                "Niejednolita linia pisma, równa wysokość"
            ]
        },
        {
            questionID: 52,
            questionText: "Język polski nie wyksztalcił:",
            questionAnswers: [
                "Abrewiatur",
                "Ligatur"
            ]
        },
        {
            questionID: 53,
            questionText: "Format fontów Type 1 opracowano w:",
            questionAnswers: [
                "Adobe",
                "Apple",
                "HP",
                "IBM"
            ]
        },
        {
            questionID: 54,
            questionText: "Format fontów TrueType opracowano w:",
            questionAnswers: [
                "Apple",
                "Microsoft",
                "HP",
                "Adobe"
            ]
        },
        {
            questionID: 55,
            questionText: "Format fontów OpenType opracowano w:",
            questionAnswers: [
                "Microsoft i Adobe",
                "Microsoft i HP",
                "Apple i Adobe",
                "Apple i HP"
            ]
        },
        {
            questionID: 56,
            questionText: "Skladowymi liter w Type 1 są:",
            questionAnswers: [
                "Kubiczne krzywe Beziera",
                "Krzywe Beziera drugiego stopnia",
                "Krzywe Beziera kubiczne oraz drugiego stopnia",
                "Krzywe Beziera czwartego stopnia"
            ]
        },
        {
            questionID: 57,
            questionText: "Składowymi liter w TrueType są:",
            questionAnswers: [
                "Krzywe Beziera paraboliczne i drugiego stopnia",
                "Krzywe Beziera drugiego stopnia",
                "Paraboliczne krzywe Beziera",
                "Kubiczne krzywe Beziera"
            ]
        },
        {
            questionID: 58,
            questionText: "Który z Windowsów jako pierwszy w pełni obsługiwał format TrueType?",
            questionAnswers: [
                "95",
                "XP",
                "3.11",
                "98"
            ]
        },
        {
            questionID: 59,
            questionText: "który symbol oznacza ułożenie w algorytmie Gilla bitow 0010?",
            questionAnswers: [
                "_ _ - -",
                "_ - - -",
                "_ _ _ -",
                "_ _ _ _"
            ]
        },
        {
            questionID: 60,
            questionText: "Algorytm cienowania wielokątów wykorzystujący interpolacje wektorów normalnych to:",
            questionAnswers: [
                "Algorytm Phonga",
                "Algorytm Helmhotza-Younga",
                "Algorytm Gourauda",
                "śledzenie promieni"
            ]
        },
        {
            questionID: 61,
            questionText: "Jakiemu fraktalowi odpowiada część wspólna dywanu Sierpińskiego i prostej poprowadzonej przez środek niego:",
            questionAnswers: [
                "zbiorowi Cantora",
                "zbiorowi Mandelbrota",
                "zbiorowi Julii",
                "kostce Mengera"
            ]
        },
        {
            questionID: 62,
            questionText: "Który z shaderów został wprowadzony w DirectX 11:",
            questionAnswers: [
                "Domain shader",
                "Pixel shader",
                "Vertex shader",
                "Geometry shader"
            ]
        },
        {
            questionID: 63,
            questionText: "Co nie jest wykonywane podczas postprocessingu?",
            questionAnswers: [
                "odbicia lustrzane",
                "desaturacja",
                "głębia ostrości",
                "rozmycie ruchu"
            ]
        },
        {
            questionID: 64,
            questionText: "Model barw RGB jest:",
            questionAnswers: [
                "addytywny",
                "subtraktywny"
            ]
        },
        {
            questionID: 65,
            questionText: "Który z poniższych to język programowania shaderów?",
            questionAnswers: [
                "HLSL",
                "SPL",
                "HSL",
                "HLSC"
            ]
        },
        {
            questionID: 66,
            questionText: "Który z poniższych to język programowania shaderów?",
            questionAnswers: [
                "GLSL",
                "GSL",
                "SPL",
                "Perl"
            ]
        },
        {
            questionID: 67,
            questionText: "Ile punktow kontrolnych ma krzywa beziera n-tego stopnia?",
            questionAnswers: [
                "n + 1",
                "n - 1",
                "n",
                "n + 2"
            ]
        },
        {
            questionID: 68,
            questionText: "Który shader został dodany w DX10?",
            questionAnswers: [
                "Geometry Shader",
                "Hull Shader",
                "Pixel Shader",
                "Vertex Shader"
            ]
        },
        {
            questionID: 69,
            questionText: "Kiedy wprowadzono teselację?",
            questionAnswers: [
                "DX11",
                "DX9",
                "DX10"
            ]
        },
        {
            questionID: 70,
            questionText: "Cienowanie wielokątów wykorzystujące interpolacje wartosci obliczonych dla poszczególnych wierzchołków to:",
            questionAnswers: [
                "Algorytm Gourauda",
                "Metoda energetyczna",
                "Algorytm Phonga",
                "śledzenie promieni"
            ]
        },
        {
            questionID: 71,
            questionText: "Co to jest glif (ang. glyph)?",
            questionAnswers: [
                "pisemna/graficzna reprezentacja znaku",
                "odstęp pomiędzy wierszami",
                "odstęp pomiędzy znakami",
                "połączenie dwóch znaków w jeden"
            ]
        },
        {
            questionID: 72,
            questionText: "O czopkach można powiedzieć, że:",
            questionAnswers: [
                "działają w dobrym świetle i umożliwiają postrzeganie barw",
                "działają już w słabym świetle i umożliwiają rozróżnianie barw",
                "działają już w słabym świetle i nie umożliwiają rozróżniania barw",
                "działają w dobrym świetle i nie umożliwiają postrzegania barw"
            ]
        },
        {
            questionID: 73,
            questionText: "Składowe YUV to:",
            questionAnswers: [
                "Luminancja i dwie chrominancje",
                "Kolory: czerwony, zielony, niebieski",
                "Kolory: zielononiebieski, fioletowy i żółty",
                "Odcień, nasycenie, jasność"
            ]
        },
        {
            questionID: 74,
            questionText: "Jaki shader nie należy do pipeline'u renderującego DX11?",
            questionAnswers: [
                "Compute Shader",
                "Vertex Shader",
                "Domain Shader",
                "Pixel Shader"
            ]
        },
        {
            questionID: 75,
            questionText: "Co oznacza skrót SIMD?",
            questionAnswers: [
                "Single Instruction Multiple Data",
                "Shader Information Matrix Data",
                "Structured Information Manipulation Data"
            ]
        },
        {
            questionID: 76,
            questionText: "Co odpowiada za odbicia światła od matowych powierzchni?",
            questionAnswers: [
                "diffuse",
                "complex",
                "seismic",
                "retro"
            ]
        },
        {
            questionID: 77,
            questionText: "Który z podanych algorytmów nie jest liniowy?",
            questionAnswers: [
                "medianowy",
                "laplasjan",
                "dolnoprzepustowy",
                "górnoprzepustowy"
            ]
        },
        {
            questionID: 78,
            questionText: "Jaki shader odpowiada za cieniowanie pikseli w DirectX?",
            questionAnswers: [
                "Pixel Shader",
                "Fragment Shader",
                "Vertex Shader",
                "Geometry Shader"
            ]
        },
        {
            questionID: 79,
            questionText: "Jaki shader odpowiada za cieniowanie pikseli w OpenGL?",
            questionAnswers: [
                "Fragment Shader",
                "Pixel Shader",
                "Vertex Shader",
                "Geometry Shader"
            ]
        },
        {
            questionID: 80,
            questionText: "Jakie jest rozwinięcie skrótu VBS narzędzia służącego do przeprowadzania symulacji (np. pociągów)?",
            questionAnswers: [
                "Virtual Battlespace",
                "Virtual Basic Scripts",
                "Virtual Brutal Sociopath",
                "Vertex Basic Simulations"
            ]
        },
        {
            questionID: 81,
            questionText: "Czym jest antialiasing?",
            questionAnswers: [
                "Metodą wygładzania obrazu",
                "Metodą usuwania szumów",
                "Algorytmem szukania konturu",
                "Algorytmem rysowania linii"
            ]
        },
        {
            questionID: 82,
            questionText: "Które biblioteki graficzne są wysokopoziomowe?",
            questionAnswers: [
                "OpenGL i Direct3D",
                "Vulkan",
                "OpenGL",
                "Direct3D"
            ]
        },
        {
            questionID: 83,
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
        },
        {
            questionID: 4,
            questionText: "Który z materiałów ma własności półprzewodnikowe?",
            questionAnswers: [
                {
                    text: "złoto"
                },
                {
                    text: "german",
                    isCorrect: true
                },
                {
                    text: "platyna"
                }
            ]
        },
        {
            questionID: 5,
            questionText: "Żarówka 12 V pobiera z baterii 0,1 A. Jaką oporność ma żarówka?",
            questionAnswers: [
                {
                    text: "oporność 120 om",
                    isCorrect: true
                },
                {
                    text: "oporność 12 om"
                },
                {
                    text: "oporność 1,2 kom"
                }
            ]
        },
        {
            questionID: 6,
            questionText: "Żarówka ma moc 24 W i pobiera z akumulatora 2 A. Jakie jest napięcie akumulatora?",
            questionAnswers: [
                {
                    text: "napięcie wynosi 24 V"
                },
                {
                    text: "napięcie wynosi 12 V",
                    isCorrect: true
                },
                {
                    text: "napięcie wynosi 48 V"
                }
            ]
        },
        {
            questionID: 7,
            questionText: "Źródła chemiczne prądu dają prąd:",
            questionAnswers: [
                {
                    text: "stały",
                    isCorrect: true
                },
                {
                    text: "zmienny"
                },
                {
                    text: "pulsujący"
                }
            ]
        },
        {
            questionID: 8,
            questionText: "Akumulator ma pojemność 20 Ah. Jak długo będzie świecić z niego żarówka pobierająca 4 A?",
            questionAnswers: [
                {
                    text: "5 godzin",
                    isCorrect: true
                },
                {
                    text: "4 godziny"
                },
                {
                    text: "80 godzin"
                }
            ]
        },
        {
            questionID: 9,
            questionText: "Ile bateryjek 4,5 V potrzebujemy połączyć w szereg, by uzyskać baterię anodową o napięciu 90 V?",
            questionAnswers: [
                {
                    text: "15 szt."
                },
                {
                    text: "10 szt."
                },
                {
                    text: "20 szt.",
                    isCorrect: true
                }
            ]
        },
        {
            questionID: 10,
            questionText: "Ładunki elektryczne w przestrzeni przyciągają się, jeżeli:",
            questionAnswers: [
                {
                    text: "są jednoimienne"
                },
                {
                    text: "są różnoimienne",
                    isCorrect: true
                },
                {
                    text: "są nieskończenie daleko"
                }
            ]
        },
        {
            questionID: 11,
            questionText: "Materiały ferromagnetyczne to materiały, które przewodzą pole magnetyczne:",
            questionAnswers: [
                {
                    text: "lepiej niż powietrze",
                    isCorrect: true
                },
                {
                    text: "tak jak powietrze"
                },
                {
                    text: "gorzej niż powietrze"
                }
            ]
        },
        {
            questionID: 12,
            questionText: "Jaki kierunek przyjmuje pole magnetyczne wokół przewodnika z prądem?",
            questionAnswers: [
                {
                    text: "jest prostopadłe do przewodu",
                    isCorrect: true
                },
                {
                    text: "jest do niego równoległe"
                },
                {
                    text: "jest ukośne do przewodu"
                }
            ]
        },
        {
            questionID: 13,
            questionText: "Jeżeli składowa elektryczna fali jest prostopadła do ziemi to fala ma polaryzację?",
            questionAnswers: [
                {
                    text: "poziomą"
                },
                {
                    text: "pionową",
                    isCorrect: true
                },
                {
                    text: "kołową"
                }
            ]
        },
        {
            questionID: 14,
            questionText: "Czy prędkość fali elektromagnetycznej zależy od ośrodka, w którym się rozchodzi?",
            questionAnswers: [
                {
                    text: "tak",
                    isCorrect: true
                },
                {
                    text: "nie zależy"
                },
                {
                    text: "jest zawsze jednakowa"
                }
            ]
        },
        {
            questionID: 15,
            questionText: "Długość fali wynosi 1500 metrów. Jaka jest częstotliwość tej fali?",
            questionAnswers: [
                {
                    text: "2 MHz"
                },
                {
                    text: "200 kHz"
                },
                {
                    text: "233 kHz"
                }
            ]
        },
        {
            questionID: 16,
            questionText: "Jaki zakres częstotliwości dźwięków wystarcza dla zrozumiałego nadawania mowy?",
            questionAnswers: [
                {
                    text: "od 300 Hz do 3,2 kHz"
                },
                {
                    text: "od 100 Hz do 5 kHz"
                },
                {
                    text: "od 20 Hz do 15 kHz"
                }
            ]
        },
        {
            questionID: 17,
            questionText: "Nadajnik UKF ma kwarc kanałowy 12 MHz. Ile razy musi być powielony by uzyskać 144 MHz?",
            questionAnswers: [
                {
                    text: "16 razy"
                },
                {
                    text: "12 razy"
                },
                {
                    text: "18 razy"
                }
            ]
        },
{
    questionID: 18,
    questionText: "Modulacja telegraficzna CW polega na:",
    questionAnswers: [
        {
            text: "przerywaniu fali nośnej"
        },
        {
            text: "zmianie jej częstotliwości"
        },
        {
            text: "zmianie jej amplitudy"
}
]
},
{
    questionID: 19,
    questionText: "Kanał radiowy nadajnika telegraficznego CW jest:",
    questionAnswers: [
        {
            text: "bardzo szeroki"
        },
        {
            text: "bardzo wąski"
        },
        {
            text: "średni"
}
]
},
{
    questionID: 20,
    questionText: "Przy modulacji częstotliwości FM szerokość kanału radiowego dla nadajników amatorskich UKF wynosi:",
    questionAnswers: [
        {
            text: "12,5 kHz"
        },
        {
            text: "50 kHz"
        },
        {
            text: "200 kHz"
}
]
},
{
    questionID: 21,
    questionText: "Jaka jest szerokość kanału radiowego przy emisji SSB?",
    questionAnswers: [
        {
            text: "9 kHz"
        },
        {
            text: "3,5 kHz"
        },
        {
            text: "1,5 kHz"
}
]
},
{
    questionID: 22,
    questionText: "Amatorska telewizja z powolnym analizowaniem SSTV może być stosowana do łączności prowadzonych:",
    questionAnswers: [
        {
            text: "na duże odległości na falach krótkich"
        },
        {
            text: "tylko na UKF"
        },
        {
            text: "tylko w internecie"
}
]
},
{
    questionID: 23,
    questionText: "Która z podanych mocy PEP odpowiada napiciu maksymalnemu U max = 100 V, zmierzonemu oscyloskopem na wyjściu nadajnika, na obciążeniu 50 om?",
    questionAnswers: [
        {
            text: "200 W"
        },
        {
            text: "100 W"
        },
        {
            text: "50 W"
}
]
},
{
    questionID: 24,
    questionText: "Opornik warstwowy metalizowany jest wykonany jako:",
    questionAnswers: [
        {
            text: "metalowa warstwa oporowa na wałku ceramicznym"
        },
        {
            text: "warstwa drutu oporowego nawiniętego na wałku ceramicznym"
        },
        {
            text: "warstwa oporowa węglowa na wałku ceramicznym"
}
]
},
{
    questionID: 25,
    questionText: "Do cewki powietrznej 100 uH wkładamy rdzeń ferrytowy o względnej przenikalności u = 10. Ile wyniesie indukcyjność cewki?",
    questionAnswers: [
        {
            text: "wzrośnie do 1000 uH"
        },
        {
            text: "nie zmieni się"
        },
        {
            text: "zmaleje do 10 uH"
}
]
},
{
    questionID: 26,
    questionText: "Są dwie cewki powietrzne. Przy tej samej średnicy i ilości zwojów, L1 jest nawinięta drutem dwa razy grubszym niż L2. Która z nich ma większą dobroć Q?",
    questionAnswers: [
        {
            text: "cewka L2"
        },
        {
            text: "cewka L1"
        },
        {
            text: "obie mają taką samą dobroć, bo mają tą samą średnicę"
}
]
},
{
    questionID: 27,
    questionText: "Przekładnia transformatora wynosi 20 do 1. Strona pierwotna włączona jest na napicie sieci 240 V. Jakie napicie będzie po stronie wtórnej?",
    questionAnswers: [
        {
            text: "24 V"
        },
        {
            text: "12 V"
        },
        {
            text: "20 V"
}
]
},
{
    questionID: 28,
    questionText: "Diody prostownicze zasilające są stosowane do:",
    questionAnswers: [
        {
            text: "prostowania prądów wysokiej częstotliwości"
        },
        {
            text: "do prostowania prądu w zasilaczach"
        },
        {
            text: "do stabilizacji napięć"
}
]
},
{
    questionID: 29,
    questionText: "Diody Zenera to diody do:",
    questionAnswers: [
        {
            text: "stabilizacji napięć"
        },
        {
            text: "świecące"
        },
        {
            text: "na bardzo wysokie częstotliwości"
}
]
},
{
    questionID: 30,
    questionText: "Warikap to dioda:",
    questionAnswers: [
        {
            text: "dioda mikrofalowa"
        },
        {
            text: "dioda pojemnościowa"
        },
        {
            text: "dioda stabilizacyjna"
}
]
},
{
    questionID: 31,
    questionText: "Z jakich pierwiastków wykonywane są tranzystory i obwody scalone?",
    questionAnswers: [
        {
            text: "z absolutnie czystego krzemu i germanu"
        },
        {
            text: "z czystego krzemu i germanu z domieszkami boru i arsenu"
        },
        {
            text: "z krzemu i tlenków krzemu"
}
]
},
{
    questionID: 32,
    questionText: "Do jakiego typu układów scalonych należy scalony wzmacniacz akustyczny?",
    questionAnswers: [
        {
            text: "do układów scalonych cyfrowych"
        },
        {
            text: "do układów scalonych analogowych"
        },
        {
            text: "do scalonych pamięci"
}
]
},
{
    questionID: 33,
    questionText: "Kalkulator zawiera jeden układ scalony, wyświetlacz i klawiaturę. Do jakiej grupy zaliczymy układ scalony?",
    questionAnswers: [
        {
            text: "małej skali integracji"
        },
        {
            text: "średniej skali integracji"
        },
        {
            text: "wielkiej skali integracji"
}
]
},
{
    questionID: 34,
    questionText: "Lampa elektronowa pentoda posiada:",
    questionAnswers: [
        {
            text: "pięć elektrod"
        },
        {
            text: "cztery elektrody"
        },
        {
            text: "trzy elektrody"
}
]
},
{
    questionID: 35,
    questionText: "Cztery oporniki o wartościach 5 om zostały połączone szeregowo. Ile wynosi oporność zastępcza tych oporów?",
    questionAnswers: [
        {
            text: "10 om"
        },
        {
            text: "20 om"
        },
        {
            text: "40 om"
}
]
},
{
    questionID: 36,
    questionText: "Ile oporników o wartości 200 om należy połączyć równolegle by uzyska sztuczne obciążenie antenowe 50 om?",
    questionAnswers: [
        {
            text: "5 szt."
        },
        {
            text: "2 szt."
        },
        {
            text: "4 szt."
}
]
},
{
    questionID: 37,
    questionText: "Na rysunku przedstawiono schemat prostownika. Jak nazywa się ten rodzaj prostownika?",
    questionAnswers: [
        {
            text: "prostownik dwupołówkowy"
        },
        {
            text: "prostownik jednopołówkowy"
        },
        {
            text: "prostownik mostkowy dwupołówkowy"
}
]
},
{
    questionID: 38,
    questionText: "Na rysunku przedstawiono schemat prostownika. Jak nazywa się ten rodzaj prostownika?",

    questionAnswers: [
        {
            text: "prostownik dwupołówkowy"
        },
        {
            text: "prostownik jednopołówkowy"
        },
        {
            text: "prostownik mostkowy dwupołówkowy"
}
]
},
{
    questionID: 39,
    questionText: "Wzmacniacz wzmacnia sygnały w zakresie od 100Hz do 10 kHz. Wzmacniacz ten nazywamy wzmacniaczem:",
    questionAnswers: [
        {
            text: "niskiej częstotliwości"
        },
        {
            text: "wzmacniaczem pośredniej częstotliwości"
        },
        {
            text: "wzmacniaczem selektywnym"
}
]
},
{
    questionID: 40,
    questionText: "Kiedy wzmacniacz jest przesterowany?",
    questionAnswers: [
        {
            text: "jak ma za duże napięcie zasilania"
        },
        {
            text: "jak ma za duże napięcie wejściowe"
        },
        {
            text: "jak pracuje w klasie C"
}
]
},
{
    questionID: 41,
    questionText: "W jakiej klasie ma pracować wzmacniacz rezonansowy w.cz. do wzmacniania sygnału SSB?",
    questionAnswers: [
        {
            text: "w klasie C"
        },
        {
            text: "w klasie AB"
        },
        {
            text: "impulsowo"
}
]
},
{
    questionID: 42,
    questionText: "Na rysunku przedstawiono schemat stabilizacji PLL w formie ponumerowanych, ale nieopisanych bloków. Blok 1 to:",
    questionAnswers: [
        {
            text: "generator stabilizowany"
        },
        {
            text: "komparator"
        },
        {
            text: "dzielnik wzorca"
}
]
},
{
    questionID: 43,
    questionText: "Na rysunku przedstawiono schemat stabilizacji PLL w formie ponumerowanych, ale nieopisanych bloków. Blok 4 to:",
    questionAnswers: [
        {
            text: "dzielnik wzorca"
        },
        {
            text: "generator wzorca"
        },
        {
            text: "komparator"
}
]
},
{
    questionID: 44,
    questionText: "Na rysunku przedstawiono schemat blokowy odbiornika bezpośredniego wzmocnienia z reakcją. Blok 3 to:",
    questionAnswers: [
        {
            text: "wzmacniacz akustyczny"
        },
        {
            text: "detektor z reakcją"
        },
        {
            text: "wzmacniacz w.cz."
}
]
},
{
    questionID: 45,
    questionText: "Na rysunku przedstawiono schemat blokowy odbiornika superheterodynowego AM z pojedynczą przemianą. Blok 1 to:",
    questionAnswers: [
        {
            text: "filtr wejściowy"
        },
        {
            text: "wzmacniacz akustyczny"
        },
        {
            text: "detektor AM"
}
]
},
{
    questionID: 46,
    questionText: "Na rysunku przedstawiono schemat blokowy odbiornika superheterodynowego AM z pojedynczą przemianą. Blok 5 to:",
    questionAnswers: [
        {
            text: "heterodyna"
        },
        {
            text: "wzmacniacz akustyczny"
        },
        {
            text: "detektor AM"
}
]
},
{
    questionID: 47,
    questionText: "Na rysunku przedstawiono schemat blokowy odbiornika superheterodynowego AM, CW, SSB z podwójną przemianą częstotliwości. Blok 1 to:",
    questionAnswers: [
        {
            text: "wzmacniacz w.cz."
        },
        {
            text: "wzmacniacz akustyczny"
        },
        {
            text: "detektor AM CW SSB"
}
]
},
{
    questionID: 48,
    questionText: "Na rysunku przedstawiono schemat blokowy odbiornika superheterodynowego AM, CW, SSB z podwójną przemianą częstotliwości. Blok 9 to:",
    questionAnswers: [
        {
            text: "wzmacniacz akustyczny"
        },
        {
            text: "wzmacniacz pośredniej cz."
        },
        {
            text: "heterodyna"
}
]
},
{
    questionID: 49,
    questionText: "Na rysunku przedstawiono schemat blokowy odbiornika homodynowego CW i SSB, na jedno pasmo amatorskie. Blok 1 to:",
    questionAnswers: [
        {
            text: "filtr wejściowy"
        },
        {
            text: "wzmacniacz akustyczny"
        },
        {
            text: "heterodyna"
}
]
},
{
    questionID: 50,
    questionText: "Na rysunku przedstawiono schemat blokowy odbiornika superheterodynowego FM na pasmo 144 MHz z podwójną przemianą częstotliwości, pracującego w kanałach fonicznych, stabilizowany kwarcami. Blok 2 to:",
    questionAnswers: [
        {
            text: "wzmacniacz akustyczny"
        },
        {
            text: "I mieszacz"
        },
        {
            text: "wzmacniacz II p.cz."
}
]
},
{
    questionID: 51,
    questionText: "Jaka powinna być stabilność heterodyny w odbiorniku komunikacyjnym ? Częstotliwość heterodyny na najwyższym zakresie po włączeniu odbiornika powinna zmieniać się nie więcej jak:",
    questionAnswers: [
        {
            text: "o 200 Hz"
        },
        {
            text: "o 500 Hz"
        },
        {
            text: "o 1000 Hz"
}
]
},
{
    questionID: 52,
    questionText: "Na rysunku przedstawiono schemat blokowy nadajnika telegraficznego na jedno pasmo amatorskie. Blok 4 to:",
    questionAnswers: [
        {
            text: "filtr wyjściowy"
        },
        {
            text: "wzmacniacz mocy (PA)"
        },
        {
            text: "separator"
}
]
},
{
    questionID: 53,
    questionText: "Na rysunku przedstawiono schemat blokowy nadajnika telegraficznego na kilka pasm amatorskich z powielaniem częstotliwości. Blok 1 to:",
    questionAnswers: [
        {
            text: "wzmacniacz mocy (PA)"
        },
        {
            text: "oscylator (VFO)"
        },
        {
            text: "separator"
}
]
},
{
    questionID: 54,
    questionText: "Na rysunku przedstawiono schemat blokowy nadajnika SSB na dwa pasma amatorskie z wzbudnicą 9 MHz. Blok 1 to:",
    questionAnswers: [
        {
            text: "wzmacniacz mocy (PA)"
        },
        {
            text: "oscylator (VFO) 5 - 5.5 MHz"
        },
        {
            text: "wzbudnica SSB 9 MHz"
}
]
},
{
    questionID: 55,
    questionText: "Na rysunku przedstawiono schemat blokowy nadajnika SSB na dwa pasma amatorskie z wzbudnic 9 MHz. Blok 2 to:",
    questionAnswers: [
        {
            text: "wzmacniacz sterujący"
        },
        {
            text: "mieszacz"
        },
        {
            text: "filtr wyjściowy"
}
]
},
{
    questionID: 56,
    questionText: "Na rysunku przedstawiono schemat blokowy nadajnika UKF na pasmo 144MHz z powielaniem częstotliwości kanałowego generatora kwarcowego 8 MHz. Blok 1 to:",
    questionAnswers: [
        {
            text: "wzmacniacz mocy (PA)"
        },
        {
            text: "generator kwarcowy modulowany"
        },
        {
            text: "modulator"
}
]
},
{
    questionID: 57,
    questionText: "Na rysunku przedstawiono schemat blokowy nadajnika UKF na pasmo 144MHz z powielaniem częstotliwości kanałowego generatora kwarcowego 8 MHz. Blok 7 to:",
    questionAnswers: [
        {
            text: "modulator"
        },
        {
            text: "filtr wyjściowy"
        },
        {
            text: "I powielacz x 3"
}
]
},
{
    questionID: 58,
    questionText: "Jaka jest horyzontalna charakterystyka promieniowania dipola półfalowego zawieszonego poziomo?",
    questionAnswers: [
        {
            text: "dookólna"
        },
        {
            text: "ósemkowa"
        },
        {
            text: "kierunkowa w linii zawieszenia"
}
]
},
{
    questionID: 59,
    questionText: "Jaka jest horyzontalna charakterystyka promieniowania pionowej anteny ćwierćfalowej?",
    questionAnswers: [
        {
            text: "dookólna"
        },
        {
            text: "kierunkowa"
        },
        {
            text: "w kształcie koniczyny"
}
]
},
{
    questionID: 60,
    questionText: "Na rysunku przedstawiona jest antena typu Yagi. Element 1 to:",
    questionAnswers: [
        {
            text: "reflektor"
        },
        {
            text: "radiator"
        },
        {
            text: "I direktor"
}
]
},
{
    questionID: 61,
    questionText: "Na rysunku przedstawiona jest antena typu Yagi. Element 2 to:",
    questionAnswers: [
        {
            text: "radiator"
        },
        {
            text: "II direktor"
        },
        {
            text: "reflektor"
}
]
},
{
    questionID: 62,
    questionText: "Na rysunku przedstawiona jest antena typu Yagi. Element 3 to:",
    questionAnswers: [
        {
            text: "radiator"
        },
        {
            text: "I direktor"
        },
        {
            text: "II direktor"
}
]
},
{
    questionID: 63,
    questionText: "Na rysunku przedstawiona jest antena typu Yagi. Element 4 to:",
    questionAnswers: [
        {
            text: "I direktor"
        },
        {
            text: "II direktor"
        },
        {
            text: "radiator"
}
]
},
{
    questionID: 64,
    questionText: "Dlaczego kable koncentryczne nadawcze wykonywane są z opornością falową 50 om?",
    questionAnswers: [
        {
            text: "bo jest ona zbliżona do oporności dipola półfalowego"
        },
        {
            text: "bo najłatwiej takie wykonać"
        },
        {
            text: "bo wymagają do wykonania najmniejszej ilości materiału"
}
]
},
{
    questionID: 65,
    questionText: "W jakim przypadku powstaje w linii przesyłowej w.cz. fala stojąca?",
    questionAnswers: [
        {
            text: "kiedy kabel nie jest ułożony prosto"
        },
        {
            text: "kiedy obok kabla koncentrycznego przechodzi inny kabel"
        },
        {
            text: "kiedy oporność obciążenia nie jest zgodna z opornością falową kabla"
}
]
},
{
    questionID: 66,
    questionText: "Jak nazywa się przyrząd do mierzenia fali stojącej w kablu koncentrycznym?",
    questionAnswers: [
        {
            text: "rezystomierz"
        },
        {
            text: "reflektometr"
        },
        {
            text: "refraktometr"
}
]
},
{
    questionID: 67,
    questionText: "Reflektometr wskazuje, że fala padająca jest równa fali odbitej. WFS równy jest nieskończoności. Co może być przyczyną takiego stanu?",
    questionAnswers: [
        {
            text: "zwarcie lub przerwa w kablu"
        },
        {
            text: "niewielka zmiana oporności falowej anteny"
        },
        {
            text: "zamoczenie izolacji w kablu"
}
]
},
{
    questionID: 68,
    questionText: "Połączenie niesymetrycznego kabla koncentrycznego 50 om do symetrycznej anteny o oporności falowej 50 om wymaga zastosowania:",
    questionAnswers: [
        {
            text: "transformatora impedancji 1 do 4"
        },
        {
            text: "symetryzatora 1 do 1"
        },
        {
            text: "baluna o przekładni 1 do 2"
}
]
},
{
    questionID: 69,
    questionText: "Czy stan jonosfery ma wpływ na rozchodzenie się fal krótkich?",
    questionAnswers: [
        {
            text: "słaby"
        },
        {
            text: "tylko okresowo, w dzień"
        },
        {
            text: "ma bardzo duży wpływ"
}
]
},
{
    questionID: 70,
    questionText: "Co jaki okres czasu następują bardzo dobre warunki propagacyjne i z czym to jest związane?",
    questionAnswers: [
        {
            text: "nieregularnie"
        },
        {
            text: "co kilka lat w związku z ociepleniem"
        },
        {
            text: "regularnie co 11 lat przy maksymalnej aktywności słonecznej"
}
]
},
{
    questionID: 71,
    questionText: "Co to jest zasięg horyzontalny na UKF?",
    questionAnswers: [
        {
            text: "zasięg wyznaczony linią horyzontu przy prostoliniowym rozchodzeniu się fal",
        },
        {
            text: "zasięg obliczony z mocy promieniowanej e.i.r.p."
        },
        {
            text: "zasięg teoretyczny nadajnika"
}
]
},
{
    questionID: 72,
    questionText: "Dalekie rozchodzenie się fal UKF podczas inwersji temperaturowej w troposferze polega na:",
    questionAnswers: [
        {
            text: "na wielokrotnym odbijaniu się fal od ciepłej ziemi"
        },
        {
            text: "na odbijaniu fal radiowych od ciepłego powietrza"
        },
        {
            text: "prowadzeniu fal przez dukty powstałe z warstw ciepłego i zimnego powietrza"
}
]
},
{
    questionID: 73,
    questionText: "Skrót EME oznacza łączności na UKF:",
    questionAnswers: [
        {
            text: "z wykorzystaniem odbicia sygnału od Księżyca"
        },
        {
            text: "wykorzystaniem do łączności siły elektromotorycznej SEM"
        },
        {
            text: "za pomocą elektromagnetycznej emisji EME na UKF"
}
]
},
{
    questionID: 74,
    questionText: "Jak nazywa się przyrząd do pomiaru napięcia?",
    questionAnswers: [
        {
            text: "omomierz"
        },
        {
            text: "woltomierz"
        },
        {
            text: "amperomierz"
}
]
},
{
    questionID: 75,
    questionText: "Jakim przyrządem możemy zmierzyć wartość opornika?",
    questionAnswers: [
        {
            text: "omomierzem"
        },
        {
            text: "woltomierzem"
        },
        {
            text: "amperomierzem"
}
]
},
{
    questionID: 76,
    questionText: "Co to jest przyrząd uniwersalny wielozakresowy?",
    questionAnswers: [
        {
            text: "przyrząd do pomiaru tylko jednego napięcia"
        },
        {
            text: "przyrząd do pomiarów, napięć, prądów, oporności, w wielu zakresach"
        },
        {
            text: "przyrząd do pomiaru wielu napięć"
}
]
},
{
    questionID: 77,
    questionText: "Jak zmierzyć moc prądu stałego?",
    questionAnswers: [
        {
            text: "zmierzyć prąd i napięcie w obwodzie i obliczyć"
        },
        {
            text: "zmierzyć oporność obwodu i obliczyć"
        },
        {
            text: "zmierzyć prąd i obliczyć"
}
]
},
{
    questionID: 78,
    questionText: "Jak w warunkach amatorskich zmierzyć moc wyjściową nadajnika?",
    questionAnswers: [
        {
            text: "poprzez pomiar napięcia skutecznego na oporze sztucznej anteny 50 om i obliczenie"
        },
        {
            text: "poprzez pomiar prądu i napięcia stałego doprowadzonego do stopnia mocy (PA)"
        },
        {
            text: "poprzez uzyskanie raportu od korespondenta"
}
]
},
{
    questionID: 79,
    questionText: "Jakim przyrządem mierzymy dopasowanie obciążenia do kabla koncentrycznego?",
    questionAnswers: [
        {
            text: "żarówką włączoną w szereg na maksimum świecenia"
        },
        {
            text: "sprawdzeniem czy kabel się nie grzeje"
        },
        {
            text: "za pomocą reflektometru przelotowego"
}
]
},
{
    questionID: 80,
    questionText: "Jak zwalczamy zakłócenia rozprowadzane siecią energetyczną?",
    questionAnswers: [
        {
            text: "przez stosowanie grubych przewodów"
        },
        {
            text: "przez stosowanie filtrów sieciowych i ekranowanie urządzeń, odpowiednią konstrukcję"
        },
        {
            text: "przez zasilanie bateryjne urządzeń"
}
]
},
{
    questionID: 81,
    questionText: "Co to jest kompatybilność elektromagnetyczna (EMC)?",
    questionAnswers: [
        {
            text: "zamienność urządzeń"
        },
        {
            text: "wymogi co do podobnej obsługi urządzeń elektrycznych"
        },
        {
            text: "taka konstrukcja sprzętu, by urządzenia nie wpływały na siebie i mogły pracować bez powodowania wzajemnych zakłóceń"
}
]
},
{
    questionID: 82,
    questionText: "Jeżeli nadajnik amatorski powoduje zakłócenia, to jakie elementy sprawdzamy w pierwszej kolejności?",
    questionAnswers: [
        {
            text: "zawieszenie anteny"
        },
        {
            text: "odbiornik"
        },
        {
            text: "liniowość stopnia mocy (PA) i filtr wyjściowy"
}
]
},
{
    questionID: 83,
    questionText: "Dlaczego w zabudowie miejskiej stosujemy do anten kable koncentryczne?",
    questionAnswers: [
        {
            text: "bo są ogólnie dostępne"
        },
        {
            text: "bo są trwałe"
        },
        {
            text: "bo przy dopasowaniu nie promieniują energii i mogą przechodzić obok innych anten i urządzeń"
}
]
},
{
    questionID: 84,
    questionText: "Jeżeli nadajnik promieniuje energię w.cz. poprzez sieć zasilającą to stosujemy:",
    questionAnswers: [
        {
            text: "filtr w.cz. na wyjściu antenowym nadajnika"
        },
        {
            text: "uziemiamy obudowę"
        },
        {
            text: "uziemiamy obudowę i włączamy filtr sieciowy w zasilanie"
}
]
},
{
    questionID: 85,
    questionText: "Jaka instytucja zajmuje się lokalizowaniem zakłóceń radiowych i radioelektrycznych oraz badaniem sprzętu radionadawczego?",
    questionAnswers: [
        {
            text: "Urząd Komunikacji Elektronicznej"
        },
        {
            text: "Ministerstwo Ochrony Środowiska"
        },
        {
            text: "Sztaby antykryzysowe"
}
]
},
{
    questionID: 86,
    questionText: "Prąd elektryczny w przewodzie metalowym płynie dzięki obecności w nim:",
    questionAnswers: [
        {
            text: "swobodnych jonów"
        },
        {
            text: "wolnych elektronów"
        },
        {
            text: "wolnych atomów"
}
]
},
{
    questionID: 87,
    questionText: "Jak zmienia się opór przewodu miedzianego podczas wzrostu temperatury?",
    questionAnswers: [
        {
            text: "opór maleje"
        },
        {
            text: "opór rośnie"
        },
        {
            text: "nie zmienia się"
}
]
},
{
    questionID: 88,
    questionText: "Jaki ładunek ma elektron?",
    questionAnswers: [
        {
            text: "dodatni"
        },
        {
            text: "nie posiada ładunku"
        },
        {
            text: "ujemny"
}
]
},
{
    questionID: 89,
    questionText: "W obwodach elektrycznych przyjmujemy, że kierunek przepływu prądu odbywa się od:",
    questionAnswers: [
        {
            text: "od wyższego potencjału (+) do niższego (-)"
        },
        {
            text: "w prawo zgodnie z wskazówkami zegara"
        },
        {
            text: "przeciwnie do wskazówek zegara"
}
]
},
{
    questionID: 90,
    questionText: "W obwodzie prądu stałego przez opornik 1000 om płynie prąd 2 mA. Jaki jest spadek napięcia na oporze?",
    questionAnswers: [
        {
            text: "spadek wynosi 500 V"
        },
        {
            text: "spadek wynosi 2000 V"
        },
        {
            text: "spadek wynosi 2 V"
}
]
},
{
    questionID: 91,
    questionText: "Akumulator ma napięcie 6.5 V. Do akumulatora chcemy podłączyć żarówkę 3,5 V 0,3 A. Jaki opornik należy włączyć w szereg by ograniczyć prąd?",
    questionAnswers: [
        {
            text: "opornik 3.5 om"
        },
        {
            text: "opornik 100 om"
        },
        {
            text: "opornik 10 om"
}
]
},
{
    questionID: 92,
    questionText: "Opornik ma 200 om. Płynie przez niego prąd 300 mA. Jaka jest moc tracona w oporze?",
    questionAnswers: [
        {
            text: "18 W"
        },
        {
            text: "1800 W"
        },
        {
            text: "1,8 W"
}
]
},
{
    questionID: 93,
    questionText: "Jakie napięcie występuje na oporze 50 om przy dostarczeniu do niego mocy 200 W?",
    questionAnswers: [
        {
            text: "100 V"
        },
        {
            text: "200 V"
        },
        {
            text: "50 V"
        },
        {
}
]
},
{
    questionID: 94,
    questionText: "Mamy opornik 100 om dołączony do napięcia 3 V. Z jakiej grupy mocy wybierzemy opornik?",
    questionAnswers: [
        {
            text: "grupa 1 W"
        },
        {
            text: "grupa 0,125 W"
        },
        {
            text: "grupa 0,5 W"
}
]
},
{
    questionID: 95,
    questionText: "Jaka jest częstotliwość prądu zmiennego, którego okres wynosi 0,02 sek.?",
    questionAnswers: [
        {
            text: "100 Hz"
        },
        {
            text: "50 Hz"
        },
        {
            text: "60 Hz"
}
]
},
{
    questionID: 96,
    questionText: "Wartość amplitudy napięcia sinusoidalnego wynosi 200 V. Jaka jest wartość skuteczna napięcia?",
    questionAnswers: [
        {
            text: "200 V"
        },
        {
            text: "400 V"
        },
        {
            text: "141,8 V"
}
]
},
{
    questionID: 97,
    questionText: "Napięcie międzyszczytowe sinusoidalnego napięcia zmiennego wynosi 678 V. Ile wynosi wartość skuteczna tego napięcia?",
    questionAnswers: [
        {
            text: "340 V"
        },
        {
            text: "240 V"
        },
        {
            text: "680 V"
}
]
},
{
    questionID: 98,
    questionText: "Siła elektromotoryczna ogniwa wynosi 1,5 V. Oporność wewnętrzna ogniwa wynosi 0,1 oma. Z ogniwa pobieramy prąd 1 A. Jakie będzie napięcie na zaciskach ogniwa?",
    questionAnswers: [
        {
            text: "1.5 V"
        },
        {
            text: "1 V"
        },
        {
            text: "1,4 V"
}
]
},
{
    questionID: 99,
    questionText: "Pole elektryczne nazywamy jednorodnym jeżeli:",
    questionAnswers: [
        {
            text: "linie sił pola są prostopadłe"
        },
        {
            text: "linie układają się w koła"
        },
        {
            text: "linie sił są równoległe"
}
]
},
{
    questionID: 100,
    questionText: "Pole elektryczne może być ekranowane za pomocą:",
    questionAnswers: [
        {
            text: "ekranów z blach metalowych"
        },
        {
            text: "ekranów z izolatorów"
        },
        {
            text: "ekranów z luster"
}
]
},
{
    questionID: 101,
    questionText: "Do jakich materiałów magnetycznych należą magnesy stałe?",
    questionAnswers: [
        {
            text: "materiałów paramagnetycznych"
        },
        {
            text: "materiałów magnetycznie twardych"
        },
        {
            text: "magnetycznie miękkich"
}
]
},
{
    questionID: 102,
    questionText: "Dlaczego rdzenie transformatorów wykonywane są z blaszek a nie z litego materiału?",
    questionAnswers: [
        {
            text: "ze względu na lepsze chłodzenie"
        },
        {
            text: "ze względu na łatwiejsze wykonanie"
        },
        {
            text: "ze względu na mniejsze straty przy prądach wirowych"
}
]
},
{
    questionID: 103,
    questionText: "Ekranowanie pól magnetycznych wykonujemy z materiałów:",
    questionAnswers: [
        {
            text: "izolacyjnych"
        },
        {
            text: "z materiałów o wysokiej przenikalności magnetycznej"
        },
        {
            text: "z materiałów o małym oporze właściwym"
}
]
},
{
    questionID: 104,
    questionText: "Fala elektromagnetyczna ma dwie składowe. Zaznacz która kombinacja jest poprawna:",
    questionAnswers: [
        {
            text: "składowa elektryczna i składowa prędkości"
        },
        {
            text: "składowa elektryczna i magnetyczna"
        },
        {
            text: "składowa magnetyczna i składowa prędkości"
}
]
},
{
    questionID: 105,
    questionText: "Częstotliwość pracy nadajnika amatorskiego wynosi 3,5714 MHz. Jaka jest dokładna długość fali tego nadajnika?",
    questionAnswers: [
        {
            text: "80 m"
        },
        {
            text: "84 m"
        },
        {
            text: "81,08 m"
}
]
},
{
    questionID: 106,
    questionText: "Czy czysty sygnał sinusoidalny 1000 Hz, zawiera harmoniczne 2000 Hz i 3000 Hz?",
    questionAnswers: [
        {
            text: "zawiera tylko 2000 Hz"
        },
        {
            text: "zawiera obie harmoniczne"
        },
        {
            text: "nie zawiera w ogóle harmonicznych"
}
]
},
{
    questionID: 107,
    questionText: "Czy można prowadzić powielanie częstotliwości w stopniu mocy nadajnika?",
    questionAnswers: [
        {
            text: "tak"
        },
        {
            text: "nie"
        },
        {
            text: "jest to bez znaczenia"
}
]
},
{
    questionID: 108,
    questionText: "Przy modulacji amplitudy AM szerokość kanału radiowego zależy od:",
    questionAnswers: [
        {
            text: "najniższych częstotliwości modulujących"
        },
        {
            text: "amplitudy modulującego sygnału"
        },
        {
            text: "najwyższych częstotliwości modulujących"
}
]
},
{
    questionID: 109,
    questionText: "Modulacja cyfrowa FSK oznacza przesyłanie sygnału telegrafii maszynowej RTTY za pomocą:",
    questionAnswers: [
        {
            text: "modulacji amplitudy"
        },
        {
            text: "modulacji fazy"
        },
        {
            text: "modulacji z przesuwem częstotliwości"
}
]
},
{
    questionID: 110,
    questionText: "Moc wyjściową nadajnika FM podano w dBW i wynosi ona 13 dBW. Ile to jest w watach? (dla ułatwienia podajemy, że 10 dBW odpowiada 10 W",
        questionAnswers: [
            {
                text: "5 W"
            },
            {
                text: "130 W"
            },
            {
                text: "20 W"
}
]
},
{
    questionID: 111,
    questionText: "Napięcie na wejściu odbiornika na oporności 50 om wynosi 10 uV. Napięcie to wzrosło do 100 uV. O ile wzrosło napięcie wyrażone w dB?",
    questionAnswers: [
        {
            text: "o 10 dB"
        },
        {
            text: "o 20 dB"
        },
        {
            text: "o 40 dB"
}
]
},
{
    questionID: 112,
    questionText: "Zasilacz nadajnika dostarcza do stopnia końcowego nadajnika napięcie 500 V i prąd 200 mA. Jaka jest sprawność energetyczna stopnia końcowego w % jeżeli na wyjściu zmierzyliśmy moc PEP = 40 W?",
    questionAnswers: [
        {
            text: "50 %"
        },
        {
            text: "40 %"
        },
        {
            text: "60 %"
}
]
},
{
    questionID: 113,
    questionText: "Tolerancja wykonania opornika 1 kom wynosi 5 %. W jakich granicach zawiera się jego oporność?",
    questionAnswers: [
        {
            text: "od 0,9 do 1,1 kom"
        },
        {
            text: "od 0,98 do 1,02 kom"
        },
        {
            text: "od 950 om do 1050 om"
}
]
},
{
    questionID: 114,
    questionText: "Spadek napięcia na oporniku wynosi 100 V, przy prądzie 10 mA. Opornik jakiej mocy zastosujemy w tym miejscu?",
    questionAnswers: [
        {
            text: "0,125 W"
        },
        {
            text: "1 W"
        },
        {
            text: "0,5 W"
}
]
},
{
    questionID: 115,
    questionText: "Kondensator mikowy ma pojemność 6800 pF, i napięcie pracy 500V. Czy można go zastosować w miejsce kondensatora 6,8 nF o napięciu pracy 250 V?",
    questionAnswers: [
        {
            text: "tak można"
        },
        {
            text: "nie można"
        },
        {
            text: "można, ale potrzebne są dwa takie kondensatory"
}
]
},
{
    questionID: 116,
    questionText: "W obwodzie prądu zmiennego przy tej samej częstotliwości zmieniono kondensator 2200 pF na 22 nF. Ile razy zmniejszyła się zawada Xc?",
    questionAnswers: [
        {
            text: "2 razy"
        },
        {
            text: "100 razy"
        },
        {
            text: "10 razy"
}
]
},
{
    questionID: 117,
    questionText: "Prąd zmienny płynący przez kondensator C:",
    questionAnswers: [
        {
            text: "wyprzedza napięcie na kondensatorze o 90 stopni"
        },
        {
            text: "jest w fazie z napięciem"
        },
        {
            text: "opóźnia się o 90 stopni wobec napięcia"
}
]
},
{
    questionID: 118,
    questionText: "Tranzystor krzemowy ma wzmocnienie prądowe B = 100. Napięcie zasilania wynosi 5 V. Przez kolektor tego tranzystora płynie prąd 100 mA. Jaki jest prąd bazy tego tranzystora?",
    questionAnswers: [
        {
            text: "1 mA"
        },
        {
            text: "5 mA"
        },
        {
            text: "20 mA"
}
]
},
{
    questionID: 119,
    questionText: "Przy jakich napięciach anodowych pracują amatorskie lampowe wzmacniacze mocy?",
    questionAnswers: [
        {
            text: "do 200 V"
        },
        {
            text: "do 50 V"
        },
        {
            text: "od 1,5 kV do 3 kV"
}
]
},
{
    questionID: 120,
    questionText: "W jakiej klasie wzmacniacza pracuje lampowy stopień mocy nadajnika telegraficznego?",
    questionAnswers: [
        {
            text: "w klasie A"
        },
        {
            text: "w klasie C"
        },
        {
            text: "w klasie AB"
}
]
},
{
    questionID: 121,
    questionText: "Mamy dwa kondensatory o pojemności jeden 4,7 nF a drugi 300 pF. Jak należy je połączyć by uzyskać pojemność 5000 pF?",
    questionAnswers: [
        {
            text: "szeregowo"
        },
        {
            text: "równolegle"
        },
        {
            text: "nie da się z nich złożyć 5000 pF"
}
]
},
{
    questionID: 122,
    questionText: "W układzie były trzy kondensatory po 30 uF połączone szeregowo . Każdy z nich ma napięcie pracy 100V. Czy możemy je zastąpić jednym kondensatorem 10 uF i o jakim napięciu pracy?",
    questionAnswers: [
        {
            text: "nie możemy"
        },
        {
            text: "możemy stosując kondensator na napięcie 100 V"
        },
        {
            text: "możemy, stosując kondensator na napięcie 300V"
}
]
},
{
    questionID: 123,
    questionText: "Dwie indukcyjności nie sprzężone mają 30 uH i 60 uH. Ile wynosi indukcyjność zastępcza przy połączeniu szeregowym tych indukcyjności?",
    questionAnswers: [
        {
            text: "90 uH"
        },
        {
            text: "20 uH"
        },
        {
            text: "45 uH"
}
]
},
{
    questionID: 124,
    questionText: "Dwa oporniki 1 kom połączone są w szereg i dołączone do napięcia 200 V. Jaki jest spadek napięcia na każdym z tych oporników?",
    questionAnswers: [
        {
            text: "50 V"
        },
        {
            text: "100 V"
        },
        {
            text: "200 V"
}
]
},
{
    questionID: 125,
    questionText: "Obwód rezonansowy równoległy LC, w punkcie rezonansu przedstawia oporność:",
    questionAnswers: [
        {
            text: "rzeczywistą omową"
        },
        {
            text: "reaktancję pojemnościową"
        },
        {
            text: "reaktancję indukcyjną"
}
]
},
{
    questionID: 126,
    questionText: "Mamy obwód rezonansowy o częstotliwości 3,5 MHz. W jego skład wchodzi pojemność C = 400 pF. Jaką pojemność należy dołączyć zamiast C, by przestroić obwód na 7 MHz?",
    questionAnswers: [
        {
            text: "200 pF"
        },
        {
            text: "100 pF"
        },
        {
            text: "57 pF"
}
]
},
{
    questionID: 127,
    questionText: "Pasmo obwodu rezonansowego zależy od dobroci Q obwodu. Jeżeli Q = 100 to ile wynosi pasmo przy częstotliwości obwodu 14 MHz?",
    questionAnswers: [
        {
            text: "280 kHz"
        },
        {
            text: "14 kHz"
        },
        {
            text: "140 kHz"
}
]
},
{
    questionID: 128,
    questionText: "Jakie pasmo musi posiadać filtr pasmowy dla poprawnego odbioru stacji radiofonicznej AM?",
    questionAnswers: [
        {
            text: "9 kHz"
        },
        {
            text: "20 kHz"
        },
        {
            text: "3.5 kHz"
}
]
},
{
    questionID: 129,
    questionText: "Na rysunku przedstawiono schemat prostownika. Jak nazywa się ten rodzaj prostownika?",
    questionAnswers: [
        {
            text: "prostownik dwupołówkowy"
        },
        {
            text: "prostownik jednopołówkowy"
        },
        {
            text: "prostownik mostkowy dwupołówkowy"
}
]
},
{
    questionID: 130,
    questionText: "Transformator zasilacza ma napięcie Usk = 300 V. Czy w prostowniku jednopołówkowym można użyć diody wytrzymującej wstecznie 400 V?",
    questionAnswers: [
        {
            text: "tak"
        },
        {
            text: "nie"
        },
        {
            text: "tak, ale z opornikiem w szereg"
}
]
},
{
    questionID: 131,
    questionText: "Napięcie na wyjściu zasilacza nieobciążonego z filtrem pojemnościowym, wynosi 25 V. Jakie jest napięcie Usk transformatora zasilającego diody?",
    questionAnswers: [
        {
            text: "25 V"
        },
        {
            text: "17,7 V"
        },
        {
            text: "20 V"
}
]
},
{
    questionID: 132,
    questionText: "Wzmacniacz posiada wzmocnienie napięciowe 10 razy. Wyraź to wzmocnienie w decybelach (dB)",
    questionAnswers: [
        {
            text: "10 dB"
        },
        {
            text: "20 dB"
        },
        {
            text: "40 dB"
}
]
},
{
    questionID: 133,
    questionText: "Wzmacniacz wysokiej częstotliwości obciążony obwodem rezonansowym jest:",
    questionAnswers: [
        {
            text: "wzmacniaczem selektywnym"
        },
        {
            text: "wzmacniaczem szerokopasmowym"
        },
        {
            text: "wzmacniaczem akustycznym"
}
]
},
{
    questionID: 134,
    questionText: "Czy w wzmacniaczu mocy pracującym idealnie liniowo, powstają harmoniczne?",
    questionAnswers: [
        {
            text: "tak"
        },
        {
            text: "nie"
        },
        {
            text: "tak ale małe"
}
]
},
{
    questionID: 135,
    questionText: "Na rysunku przedstawiono schemat detektora diodowego. Jaką rolę spełnia w nim kondensator C1?",
    questionAnswers: [
        {
            text: "jest kondensatorem filtrującym prądy w.cz."
        },
        {
            text: "poprawia odtwarzanie wysokich tonów"
        },
        {
            text: "chroni słuchawki przed uszkodzeniem"
}
]
},
{
    questionID: 136,
    questionText: "Dlaczego do detekcji sygnałów telegrafii CW używamy produkt detektora i pomocniczego generatora BFO?",
    questionAnswers: [
        {
            text: "bo sygnał CW jest przerywany"
        },
        {
            text: "musimy wytworzyć słyszalne dudnienia z niemodulowanym sygnałem CW"
        },
        {
            text: "bo sygnał CW jest słaby"
}
]
},
{
    questionID: 137,
    questionText: "Aby czytelnie odebrać sygnał SSB, to przy odbiorze dolnej wstęgi (LSB) sygnał odtwarzający falę nośną powinien być:",
    questionAnswers: [
        {
            text: "poniżej wstęgi LSB"
        },
        {
            text: "powyżej wstęgi LSB"
        },
        {
            text: "w środku LSB"
}
]
},
{
    questionID: 138,
    questionText: "Czy dyskryminator sygnału FM powinien reagować na modulację amplitudy sygnału FM?",
    questionAnswers: [
        {
            text: "nie"
        },
        {
            text: "tak"
        },
        {
            text: "nie ma to znaczenia"
}
]
},
{
    questionID: 139,
    questionText: "Warunkiem wzbudzenia się generatora z obwodem rezonansowym jest:",
    questionAnswers: [
        {
            text: "zastosowanie obwodu rezonansu szeregowego"
        },
        {
            text: "spełnienie warunku amplitudy i fazy"
        },
        {
            text: "zastosowanie ujemnego sprzężenia zwrotnego"
}
]
},
{
    questionID: 140,
    questionText: "Na rysunku przedstawiono kilka układów generatorów. Są one ponumerowane od 1 do 4. Wybierz pod którą literą znajdują się poprawne nazwy generatorów zgodne z kolejnością ich narysowania.",
    questionAnswers: [
        {
            text: "Meissner , Hartley, Colpitts, Clapp"
        },
        {
            text: "Colpits, Hartley, Clapp, Meisner"
        },
        {
            text: "Clapp, Colpitts, Hartley, Meissner"
}
]
},
{
    questionID: 141,
    questionText: "Oscylator kwarcowy ma wysoką stabilność częstotliwości. Zawdzięcza ją:",
    questionAnswers: [
        {
            text: "zasilaniu z stabilizowanego zasilacza"
        },
        {
            text: "zastosowaniu specjalnego tranzystora"
        },
        {
            text: "zastosowaniu rezonatora kwarcowego"
}
]
},
{
    questionID: 142,
    questionText: "Kwarce owertonowe to rezonatory kwarcowe pracujące na:",
    questionAnswers: [
        {
            text: "częstotliwościach harmonicznych"
        },
        {
            text: "na częstotliwościach podstawowych"
        },
        {
            text: "na częstotliwościach pasożytniczych"
}
]
},
{
    questionID: 143,
    questionText: "Na rysunku przedstawiono schemat stabilizacji PLL w formie ponumerowanych ale nie opisanych bloków. Blok 2 to:",
    questionAnswers: [
        {
            text: "komparator"
        },
        {
            text: "dzielnik nastawny"
        },
        {
            text: "generator wzorca"
}
]
},
{
    questionID: 144,
    questionText: "Na rysunku przedstawiono schemat stabilizacji PLL w formie ponumerowanych ale nie opisanych bloków. Blok 3 to:",
    questionAnswers: [
        {
            text: "dzielnik nastawny"
        },
        {
            text: "komparator"
        },
        {
            text: "wzmacniacz błędu"
}
]
},
{
    questionID: 145,
    questionText: "Na rysunku przedstawiono schemat stabilizacji PLL w formie ponumerowanych ale nie opisanych bloków. Blok 5 to:",
    questionAnswers: [
        {
            text: "dzielnik wzorca"
        },
        {
            text: "generator stabilizowany"
        },
        {
            text: "komparator"
}
]
},
{
    questionID: 146,
    questionText: "Na rysunku przedstawiono schemat stabilizacji PLL w formie ponumerowanych ale nie opisanych bloków. Blok 6 to:",
    questionAnswers: [
        {
            text: "komparator"
        },
        {
            text: "dzielnik nastawny"
        },
        {
            text: "wzmacniacz błędu"
}
]
},
{
    questionID: 147,
    questionText: "Na rysunku przedstawiono schemat blokowy odbiornika bezpośredniego wzmocnienia z reakcją. Blok 1 to:",
    questionAnswers: [
        {
            text: "detektor z reakcją"
        },
        {
            text: "wzmacniacz w. cz"
        },
        {
            text: "wzmacniacz akustyczny"
        }
]
},
{
    questionID: 148,
    questionText: "Na rysunku przedstawiono schemat blokowy odbiornika bezpośredniego wzmocnienia z reakcją. Blok 2 to:",
    questionAnswers: [
        {
            text: "wzmacniacz w. cz."
        },
        {
            text: "wzmacniacz akustyczny"
        },
        {
            text: "detektor z reakcją"
}
]
},
{
    questionID: 149,
    questionText: "Na rysunku przedstawiono schemat blokowy odbiornika superheterodynowego AM z pojedynczą przemianą. Blok 2 to:",
    questionAnswers: [
        {
            text: "wzmacniacz akustyczny"
        },
        {
            text: "mieszacz"
        },
        {
            text: "detektor AM"
}
]
},
{
    questionID: 150,
    questionText: "Na rysunku przedstawiono schemat blokowy odbiornika superheterodynowego AM z pojedynczą przemianą. Blok 3 to:",
    questionAnswers: [
        {
            text: "filtr wejściowy"
        },
        {
            text: "wzmacniacz pośredniej cz."
        },
        {
            text: "heterodyna"
}
]
},
{
    questionID: 151,
    questionText: "Na rysunku przedstawiono schemat blokowy odbiornika superheterodynowego AM z pojedynczą przemianą. Blok 4 to:",
    questionAnswers: [
        {
            text: "wzmacniacz akustyczny"
        },
        {
            text: "filtr wejściowy"
        },
        {
            text: "detektor AM"
}
]
},
{
    questionID: 152,
    questionText: "Na rysunku przedstawiono schemat blokowy odbiornika superheterodynowego AM z pojedynczą przemianą. Blok 6 to:",
    questionAnswers: [
        {
            text: "filtr wejściowy"
        },
        {
            text: "wzmacniacz akustyczny"
        },
        {
            text: "heterodyna"
}
]
},
{
    questionID: 153,
    questionText: "Na rysunku przedstawiono schemat blokowy odbiornika superheterodynowego AM, CW, SSB z podwójną przemianą częstotliwości. Blok 2 to:",
    questionAnswers: [
        {
            text: "wzmacniacz akustyczny"
        },
        {
            text: "I mieszacz"
        },
        {
            text: "filtr przełączany II p.cz."
}
]
},
{
    questionID: 154,
    questionText: "Na rysunku przedstawiono schemat blokowy odbiornika superheterodynowego AM, CW, SSB z podwójną przemianą częstotliwości. Blok 3 to:",
    questionAnswers: [
        {
            text: "BFO"
        },
        {
            text: "wzmacniacz I pośredniej cz."
        },
        {
            text: "heterodyna"
}
]
},
{
    questionID: 155,
    questionText: "Na rysunku przedstawiono schemat blokowy odbiornika superheterodynowego AM, CW, SSB z podwójną przemianą częstotliwości. Blok 4 to:",
    questionAnswers: [
        {
            text: "wzmacniacz akustyczny"
        },
        {
            text: "BFO"
        },
        {
            text: "II mieszacz"
}
]
},
{
    questionID: 156,
    questionText: "Na rysunku przedstawiono schemat blokowy odbiornika superheterodynowego AM, CW, SSB z podwójną przemianą częstotliwości. Blok 5 to:",
    questionAnswers: [
        {
            text: "II heterodyna stała"
        },
        {
            text: "wzmacniacz akustyczny"
        },
        {
            text: "detektor AM CW SSB"
}
]
},
{
    questionID: 157,
    questionText: "Na rysunku przedstawiono schemat blokowy odbiornika superheterodynowego AM, CW, SSB z podwójną przemianą częstotliwości. Blok 6 to:",
    questionAnswers: [
        {
            text: "filtr przełączany II p.cz."
        },
        {
            text: "wzmacniacz akustyczny"
        },
        {
            text: "II heterodyna stała"
}
]
},
{
    questionID: 158,
    questionText: "Na rysunku przedstawiono schemat blokowy odbiornika superheterodynowego AM, CW, SSB z podwójną przemianą częstotliwości. Blok 7 to:",
    questionAnswers: [
        {
            text: "BFO"
        },
        {
            text: "wzmacniacz II pośredniej cz."
        },
        {
            text: "detektor AM , CW, SSB"
}
]
},
{
    questionID: 159,
    questionText: "Na rysunku przedstawiono schemat blokowy odbiornika superheterodynowego AM, CW, SSB z podwójną przemianą częstotliwości. Blok 8 to:",
    questionAnswers: [
        {
            text: "wzmacniacz akustyczny"
        },
        {
            text: "wzmacniacz w.cz."
        },
        {
            text: "detektor AM, CW, SSB"
}
]
},
{
    questionID: 160,
    questionText: "Na rysunku przedstawiono schemat blokowy odbiornika superheterodynowego AM, CW, SSB z podwójną przemianą częstotliwości. Blok 10 to:",
    questionAnswers: [
        {
            text: "wzmacniacz akustyczny"
        },
        {
            text: "BFO"
        },
        {
            text: "detektor AM, CW, SSB"
}
]
},
{
    questionID: 161,
    questionText: "Na rysunku przedstawiono schemat blokowy odbiornika superheterodynowego AM, CW, SSB z podwójną przemianą częstotliwości. Blok 11 to:",
    questionAnswers: [
        {
            text: "I heterodyna strojona"
        },
        {
            text: "wzmacniacz akustyczny"
        },
        {
            text: "detektor AM"
}
]
},
{
    questionID: 162,
    questionText: "Na rysunku przedstawiono schemat blokowy odbiornika homodynowego CW i SSB, na jedno pasmo amatorskie. Blok 2 to:",
    questionAnswers: [
        {
            text: "wzmacniacz akustyczny"
        },
        {
            text: "filtr wejściowy"
        },
        {
            text: "mieszacz zrównoważony"
}
]
},
{
    questionID: 163,
    questionText: "Na rysunku przedstawiono schemat blokowy odbiornika homodynowego CW i SSB, na jedno pasmo amatorskie. Blok 3 to:",
    questionAnswers: [
        {
            text: "heterodyna"
        },
        {
            text: "wzmacniacz akustyczny"
        },
        {
            text: "filtr wejściowy"
}
]
},
{
    questionID: 164,
    questionText: "Na rysunku przedstawiono schemat blokowy odbiornika homodynowego CW i SSB, na jedno pasmo amatorskie. Blok 4 to:",
    questionAnswers: [
        {
            text: "filtr wejściowy"
        },
        {
            text: "wzmacniacz akustyczny"
        },
        {
            text: "heterodyna"
}
]
},
{
    questionID: 165,
    questionText: "Na rysunku przedstawiono schemat blokowy odbiornika superheterodynowego FM na pasmo 144 MHz z podwójną przemianą częstotliwości, pracującego w kanałach fonicznych, stabilizowany kwarcami. Blok 1 to:",
    questionAnswers: [
        {
            text: "wzmacniacz w.cz."
        },
        {
            text: "wzmacniacz akustyczny"
        },
        {
            text: "detektor FM"
}
]
},
{
    questionID: 166,
    questionText: "Na rysunku przedstawiono schemat blokowy odbiornika superheterodynowego FM na pasmo 144 MHz z podwójną przemianą częstotliwości, pracującego w kanałach fonicznych, stabilizowany kwarcami. Blok 3 to:",
    questionAnswers: [
        {
            text: "wzmacniacz w.cz."
        },
        {
            text: "wzmacniacz I pośredniej cz. 10,7 MHz"
        },
        {
            text: "I heterodyna"
}
]
},
{
    questionID: 167,
    questionText: "Na rysunku przedstawiono schemat blokowy odbiornika superheterodynowego FM na pasmo 144 MHz z podwójną przemianą częstotliwości, pracującego w kanałach fonicznych, stabilizowany kwarcami. Blok 4 to:",
    questionAnswers: [
        {
            text: "wzmacniacz akustyczny"
        },
        {
            text: "blokada szumów"
        },
        {
            text: "II mieszacz"
}
]
},
{
    questionID: 168,
    questionText: "Na rysunku przedstawiono schemat blokowy odbiornika superheterodynowego FM na pasmo 144 MHz z podwójną przemianą częstotliwości, pracującego w kanałach fonicznych, stabilizowany kwarcami. Blok 5 to:",
    questionAnswers: [
        {
            text: "II heterodyna stała"
        },
        {
            text: "wzmacniacz II p.cz. 455 kHz"
        },
        {
            text: "detektor FM"
}
]
},
{
    questionID: 169,
    questionText: "Na rysunku przedstawiono schemat blokowy odbiornika superheterodynowego FM na pasmo 144 MHz z podwójną przemianą częstotliwości, pracującego w kanałach fonicznych, stabilizowany kwarcami. Blok 6 to:",
    questionAnswers: [
        {
            text: "detektor FM"
        },
        {
            text: "wzmacniacz akustyczny"
        },
        {
            text: "II heterodyna stała"
}
]
},
{
    questionID: 170,
    questionText: "Na rysunku przedstawiono schemat blokowy odbiornika superheterodynowego FM na pasmo 144 MHz z podwójną przemianą częstotliwości, pracującego w kanałach fonicznych, stabilizowany kwarcami. Blok 7 to:",
    questionAnswers: [
        {
            text: "wzmacniacz II p. cz. 455kHz"
        },
        {
            text: "wzmacniacz akustyczny"
        },
        {
            text: "detektor FM"
}
]
},
{
    questionID: 171,
    questionText: "Na rysunku przedstawiono schemat blokowy odbiornika superheterodynowego FM na pasmo 144 MHz z podwójną przemianą częstotliwości, pracującego w kanałach fonicznych, stabilizowany kwarcami. Blok 8 to:",
    questionAnswers: [
        {
            text: "wzmacniacz akustyczny"
        },
        {
            text: "blokada szumów"
        },
        {
            text: "detektor FM"
}
]
},
{
    questionID: 172,
    questionText: "Na rysunku przedstawiono schemat blokowy odbiornika superheterodynowego FM na pasmo 144 MHz z podwójną przemianą częstotliwości, pracującego w kanałach fonicznych, stabilizowany kwarcami. Blok 9 to:",
    questionAnswers: [
        {
            text: "wzmacniacz akustyczny"
        },
        {
            text: "blokada szumów"
        },
        {
            text: "II heterodyna stała"
}
]
},
{
    questionID: 173,
    questionText: "Na rysunku przedstawiono schemat blokowy odbiornika superheterodynowego FM na pasmo 144 MHz z podwójną przemianą częstotliwości, pracującego w kanałach fonicznych, stabilizowany kwarcami. Blok 10 to:",
    questionAnswers: [
        {
            text: "I heterodyna kwarcowa"
        },
        {
            text: "wzmacniacz akustyczny"
        },
        {
            text: "detektor FM"
}
]
},
{
    questionID: 174,
    questionText: "Miarą selektywności odbiornika jest szerokość pasma odbieranego przez odbiornik. Przy jakim poziomie od poziomu maksymalnego mierzymy selektywność?",
    questionAnswers: [
        {
            text: "przy -10dB"
        },
        {
            text: "przy -6dB"
        },
        {
            text: "przy -12dB"
}
]
},
{
    questionID: 175,
    questionText: "Przy jakim stosunku sygnału do szumu mierzymy czułość odbiornika?",
    questionAnswers: [
        {
            text: "przy 6 dB"
        },
        {
            text: "przy 10 dB"
        },
        {
            text: "przy 20 dB"
}
]
},
{
    questionID: 176,
    questionText: "Na rysunku przedstawiono schemat blokowy nadajnika telegraficznego na jedno pasmo amatorskie. Blok 1 to:",
    questionAnswers: [
        {
            text: "separator"
        },
        {
            text: "wzmacniacz mocy (PA)"
        },
        {
            text: "oscylator (VFO)"
}
]
},
{
    questionID: 177,
    questionText: "Na rysunku przedstawiono schemat blokowy nadajnika telegraficznego na jedno pasmo amatorskie. Blok 2 to:",
    questionAnswers: [
        {
            text: "wzmacniacz mocy (PA)"
        },
        {
            text: "oscylator (VFO)"
        },
        {
            text: "separator"
}
]
},
{
    questionID: 178,
    questionText: "Na rysunku przedstawiono schemat blokowy nadajnika telegraficznego na jedno pasmo amatorskie. Blok 3 to:",
    questionAnswers: [
        {
            text: "oscylator (VFO)"
        },
        {
            text: "wzmacniacz mocy (PA)"
        },
        {
            text: "filtr wyjściowy"
}
]
},
{
    questionID: 179,
    questionText: "Na rysunku przedstawiono schemat blokowy nadajnika telegraficznego na kilka pasm amatorskich z powielaniem częstotliwości. Blok 2 to:",
    questionAnswers: [
        {
            text: "wzmacniacz sterujący"
        },
        {
            text: "separator"
        },
        {
            text: "I powielacz x2"
}
]
},
{
    questionID: 180,
    questionText: "Na rysunku przedstawiono schemat blokowy nadajnika telegraficznego na kilka pasm amatorskich z powielaniem częstotliwości. Blok 3 to:",
    questionAnswers: [
        {
            text: "wzmacniacz mocy (PA)"
        },
        {
            text: "I powielacz x2"
        },
        {
            text: "oscylator (VFO)"
}
]
},
{
    questionID: 181,
    questionText: "Na rysunku przedstawiono schemat blokowy nadajnika telegraficznego na kilka pasm amatorskich z powielaniem częstotliwości. Blok 4 to:",
    questionAnswers: [
        {
            text: "wzmacniacz sterujący"
        },
        {
            text: "filtr wyjściowy"
        },
        {
            text: "II powielacz x2"
}
]
},
{
    questionID: 182,
    questionText: "Na rysunku przedstawiono schemat blokowy nadajnika telegraficznego na kilka pasm amatorskich z powielaniem częstotliwości. Blok 5 to:",
    questionAnswers: [
        {
            text: "wzmacniacz sterujący"
        },
        {
            text: "I powielacz x2"
        },
        {
            text: "oscylator (VFO)"
}
]
},
{
    questionID: 183,
    questionText: "Na rysunku przedstawiono schemat blokowy nadajnika telegraficznego na kilka pasm amatorskich z powielaniem częstotliwości. Blok 6 to:",
    questionAnswers: [
        {
            text: "filtr wyjściowy"
        },
        {
            text: "wzmacniacz mocy (PA)"
        },
        {
            text: "II powielacz x2"
}
]
},
{
    questionID: 184,
    questionText: "Na rysunku przedstawiono schemat blokowy nadajnika telegraficznego na kilka pasm amatorskich z powielaniem częstotliwości. Blok 7 to:",
    questionAnswers: [
        {
            text: "oscylator (VFO)"
        },
        {
            text: "filtr wyjściowy"
        },
        {
            text: "separator"
}
]
},
{
    questionID: 185,
    questionText: "Na rysunku przedstawiono schemat blokowy nadajnika SSB na dwa pasma amatorskie z wzbudnicą 9 MHz. Blok 3 to:",
    questionAnswers: [
        {
            text: "filtr pasmowy 3.5 - 14 MHz"
        },
        {
            text: "wzmacniacz mocy (PA)"
        },
        {
            text: "VFO 5 - 5.5 MHz"
}
]
},
{
    questionID: 186,
    questionText: "Na rysunku przedstawiono schemat blokowy nadajnika SSB na dwa pasma amatorskie z wzbudnicą 9 MHz. Blok 4 to:",
    questionAnswers: [
        {
            text: "wzmacniacz sterujący"
        },
        {
            text: "filtr wyjściowy"
        },
        {
            text: "wzbudnica SSB 9 MHz"
}
]
},
{
    questionID: 187,
    questionText: "Na rysunku przedstawiono schemat blokowy nadajnika SSB na dwa pasma amatorskie z wzbudnicą 9 MHz. Blok 5 to:",
    questionAnswers: [
        {
            text: "wzmacniacz mocy (PA)"
        },
        {
            text: "mieszacz"
        },
        {
            text: "oscylator (VFO) 5 - 5.5 MHz"
}
]
},
{
    questionID: 188,
    questionText: "Na rysunku przedstawiono schemat blokowy nadajnika SSB na dwa pasma amatorskie z wzbudnicą 9 MHz. Blok 6 to:",
    questionAnswers: [
        {
            text: "wzmacniacz mocy (PA)"
        },
        {
            text: "filtr wyjściowy"
        },
        {
            text: "mieszacz"
}
]
},
{
    questionID: 189,
    questionText: "Na rysunku przedstawiono schemat blokowy nadajnika SSB na dwa pasma amatorskie z wzbudnicą 9 MHz. Blok 7 to:",
    questionAnswers: [
        {
            text: "oscylator (VFO) 5-5.5 MHz"
        },
        {
            text: "filtr wyjściowy"
        },
        {
            text: "filtr pasmowy 3.5 - 14 MHz"
}
]
},
{
    questionID: 190,
    questionText: "Na rysunku przedstawiono schemat blokowy nadajnika UKF na pasmo 144MHz z powielaniem częstotliwości kanałowego generatora kwarcowego 8 MHz. Blok 2 to:",
    questionAnswers: [
        {
            text: "generator kwarcowy modulowany"
        },
        {
            text: "modulator"
        },
        {
            text: "I powielacz x3"
}
]
},
{
    questionID: 191,
    questionText: "Na rysunku przedstawiono schemat blokowy nadajnika UKF na pasmo 144MHz z powielaniem częstotliwości kanałowego generatora kwarcowego 8 MHz. Blok 3 to:",
    questionAnswers: [
        {
            text: "I powielacz x3"
        },
        {
            text: "II powielacz x3"
        },
        {
            text: "generator kwarcowy modulowany"
}
]
},
{
    questionID: 192,
    questionText: "Na rysunku przedstawiono schemat blokowy nadajnika UKF na pasmo 144MHz z powielaniem częstotliwości kanałowego generatora kwarcowego 8 MHz. Blok 4 to:",
    questionAnswers: [
        {
            text: "wzmacniacz mocy (PA)"
        },
        {
            text: "filtr wyjściowy"
        },
        {
            text: "II powielacz x3"
}
]
},
{
    questionID: 193,
    questionText: "Na rysunku przedstawiono schemat blokowy nadajnika UKF na pasmo 144MHz z powielaniem częstotliwości kanałowego generatora kwarcowego 8 MHz. Blok 5 to:",
    questionAnswers: [
        {
            text: "filtr wyjściowy"
        },
        {
            text: "III powielacz x2"
        },
        {
            text: "modulator"
}
]
},
{
    questionID: 194,
    questionText: "Na rysunku przedstawiono schemat blokowy nadajnika UKF na pasmo 144MHz z powielaniem częstotliwości kanałowego generatora kwarcowego 8 MHz. Blok 6 to:",
    questionAnswers: [
        {
            text: "filtr wyjściowy"
        },
        {
            text: "wzmacniacz mocy (PA)"
        },
        {
            text: "II powielacz x3"
}
]
},
{
    questionID: 195,
    questionText: "Na rysunku przedstawiono schemat blokowy nadajnika UKF na pasmo 144 MHz z generatorem PLL. Blok 1 to:",
    questionAnswers: [
        {
            text: "wzmacniacz mocy (PA)"
        },
        {
            text: "generator PLL"
        },
        {
            text: "modulator"
}
]
},
{
    questionID: 196,
    questionText: "Na rysunku przedstawiono schemat blokowy nadajnika UKF na pasmo 144 MHz z generatorem PLL. Blok 2 to:",
    questionAnswers: [
        {
            text: "generator PLL"
        },
        {
            text: "modulator"
        },
        {
            text: "wzmacniacz sterujący"
}
]
},
{
    questionID: 197,
    questionText: "Na rysunku przedstawiono schemat blokowy nadajnika UKF na pasmo 144 MHz z generatorem PLL. Blok 3 to:",
    questionAnswers: [
        {
            text: "modulator"
        },
        {
            text: "wzmacniacz sterujący"
        },
        {
            text: "generator PLL"
}
]
},
{
    questionID: 198,
    questionText: "Na rysunku przedstawiono schemat blokowy nadajnika UKF na pasmo 144 MHz z generatorem PLL. Blok 4 to:",
    questionAnswers: [
        {
            text: "wzmacniacz mocy (PA)"
        },
        {
            text: "filtr wyjściowy"
        },
        {
            text: "modulator"
}
]
},
{
    questionID: 199,
    questionText: "Na rysunku przedstawiono schemat blokowy nadajnika UKF na pasmo 144 MHz z generatorem PLL. Blok 5 to:",
    questionAnswers: [
        {
            text: "filtr wyjściowy"
        },
        {
            text: "wzmacniacz sterujący"
        },
        {
            text: "modulator"
}
]
},
{
    questionID: 200,
    questionText: "Jak zmienia się oporność dipola półfalowego przy niskim zawieszeniu nad ziemią?",
    questionAnswers: [
        {
            text: "nie zmienia się"
        },
        {
            text: "rośnie"
        },
        {
            text: "maleje"
}
]
},
{
    questionID: 201,
    questionText: "W antenie dipolowej W3DZZ na pasma 80, 40, 20 metrów zastosowano trapy. Na jaką częstotliwość muszą być nastrojone?",
    questionAnswers: [
        {
            text: "10 MHz"
        },
        {
            text: "7,05 MHz"
        },
        {
            text: "14,1 MHz"
}
]
},
{
    questionID: 202,
    questionText: "Zysk anteny kierunkowej wyrażony jest w dBi. Względem jakiego źródła jest określony?",
    questionAnswers: [
        {
            text: "dipola pomiarowego"
        },
        {
            text: "źródła izotropowego"
        },
        {
            text: "innej anteny kierunkowej"
}
]
},
{
    questionID: 203,
    questionText: "Jaka jest różnica pomiędzy efektywną mocą promieniowaną e.r.p. a efektywną mocą promieniowaną izotropowo e.i.r.p?",
    questionAnswers: [
        {
            text: "e.i.r.p. jest większe o 2,16 dB od e.r.p."
        },
        {
            text: "e.i.r.p. jest mniejsze o 2,16 dB od e.r.p."
        },
        {
            text: "nie ma różnicy"
}
]
},
{
    questionID: 204,
    questionText: "Antena kierunkowa na UKF w miejscu odbioru daje napięcie 4 razy większe jak dipol półfalowy. Jaki ma zysk dBd?",
    questionAnswers: [
        {
            text: "6 dBd"
        },
        {
            text: "4 dBd"
        },
        {
            text: "12 dBd"
}
]
},
{
    questionID: 205,
    questionText: "Kabel koncentryczny wprowadza straty sygnału. Kabel przy częstotliwości 150 MHz ma straty 12 dB na 100 m. Długość kabla między anteną a odbiornikiem wynosi 50 m. Ile razy napięcie na wejściu odbiornika będzie mniejsze niż w antenie?",
    questionAnswers: [
        {
            text: "4 razy"
        },
        {
            text: "6 razy"
        },
        {
            text: "2 razy"
}
]
},
{
    questionID: 206,
    questionText: "Jakie długości fal zaliczamy do zakresu fal krótkich?",
    questionAnswers: [
        {
            text: "od 100 m do 10 m"
        },
        {
            text: "od 80 m do 13 m"
        },
        {
            text: "od 160 m do 10 m"
}
]
},
{
    questionID: 207,
    questionText: "Do jakiej wysokości sięgają najwyższe warstwy jonosfery w lecie w dzień?",
    questionAnswers: [
        {
            text: "do 200 km"
        },
        {
            text: "450 km"
        },
        {
            text: "100 km"
}
]
},
{
    questionID: 208,
    questionText: "O czym mówi podawana w prognozach propagacji częstotliwość MUF?",
    questionAnswers: [
        {
            text: "o zakłóceniach odbioru"
        },
        {
            text: "o maksymalnej częstotliwości do łączności na danej trasie"
        },
        {
            text: "o zaniku łączności w danym kierunku"
}
]
},
{
    questionID: 209,
    questionText: "Co to jest strefa martwa na falach krótkich?",
    questionAnswers: [
        {
            text: "strefa bez odbioru leżąca pomiędzy końcem fali przyziemnej a powrotem fali przestrzennej"
        },
        {
            text: "strefa bez odbioru z powodu dużych zakłóceń w mieście"
        },
        {
            text: "strefa w której brak odbioru z powodu interferencji fal przychodzących z różnych kierunków"
}
]
},
{
    questionID: 210,
    questionText: "Jakim przyrządem możemy sprawdzić kształt napięcia zmiennego w.cz. i wykryć zniekształcenia sygnału?",
    questionAnswers: [
        {
            text: "oscyloskopem"
        },
        {
            text: "miernikiem napięcia"
        },
        {
            text: "słuchając odbiornikiem"
}
]
},
{
    questionID: 211,
    questionText: "Jakie dodatkowe zabezpieczenie, oprócz umieszczenia jej na bezpiecznej wysokości, są zalecane dla anteny na terenowym QTH?",
    questionAnswers: [
        {
            text: "nie są potrzebne żadne dodatkowe zabezpieczenia"
        },
        {
            text: "wykonanie anteny z drutu miedzianego w igielicie"
        },
        {
            text: "zakaz przebywania pod anteną podczas nadawania"
}
]
},
{
    questionID: 212,
    questionText: "Czy można wykorzystać sieć wodociągową jako uziemienie?",
    questionAnswers: [
        {
            text: "tak"
        },
        {
            text: "jedynie po zbocznikowaniu wodomierza i upewnieniu się, że jest ona uziemiona oraz po uzyskaniu zgody jednostki eksploatującej tę sieć"
        },
        {
            text: "nie, jest to zabronione"
}
]
},
{
    questionID: 213,
    questionText: "Resuscytację krążeniowo-oddechową u osoby dorosłej, bez widocznych obrażeń ciała, wykonujemy w stosunku:",
    questionAnswers: [
        {
            text: "30 uciśnięć klatki piersiowej na dwa wdechy"
        },
        {
            text: "20 uciśnięć klatki piersiowej na cztery wdechy"
        },
        {
            text: "15 uciśnięć klatki piersiowej na sześć wdechów"
}
]
},
{
    questionID: 214,
    questionText: "Podczas pracy z monitorem komputerowym minimalne zalecane przerwy wynoszą:",
    questionAnswers: [
        {
            text: "co dwie godziny po 20 minut"
        },
        {
            text: "co godzinę pięć minut"
        },
        {
            text: "co trzy godziny po dziesięć minut"
}
]
},
{
    questionID: 215,
    questionText: "Jakie oznaczenie na rękojeści narzędzia ma istotne znaczenie przy pracach elektrycznych?",
    questionAnswers: [
        {
            text: "rodzaj zastosowanej izolacji"
        },
        {
            text: "nazwa producenta"
        },
        {
            text: "dopuszczalne napięcie pracy"
}
]
},
{
    questionID: 216,
    questionText: "Dlaczego stosuje się ograniczenia w przebywaniu (zamieszkaniu) w bezpośrednim sąsiedztwie dużych obiektów nadawczych radiowych i telewizyjnych?",
    questionAnswers: [
        {
            text: "ze względu na wyładowania atmosferyczne"
        },
        {
            text: "ze względu na duże natężenie pola elektromagnetycznego mogące mieć negatywny wpływ na zdrowie"
        },
        {
            text: "ze względu na możliwość przewrócenia się masztu"
}
]
},
{
    questionID: 217,
    questionText: "Czy wolno wykonywać prace antenowe przy włączonym nadajniku?",
    questionAnswers: [
        {
            text: "wolno, bez żadnych ograniczeń"
        },
        {
            text: "wolno, ale tylko przy małych mocach nadajnika"
        },
        {
            text: "kategorycznie nie wolno"
}
]
},
{
    questionID: 218,
    questionText: "Na polu antenowym mamy kilka anten na różne pasma. Czy można regulować nieczynne anteny, jeżeli obok pracuje na podobnej antenie nadajnik KF?",
    questionAnswers: [
        {
            text: "nie wolno"
        },
        {
            text: "można"
        },
        {
            text: "można, ale tylko gdy nadajnik ten pracuje z małą mocą"
}
]
},
{
    questionID: 219,
    questionText: "Spełnienie jakich warunków konstrukcyjnych ogranicza przedostawanie się energii w.cz. niepożądanymi drogami?",
    questionAnswers: [
        {
            text: "dobre uziemienie i szczelność ekranowania"
        },
        {
            text: "filtrowany zasilacz"
        },
        {
            text: "odpowiedni przekrój kabla sieciowego"
        },
        {
}
]
},
{
    questionID: 220,
    questionText: "Czy źle wykonany uziom może być przyczyną szkodliwego promieniowania w.cz.?",
    questionAnswers: [
        {
            text: "nie"
        },
        {
            text: "tak"
        },
        {
            text: "nie zawsze"
}
]
},
{
    questionID: 221,
    questionText: "Jakie niebezpieczeństwo grozi, gdy trzymamy w rękach naładowany kondensator elektrolityczny?",
    questionAnswers: [
        {
            text: "porażenie prądem elektrycznym"
        },
        {
            text: "nie ma żadnego niebezpieczeństwa"
        },
        {
            text: "implozja kondensatora"
}
]
},
{
    questionID: 222,
    questionText: "Czy zwarcie drutem biegunów źródła prądu (bateria, akumulator) może być niebezpieczne?",
    questionAnswers: [
        {
            text: "nie ma żadnego zagrożenia"
        },
        {
            text: "tak, może spowodować pożar"
        },
        {
            text: "tak, może spowodować stopienie się drutu i poparzenie roztopionym metalem"
}
]
},
{
    questionID: 223,
    questionText: "Czy kondensator elektrolityczny musi mieć napięcie pracy równe lub większe niż napięcie występujące w układzie w jakim pracuje?",
    questionAnswers: [
        {
            text: "napięcie pracy kondensatora nie ma znaczenia"
        },
        {
text: "napięcie pracy kondensatora ma znaczenia tylko w niektórych typach układów"
},
{
text: "koniecznie, gdyż może ulec zniszczeniu"
}
]
},
{
    questionID: 224,
    questionText: "Czy brak filtru przeciw zakłóceniowego na obwodzie zasilania sieciowego może być przyczyną zakłóceń w pracy urządzenia?",
    questionAnswers: [
        {
            text: "tak, ale tylko przy dużej mocy"
        },
        {
text: "zawsze, bez względu na moc"
},
{
text: "to nie ma znaczenia, rolę filtru pełni transformator zasilacza"
}
]
},
{
    questionID: 225,
    questionText: "Czy promieniowanie elektromagnetyczne w.cz. może mieć wpływ na zdrowie człowieka?",
    questionAnswers: [
        {
            text: "nie"
        },
        {
text: "tak"
},
{
text: "nie, jeśli używamy specjalnego ubrania ochronnego"
}
]
},
{
    questionID: 226,
    questionText: "Czy sztuczne obciążenie w postaci opornika bezindukcyjnego powinno być ekranowane?",
    questionAnswers: [
        {
            text: "nie ma takiej potrzeby"
        },
        {
text: "tak, zawsze powinno być ekranowane i uziemione w tym samym punkcie co radiostacja"
},
{
text: "tylko w przypadku gdy wzmacniacz mocy nie jest właściwie dostrojony"
}
]
},
{
    questionID: 227,
    questionText: "Czy można uruchomić urządzenie po przeniesieniu z zimnego pomieszczenia do ciepłego?",
    questionAnswers: [
        {
            text: "istnieje bezwzględny zakaz"
        },
        {
text: "można, ale po odczekaniu pewnego czasu"
},
{
text: "można natychmiast, bez żadnego ryzyka"
}
]
},
{
    questionID: 228,
    questionText: "Czy plastikowa obudowa urządzenia nadawczego stanowi odpowiednie zabezpieczenie przed oddziaływaniem energii w.cz.?",
    questionAnswers: [
        {
            text: "jest to wystarczające zabezpieczenie przed energią w.cz."
        },
        {
text: "urządzenia te używa się głównie na terenowym QTH więc takie zabezpieczenie nie jest potrzebne"
},
{
text: "nie stanowi żadnego zabezpieczenia przed energią w.cz."
}
]
},
{
    questionID: 229,
    questionText: "Czy dopuszczalne jest użycie sieci CO (np. kaloryfera) do uziemienia radiostacji?",
    questionAnswers: [
        {
            text: "tak"
        },
        {
text: "tylko po upewnieniu się, że jest ona właściwie uziemiona oraz po uzyskaniu zgody jednostki eksploatującej tę sieć"
},
{
text: "nie"
}
]
},
{
    questionID: 230,
    questionText: "Jaki zapas mocy powinien mieć zasilacz urządzeń AM i FM przewidziany do ciągłej bezawaryjnej pracy?",
    questionAnswers: [
        {
            text: "20% więcej"
        },
        {
text: "50% więcej"
},
{
text: "10 % więcej powyżej mocy maksymalnej"
}
]
},
{
    questionID: 231,
    questionText: "Czy można wykorzystać jako uziemienie rurę instalacji gazowej?",
    questionAnswers: [
        {
            text: "bezwzględnie nie wolno"
        },
        {
text: "wolno bez żadnych ograniczeń"
},
{
text: "wolno jedynie w sytuacji, gdy nie dysponuje się innym uziemieniem"
}
]
},
{
    questionID: 232,
    questionText: "Jakie działania należy podjąć, aby udzielić pomocy porażonemu prądem elektrycznym?",
    questionAnswers: [
        {
            text: "odłączyć porażonego od prądu, podjąć działania w celu wyeliminowania skutków ewentualnych poparzeń"
        },
        {
text: "zadbać o własne bezpieczeństwo, odłączyć porażonego od prądy, sprawdzić funkcje życiowe, wezwać lekarza, w razie konieczności przeprowadzać resuscytację krążeniowo-oddechową"
},
{
text: "zadbać o własne bezpieczeństwo, wezwać znajomych w celu prowadzenia wspólnej akcji ratowniczej"
}
]
},
{
    questionID: 233,
    questionText: "Pomieszczenie, w którym znajduje się indywidualna stacja amatorska, powinno być wyposażone w następujące środki ochrony p-poż:",
    questionAnswers: [
        {
            text: "środki gaśnicze wymagane dla obiektów użytku publicznego"
        },
        {
text: "koc gaśniczy i gaśnicę do gaszenia urządzeń elektrycznych"
},
{
text: "gaśnicę do gaszenia urządzeń pod napięciem"
}
]
},
{
    questionID: 234,
    questionText: "Przewody zasilające prądu stałego oznaczone są kolorami:",
    questionAnswers: [
        {
            text: "żółty i czarny"
        },
        {
text: "niebieski i czarny"
},
{
text: "czerwony i czarny"
}
]
},
{
    questionID: 235,
    questionText: "Uszkodzonych tranzystorów nie powinno się otwierać, gdyż:",
    questionAnswers: [
        {
            text: "można się pokaleczyć"
        },
        {
text: "zawierają szkodliwe substancje, mogące spowodować ciężkie zatrucie"
},
{
text: "zawierają tajemnice produkcji, których i tak nie jesteśmy w stanie wykorzystać"
}
]
},
{
    questionID: 236,
    questionText: "Narzędzia do prac elektrycznych powinny:",
    questionAnswers: [
        {
            text: "charakteryzować się estetyką wykonania"
        },
        {
text: "posiadać homologację Ministerstwa Łączności"
},
{
text: "posiadać izolowane uchwyty z nadrukowaną informacją o dopuszczalnym napięciu pracy np. 500 V"
}
]
},
{
    questionID: 237,
    questionText: "Na terenowym QTH uziemienie można wykonać:",
    questionAnswers: [
        {
            text: "wbijając uziom do ziemi jako osobne uziemienie dla swojej stacji"
        },
        {
text: "podłączając się do uziomu roboczego na słupie kratowym"
},
{
text: "podłączając się do uziomu w energetycznej szafie rozdzielczej"
}
]
},
{
    questionID: 238,
    questionText: "Uruchomienie nieznanego urządzenia rozpoczyna się od:",
    questionAnswers: [
        {
            text: "włożenia wtyczki do kontaktu i przełączenia przełącznika"
        },
        {
text: "podłączenia anteny i uziemienia"
},
{
text: "sprawdzenia, czy ustawione jest właściwe napięcie sieci oraz zainstalowany jest właściwy bezpiecznik"
}
]
},
{
    questionID: 239,
    questionText: "Czy radiostację i urządzenia pomocnicze można podłączać do gniazd zasilanych z dwóch różnych faz?",
    questionAnswers: [
        {
            text: "można, nie ma żadnych przeciwwskazań"
        },
        {
text: "kategorycznie nie można, grozi to zniszczeniem sprzętu i porażeniem operatora"
},
{
text: "można, jeżeli jednocześnie nie używa się wszystkich urządzeń"
}
]
},
{
    questionID: 240,
    questionText: "Po zakończeniu pracy radiostacji należy:",
    questionAnswers: [
        {
            text: "wyłączyć zasilanie"
        },
        {
text: "wyłączyć zasilanie i uziemić anteny"
},
{
text: "wyłączyć zasilanie, uziemić anteny i odłączyć uziemienie od radia"
}
]
},
{
    questionID: 241,
    questionText: "Podczas wieszania anteny na wysokościach należy:",
    questionAnswers: [
        {
            text: "jedynie zapewnić sobie pomoc innej osoby"
        },
        {
text: "zapewnić sobie pomoc innej osoby oraz stosować sprzęt ochronny"
},
{
text: "zapewnić sobie pomoc innej osoby, stosować sprzęt ochronny, starać się maksymalnie zabezpieczyć osoby na dole przez ogrodzenie miejsc zagrożonych linką i zawieszenie tablic: Na górze pracują, oraz zapewnić łączność za pomocą radiotelefonów przenośnych, aby prace wykonać na komendę pomagającej nam osoby kiedy nie ma zagrożenia dla innych ludzi"
}
]
},
{
    questionID: 242,
    questionText: "Środki ochrony osobistej przy pracy na wysokości to:",
    questionAnswers: [
        {
            text: "rękawice i okulary ochronne"
        },
        {
text: "drabina rozstawna"
},
{
text: "szelki bezpieczeństwa z podwójną linką plus lina asekuracyjna, kask i rękawice"
}
]
},
{
    questionID: 243,
    questionText: "Jaka powinna być rezystancja uziemienia radiostacji?",
    questionAnswers: [
        {
            text: "50 Omów"
        },
        {
text: "zależnie od kabla antenowego: 50 lub 75 Omów"
},
{
text: "pomiędzy 10 a 1 Om, im mniejsza tym lepsza"
}
]
},
{
    questionID: 244,
    questionText: "W momencie stwierdzenia pożaru urządzenia należy:",
    questionAnswers: [
        {
            text: "zadzwonić po straż pożarną"
        },
        {
text: "wezwać kolegów i wspólnie przystąpić do gaszenia"
},
{
text: "odłączyć urządzenie od zasilania i przystąpić do gaszenia, w razie potrzeby wezwać straż pożarną"
}
]
},
{
    questionID: 245,
    questionText: "Zwody (połączenia) uziemiające od radiostacji należy poprowadzić następująco:",
    questionAnswers: [
        {
            text: "zasilacz do ziemi, skrzynka antenowa do radia i do zasilacza"
        },
        {
text: "skrzynka antenowa jako pierwsza do uziemienia, następnie radiostacja osobnym zwodem do skrzynki i zasilacz osobnym zwodem do tejże skrzynki"
},
{
text: "sposób prowadzenia połączeń uziemiających nie ma znaczenia"
}
]
},
{
    questionID: 246,
    questionText: "Transformator ochronny stosujemy, gdy:",
    questionAnswers: [
        {
            text: "zachodzi obawa, że użycie narzędzi elektrycznych zasilanych napięciem 230 V może spowodować porażenie prądem, np. pracując na zewnątrz pomieszczeń"
        },
        {
text: "wykonujemy prace w wilgotnym pomieszczeniu"
},
{
text: "jak w punkcie A i B i w innych sytuacjach, jeżeli zachodzi niebezpieczeństwo porażenia prądem np. przy pracach naprawczych"
}
]
},
{
    questionID: 247,
    questionText: "W przypadku poparzenia elektrolitem należy:",
    questionAnswers: [
        {
            text: "sprawdzić czy nie oblane zostało ubranie i buty, jeśli tak to należy zdjąć takie ubranie lub buty"
        },
        {
text: "spłukać wodą oparzone miejsce - kontakt z lekarzem nie jest konieczny"
},
{
text: "zdjąć odzież z oparzonego miejsca, płukać wodą oparzone miejsce, zabezpieczyć sterylnym opatrunkiem i udać się do lekarza"
}
]
},
{
    questionID: 248,
    questionText: "W przypadku zaprószenia oka ciałem obcym należy:",
    questionAnswers: [
        {
            text: "odczekać aż ciało obce samo wypadnie"
        },
        {
text: "usunąć ciało obce samodzielnie za pomocą pęsety"
},
{
text: "spróbować usunąć obce ciało, przemywając oko wodą, a jeżeli się to nie uda skorzystać z pomocy lekarza"
}
]
},
{
    questionID: 249,
    questionText: "Podstawowe wyposażenie ochronne do prac z elektrolitem to:",
    questionAnswers: [
        {
            text: "ubranie ochronne, okulary, rękawice ochronne"
        },
        {
text: "maska na twarz, nakrycie głowy, obuwie ochronne"
},
{
text: "nie ma potrzeby stosować żadnego wyposażenia ochronnego"
}
]
},
{
    questionID: 250,
    questionText: "Mierząc miernikiem napięcie o niemożliwej do oszacowania wartości należy:",
    questionAnswers: [
        {
            text: "ustawić miernik na najwyższy zakres pomiarowy i stopniowo zmniejszać zakres"
        },
        {
text: "ustawić miernik na najniższy zakres pomiarowy i stopniowo zwiększać zakres"
},
{
text: "rozpocząć pomiary od środkowego zakresu miernika"
}
]
},
{
    questionID: 251,
    questionText: "Przygotowując się do wykonania prac pod napięciem, oprócz przygotowania odpowiednich przyrządów należy:",
    questionAnswers: [
        {
            text: "sprawdzić czy zastosowano prawidłowe bezpieczniki w mierzonych obwodach"
        },
        {
text: "przygotować schemat elektryczny urządzenia i zapoznać się z nim"
},
{
text: "jak w punkcie A i B oraz zapewnić sobie obecność i ewentualną pomoc drugiej osoby"
}
]
},
{
    questionID: 252,
    questionText: "Podczas pracy nadajnika KF na jednej z anten, w celu zabezpieczenia się przed przypadkowym porażeniem od innych anten należy:",
    questionAnswers: [
        {
            text: "ułożyć przewody zasilające pod stołem luźno, lecz tak, aby się nie stykały"
        },
        {
text: "uziemić wszystkie nieużywane w danym momencie anteny, aby nie ulec porażeniu w wyniku ich przypadkowego dotknięcia"
},
{
text: "nie jest konieczne stosowanie jakichkolwiek zabezpieczeń"
}
]
},
{
    questionID: 253,
    questionText: "Przy podłączeniu zasilacza stacji przekrój sieci i wartość zabezpieczeń powinny być dobrany tak, aby zapewnić dostarczenie mocy:",
    questionAnswers: [
        {
            text: "wyższej niż moc określona w tabliczce znamionowej urządzenia"
        },
        {
text: "równej mocy określonej w tabliczce znamionowej urządzenia"
},
{
text: "niższej niż moc określona w tabliczce znamionowej urządzenia"
}
]
},
{
    questionID: 254,
    questionText: "Odległość pomiędzy masztem antenowym budowanym na ziemi a pasem drogowym, chodnikiem i innymi przeszkodami:",
    questionAnswers: [
        {
            text: "powinna być równa połowie wysokości masztu"
        },
        {
text: "nie ma żadnego znaczenia"
},
{
text: "powinna być większa niż wysokość masztu"
}
]
},
{
    questionID: 255,
    questionText: "Maszt kratowy uziemiamy:",
    questionAnswers: [
        {
            text: "jednym zwodem odgromowym"
        },
        {
text: "po przekątnej dwoma zwodami"
},
{
text: "czterema zwodami, po jednym na każdej nodze"
}
]
},
{
    questionID: 256,
    questionText: "Naprawa bezpieczników topikowych jest:",
    questionAnswers: [
        {
            text: "dopuszczalna dla bezpieczników stosowanych przy niskim napięciu"
        },
        {
text: "bezwzględnie zabroniona"
},
{
text: "dopuszczalna przy zastosowaniu drutu topikowego o odpowiedniej grubości"
}
]
},
{
    questionID: 257,
    questionText: "Jakie oznaczenia ochronne należy umieścić na maszcie anteny nadawczej?",
    questionAnswers: [
        {
            text: "promieniowanie elektromagnetyczne"
        },
        {
text: "uwaga antena nadawcza"
},
{
text: "zakaz dotykania masztu"
}
]
},
{
    questionID: 258,
    questionText: "Czy radiotelefon UKF należy uziemiać w czasie pracy?",
    questionAnswers: [
        {
            text: "nie ma takiej potrzeby"
        },
        {
text: "tak, obowiązkowo"
},
{
text: "tylko jeśli posiada zacisk uziemiający"
}
]
},
{
    questionID: 259,
    questionText: "Czy podczas pracy z wiertarką wymagane jest stosowanie rękawic ochronnych?",
    questionAnswers: [
        {
            text: "tak, obowiązkowo"
        },
        {
text: "można stosować według uznania"
},
{
text: "jest zabronione"
}
]
},
{
    questionID: 260,
    questionText: "Przy wymianie lampy stopnia mocy nadajnika należy:",
    questionAnswers: [
        {
            text: "wyłączyć zasilanie i natychmiast przystąpić do wymiany"
        },
        {
text: "wyłączyć zasilanie i poczekać aż rozładują się kondensatory zasilacza"
},
{
text: "przy pracującym wzmacniaczu zdjąć osłonę lampy i przystąpić do jej wymiany"
}
]
},
{
    questionID: 261,
    questionText: "Kondensator sprzęgający obwód anodowy PA z Pi-filtrem powinien:",
    questionAnswers: [
        {
            text: "posiadać dużą pojemność"
        },
        {
text: "posiadać małe wymiary"
},
{
text: "być wytrzymały na duże napięcie"
}
]
},
{
    questionID: 262,
    questionText: "Najlepszą formą zabezpieczenia anteny krótkofalowej przed burzą jest:",
    questionAnswers: [
        {
            text: "odłączenie anteny od radiostacji i wystawienie kabla anteny za okno"
        },
        {
text: "odłączenie anteny od radiostacji i połączenie anteny z uziemieniem"
},
{
text: "nie są wymagane żadne działania"
}
]
},
{
    questionID: 263,
    questionText: "Czy można umieścić kabel antenowy w kanale wywietrznika kominowego, jeżeli obok przebiega czynny komin?",
    questionAnswers: [
        {
            text: "można"
        },
        {
text: "bezwzględnie nie można"
},
{
text: "można, ale tylko w okresie poza sezonem grzewczym"
}
]
},
{
    questionID: 264,
    questionText: "Czy można używać kołków rozporowych do montażu anteny na kominie?",
    questionAnswers: [
        {
            text: "można"
        },
        {
text: "można, po spełnieniu dodatkowych warunków"
},
{
text: "nie wolno ? można stosować jedynie opaski wokół komina"
}
]
},
{
    questionID: 265,
    questionText: "Czy nasza radiostacja może wywołać zakłócenia poza granicami kraju?",
    questionAnswers: [
        {
            text: "nie może"
        },
        {
text: "może, ale tylko podczas strojenia"
},
{
text: "może"
}
]
},
{
    questionID: 266,
    questionText: "Czy osoba posiadająca rozrusznik serca może przebywać w pobliżu anten nadawczych dużej mocy?",
    questionAnswers: [
        {
            text: "może, nie ma żadnego zagrożenia"
        },
        {
text: "może, pod pewnymi warunkami"
},
{
text: "kategorycznie nie powinna"
}
]
},
{
    questionID: 267,
    questionText: "Podczas regulacji urządzeń pod napięciem (o ile jest to konieczne) pracę wykonujemy:",
    questionAnswers: [
        {
            text: "dwoma rękoma"
        },
        {
text: "jedną ręką"
},
{
text: "jedną ręką w asyście drugiej osoby, wskazane jest również stosowanie chodnika lub obuwia izolacyjnego"
}
]
},
{
    questionID: 268,
    questionText: "Jakim przewodem podłączysz nadajnik dużej mocy do źródła zasilania?",
    questionAnswers: [
        {
            text: "zwykłym przewodem dwużyłowym"
        },
        {
text: "kablem w oplocie bawełnianym"
},
{
text: "przewodem o przekroju żył, odpowiednim do pobieranej przez urządzenie mocy"
}
]
},
{
    questionID: 269,
    questionText: "Czy podczas naprawy oscyloskopu można go włączyć bez założonego na lampę cylindra ochronnego?",
    questionAnswers: [
        {
            text: "można bez żadnego ryzyka"
        },
        {
text: "można, ale należy uważać na wysokie napięcie"
},
{
text: "kategorycznie nie wolno"
}
]
},
{
    questionID: 270,
    questionText: "Jaka lokalizacja będzie bezpieczniejsza (najbardziej właściwa pod kątem narażenia na działanie pola elektromagnetycznego) dla anteny emitującej moc 1 kW?",
    questionAnswers: [
        {
            text: "dach naszego budynku w środku miasta"
        },
        {
text: "dach 12-piętrowego sąsiedniego wieżowca"
},
{
text: "terenowe QTH ze specjalnie wybudowanym polem antenowym"
}
]
},
{
    questionID: 271,
    questionText: "Czy fider antenowy radiostacji nadawczej może być prowadzony razem z kablem anteny odbiorczej TV?",
    questionAnswers: [
        {
            text: "może, gdy moc nadajnika nie jest zbyt duża"
        },
        {
text: "nie, kable powinny być maksymalnie oddalone"
},
{
text: "odległość miedzy kablami jest nieistotna"
}
]
},
{
    questionID: 272,
    questionText: "Czy świadectwo operatora urządzeń radiowych upoważnia do naprawy sieci elektrycznej w mieszkaniu?",
    questionAnswers: [
        {
            text: "tak, bez żadnych ograniczeń"
        },
        {
text: "tak, ale wyłącznie sieci jednofazowej"
},
{
text: "nie, do tego potrzebne jest posiadanie stosownych uprawnień"
}
]
},
{
    questionID: 273,
    questionText: "W którym miejscu należy podłączyć filtr przeciwzakłóceniowy (dolnoprzepustowy) przy pracy ze wzmacniaczem mocy?",
    questionAnswers: [
        {
            text: "po końcówce mocy na fider antenowy"
        },
        {
text: "pomiędzy transceiver a wzmacniacz mocy"
},
{
text: "miejsce podłączenia jest dowolne"
}
]
},
{
    questionID: 274,
    questionText: "Jakie są skutki uszkodzenia ekranu fidera antenowego?",
    questionAnswers: [
        {
            text: "nie ma żadnych"
        },
        {
text: "następuje wzrost zakłóceń, bez względu na pogodę"
},
{
text: "następuje wzrost zakłóceń i zmiana impedancji kabla grożąca uszkodzeniem nadajnika"
}
]
},
{
    questionID: 275,
    questionText: "Przed eksplozją kondensatorów elektrolitycznych w zasilaczu chroni nas:",
    questionAnswers: [
        {
            text: "stabilizator napięcia"
        },
        {
text: "opornik upływowy tzw. bleder"
},
{
text: "właściwe uziemienie zasilacza"
}
]
},
{
    questionID: 276,
    questionText: "Co oznacza wg kodu Q symbol QRG?",
    questionAnswers: [
        {
            text: "włączam większą moc nadajnika"
        },
        {
text: "moja częstotliwość jest ..."
},
{
text: "siła twoich sygnałów waha się"
}
]
},
{
    questionID: 277,
    questionText: "Co oznacza wg kodu Q symbol QSY?",
    questionAnswers: [
        {
            text: "przejdź na częstotliwość, zmień częstotliwość"
        },
        {
text: "do usłyszenia na innej częstotliwości"
},
{
text: "mam uszkodzoną antenę"
}
]
},
{
    questionID: 278,
    questionText: "Co oznacza wg kodu Q symbol QRM?",
    questionAnswers: [
        {
            text: "jestem czynny w eterze od miesiąca"
        },
        {
text: "odbieram twoje sygnały bardzo dobrze zmniejsz moc"
},
{
text: "mam zakłócenia od innych stacji"
}
]
},
{
    questionID: 279,
    questionText: "Co oznacza wg kodu Q symbol QRN?",
    questionAnswers: [
        {
            text: "jestem czynny w eterze od niedawna"
        },
        {
text: "mam zakłócenia atmosferyczne"
},
{
text: "pracuję na radiostacji tylko w niedzielę"
}
]
},
{
    questionID: 280,
    questionText: "Co oznacza wg kodu Q symbol QSB?",
    questionAnswers: [
        {
            text: "siła twoich sygnałów waha się"
        },
        {
text: "w okolicy jest burza, wyłączam radiostację"
},
{
text: "używam anteny dookolnej"
}
]
},
{
    questionID: 281,
    questionText: "Co oznacza wg kodu Q symbol QRV?",
    questionAnswers: [
        {
            text: "o której godzinie rozpoczęliśmy łączność"
        },
        {
text: "jestem gotów do pracy, jestem czynny w eterze"
},
{
text: "proszę powtórzyć ostatnią relację"
}
]
},
{
    questionID: 282,
    questionText: "Co oznacza wg kodu Q symbol QTH?",
    questionAnswers: [
        {
            text: "nie mam ochoty z tobą dalej rozmawiać"
        },
        {
text: "przekazuję wiadomość od..."
},
{
text: "moje położenie geograficzne jest..."
}
]
},
{
    questionID: 283,
    questionText: "Co oznacza wg kodu Q symbol QRP?",
    questionAnswers: [
        {
            text: "nadawaj powoli"
        },
        {
text: "zmniejsz moc, zmniejszam moc"
},
{
text: "powtórz swój znak wywoławczy"
}
]
},
{
    questionID: 284,
    questionText: "Co oznacza wg kodu Q symbol QTC?",
    questionAnswers: [
        {
            text: "wyłączam stację"
        },
        {
text: "na jaką częstotliwość mam się przestroić"
},
{
text: "mam dla ciebie pilną wiadomość"
}
]
},
{
    questionID: 285,
    questionText: "Co oznacza wg kodu Q symbol QSO?",
    questionAnswers: [
        {
            text: "moje położenie geograficzne jest..."
        },
        {
text: "łączność, mam łączność"
},
{
text: "siła twoich sygnałów waha się"
}
]
},
{
    questionID: 286,
    questionText: "Co oznacza wg kodu Q symbol QSL?",
    questionAnswers: [
        {
            text: "potwierdzam odbiór, przyślę kartę potwierdzającą łączność"
        },
        {
text: "nadawaj szybciej"
},
{
text: "słucham na częstotliwości"
}
]
},
{
    questionID: 287,
    questionText: "Co oznacza skrót slangu radioamatorskiego RX?",
    questionAnswers: [
        {
            text: "antena pionowa"
        },
        {
text: "odbiornik"
},
{
text: "klucz elektroniczny"
}
]
},
{
    questionID: 288,
    questionText: "Co oznacza skrót slangu radioamatorskiego Unlis?",
    questionAnswers: [
        {
            text: "nielicencjonowany nadawca"
        },
        {
text: "zakłócenia w odbiorze telewizji"
},
{
text: "zawody w łowach na lisa"
}
]
},
{
    questionID: 289,
    questionText: "Co oznacza skrót slangu radioamatorskiego YL?",
    questionAnswers: [
        {
            text: "antena z linki miedzianej"
        },
        {
text: "czas uniwersalny"
},
{
text: "panna - młoda pani"
}
]
},
{
    questionID: 290,
    questionText: "Co oznacza skrót slangu radioamatorskiego RPT?",
    questionAnswers: [
        {
            text: "proszę powtórzyć, powtórzę, powtarzam"
        },
        {
text: "proszę"
},
{
text: "przechodzę na inny kanał"
}
]
},
{
    questionID: 291,
    questionText: "Kiedy należy podawać raport o słyszalności?",
    questionAnswers: [
        {
            text: "na początku łączności i na życzenie korespondenta"
        },
        {
text: "w odstępach 5-10 minut"
},
{
text: "po każdym przekazaniu mikrofonu"
}
]
},
{
    questionID: 292,
    questionText: "Czy po uzyskaniu świadectwa operatora urządzeń radiowych można samodzielnie obsługiwać stację amatorską?",
    questionAnswers: [
        {
            text: "można, ale tylko pod nadzorem radioamatora posiadającego pozwolenie radiowe"
        },
        {
text: "można, w określonych przepisami zakresach częstotliwości"
},
{
text: "nie można, ponieważ do obsługi stacji amatorskiej upoważnia jedynie pozwolenie radiowe"
}
]
},
{
    questionID: 293,
    questionText: "Jakie należy spełnić warunki aby uzyskać pozwolenie radiowe na używanie radiostacji amatorskiej?",
    questionAnswers: [
        {
            text: "należy posiadać świadectwo operatora urządzeń radiowych i odbyć trzymiesięczną praktykę na stacji klubowej"
        },
        {
text: "należy posiadać świadectwo operatora urządzeń radiowych i co najmniej średnie wykształcenie"
},
{
text: "należy posiadać świadectwo operatora urządzeń radiowych"
}
]
},
{
    questionID: 294,
    questionText: "Czy razem ze świadectwem operatora urządzeń radiowych przydzielany jest znak wywoławczy dla radiostacji amatorskiej?",
    questionAnswers: [
        {
            text: "tak"
        },
        {
text: "nie, znak wywoławczy przydzielany jest w pozwoleniu radiowym"
},
{
text: "tak, jeżeli dana osoba posiada radiostację"
}
]
},
{
    questionID: 295,
    questionText: "Co to jest znak wywoławczy?",
    questionAnswers: [
        {
            text: "jest to symbol określający typ (model) radiostacji amatorskiej"
        },
        {
text: "jest to hasło pozwalające wywołać konkretnego rozmówcę"
},
{
text: "jest to kombinacja liter i cyfr stanowiąca unikalny w skali światowej identyfikator radiostacji amatorskiej"
}
]
},
{
    questionID: 296,
    questionText: "Czy można radioamatorski znak wywoławczy używać podczas pracy w zakresach częstotliwości nieprzeznaczonych dla służby amatorskiej?",
    questionAnswers: [
        {
            text: "można, po uzyskaniu specjalnej zgody UKE"
        },
        {
text: "absolutnie nie, znak radioamatorski można używać tylko w zakresach częstotliwości przeznaczonych dla radioamatorów"
},
{
text: "nie jest to zabronione i zależy od decyzji radioamatora"
}
]
},
{
    questionID: 297,
    questionText: "Jak zbudowany jest znak wywoławczy w pozwoleniach kategorii 1, 3 i 5?",
    questionAnswers: [
        {
            text: "składa się z prefiksu, cyfry i kombinacji maksymalnie czterech liter i cyfr"
        },
        {
text: "nie ma określonej budowy, składa się z liter i cyfr"
},
{
text: "składa się z prefiksu i dwóch liter"
}
]
},
{
    questionID: 298,
    questionText: "Jak zbudowany jest znak wywoławczy w pozwoleniu dodatkowym?",
    questionAnswers: [
        {
            text: "nie ma określonej budowy, składa się liter i cyfr"
        },
        {
text: "składa się z prefiksu, cyfry i kombinacji maksymalnie siedmiu liter i cyfr"
},
{
text: "składa się z prefiksu i pięciu liter"
}
]
},
{
    questionID: 299,
    questionText: "Co to jest dziennik łączności LOG?",
    questionAnswers: [
        {
            text: "jest to dokument radiostacji amatorskiej zawierający informacje o korespondencji z innymi radiostacjami amatorskimi, zawierający znak stacji, imię operatora, datę, godzinę, pasmo w jakim przeprowadzono QSO"
        },
        {
text: "jest to informacja o procedurach obowiązujących podczas łączności z innymi stacjami"
},
{
text: "jest to informacja o kontroli radiostacji przez inspektorów UKE"
}
]
},
{
    questionID: 300,
    questionText: "Czy prowadzenie dziennika łączności LOG jest obowiązkowe?",
    questionAnswers: [
        {
            text: "jest to podstawowy obowiązek każdego radioamatora"
        },
        {
text: "prowadzenie Logu nie jest obowiązkowe, lecz wskazane"
},
{
text: "prowadzenie dziennika łączności może być nakazane jako zalecenie pokontrolne inspektorów ochrony środowiska"
}
]
},
{
    questionID: 301,
    questionText: "Co znaczy określenie czas uniwersalny UTC?",
    questionAnswers: [
        {
            text: "czas odpowiadający południkowi zerowemu (GMT), stosowany przez radioamatorów do odnotowania w Logu godz. łączności"
        },
        {
text: "czas w którym nie należy nawiązywać QSO"
},
{
text: "czas w którym można nawiązywać łączności z krajami europejskimi"
}
]
},
{
    questionID: 302,
    questionText: "Okręg wywoławczy SP1 to obszar:",
    questionAnswers: [
        {
            text: "województwa zachodniopomorskiego"
        },
        {
text: "województwa pomorskiego"
},
{
text: "województwa mazowieckiego"
}
]
},
{
    questionID: 303,
    questionText: "Okręg wywoławczy SP2 to obszar:",
    questionAnswers: [
        {
            text: "województwa zachodniopomorskiego"
        },
        {
text: "województw kujawsko-pomorskiego i pomorskiego"
},
{
text: "województwa mazowieckiego"
}
]
},
{
    questionID: 304,
    questionText: "Okręg wywoławczy SP3 to obszar:",
    questionAnswers: [
        {
            text: "województwa mazowieckiego"
        },
        {
text: "województw lubuskiego i wielkopolskiego"
},
{
text: "województw kujawsko-pomorskie i pomorskie"
}
]
},
{
    questionID: 305,
    questionText: "Okręg wywoławczy SP4 to obszar:",
    questionAnswers: [
        {
            text: "województwa mazowieckiego"
        },
        {
text: "województw lubuskiego i wielkopolskiego"
},
{
text: "województw podlaskiego i warmińsko-mazurskiego"
}
]
},
{
    questionID: 306,
    questionText: "Okręg wywoławczy SP5 to obszar:",
    questionAnswers: [
        {
            text: "województwa mazowieckiego"
        },
        {
text: "województw kujawsko-pomorskiego i pomorskiego"
},
{
text: "województwa zachodnio-pomorskiego"
}
]
},
{
    questionID: 307,
    questionText: "Okręg wywoławczy SP6 to obszar:",
    questionAnswers: [
        {
            text: "województwa mazowieckiego"
        },
        {
text: "województw dolnośląskiego i opolskiego"
},
{
text: "województwa zachodniopomorskiego"
}
]
},
{
    questionID: 308,
    questionText: "Okręg wywoławczy SP7 to obszar:",
    questionAnswers: [
        {
            text: "województwa mazowieckiego"
        },
        {
text: "województw dolnośląskiego i opolskiego"
},
{
text: "województw łódzkiego i świętokrzyskiego"
}
]
},
{
    questionID: 309,
    questionText: "Okręg wywoławczy SP8 to obszar:",
    questionAnswers: [
        {
            text: "województw dolnośląskiego i opolskiego"
        },
        {
text: "województw lubelskiego i podkarpackiego"
},
{
text: "województwa zachodniopomorskiego"
}
]
},
{
    questionID: 310,
    questionText: "Okręg wywoławczy SP9 to obszar:",
    questionAnswers: [
        {
            text: "województw małopolskiego i śląskiego"
        },
        {
text: "województw lubelskiego i podkarpackiego"
},
{
text: "województwa zachodniopomorskiego"
}
]
},
{
    questionID: 311,
    questionText: "Poprawne literowanie w j. polskim litery A i R:",
    questionAnswers: [
        {
            text: "Adam, Roman"
        },
        {
text: "Ala, Romuald"
},
{
text: "Alfa, Romeo"
}
]
},
{
    questionID: 312,
    questionText: "Poprawne literowanie w j. polskim litery G i K:",
    questionAnswers: [
        {
            text: "Genowefa, Ksawer"
        },
        {
text: "Grażyna, Karol"
},
{
text: "Golf, Kazek"
}
]
},
{
    questionID: 313,
    questionText: "Poprawne literowanie w j. polskim litery W i Z:",
    questionAnswers: [
        {
            text: "Wanda, Zygmunt"
        },
        {
text: "Walery, Zosia"
},
{
text: "Warta, Zamek"
}
]
},
{
    questionID: 314,
    questionText: "Poprawne literowanie w j. polskim litery X i C:",
    questionAnswers: [
        {
            text: "Iks, Centrum"
        },
        {
text: "Xawery, Cezary"
},
{
text: "Xymena, Czesław"
}
]
},
{
    questionID: 315,
    questionText: "Poprawne literowanie w j. polskim litery P i N:",
    questionAnswers: [
        {
            text: "Piotr, Niwa"
        },
        {
text: "Przemek, Nina"
},
{
text: "Paweł, Natalia"
}
]
},
{
    questionID: 316,
    questionText: "Poprawne literowanie wg alfabetu ITU litery B i F:",
    questionAnswers: [
        {
            text: "Bil, Fox"
        },
        {
text: "Bravo, Foxtrot"
},
{
text: "Box, Florida"
}
]
},
{
    questionID: 317,
    questionText: "Poprawne literowanie wg alfabetu ITU litery C i G:",
    questionAnswers: [
        {
            text: "Charlie, Golf"
        },
        {
text: "Canada, Gold"
},
{
text: "Chile, Grenada"
}
]
},
{
    questionID: 318,
    questionText: "Poprawne literowanie wg alfabetu ITU litery I i K:",
    questionAnswers: [
        {
            text: "India, Kanada"
        },
        {
text: "Italia, Kaz"
},
{
text: "India, Kilo"
}
]
},
{
    questionID: 319,
    questionText: "Poprawne literowanie wg alfabetu ITU litery R i V:",
    questionAnswers: [
        {
            text: "Ren, Viktor"
        },
        {
text: "Romeo, Viktor"
},
{
text: "Radio, Viola"
}
]
},
{
    questionID: 320,
    questionText: "Poprawne literowanie wg alfabetu ITU litery X i S:",
    questionAnswers: [
        {
            text: "X-Rey, Sierra"
        },
        {
text: "Xsen, Santiago"
},
{
text: "X-Rey, Syria"
}
]
},
{
    questionID: 321,
    questionText: "Co to jest międzynarodowy kod Q?",
    questionAnswers: [
        {
            text: "zbiór symboli składających się z 3 liter, zaczynających się zawsze na literę Q, którym przypisane są proste zdanie lub słowa"
        },
        {
text: "symbole składające się z litery Q i 2-3 cyfr określających jakość odbieranego sygnału"
},
{
text: "wykaz zawierający prefiksy znaków wywoławczych wg ITU"
}
]
},
{
    questionID: 322,
    questionText: "Do czego służy międzynarodowy kod Q?",
    questionAnswers: [
        {
            text: "podania informacji o czasie rozpoczęcia łączności"
        },
        {
text: "skrócenia czasu nadawania informacji"
},
{
text: "informowania o sile odbieranego sygnału radiowego"
}
]
},
{
    questionID: 323,
    questionText: "Co oznacza wg kodu Q symbol QRL?",
    questionAnswers: [
        {
            text: "źle się czuję, odezwę się później"
        },
        {
text: "jestem zajęty, proszę nie przeszkadzać"
},
{
text: "do zobaczenia latem"
}
]
},
{
    questionID: 324,
    questionText: "Co oznacza wg kodu Q symbol QRT?",
    questionAnswers: [
        {
            text: "która jest godzina"
        },
        {
text: "kończę nadawanie, wyłączam stację"
},
{
text: "nadawaj wolniej"
}
]
},
{
    questionID: 325,
    questionText: "Co oznacza wg kodu Q symbol QRZ?",
    questionAnswers: [
        {
            text: "zmień częstotliwość na zapasową"
        },
        {
text: "kto mnie woła"
},
{
text: "jestem zajęty, proszę nie przeszkadzać"
}
]
},
{
    questionID: 326,
    questionText: "Co oznacza wg kodu Q symbol QRX?",
    questionAnswers: [
        {
            text: "proszę czekać"
        },
        {
text: "nadawaj wolniej"
},
{
text: "mam zakłócenia od innych stacji"
}
]
},
{
    questionID: 327,
    questionText: "Co oznacza wg kodu Q symbol QRO?",
    questionAnswers: [
        {
            text: "nic dla ciebie nie mam"
        },
        {
text: "zwiększ moc, zwiększam moc"
},
{
text: "przerwij nadawanie, kończę pracę"
}
]
},
{
    questionID: 328,
    questionText: "Który z poniższych kodów Q oznacza: Moja częstotliwość jest ...?",
    questionAnswers: [
        {
            text: "QRJ"
        },
        {
text: "QRG"
},
{
text: "QRK"
}
]
},
{
    questionID: 329,
    questionText: "Który z poniższych kodów Q oznacza: Przejdź na częstotliwość, zmień częstotliwość?",
    questionAnswers: [
        {
            text: "QSY"
        },
        {
text: "QTR"
},
{
text: "QSA"
}
]
},
{
    questionID: 330,
    questionText: "Który z poniższych kodów Q oznacza: Mam zakłócenia od innych stacji?",
    questionAnswers: [
        {
            text: "QWO"
        },
        {
text: "QQQ"
},
{
text: "QRM"
}
]
},
{
    questionID: 331,
    questionText: "Który z poniższych kodów Q oznacza: Siła twoich sygnałów waha się?",
    questionAnswers: [
        {
            text: "QSB"
        },
        {
text: "QAZ"
},
{
text: "QRY"
}
]
},
{
    questionID: 332,
    questionText: "Który z poniższych kodów Q oznacza: Jestem gotów do pracy, jestem czynny w eterze?",
    questionAnswers: [
        {
            text: "QWX"
        },
        {
text: "QRV"
},
{
text: "QRU"
}
]
},
{
    questionID: 333,
    questionText: "Który z poniższych kodów Q oznacza: Moje położenie geograficzne jest ...?",
    questionAnswers: [
        {
            text: "QLP"
        },
        {
text: "QRG"
},
{
text: "QTH"
}
]
},
{
    questionID: 334,
    questionText: "Który z poniższych kodów Q oznacza: Zmniejsz moc, zmniejszam moc?",
    questionAnswers: [
        {
            text: "QUB"
        },
        {
text: "QRA"
},
{
text: "QRP"
}
]
},
{
    questionID: 335,
    questionText: "Który z poniższych kodów Q oznacza: Mam dla ciebie telegram, wiadomość?",
    questionAnswers: [
        {
            text: "QRT"
        },
        {
text: "QTC"
},
{
text: "QSV"
}
]
},
{
    questionID: 336,
    questionText: "Który z poniższych kodów Q oznacza: Łączność, mam łączność?",
    questionAnswers: [
        {
            text: "QSL"
        },
        {
text: "QSO"
},
{
text: "QRS"
}
]
},
{
    questionID: 337,
    questionText: "Który z poniższych kodów Q oznacza: Potwierdzam odbiór, przyślę kartę potwierdzającą łączność?",
    questionAnswers: [
        {
            text: "QSL"
        },
        {
text: "QSA"
},
{
text: "QRT"
}
]
},
{
    questionID: 338,
    questionText: "Co oznaczają skróty slangu radioamatorskiego: BAND; CFM?",
    questionAnswers: [
        {
            text: "pasmo; potwierdzam"
        },
        {
text: "zakres; godzina"
},
{
text: "raport; popołudnie"
}
]
},
{
    questionID: 339,
    questionText: "Co oznaczają skróty slangu radioamatorskiego: BK; CALL?",
    questionAnswers: [
        {
            text: "później; kalibrator"
        },
        {
text: "przerwa; znak wywoławczy"
},
{
text: "stop; odebrałem wszystko"
}
]
},
{
    questionID: 340,
    questionText: "Co oznaczają skróty slangu radioamatorskiego: BEST; DX?",
    questionAnswers: [
        {
            text: "daleki; niezły"
        },
        {
text: "najlepszy; daleka łączność"
},
{
text: "dobry; szybki"
}
]
},
{
    questionID: 341,
    questionText: "Co oznaczają skróty slangu radioamatorskiego: BCI; BOX?",
    questionAnswers: [
        {
            text: "zakłócenia odbioru radiowego; skrytka pocztowa"
        },
        {
text: "zakłócenia od sieciowe; radiolatarnia amatorska"
},
{
text: "podaj dokładny czas; zmieniam kanał radiowy"
}
]
},
{
    questionID: 342,
    questionText: "Co oznaczają skróty slangu radioamatorskiego: OK; NAME?",
    questionAnswers: [
        {
            text: "stary, nie przeszkadzaj; moje nazwisko jest"
        },
        {
text: "wszystko w porządku; imię"
},
{
text: "przestrajam się; podaj adres"
}
]
},
{
    questionID: 343,
    questionText: "Co oznaczają skróty slangu radioamatorskiego: SWR; RX?",
    questionAnswers: [
        {
            text: "pasmo w metrach; antena pionowa"
        },
        {
text: "współczynnik fali stojącej; odbiornik"
},
{
text: "nasłuchowiec; klucz elektroniczny"
}
]
},
{
    questionID: 344,
    questionText: "Które z poniższych skrótów slangu radioamatorskiego oznaczają: Zakłócenia w odbiorze telewizji; nielicencjonowany nadawca?",
    questionAnswers: [
        {
            text: "TRX; LIS"
        },
        {
text: "TVI; UNLIS"
},
{
text: "RBM; ICP"
}
]
},
{
    questionID: 345,
    questionText: "Które z poniższych skrótów slangu radioamatorskiego oznaczają: Panna, młoda pani; czas uniwersalny?",
    questionAnswers: [
        {
            text: "YL; UTC"
        },
        {
text: "XYL; UT"
},
{
text: "LY; TRO"
}
]
},
{
    questionID: 346,
    questionText: "Co oznaczają skróty slangu radioamatorskiego: PSE; RPT?",
    questionAnswers: [
        {
            text: "proszę; powtórzyć, powtórzę, powtarzam"
        },
        {
text: "proszę; zmieniam pasmo o 10 kHz"
},
{
text: "przechodzę na inny kanał; raport podam na koniec łączności"
}
]
},
{
    questionID: 347,
    questionText: "Co oznaczają skróty slangu radioamatorskiego: 99; UTC?",
    questionAnswers: [
        {
            text: "pozdrawiam; czas ukraiński"
        },
        {
text: "ściskam dłoń; mam pilną wiadomość"
},
{
text: "idź precz, przepadnij; czas uniwersalny"
}
]
},
{
    questionID: 348,
    questionText: "Co oznaczają skróty slangu radioamatorskiego: LOG; DIRECT?",
    questionAnswers: [
        {
            text: "długa antena; dyrektor"
        },
        {
text: "dziennik pracy stacji; bezpośrednio"
},
{
text: "długi; bezpośredni kontakt"
}
]
},
{
    questionID: 349,
    questionText: "Co to jest raport R S stosowany podczas łączności fonicznych?",
    questionAnswers: [
        {
            text: "informacja o stanie technicznym radiostacji"
        },
        {
text: "informacja o stanie pogody przekazana w postaci zakodowanej"
},
{
text: "informacja o jakości odbieranego sygnału radiowego - czytelności i sił sygnału wyrażana w postaci cyfr"
}
]
},
{
    questionID: 350,
    questionText: "Co to jest raport R S T stosowany podczas łączności telegraficznych?",
    questionAnswers: [
        {
            text: "informacja o stanie technicznym radiostacji"
        },
        {
text: "informacja o jakości odbieranego sygnału radiowego ? czytelności, siły i tonu akustycznego sygnału"
},
{
text: "informacja o stanie pogody"
}
]
},
{
    questionID: 351,
    questionText: "Co oznaczają w raporcie o słyszalności i jakości sygnałów korespondenta litery R S?",
    questionAnswers: [
        {
            text: "R - jakość sygnału, S- słyszalność"
        },
        {
text: "R - stabilność sygnału, S- siła sygnału"
},
{
text: "R - czytelność, S - siła sygnału"
}
]
},
{
    questionID: 352,
    questionText: "Co oznaczają w raporcie o słyszalności i jakości sygnałów korespondenta litery R S T?",
    questionAnswers: [
        {
            text: "R - czytelność, S - siła sygnału, T - ton sygnału"
        },
        {
text: "R - jakość sygnału, S - słyszalność, T - częstotliwość"
},
{
text: "R - stabilność sygnału, S - siła sygnału, T - ton sygnału"
}
]
},
{
    questionID: 353,
    questionText: "Jaka jest skala czytelności i skala siły sygnału w raporcie R S?",
    questionAnswers: [
        {
            text: "skala czytelności 1-5 i skala siły sygnału 1-9"
        },
        {
text: "skala czytelności 1-9 i skala siły sygnału 1-5"
},
{
text: "skala czytelności 0-5 i skala siły sygnału 0-9"
}
]
},
{
    questionID: 354,
    questionText: "Co oznacza w łączności fonicznej raport 59?",
    questionAnswers: [
        {
            text: "dobrze czytelny, bardzo silny sygnał"
        },
        {
text: "czytelny, silny sygnał"
},
{
text: "słaby, czytelny z trudnościami sygnał"
}
]
},
{
    questionID: 355,
    questionText: "Co oznacza w łączności fonicznej raport 43?",
    questionAnswers: [
        {
            text: "dobrze czytelny, bardzo silny sygnał"
        },
        {
text: "czytelny, słaby sygnał"
},
{
text: "czytelny z trudnościami, słaby sygnał"
}
]
},
{
    questionID: 356,
    questionText: "Co oznacza w łączności telegraficznej raport 599?",
    questionAnswers: [
        {
            text: "czytelny, silny sygnał, dobry ton"
        },
        {
text: "dobrze czytelny, bardzo silny sygnał, bardzo dobry ton"
},
{
text: "czytelny z trudnościami, sygnał słaby, dobry ton"
}
]
},
{
    questionID: 357,
    questionText: "Co oznacza w łączności telegraficznej raport 438?",
    questionAnswers: [
        {
            text: "dobrze czytelny, bardzo silny sygnał, dobry ton"
        },
        {
text: "czytelny z trudnościami, słaby sygnał, bardzo dobry ton"
},
{
text: "czytelny, słaby sygnał, dobry ton sygnału"
}
]
},
{
    questionID: 358,
    questionText: "Co to jest okręg wywoławczy?",
    questionAnswers: [
        {
            text: "obszar, na którym pracuje maksimum 1000 radiostacji amatorskich"
        },
        {
text: "obszar odpowiadający podziałowi terytorialnemu Polski na województwa"
},
{
text: "zwyczajowo przyjęty obszar w granicach jednego lub dwóch województw"
}
]
},
{
    questionID: 359,
    questionText: "Na ile okręgów wywoławczych podzielona jest Polska?",
    questionAnswers: [
        {
            text: "16"
        },
        {
text: "10"
},
{
text: "9"
}
]
},
{
    questionID: 360,
    questionText: "Jak zbudowane są znaki wywoławcze radiostacji amatorskich?",
    questionAnswers: [
        {
            text: "dwie litery, cyfra, dwie do pięciu liter, np. SP3AB lub SP3ABCDE"
        },
        {
text: "dwie litery, cyfra, dwie do trzech liter, np. SP3AB lub SP3ABC"
},
{
text: "dwie litery lub cyfra i litera, cyfra, jeden do czterech znaków (liter lub cyfr), gdzie ostatni jest literą, np. SP3A lub SP3ABCD"
}
]
},
{
    questionID: 361,
    questionText: "Które prefiksy znaków wywoławczych przeznaczone są dla Polski?",
    questionAnswers: [
        {
            text: "HF, SN, SO, SP, SQ, SR, 3Z"
        },
        {
text: "HF, SN, SO, SP, SQ, 3Z, 3X"
},
{
text: "HA, SM, SO, SP, SQ, SR, 3Z"
}
]
},
{
    questionID: 362,
    questionText: "Zakres częstotliwości przeznaczony dla służby amatorskiej w paśmie 160 m to:",
    questionAnswers: [
        {
            text: "1810 kHz - 1950 kHz"
        },
        {
text: "1810 kHz - 2000 kHz"
},
{
text: "1810 kHz - 1980 kHz"
}
]
},
{
    questionID: 363,
    questionText: "Zakres częstotliwości przeznaczony dla służby amatorskiej w paśmie 80 m to:",
    questionAnswers: [
        {
            text: "3550 kHz - 3750 kHz"
        },
        {
text: "3500 kHz - 3750 kHz"
},
{
text: "3500 kHz - 3800 kHz"
}
]
},
{
    questionID: 364,
    questionText: "Zakres częstotliwości przeznaczony dla służby amatorskiej w paśmie 40 m to:",
    questionAnswers: [
        {
            text: "7000 kHz - 7200 kHz"
        },
        {
text: "7100 kHz - 7300 kHz"
},
{
text: "7050 kHz - 7200 kHz"
}
]
},
{
    questionID: 365,
    questionText: "Zakres częstotliwości przeznaczony dla służby amatorskiej w paśmie 30 m to:",
    questionAnswers: [
        {
            text: "10050 kHz - 10200 kHz"
        },
        {
text: "10100 kHz - 10150 kHz"
},
{
text: "10100 kHz - 10200 kHz"
}
]
},
{
    questionID: 366,
    questionText: "Zakres częstotliwości przeznaczony dla służby amatorskiej w paśmie 20 m to:",
    questionAnswers: [
        {
            text: "14000 kHz - 14350 kHz"
        },
        {
text: "14000 kHz - 14450 kHz"
},
{
text: "14100 kHz - 14350 kHz"
}
]
},
{
    questionID: 367,
    questionText: "Zakres częstotliwości przeznaczony dla służby amatorskiej w paśmie 17 m to:",
    questionAnswers: [
        {
            text: "18050 kHz - 18250 kHz"
        },
        {
text: "18068 kHz - 18168 kHz"
},
{
text: "18000 kHz - 18168 kHz"
}
]
},
{
    questionID: 368,
    questionText: "Zakres częstotliwości przeznaczony dla służby amatorskiej w paśmie 15 m to:",
    questionAnswers: [
        {
            text: "21000 kHz - 21500 kHz"
        },
        {
text: "21100 kHz - 21450 kHz"
},
{
text: "21000 kHz - 21450 kHz"
}
]
},
{
    questionID: 369,
    questionText: "Zakres częstotliwości przeznaczony dla służby amatorskiej w paśmie 12 m to:",
    questionAnswers: [
        {
            text: "24690 kHz - 24990 kHz"
        },
        {
text: "24890 kHz - 24990 kHz"
},
{
text: "24680 kHz - 24990 kHz"
}
]
},
{
    questionID: 370,
    questionText: "Zakres częstotliwości przeznaczony dla służby amatorskiej w paśmie 10 m to:",
    questionAnswers: [
        {
            text: "28500 kHz - 29800 kHz"
        },
        {
text: "28000 kHz - 29500 kHz"
},
{
text: "28000 kHz - 29700 kHz"
}
]
},
{
    questionID: 371,
    questionText: "Zakres częstotliwości przeznaczony dla służby amatorskiej w paśmie 6 m to:",
    questionAnswers: [
        {
            text: "50 MHz - 54 MHz"
        },
        {
text: "50 MHz - 52 MHz"
},
{
text: "50 MHz - 53,5 MHz"
}
]
},
{
    questionID: 372,
    questionText: "Zakres częstotliwości przeznaczony dla służby amatorskiej w paśmie 2 m to:",
    questionAnswers: [
        {
            text: "144 MHz - 146 MHz"
        },
        {
text: "144 MHz - 148 MHz"
},
{
text: "143 MHz - 146 MHz"
}
]
},
{
    questionID: 373,
    questionText: "Co jest bandpan IARU?",
    questionAnswers: [
        {
            text: "podział zakresów częstotliwości na segmenty przeznaczone dla poszczególnych rodzajów emisji lub kanały robocze"
        },
        {
text: "podział częstotliwości osobno nadawczych i odbiorczych"
},
{
text: "plan przydziału częstotliwości dla poszczególnych krajów"
}
]
},
{
    questionID: 374,
    questionText: "Czy dopuszcza się w band planie IARU możliwość pracy emisją jednowstęgową (SSB) w zakresie częstotliwości 10100 kHz ? 10150 kHz (pasmo 30 m)?",
    questionAnswers: [
        {
            text: "nie ma żadnych ograniczeń co do stosowanych emisji"
        },
        {
text: "jest całkowity zakaz używania emisji jednowstęgowej w tym zakresie"
},
{
text: "dopuszcza się użycie SSB w sytuacjach bezpośredniego zagrożenia dla bezpieczeństwa życia i mienia i wyłącznie przez stacje uczestniczące w akcji ratunkowej"
}
]
},
{
    questionID: 375,
    questionText: "Jaki jest odstęp między częstotliwością nadawczą a odbiorczą przemienników pracujących w paśmie 2 m?",
    questionAnswers: [
        {
            text: "600 kHz"
        },
        {
text: "650 kHz"
},
{
text: "800 kHz"
}
]
},
{
    questionID: 376,
    questionText: "Jak nazywa się organ międzynarodowy ustalający ogólnoświatowe zasady wykonywania działalności telekomunikacyjnej i radiokomunikacyjnej?",
    questionAnswers: [
        {
            text: "Organizacja Narodów Zjednoczonych (ONZ)"
        },
        {
text: "Międzynarodowy Związek Telekomunikacyjny (ITU)"
},
{
text: "Światowa Organizacja Handlu (WTO)"
}
]
},
{
    questionID: 377,
    questionText: "Gdzie mieści się siedziba Międzynarodowego Związku Telekomunikacyjnego (ITU)?",
    questionAnswers: [
        {
            text: "w Nowym Jorku"
        },
        {
text: "w Wiedniu"
},
{
text: "w Genewie"
}
]
},
{
    questionID: 378,
    questionText: "Ile krajów zrzesza Międzynarodowy Związek Telekomunikacyjny?",
    questionAnswers: [
        {
            text: "50-100"
        },
        {
text: "100-150"
},
{
text: "150-200"
}
]
},
{
    questionID: 379,
    questionText: "Jaki organ Międzynarodowego Związku Telekomunikacyjnego (ITU) decyduje o przeznaczeniach poszczególnych zakresów częstotliwości dla różnych służb radiokomunikacyjnych?",
    questionAnswers: [
        {
            text: "Rada Międzynarodowego Związku Telekomunikacyjnego (ITU)"
        },
        {
text: "Światowe Konferencje Radiokomunikacyjne"
},
{
text: "Biuro Radiokomunikacji ITU"
}
]
},
{
    questionID: 380,
    questionText: "Jaki dokument obowiązujący wszystkie kraje członkowskie Międzynarodowego Związku Telekomunikacyjnego (ITU) określa zasady wykonywania służby radiokomunikacyjnej amatorskiej i służby amatorskiej satelitarnej oraz wymienia przyznane tym służbom zakresy częstotliwości?",
    questionAnswers: [
        {
            text: "Konstytucja ITU"
        },
        {
text: "Regulamin Radiokomunikacyjny (Radio Regulations) ITU"
},
{
text: "Konwencja ITU"
}
]
},
{
    questionID: 381,
    questionText: "W którym roku Rzeczpospolita Polska przystąpiła do Międzynarodowego Związku Telekomunikacyjnego (ITU)?",
    questionAnswers: [
        {
            text: "1921"
        },
        {
text: "1935"
},
{
text: "1956"
}
]
},
{
    questionID: 382,
    questionText: "Jak brzmi definicja służby amatorskiej zamieszczona w Regulaminie Radiokomunikacyjnym Międzynarodowego Związku Telekomunikacyjnego (ITU)?",
    questionAnswers: [
        {
            text: "służba radiokomunikacyjna wykonywana przez radioamatorów w celu nawiązywania wzajemnych znajomości i wymiany informacji technicznych"
        },
        {
text: "służba radiokomunikacyjna mająca na celu samokształcenie, wzajemne komunikowanie się i eksperymenty techniczne prowadzone przez amatorów, to jest przez odpowiednio upoważnione osoby interesujące się techniką radiową wyłącznie z pobudek osobistych, bez celów zarobkowych"
},
{
text: "służba radiokomunikacyjna mająca na celu badanie propagacji fal radiowych w zakresach krótkofalowym i ultrakrótkofalowym oraz warunków meteorologicznych"
}
]
},
{
    questionID: 383,
    questionText: "Regulamin Radiokomunikacyjny ITU dzieli świat na trzy regiony. W którym regionie radiokomunikacyjnym znajduje się Polska?",
    questionAnswers: [
        {
            text: "w trzecim"
        },
        {
text: "w pierwszym"
},
{
text: "w drugim"
}
]
},
{
    questionID: 384,
    questionText: "Czy Regulamin Radiokomunikacyjny ITU przewiduje wykorzystanie stacji amatorskich w akcjach humanitarnych, niesienia pomocy w przypadkach katastrof, klęsk żywiołowych i innych zagrożeń?",
    questionAnswers: [
        {
            text: "nie zezwala na takie wykorzystanie stacji amatorskich"
        },
        {
text: "niezbędny jest specjalny wpis do pozwolenia radioamatorskiego"
},
{
text: "usilnie zaleca się wykorzystywanie stacji amatorskich w powyższych przypadkach"
}
]
},
{
    questionID: 385,
    questionText: "Czy Regulamin Radiokomunikacyjny reguluje zasady przyznawania znaków wywoławczych stacjom amatorskim?",
    questionAnswers: [
        {
            text: "nie, regulują to przepisy krajowe"
        },
        {
text: "tak, Regulamin Radiokomunikacyjny określa ściśle zasady przyznawania znaków"
},
{
text: "nie, znak wywoławczy obiera sobie sam operator stacji"
}
]
},
{
    questionID: 386,
    questionText: "Czy postanowienia Regulaminu Radiokomunikacyjnego ITU dotyczące służby amatorskiej obowiązuj również w służbie amatorskiej satelitarnej?",
    questionAnswers: [
        {
            text: "tak, obowiązują"
        },
        {
text: "nie, obowiązują odrębne przepisy"
},
{
text: "nie obowiązują żadne przepisy"
}
]
},
{
    questionID: 387,
    questionText: "Co zgodnie z Regulaminem Radiokomunikacyjnym ITU musi zapewnić operator amatorskiej orbitalnej stacji satelitarnej?",
    questionAnswers: [
        {
            text: "nadawanie przez amatorską stację satelitarną jej znaku wywoławczego"
        },
        {
text: "niezwłoczne zdalne wyłączenie amatorskiej stacji satelitarnej w przypadku powodowania przez nią szkodliwych zakłóceń dla innych służb radiokomunikacyjnych"
},
{
text: "nadawanie przez amatorską stację satelitarną komunikatów meteorologicznych"
}
]
},
{
    questionID: 388,
    questionText: "Jak nazywa się organ międzynarodowy zrzeszający krajowe administracje łączności z terenu Europy?",
    questionAnswers: [
        {
            text: "Rada Europy (EC)"
        },
        {
text: "Europejska Konferencja Administracji Pocztowych i Telekomunikacyjnych (CEPT)"
},
{
text: "Organizacja Bezpieczeństwa i Współpracy w Europie (OBWE)"
}
]
},
{
    questionID: 389,
    questionText: "Gdzie mieści się siedziba Europejskiego Biura Radiokomunikacji (ERO)?",
    questionAnswers: [
        {
            text: "w Brukseli"
        },
        {
text: "w Helsinkach"
},
{
text: "w Kopenhadze"
}
]
},
{
    questionID: 390,
    questionText: "Jakiego rodzaju dokumenty regulujące działalność radiokomunikacyjną w Europie przyjmuje i wprowadza Europejska Konferencja Administracji Pocztowych i Telekomunikacyjnych (CEPT) i publikuje Europejskie Biuro Radiokomunikacji (ERO)?",
    questionAnswers: [
        {
            text: "decyzje"
        },
        {
text: "decyzje i zalecenia"
},
{
text: "decyzje, zalecenia i raporty"
}
]
},
{
    questionID: 391,
    questionText: "Jakie dokumenty Europejskiej Konferencji Administracji Pocztowych i Telekomunikacyjnych (CEPT) regulują sprawy międzynarodowego uznawania pozwoleń i międzynarodowych wymagań egzaminacyjnych w służbie amatorskiej?",
    questionAnswers: [
        {
            text: "Uchwały Komitetu Komunikacji Elektronicznej CEPT"
        },
        {
text: "Zalecenia CEPT T/R 61-01 i T/R 61-02"
},
{
text: "Zalecenia CEPT T/R 22-01 i T/R 22-02"
}
]
},
{
    questionID: 392,
    questionText: "Przez jaki okres czasu może posiadacz międzynarodowego pozwolenia amatorskiego zgodnego z zaleceniem CEPT T/R 61-01 pracować z terytorium innego kraju uznającego to zalecenie, bez konieczności uzyskiwania pozwolenia od miejscowej administracji łączności?",
    questionAnswers: [
        {
            text: "1 miesiąc"
        },
        {
text: "3 miesiące"
},
{
text: "1 rok"
}
]
},
{
    questionID: 393,
    questionText: "Czy przepisy Międzynarodowego Związku Telekomunikacyjnego (ITU) i Europejskiej Konferencji Administracji Pocztowych i Telekomunikacyjnych (CEPT) wprowadzają obowiązkowy wymóg umiejętności odbioru i nadawania znaków w kodzie Morse-a przy egzaminie na świadectwo radiooperatora w służbie amatorskiej?",
    questionAnswers: [
        {
            text: "wprowadzają wymóg jako obowiązkowy"
        },
        {
text: "pozostawiaj powyższy wymóg do decyzji krajowych administracji łączności"
},
{
text: "znoszą całkowicie powyższy wymóg"
}
]
},
{
    questionID: 394,
    questionText: "Kto określa maksymalną moc wyjściową radiostacji amatorskiej podawaną w pozwoleniu?",
    questionAnswers: [
        {
            text: "Międzynarodowy Związek Telekomunikacyjny (ITU)"
        },
        {
text: "Europejskie Biuro Radiokomunikacji (ERO)"
},
{
text: "krajowa administracja łączności"
}
]
},
{
    questionID: 395,
    questionText: "Jaka organizacja reprezentuje służbę amatorską na forum międzynarodowym?",
    questionAnswers: [
        {
            text: "Międzynarodowy Związek Telekomunikacyjny (ITU)"
        },
        {
text: "Międzynarodowy Związek Radioamatorów (IARU)"
},
{
text: "Europejskie Biuro Radiokomunikacji (ERO)"
}
]
},
{
    questionID: 396,
    questionText: "Ile organizacji regionalnych składa się na ogólnoświatowy Międzynarodowy Związek Radioamatorów (IARU ? the International Amateur Radio Union)?",
    questionAnswers: [
        {
            text: "trzy"
        },
        {
text: "cztery"
},
{
text: "pięć"
}
]
},
{
    questionID: 397,
    questionText: "W którym roku i w jakim miejscu powstał Międzynarodowy Związek Radioamatorów (IARU)?",
    questionAnswers: [
        {
            text: "w roku 1930 w Genewie"
        },
        {
text: "w roku 1925 w Paryżu"
},
{
text: "w roku 1910 w Berlinie"
}
]
},
{
    questionID: 398,
    questionText: "W którym roku powstał Polski Związek Krótkofalowców (PZK)?",
    questionAnswers: [
        {
            text: "w roku 1924"
        },
        {
text: "w roku 1930"
},
{
text: "w roku 1946"
}
]
},
{
    questionID: 399,
    questionText: "Jaki organ krajowy reguluje i kontroluje pracę stacji amatorskich, przeprowadza egzaminy na świadectwa operatora urządzeń radiowych i wydaje pozwolenia w służbie amatorskiej?",
    questionAnswers: [
        {
            text: "Minister właściwy do spraw łączności"
        },
        {
text: "Prezes Urzędu Komunikacji Elektronicznej"
},
{
text: "Minister właściwy do spraw wewnętrznych"
}
]
},
{
    questionID: 400,
    questionText: "Jaki podstawowy akt prawny reguluje działalność telekomunikacyjną i radiokomunikacyjną w Polsce?",
    questionAnswers: [
        {
            text: "statut Urzędu Komunikacji Elektronicznej (UKE)"
        },
        {
text: "ustawa Prawo ochrony środowiska"
},
{
text: "ustawa Prawo telekomunikacyjne"
}
]
},
{
    questionID: 401,
    questionText: "W jakim dokumencie określone są zakresy częstotliwości przeznaczone w Polsce dla służby amatorskiej i służby amatorskiej satelitarnej?",
    questionAnswers: [
        {
            text: "w ustawie Prawo telekomunikacyjne"
        },
        {
text: "w rozporządzeniu Rady Ministrów w sprawie Krajowej Tablicy Przeznaczeń Częstotliwości"
},
{
text: "w decyzjach Prezesa Urzędu Komunikacji Elektronicznej"
}
]
},
{
    questionID: 402,
    questionText: "Czy stosowane w Krajowej Tablicy Przeznaczeń Częstotliwości określenie służba pierwszej ważności oznacza, że:",
    questionAnswers: [
        {
            text: "służba taka jest chroniona przed szkodliwymi zakłóceniami ze strony służb drugiej ważności"
        },
        {
text: "służba taka może żądać ochrony przed szkodliwymi zakłóceniami ze strony stacji tej samej lub innych służb, którym częstotliwości mogą zostać przydzielone w późniejszym terminie"
},
{
text: "służba taka może żądać ochrony przed szkodliwymi zakłóceniami ze strony stacji tej samej lub innych służb, którym częstotliwości mogą zostać przydzielone w późniejszym terminie, służba taka nie może powodować szkodliwych zakłóceń w pracy stacji służb pierwszej ważności, którym przydzielono częstotliwości lub mogą być przydzielone w późniejszym terminie"
}
]
},
{
    questionID: 403,
    questionText: "Czy stosowane w Krajowej Tablicy Przeznaczeń Częstotliwości określenie służba drugiej ważności - oznacza, że:",
    questionAnswers: [
        {
            text: "służba taka nie może powodować szkodliwych zakłóceń w pracy stacji służb pierwszej ważności, którym przydzielono częstotliwości lub mogą być przydzielone w późniejszym terminie"
        },
        {
text: "służba taka nie może powodować szkodliwych zakłóceń w pracy stacji służb pierwszej ważności, którym przydzielono częstotliwości lub mogą być przydzielone w późniejszym terminie; służba taka nie może żądać ochrony przed szkodliwymi zakłóceniami ze strony stacji służb pierwszej ważności; którym przydzielono częstotliwości lub mogą być przydzielone w późniejszym terminie; służba taka może jednak żądać ochrony przed szkodliwymi zakłóceniami ze strony stacji tej samej lub innych służb drugiej ważności, którym częstotliwości mogą być przydzielone w późniejszym terminie."
},
{
text: "służba taka może żądać ochrony przed szkodliwymi zakłóceniami ze strony stacji tej samej lub innych służb drugiej ważności, którym częstotliwości mogą być przydzielone w późniejszym terminie"
}
]
},
{
    questionID: 404,
    questionText: "Jaki dokument określa kategorie pozwoleń w służbie amatorskiej i dozwolone moce wyjściowe radiostacji amatorskiej?",
    questionAnswers: [
        {
            text: "ustawa Prawo telekomunikacyjne"
        },
        {
text: "rozporządzenie ministra właściwego do spraw łączności"
},
{
text: "zarządzenie Prezesa Urzędu Komunikacji Elektronicznej"
}
]
},
{
    questionID: 405,
    questionText: "Do czego upoważnia świadectwo operatora klasy A w służbie radiokomunikacyjnej amatorskiej?",
    questionAnswers: [
        {
            text: "do uzyskania pozwolenia amatorskiego kategorii 1"
        },
        {
text: "do uzyskania pozwolenia amatorskiego kategorii 3"
},
{
text: "wyłącznie do pracy na radiostacji klubowej"
}
]
},
{
    questionID: 406,
    questionText: "Do czego upoważnia świadectwo operatora klasy C w służbie radiokomunikacyjnej amatorskiej?",
    questionAnswers: [
        {
            text: "do uzyskania pozwolenia amatorskiego kategorii 2"
        },
        {
text: "do uzyskania pozwolenia amatorskiego kategorii 3"
},
{
text: "do organizowania zawodów w amatorskiej radiolokacji sportowej"
}
]
},
{
    questionID: 407,
    questionText: "Na jaki okres czasu wydawane są indywidualne pozwolenia amatorskie kategorii 1 i 3?",
    questionAnswers: [
        {
            text: "10 lat"
        },
        {
text: "15 lat"
},
{
text: "dożywotnio"
}
]
},
{
    questionID: 408,
    questionText: "Na jaki okres czasu wydawane są pozwolenia amatorskie kategorii 5?",
    questionAnswers: [
        {
            text: "5 lat"
        },
        {
text: "10 lat"
},
{
text: "15 lat"
}
]
},
{
    questionID: 409,
    questionText: "Jaka jest maksymalna moc wyjściowa radiostacji amatorskiej w przypadku pozwolenia kategorii 1 uzyskanego po raz pierwszy?",
    questionAnswers: [
        {
            text: "50 watów"
        },
        {
text: "500 watów"
},
{
text: "250 watów"
}
]
},
{
    questionID: 410,
    questionText: "Jaka jest maksymalna moc wyjściowa radiostacji amatorskiej w przypadku pozwolenia kategorii 3?",
    questionAnswers: [
        {
            text: "15 watów"
        },
        {
text: "100 watów"
},
{
text: "150 watów"
}
]
},
{
    questionID: 411,
    questionText: "Jaka jest moc maksymalna wyjściowa radiostacji amatorskiej w przypadku pozwolenia kategorii 5?",
    questionAnswers: [
        {
            text: "50 watów dla nadajnika poniżej 30MHz a 15 watów dla nadajnika powyżej 30MHz"
        },
        {
text: "50 watów"
},
{
text: "150 watów"
}
]
},
{
    questionID: 412,
    questionText: "Jaka jest maksymalna moc wyjściowa radiostacji w przypadku pozwolenia dodatkowego?",
    questionAnswers: [
        {
            text: "500 watów"
        },
        {
text: "1000 watów"
},
{
text: "1500 watów"
}
]
},
{
    questionID: 413,
    questionText: "W jakich zakresach krótkofalowych może pracować operator posiadający pozwolenie kategorii 1?",
    questionAnswers: [
        {
            text: "3500 - 3800 kHz oraz 7000 - 7100 kHz"
        },
        {
text: "7000 - 7100 kHz oraz 28000 - 29700 kHz"
},
{
text: "we wszystkich zakresach częstotliwości przeznaczonych dla służby radiokomunikacyjnej amatorskiej na terytorium RP"
}
]
},
{
    questionID: 414,
    questionText: "W jakich zakresach częstotliwości może pracować operator posiadający pozwolenie kategorii 3?",
    questionAnswers: [
        {
            text: "28000-29700 kHz oraz 144-146 MHz"
        },
        {
text: "1,81-2 MHz; 3,5-3,8 MHz; 7-7,2 MHz; 14-14,35 MHz; 21-21,45 MHz; 28-29,7 MHz, 144-146 MHz; 430-440 MHz oraz 10-10,5 GHz."
},
{
text: "28000-29700 kHz oraz 430-440 MHz"
}
]
},
{
    questionID: 415,
    questionText: "Jaki jest minimalny wiek, w którym można przystąpić do egzaminu i uzyskać świadectwo operatora urządzeń radiowych w służbie amatorskiej oraz uzyskać pozwolenie dla służby radiokomunikacyjnej amatorskiej?",
    questionAnswers: [
        {
            text: "10 lat dla uzyskania świadectwa klasy C oraz 15 lat dla uzyskania świadectwa klasy A"
        },
        {
text: "15 lat dla uzyskania świadectwa klasy A i C"
},
{
text: "nie określono minimalnego wieku"
}
]
},
{
    questionID: 416,
    questionText: "Jakimi rodzajami emisji radiowych wolno pracować operatorowi w służbie amatorskiej w zakresie częstotliwości 50-52 MHz?",
    questionAnswers: [
        {
            text: "wyłącznie emisją A1A (telegrafia)"
        },
        {
text: "wyłącznie emisją F3E (telefonia z modulacją częstotliwości)"
},
{
text: "wszystkimi rodzajami emisji z wyjątkiem F3E"
}
]
},
{
    questionID: 417,
    questionText: "Jakimi rodzajami emisji radiowych i z jaką mocą wolno pracować operatorowi w służbie amatorskiej w zakresie częstotliwości 135,7-137,8 kHz?",
    questionAnswers: [
        {
            text: "wyłącznie emisją A1A (telegrafia) z mocą wyjściową 150 watów"
        },
        {
text: "wszystkimi rodzajami emisji z mocą wyjściową 250 watów"
},
{
text: "wyłącznie emisją A1A (telegrafia) z mocą 1 wat e.i.r.p. (równoważna moc promieniowana izotropowo)"
}
]
},
{
    questionID: 418,
    questionText: "Jaki dokument określa klasy świadectw operatora radiowego w służbie amatorskiej i wymagania egzaminacyjne na poszczególne klasy świadectw?",
    questionAnswers: [
        {
            text: "rozporządzenie ministra właściwego do spraw łączności"
        },
        {
text: "ustawa Prawo telekomunikacyjne"
},
{
text: "Krajowa Tablica Przeznaczeń Częstotliwości"
}
]
},
{
    questionID: 419,
    questionText: "Jak powinien postąpić operator stacji amatorskiej w razie przypadkowego odebrania wiadomości nie przeznaczonej dla służby amatorskiej?",
    questionAnswers: [
        {
            text: "rozpowszechnić odebraną wiadomość w internecie"
        },
        {
text: "zachować treść wiadomości w ścisłej tajemnicy"
},
{
text: "zachować treść wiadomości w ścisłej tajemnicy, zaś w przypadku gdy odebrana wiadomość zawiera istotne dla funkcjonowania Pastwa lub porządku publicznego informacje - powiadomić najbliższą jednostkę Urzędu Komunikacji Elektronicznej"
}
]
},
{
    questionID: 420,
    questionText: "Czy operator stacji amatorskiej może przekazywać przy pomocy swej radiostacji wiadomości pochodzące od osób trzecich i przeznaczone dla osób trzecich?",
    questionAnswers: [
        {
            text: "jest to dopuszczalne"
        },
        {
text: "jest to surowo zabronione"
},
{
text: "jest to dopuszczalne, jeśli stacja amatorska za wiedzą Urzędu Komunikacji Elektronicznej bierze udział w akcji niesienia pomocy lub likwidacji skutków klęsk żywiołowych i katastrof"
}
]
},
{
    questionID: 421,
    questionText: "Jak często operator radiostacji amatorskiej powinien podawać podczas łączności znak wywoławczy swej stacji?",
    questionAnswers: [
        {
            text: "co pół godziny"
        },
        {
text: "tak często, jak jest to w praktyce możliwe, przynajmniej na początku i na kocu każdego nadawania"
},
{
text: "nie musi podawać znaku wywoławczego"
}
]
}
    ]
};

export default questionDataBase;
