(this["webpackJsonpexam-tester"]=this["webpackJsonpexam-tester"]||[]).push([[0],{18:function(e,t,n){e.exports=n(28)},28:function(e,t,n){"use strict";n.r(t);var i=n(0),o=n.n(i),a=n(12),s=n.n(a),r=n(15),u=n(2),w=n(3),c=n(5),z=n(4),y=n(6),d=n(7),p=n(1);function x(){var e=Object(d.a)(["\n  body {\n    margin: 0;\n    padding: 0;\n    background-color: #282c34;\n    color: whitesmoke;\n    font-family: Verdana, Geneva, sans-serif;\n    text-align: center;\n  }\n"]);return x=function(){return e},e}var k=Object(p.a)(x());function l(){var e=Object(d.a)(["\n    padding: 20px;\n    margin-bottom: 10px;\n    background-color: #202426;\n    font-size: 35px;\n    font-weight: 700;\n    letter-spacing: 3px;\n\n    @media (max-width: 600px) {\n        padding: 8px;\n        font-size: 28px;\n        letter-spacing: 2px;\n    }\n"]);return l=function(){return e},e}var m=p.b.header(l()),j=function(e){function t(){return Object(u.a)(this,t),Object(c.a)(this,Object(z.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){return o.a.createElement(m,null,"EXAM TESTER")}}]),t}(i.Component),b=function(e){function t(){return Object(u.a)(this,t),Object(c.a)(this,Object(z.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){return o.a.createElement("nav",null)}}]),t}(i.Component);function q(){var e=Object(d.a)(["\n    flex-grow: 1;\n"]);return q=function(){return e},e}function h(){var e=Object(d.a)(["\n    display: flex;\n    margin: 0 auto;\n    padding: 0 3px;\n"]);return h=function(){return e},e}var f=p.b.div(h()),g=p.b.span(q()),C=function(e){function t(){return Object(u.a)(this,t),Object(c.a)(this,Object(z.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){return o.a.createElement(f,null,o.a.createElement(g,null,o.a.createElement("div",null,"Liczba pyta\u0144:"),o.a.createElement("div",null,this.props.numberOfQuestions)),o.a.createElement(g,null,o.a.createElement("div",null,"Nauczonych pyta\u0144:"),o.a.createElement("div",null,this.props.learntQuestionsCount)),o.a.createElement(g,null,o.a.createElement("div",null,"Udzielonych odpowiedzi:"),o.a.createElement("div",null,this.props.answersCount)),o.a.createElement(g,null,o.a.createElement("div",null,"Dobrych odpowiedzi:"),o.a.createElement("div",null,this.props.goodAnswersCount)),o.a.createElement(g,null,o.a.createElement("div",null,"Wynik:"),o.a.createElement("div",null,Math.round(this.props.goodAnswersCount/this.props.answersCount*100),"%")))}}]),t}(i.Component),A=function(e){function t(){return Object(u.a)(this,t),Object(c.a)(this,Object(z.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null)}}]),t}(i.Component);function D(){var e=Object(d.a)(["\n    margin: 1px auto;\n    padding: 10px;\n    font-size: 14px;\n    ","\n\n    ","\n\n    @media (max-width: 600px) {\n        font-size: 12px;\n    }\n"]);return D=function(){return e},e}function I(){var e=Object(d.a)(["\n    display: flex;\n    flex-flow: column;\n"]);return I=function(){return e},e}function T(){var e=Object(d.a)(["\n    margin: 16px 4px;\n    font-size: 16px;\n"]);return T=function(){return e},e}function O(){var e=Object(d.a)(["\n    min-height: 75vh;\n"]);return O=function(){return e},e}var v=p.b.div(O()),E=p.b.p(T()),M=p.b.div(I()),R=p.b.div(D(),(function(e){return e.wasClicked?e.isCorrect?"background-color: green;":"background-color: red;":""}),(function(e){return e.answered?"":"\n        @media (hover: hover) {\n            &:hover {\n                background-color: #403846;\n                cursor: pointer;\n                margin: 0 auto;\n                border: 1px solid gray;\n            }\n        }\n    "})),W=function(e){function t(){var e,n;Object(u.a)(this,t);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return(n=Object(c.a)(this,(e=Object(z.a)(t)).call.apply(e,[this].concat(o)))).state={wasClicked:!1},n.handleClick=function(){n.props.answered||n.setState({wasClicked:!0}),n.props.onClick()},n}return Object(y.a)(t,e),Object(w.a)(t,[{key:"componentDidUpdate",value:function(e,t){t.wasClicked&&this.setState({wasClicked:!1})}},{key:"render",value:function(){return o.a.createElement(R,{onClick:this.handleClick,answered:this.props.answered,wasClicked:this.state.wasClicked,isCorrect:this.props.answer.isCorrect},String.fromCharCode("A".charCodeAt(0)+this.props.index)+") ",this.props.answer.text)}}]),t}(i.Component),G=function(e){function t(){return Object(u.a)(this,t),Object(c.a)(this,Object(z.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(v,{onClick:this.props.onClick},o.a.createElement("hr",null),o.a.createElement(E,null,this.props.question.questionID+". ",this.props.question.questionText),o.a.createElement(M,null,this.props.question.questionAnswers.map((function(t,n){return o.a.createElement(W,{key:n,index:n,answered:e.props.answered,answer:t,onClick:function(){return e.props.answerHandler(t.isCorrect)}})}))))}}]),t}(i.Component),H=function(e){function t(){return Object(u.a)(this,t),Object(c.a)(this,Object(z.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null)}}]),t}(i.Component);function S(){var e=Object(d.a)(["\n    padding: 5px;\n    margin-top: 10px;\n    background-color: #202426;\n    font-size: 16px;\n\n    @media (max-width: 600px) {\n        font-size: 13px;\n    }\n"]);return S=function(){return e},e}var K=p.b.footer(S()),Q=function(e){function t(){return Object(u.a)(this,t),Object(c.a)(this,Object(z.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){return o.a.createElement(K,null,"v2.0.0 Konstanty Misiak \xa9 2019")}}]),t}(i.Component),B={multimediaAndInterfaces:[{questionID:1,questionText:"Multimedia to:",questionAnswers:[{text:"modelowanie tekstu na tekst"},{text:"rozpoznawanie obraz\xf3w"},{text:"generowanie obrazu z opisu (grafika)"},{text:"przetwarzanie obraz\xf3w"},{text:"wszystkie odpowiedzi s\u0105 poprawne",isCorrect:!0}]},{questionID:2,questionText:"Kt\xf3ry czynnik utrudnia cz\u0142owiekowi s\u0142yszenie przestrzenne:",questionAnswers:[{text:"efekt doplera"},{text:"odbicie d\u017awi\u0119k\xf3w",isCorrect:!0},{text:"para uszu"},{text:"t\u0142umienie d\u017awi\u0119k\xf3w docieraj\u0105cych z ty\u0142u"}]},{questionID:3,questionText:"Mechanizm animacji w VRML",questionAnswers:[{text:"nie ma wp\u0142ywu na parametry odtwarzanego d\u017awi\u0119ku",isCorrect:!0},{text:"korzysta wy\u0142\u0105cznie z jednego interpolatora dla danego obiektu"},{text:"nie pozwala na wielokrotne wykorzystanie timer\xf3w"},{text:"samodzielnie interpoluje w\u0142a\u015bciwo\u015bci animowanego obiektu we wszystkich klatkach po\u015brednich"}]},{questionID:4,questionText:"Sp\xf3jno\u015b\u0107 i u\u017cywanie standard\xf3w nie oznacza, \u017ce:",questionAnswers:[{text:"system dostarcza skr\xf3t\xf3w",isCorrect:!0},{text:"u\u017cytkownik mo\u017ce wykorzysta\u0107 do\u015bwiadczenie zdobyte przy u\u017cywaniu innych program\xf3w"},{text:"poszczeg\xf3lne cz\u0119\u015bci interfejsu programu wygl\u0105daj\u0105 i s\u0105 obs\u0142ugiwane w podobny spos\xf3b jak inne programy"},{text:"poszczeg\xf3lne cz\u0119\u015bci interfejsu wygl\u0105daj\u0105 i s\u0105 obs\u0142ugiwane w podobny spos\xf3b"}]},{questionID:5,questionText:"Wska\u017c zdanie fa\u0142szywe:",questionAnswers:[{text:"za widzenie koloru odpowiedzialne s\u0105 pr\u0119ciki",isCorrect:!0},{text:"za widzenie nocne odpowiedzialne s\u0105 pr\u0119ciki"},{text:"pr\u0119ciki umo\u017cliwiaj\u0105 dobre wykrywanie kraw\u0119dzi"},{text:"wzrok cz\u0142owieka jest bardziej wra\u017cliwy na jasno\u015b\u0107 ni\u017c na kolor"}]},{questionID:6,questionText:"Histogram obrazu:",questionAnswers:[{text:"pozwala na wykrywnanie kraw\u0119dzi w obrazie"},{text:"pozwala na odszumianie obrazu"},{text:"pozwala na redukcj\u0119 liczby barw wyst\u0119puj\u0105cych w obrazie",isCorrect:!0},{text:"pe\u0142ny H(RGB) dla wszystystkich kana\u0142\xf3w jest wykorzystywany w aparatach cyfrowych"}]},{questionID:7,questionText:"Prostota dialogu nie oznacza, \u017ce:",questionAnswers:[{text:"brak jest zb\u0119dnych element\xf3w na ekranie"},{text:"elementy multimedialne s\u0105 oszcz\u0119dnie wykorzystywane w szczeg\xf3lno\u015bci filmy",isCorrect:!0},{text:"interfejs zawiera tylko te elemeny kt\xf3re s\u0105 niezb\u0119dne"},{text:"uwaga u\u017cytkownika nie jest odci\u0105gana przez dodatkowe obrazki napisy itp."}]},{questionID:8,questionText:"Wska\u017c zdanie fa\u0142szywe: kompresja stratna ...",questionAnswers:[{text:"zawsze obni\u017ca jako\u015b\u0107 sygna\u0142u",isCorrect:!0},{text:"mo\u017ce wykorzystywa\u0107 informacj\u0119 o ograniczeniach percepcji cz\u0142owieka"},{text:"mo\u017ce wykorzystywa\u0107 w\u0142a\u015bciwo\u015bci sygna\u0142u"},{text:"mo\u017ce wykorzystywa\u0107 kompresje bezstratn\u0105"}]},{questionID:9,questionText:"Efektem dzia\u0142ania filtru u\u015bredniaj\u0105cego o masce poziomej o wymiarze 3x1 dla wiersza obrazu o jasno\u015bciach pikseli 1 2 3 4 0 4 3 2 1 mo\u017ce by\u0107 nast\u0119puj\u0105cy wiersz:",questionAnswers:[{text:"1 2 3 2 3 2 3 2 1",isCorrect:!0},{text:"1 2 3 2,33 2,67 2,33 3 2"},{text:"2 3 2 3 2 3 2"},{text:"2 2 2 2 2 2 2 2 2"}]},{questionID:10,questionText:"Zapobieganie b\u0142\u0119dom oznacza, \u017ce:",questionAnswers:[{text:"brak jest zb\u0119dnych element\xf3w na ekranie"},{text:"interfejs jest prosty w obs\u0142udze"},{text:"zamiast dostarczac komunikat o b\u0142\u0119dzie po wyj\u015bciu poza dozwolony zakres czyni si\u0119 niedost\u0119pnymi odpowiedni klawisz lub opcj\u0119 w menu",isCorrect:!0},{text:"system dostarcza skr\xf3t\xf3w"}]},{questionID:11,questionText:"Widoczny stan interfejsu oznacza, \u017ce:",questionAnswers:[{text:"zawsze mo\u017cna si\u0119 wycofa\u0107 z b\u0142\u0119dnych dzia\u0142a\u0144"},{text:"komunikaty o b\u0142\u0119dach s\u0105 dobrze dobrane"},{text:"u\u017cytkownik zna bie\u017c\u0105cy tryb interfejsu",isCorrect:!0},{text:"brak jest zb\u0119dnych element\xf3w na ekranie"}]},{questionID:12,questionText:"Oblicz rozmiar kolorowej bitmapy w formacie TrueColor RGB powsta\u0142ej w wyniku skanowania w rozdzielczo\u015bci 300dpi obrazu o wymiarach 1 na 5 cali:",questionAnswers:[{text:"1 800 000"},{text:"    4 500"},{text:"  450 000"},{text:"1 350 000",isCorrect:!0}]},{questionID:13,questionText:"U\u017cywanie j\u0119zyka u\u017cytkownika oznacza, \u017ce:",questionAnswers:[{text:"brak jest zb\u0119dnych element\xf3w na ekranie"},{text:"interfejs jest prosty w obs\u0142udze"},{text:"interfejs mo\u017ce u\u017cywa\u0107 \u017cargonu z dziedziny z kt\xf3rej pochodza zadania wykonywane przez uzytkownika"},{text:"komunikaty o bledach sa dobrze opisane",isCorrect:!0}]},{questionID:14,questionText:"Kt\xf3re z podanych miar oceny sa obiektywne:",questionAnswers:[{text:"postawa"},{text:"stosunek"},{text:"motywacja"},{text:"zachowanie niewerbalne",isCorrect:!0}]},{questionID:15,questionText:"Jaka jest cz\u0119stotliwo\u015b\u0107 pr\xf3bkowania muzyki jako\u015bci CD i z czego ona wynika?",questionAnswers:[{text:"44100 Hz.Ponad 2 razy wi\u0119ksza od g\xf3rnej granicy s\u0142yszalno\u015bci cz\u0142owieka.",isCorrect:!0},{text:"40000 Hz. 2 razy wi\u0119ksza od g\xf3rnej granicy s\u0142yszalno\u015bci cz\u0142owieka."},{text:"1,5 Mbit/s .Pr\u0119dko\u015b\u0107 odtwarzania CD \u2026"},{text:"8 kHZ.Ograniczenia pasma w kana\u0142ach transmisji."}]},{questionID:16,questionText:"W pozyskiwaniu wiedzy stategia:",questionAnswers:[{text:"to uporz\u0105dkowanie czasowe dzia\u0142a\u0144"},{text:"okre\u015bla krok po kroku jakie dzia\u0142ania realizuj\u0105 dany cel",isCorrect:!0},{text:"odpowiada regu\u0142om  wyboru metod GOMS"},{text:"umo\u017cliwia okre\u015blenie czasu nauki interfejsu"}]},{questionID:17,questionText:"W pozyskiwaniu wiedzy plan nie:",questionAnswers:[{text:"okre\u015bla krok po kroku, jakie dzia\u0142ania realizuj\u0105 dany cel"},{text:"to uporz\u0105dkowanie czasowe czynno\u015bci"},{text:"poznaje si\u0119 szukaj\u0105c w wywiadach i protoko\u0142ach sformu\u0142owa\u0144 typu 'teraz przyst\u0119puj\u0119 do...'"},{text:"umo\u017cliwia wyznaczenie najkr\xf3tszego czasu realizacji zadania",isCorrect:!0}]},{questionID:18,questionText:"W wyniku wykonania algorytmu RLE(run length encoding) dla ci\u0105gu 1111222334 nie mo\u017cna uzyska\u0107 nast\u0119puj\u0105cego kodu:",questionAnswers:[{text:"1(4) 2(3) 3(2) 4"},{text:"11 11 11 11 10 10 10 01 01 00",isCorrect:!0},{text:"1(4) 2(3) 3(2) 4(1)"},{text:"1(4) 2(3) 3 3 4"}]},{questionID:19,questionText:"Efektem dzia\u0142ania filtru warto\u015bci \u015brodkowej (medianowego) o masce poziomej w wymiarze 3 x 1 dla wiersza obrazu o jasno\u015bciach pixeli 1 2 3 4 0 4 3 2 1 mo\u017ce by\u0107 nast\u0119puj\u0105cy wiersz:",questionAnswers:[{text:"2 2 2 2 2 2 2 2 2"},{text:"2 3 2 3 2 3 2 3 2"},{text:"3 3 3 3 3 3 3 3 3"},{text:"1 2 3 3 4 3 3 2 1",isCorrect:!0}]},{questionID:20,questionText:"W ocenie heurystycznej widoczny stan interfejsu nie oznacza, \u017ce:",questionAnswers:[{text:"zawsze mo\u017cna si\u0119 wycofa\u0107 z b\u0142\u0119dnych dzia\u0142a\u0144",isCorrect:!0},{text:"u\u017cytkownik zawsze wie, w kt\xf3rym miejscu si\u0119 znajduje"},{text:"u\u017cytkownik zna bie\u017c\u0105ce warto\u015bci parametr\xf3w interfejsu np. podkre\u015blenie/wyt\u0142uszczenie w edytorze tekstu"},{text:"u\u017cytkownik zna bie\u017c\u0105cy tryb interfejsu"}]},{questionID:21,questionText:" W ocenie heurystycznej minimalizowanie obci\u0105\u017cania pami\u0119ci oznacza, \u017ce:",questionAnswers:[{text:"system dostarcza skr\xf3t\xf3w"},{text:"interfejs jest prosty w obs\u0142udze"},{text:"u\u017cytkownik nie musi pami\u0119ta\u0107 nazw polece\u0144",isCorrect:!0},{text:"komunikaty o b\u0142\u0119dach s\u0105 dobrze opisane"}]},{questionID:22,questionText:"Oblicz rozmiar kolorowej bitmapy (w formacie TrueColorRGB) powsta\u0142ej w wyniku skanowania o rozdzielczo\u015bci 200 dpi obrazu o wymiarach 3 na 5 cale(i).",questionAnswers:[{text:"1 800 000",isCorrect:!0},{text:"2 400 000"},{text:"9 000"},{text:"600 000"}]},{questionID:23,questionText:"Wska\u017c zdanie fa\u0142szywe. Format MIDI:",questionAnswers:[{text:"umo\u017cliwia dobr\u0105 kompresj\u0119 muzyki instrumentalnej"},{text:"s\u0142u\u017cy do zapisu muzyki, kt\xf3ra zawsze brzmi identycznie niezale\u017cnie od komputera",isCorrect:!0},{text:"jest standardem komunikacji cfrowych urz\u0105dze\u0144 muzycznych"},{text:"mo\u017cna traktowa\u0107 jako odmian\u0119 zapisu nutowego"}]},{questionID:24,questionText:"Wska\u017c zdanie fa\u0142szywe:",questionAnswers:[{text:"pr\u0119ciki umo\u017cliwiaj\u0105 dobre wykrywanie kraw\u0119dzi"},{text:"za widzenie koloru odpowiedzialne s\u0105 pr\u0119ciki",isCorrect:!0},{text:"za widzenie nocne odpowiedzialne s\u0105 pr\u0119ciki"},{text:"za widzenie koloru odpowiedzialne s\u0105 czopki"}]},{questionID:25,questionText:"W ocenie heurystycznej dobre diagnozowanie b\u0142\u0119d\xf3w oznacza, \u017ce:",questionAnswers:[{text:"komunikaty o b\u0142\u0119dzie pisane s\u0105 inn\u0105 czcionk\u0105 i s\u0105 innej barwy ni\u017c pozosta\u0142e komunikaty"},{text:"komunikat o b\u0142\u0119dzie umo\u017cliwia usuni\u0119cie przyczyny b\u0142\u0119du",isCorrect:!0},{text:"komunikat o b\u0142\u0119dzie obejmuje zawarto\u015b\u0107 rejestr\xf3w procesora"},{text:"komunikat o b\u0142\u0119dzie wy\u015bwietlany jest na \u015brodku ekranu"}]},{questionID:26,questionText:"Celami kompresji MPEG 1 i 2 nie s\u0105:",questionAnswers:[{text:"szybkie przeszukiwanie w prz\xf3d i wstecz"},{text:"ma\u0142e op\xf3\u017anienia kodowania i dekodowania"},{text:"elastyczno\u015b\u0107 formatu obrazu"},{text:"skuteczna korekcja b\u0142\u0119d\xf3w",isCorrect:!0}]},{questionID:27,questionText:"W ocenie heurystycznej elastyczno\u015b\u0107 i wydajno\u015b\u0107 nie oznacza, \u017ce:",questionAnswers:[{text:"niekt\xf3re dzia\u0142ania interfejsu u\u017cytkownik mo\u017ce wywo\u0142a\u0107 w mniejszej liczbie krok\xf3w(klikni\u0119\u0107,uderze\u0144 w klawiatur\u0119)"},{text:"zaawansowanym u\u017cytkownikom umo\u017cliwia si\u0119 szybsz\u0105 obs\u0142ug\u0119 interfejsu"},{text:"system dostarcza skr\xf3t\xf3w"},{text:"interfejs jest prosty w obs\u0142udze",isCorrect:!0}]},{questionID:28,questionText:"Wska\u017c zdanie fa\u0142szywe. P\u0142yty DVD...",questionAnswers:[{text:"s\u0105 trwalsze od analogicznych ( t\u0142oczonych lub nagrywanych ) p\u0142yt CD",isCorrect:!0},{text:"zawieraj\u0105 informacj\u0119 zapisan\u0105 w postaci zag\u0142\u0119bie\u0144 i p\u0142askich powierzchni"},{text:"musz\u0105 by\u0107 odczytywane laserem o kr\xf3tszej d\u0142ugo\u015bci fali ni\u017c p\u0142yty CD"},{text:"mog\u0105 wyst\u0119powa\u0107 w wersji jedno- lub dwuwarstwowej"}]},{questionID:29,questionText:"Wska\u017c zdanie fa\u0142szywe. Cz\u0119stotliwo\u015b\u0107 pr\xf3bkowania DVDaudio...",questionAnswers:[{text:"jest stosowana aby zmniejszy\u0107 sk\u0142adowe harmoniczne"},{text:"jest stosowana aby uzyska\u0107 d\u017awi\u0119k o wierniejszym brzmieniu"},{text:"mo\u017ce nie wp\u0142ywa\u0107 na odbi\xf3r muzyki przez meloman\xf3w o gorszym s\u0142uchu (w por\xf3wnaniu z Cdaudio)"},{text:"wynosi 48 lub 96 kHz",isCorrect:!0}]},{questionID:30,questionText:"Je\u017celi trzy barwy tworz\u0105 uk\u0142ad niezale\u017cnych liniowo barw to s\u0105 to:",questionAnswers:[{text:"barwy achromatyczne"},{text:"barwy podstawowe",isCorrect:!0},{text:"barwy proste"}]},{questionID:31,questionText:"Barwa prosta to nie barwa:",questionAnswers:[{text:"monochromatyczna"},{text:"widmowa"},{text:"spektralna"},{text:"achromatyczna",isCorrect:!0}]},{questionID:32,questionText:"Addytywne mieszanie kolor\xf3w nie jest wykorzystywane przez:",questionAnswers:[{text:"monitory CRT"},{text:"monitory TV"},{text:"rzutniki"},{text:"plotery",isCorrect:!0}]},{questionID:33,questionText:"Substraktywne uzyskiwanie kolor\xf3w jest wykorzystywane przez:",questionAnswers:[{text:"monitory CRT"},{text:"rzutniki"},{text:"monitory TV"},{text:"drukarki",isCorrect:!0}]},{questionID:34,questionText:"Model CMY(K) jest wykorzystywany przez:",questionAnswers:[{text:"monitory CRT"},{text:"rzutniki"},{text:"skanery"},{text:"maszyny offsetowe",isCorrect:!0}]},{questionID:35,questionText:"Modelu RGB nie wykorzystuje:",questionAnswers:[{text:"aparat fotograficzny"},{text:"monitor"},{text:"rzutnik"},{text:"skaner",isCorrect:!0}]},{questionID:36,questionText:"Modelu CMY(K) nie wykorzystuje:",questionAnswers:[{text:"drukarka"},{text:"ploter"},{text:"rzutnik",isCorrect:!0}]},{questionID:37,questionText:" W model CMY(K) kolor K jest potrzebny ze wzgl\u0119du na:",questionAnswers:[{text:"problem w odzwierciedlaniu czarnego"},{text:"oszcz\u0119dno\u015b\u0107",isCorrect:!0},{text:"model nie m\xf3g\u0142by istnie\u0107 bez niego"}]},{questionID:38,questionText:"Fala akustyczna(wska\u017c nieprawid\u0142ow\u0105 odpowied\u017a):",questionAnswers:[{text:"w cieczach mo\u017ce by\u0107 fal\u0105 pod\u0142u\u017cn\u0105"},{text:"w gazach mo\u017ce by\u0107 fal\u0105 pod\u0142u\u017cn\u0105"},{text:"w cia\u0142ach sta\u0142ych mo\u017ce by\u0107 fal\u0105 pod\u0142u\u017cn\u0105"},{text:"w cieczach mo\u017ce by\u0107 fal\u0105 poprzeczn\u0105",isCorrect:!0},{text:"w cia\u0142ach sta\u0142ych mo\u017ce by\u0107 fal\u0105 poprzeczn\u0105"}]},{questionID:39,questionText:"Co pasuje do szumu:",questionAnswers:[{text:"d\u017awi\u0119k o ci\u0105g\u0142ym widmie",isCorrect:!0},{text:"nieskorelowane cz\u0119stotliwo\u015bci"},{text:"wieloton harmoniczny"},{text:"harmoniczne drganie o jednej cz\u0119stotliwo\u015bci"}]},{questionID:40,questionText:"Wybierz prawid\u0142owe:",questionAnswers:[{text:"pr\u0119cik\xf3w jest wi\u0119cej ni\u017c czopk\xf3w",isCorrect:!0},{text:"czopk\xf3w jest wi\u0119cej ni\u017c pr\u0119cik\xf3w"},{text:"liczba pr\u0119cik\xf3w jest r\xf3wna ilosci czopk\xf3w"}]},{questionID:41,questionText:"Jaka liczba klatek na sekund\u0119 wystarcza, \u017ceby uzna\u0107, \u017ce jest p\u0142ynny?",questionAnswers:[{text:"100fps"},{text:"60fps"},{text:"30fps"},{text:"15fps",isCorrect:!0}]},{questionID:42,questionText:"Kt\xf3ra metoda nie dotyczy bezpo\u015brednio kompresji stratnej?",questionAnswers:[{text:"redukcja rozdzielczo\u015bci"},{text:"prunning"},{text:"wprowadzanie palety barw"},{text:"np. grupowanie pikseli o tej samej barwie",isCorrect:!0},{text:"redukcja chrominancji"}]},{questionID:43,questionText:"Sp\xf3jno\u015b\u0107 interfejsu oznacza:",questionAnswers:[{text:"zgodno\u015b\u0107 z powszechnie przyj\u0119tymi zasadami",isCorrect:!0},{text:"ta sama czynno\u015b\u0107 mo\u017cna wykona\u0107 na wiele ro\u017cnych sposob\xf3w w ro\u017cnych miejscach inaterfejsu"},{text:"interfejs programu jest jasny i szybki do opanowania"},{text:"minimalizowanie obci\u0105\u017cenia pami\u0119ci u\u017cytkownika"}]},{questionID:44,questionText:"Granice slyszalnosci cz\u0142owieka",questionAnswers:[{text:"15Hz-20kHz"},{text:"20Hz-20kHz",isCorrect:!0},{text:"10Hz-20kHz"},{text:"20kHz-20Hz"}]},{questionID:45,questionText:"ITD to:",questionAnswers:[{text:"inteligentny system rozpoznawania mowy dla niepe\u0142nosprawnych"},{text:"r\xf3\u017cnica intensywno\u015bci d\u017awi\u0119ku odbierana miedzy uszami"},{text:"r\xf3\u017cnica czasu w jakim dociera d\u017awi\u0119k",isCorrect:!0},{text:"czas w jakim d\u017awi\u0119k odbierany jest przez m\xf3zg "}]},{questionID:46,questionText:"IID to:",questionAnswers:[{text:"inteligentny system rozpoznawania mowy dla niepe\u0142nosprawnych"},{text:"r\xf3\u017cnica intensywno\u015bci d\u017awi\u0119ku odbierana miedzy uszami",isCorrect:!0},{text:"r\xf3\u017cnica czasu w jakim dociera d\u017awi\u0119k "},{text:"czas w jakim d\u017awi\u0119k odbierany jest przez m\xf3zg "}]},{questionID:47,questionText:"HRTF to:",questionAnswers:[{text:"system sterowania komputerem falami mozgowymi"},{text:"r\xf3\u017cnica czasu w jakim dociera dzwiek"},{text:"efekt tlumienia/wzmacniania d\u017awi\u0119ku przez malzowine uszna i g\u0142ow\u0119",isCorrect:!0},{text:"stosunek ci\u015bnienia akustycznego do nat\u0119\u017cenia d\u017awi\u0119ku"}]},{questionID:48,questionText:"Formy pomocy jakie nale\u017cy zapewni\u0107 w programie, to:",questionAnswers:[{text:"obszerna dokumentacja do\u0142\u0105czana w formie elektronicznej, b\u0105d\u017a drukowanej"},{text:"podpowiedzi, jako wy\u015bwietlane dymki po najechaniu na przycisk",isCorrect:!0},{text:"samouczek"},{text:"oficjalne forum internetowe"}]},{questionID:49,questionText:"W metodzie heurystycznej oceny interfejsu:",questionAnswers:[{text:"u\u017cytkownik wykonuje pojedyncze, nieznane mu zadanie w programie"},{text:"u\u017cytkownik stara si\u0119 opisa\u0107 b\u0142\u0119dy, kt\xf3re wyst\u0105pi\u0142y w czasie u\u017cytkowania programu"},{text:"grupa specjalist\xf3w ocenia takie elementy jak zapobieganie b\u0142\u0119d\xf3w, prostota dialogu, szybko\u015b\u0107 uczenia si\u0119, widoczny stan systemu, u\u017cywanie j\u0119zyka u\u017cytkownika",isCorrect:!0},{text:"wszystkie powy\u017csze odpowiedzi s\u0105 b\u0142\u0119dne"}]},{questionID:50,questionText:"Kt\xf3ry model barw nie jest ukierunkowany na sprz\u0119t:",questionAnswers:[{text:"RGB"},{text:"CMYK"},{text:"HSV",isCorrect:!0},{text:"RGBA"}]},{questionID:51,questionText:" Wada metody projektowania interfejsu WIMP jest:",questionAnswers:[{text:"wyst\u0119powanie tylko w wersji tekstowej"},{text:"zawodzenie w przypadku u\u017cytkownik\xf3w z wada wzroku",isCorrect:!0},{text:"zawodzenie w przypadku u\u017cytkownik\xf3w z wada s\u0142uchu"},{text:"nie otwarta licencja nale\u017c\u0105ca do ameryka\u0144skiej firmy produkuj\u0105cej okna"}]},{questionID:52,questionText:"Opisowymi metodami oceny interfejsu nie jest:",questionAnswers:[{text:"UAN"},{text:"drzewo menu"},{text:"direct manipulation sketch"},{text:"GOMS",isCorrect:!0}]},{questionID:53,questionText:"Do czego nie wykorzystuje si\u0119 histogramu?",questionAnswers:[{text:"poprawa kontrastu (sp\u0142aszczenie histogramu)"},{text:"progowanie obraz\xf3w"},{text:"por\xf3wnywanie obraz\xf3w"},{text:"odszumianie obraz\xf3w",isCorrect:!0}]},{questionID:54,questionText:"Jakie s\u0105 wady metod roznicowych stratnej kompresji d\u017awi\u0119ku?",questionAnswers:[{text:"nawarstwianie si\u0119 b\u0142\u0119d\xf3w",isCorrect:!0},{text:"nie nad\u0105\u017caj\u0105 za zmianami warto\u015bci bitowych"},{text:"wyst\u0119puje efekt echa"},{text:"wszystkie odpowiedzi s\u0105 prawid\u0142owe"}]},{questionID:55,questionText:"Domowy odtwarzacz wideo nie potrzebuje:",questionAnswers:[{text:"elastycznego formatu obrazu"},{text:"skutecznej korekcji d\u017awi\u0119k\xf3w"},{text:"zsynchronizowanego odtwarzania obrazu i d\u017awi\u0119ku"},{text:"kompresji w czasie rzeczywistym",isCorrect:!0}]},{questionID:56,questionText:"Nowo\u015bci\u0105 w MPEG-2 w stosunku do poprzednika jest:",questionAnswers:[{text:"obs\u0142uga trybu z przeplotem",isCorrect:!0},{text:"wykorzystywanie dw\xf3ch, oddzielnych wektorow ruchu dla makroblokow"},{text:"wszystkie powy\u017csze odpowiedzi s\u0105 prawid\u0142owe"},{text:"obs\u0142uga rozdzielczo\u015bci full hd"}]},{questionID:57,questionText:"Do artystycznego przetwarzania obrazu nie zaliczamy",questionAnswers:[{text:"retuszu"},{text:"redukcji efektu czerwonych oczu"},{text:"zmiany parametr\xf3w obrazka"},{text:"wszystkie powy\u017csze odpowiedzi s\u0105 b\u0142\u0119dne",isCorrect:!0}]},{questionID:58,questionText:"Metod\u0105 zabezpieczenia obrazu nie jest",questionAnswers:[{text:"zapisanie sygnatury autora na najbardziej znacz\u0105cych bitach pikseli",isCorrect:!0},{text:"umieszczenie element\xf3w o bardzo du\u017cej rozdzielczo\u015bci optycznej"},{text:"zapisanie sygnatury autora na najmniej znacz\u0105cych bitach wybranych pikseli"},{text:"znak wodny"}]},{questionID:59,questionText:"Rozpoznawanie obraz\xf3w to:",questionAnswers:[{text:"OMR",isCorrect:!0},{text:"MVC"},{text:"OCR"},{text:"ORM"}]},{questionID:60,questionText:"Rozpoznawanie tekstu to:",questionAnswers:[{text:"OMR"},{text:"MVC"},{text:"OCR",isCorrect:!0},{text:"ORM"}]},{questionID:61,questionText:"Jakiej platformy nigdy nie obs\u0142ugiwa\u0142 Unreal Engine 3?",questionAnswers:[{text:"Linux "},{text:"Android"},{text:"Windows (directx 8)",isCorrect:!0},{text:"Stage3D (Flash Player 11)"}]},{questionID:62,questionText:"SCUMM to:",questionAnswers:[{text:"j\u0119zyk skryptowy u\u017cywany do obs\u0142ugi zdarze\u0144 w UDK"},{text:"j\u0119zyk skryptowy wspomagaj\u0105cy programowanie gier typu point&click",isCorrect:!0},{text:"heurystyczna ocena interfejsu gry komputerowej"},{text:"biblioteka wspomagaj\u0105ce programowanie gier komputerowych przeznaczona na systemy unix"}]},{questionID:63,questionText:"Rol\u0105 interfejsu jest:",questionAnswers:[{text:"\u017cadna z odpowiedzi nie jest prawidlowa",isCorrect:!0},{text:"demonstracja najnowszych technologii i talentu graficznego autora"},{text:"zmuszanie u\u017cytkownika do wymiany sprz\u0119tu"},{text:"zmuszanie u\u017cytkownika do aktualizacji oprogramowania"}]},{questionID:64,questionText:"Za co odpowiadaj\u0105 w postrzeganiu preciki oczne?",questionAnswers:[{text:"za postrzeganie jasno\u015bci",isCorrect:!0},{text:"za postrzeganie barwy"},{text:"za stabilizacj\u0119 obrazu (z\u0142udzenia optyczne powodowane s\u0105 przez b\u0142\u0119dne ich dzia\u0142anie)"},{text:"za postrzeganie jasno\u015bci oraz za stabilizacj\u0119 obrazu"}]},{questionID:65,questionText:"Za co odpowiadaj\u0105 w postrzeganiu czopki oczne?",questionAnswers:[{text:"za postrzeganie jasno\u015bci"},{text:"za postrzeganie barwy",isCorrect:!0},{text:"za stabilizacj\u0119 obrazu (z\u0142udzenia optyczne powodowane s\u0105 przez b\u0142\u0119dne ich dzia\u0142anie)"},{text:"za postrzeganie barwy oraz za stabilizacj\u0119 obrazu"}]},{questionID:66,questionText:"Ktore zdania s\u0105 prawdziwe? W postrzeganiu czopki oczne odpowiadaj\u0105 za:",questionAnswers:[{text:"postrzeganie barwy"},{text:"postrzeganie kszta\u0142t\xf3w"},{text:"widzenie dzienne"},{text:"postrzeganie barwy oraz widzenie dzienne",isCorrect:!0}]},{questionID:67,questionText:"Ktore zdania s\u0105 prawdziwe? W postrzeganiu preciki oczne odpowiadaj\u0105 za:",questionAnswers:[{text:"postrzeganie jasno\u015bci"},{text:"postrzeganie kszta\u0142t\xf3w"},{text:"widzenie nocne"},{text:"wszystkie zdania s\u0105 prawdziwe",isCorrect:!0}]},{questionID:68,questionText:"Mowiac o VRML prawda jest, \u017ce",questionAnswers:[{text:"jest standardem zintegrowanym z HTML"},{text:"s\u0142u\u017cy tylko do zapisywania modelow 2D"},{text:"wspiera lightmapy",isCorrect:!0},{text:"obecnie kontynuowany jest pod nazwa WebGL"}]},{questionID:69,questionText:"Czym nie s\u0105 spowodowane z\u0142udzenia optyczne ",questionAnswers:[{text:"ograniczeniami w budowie oczu"},{text:"wertykalnym rozpoznawaniem obraz\xf3w",isCorrect:!0},{text:"wyobra\u017ani\u0105"},{text:"przyzwyczajeniami"}]},{questionID:70,questionText:" OGRE i JMonkey s\u0105 przyk\u0142adami ",questionAnswers:[{text:"interfejsami graficznymi system\xf3w unix"},{text:"programami pozwalaj\u0105cymi oceni\u0107 interfejs"},{text:"przyk\u0142adami j\u0119zyk\xf3w modelowania rzeczywisto\u015bci wirtualnej"},{text:"silnik\xf3w gier",isCorrect:!0}]},{questionID:71,questionText:"VRML to: ",questionAnswers:[{text:"j\u0119zyk postrzegania rzeczywisto\u015bci wirtualnej"},{text:"standard opisuj\u0105cy bry\u0142y tr\xf3jwymiarowe w formacie xml"},{text:"j\u0119zyk modelowania rzeczywisto\u015bci wirtualnej",isCorrect:!0},{text:"standard opisuj\u0105cy bry\u0142y tr\xf3jwymiarowe w formacie yaml"}]},{questionID:72,questionText:"Do metod opisowych interfejsu mo\u017cemy zaliczy\u0107",questionAnswers:[{text:"GOMS"},{text:"TAG"},{text:"RTD"},{text:"UAN",isCorrect:!0}]},{questionID:73,questionText:"W dobrze zaprojektowanym interfejsie:",questionAnswers:[{text:"strona do wydruku nie powinna zawiera\u0107 adresu strony, z kt\xf3rej powsta\u0142a"},{text:"w stronach internetowych powinna by\u0107 oddzielona forma od tre\u015bci",isCorrect:!0},{text:"u\u017cytkowanie niestandardowych czcionek jest dowzwolone"},{text:"na stronach www grafika powinna by\u0107 wyswietlana w oryginalnych rozmiarach"}]},{questionID:74,questionText:"Twierdzenie Shannona m\xf3wi, \u017ce cz\u0119stotliwo\u015b\u0107 pr\xf3bkowania powinna by\u0107 ... kt\xf3r\u0105 chcemy potem odtworzy\u0107.",questionAnswers:[{text:"r\xf3wna cz\u0119stotliwo\u015bci najwy\u017cszej w pr\xf3bkowanym sygnale"},{text:"dwa razy wy\u017csza od najwy\u017cszej cz\u0119stotliwo\u015bci w pr\xf3bkowanym sygnale",isCorrect:!0},{text:"wy\u017csza ni\u017c cz\u0119stotliwo\u015b\u0107 najwy\u017csza w pr\xf3kowanym sygnale"}]},{questionID:75,questionText:"Dynamika sygna\u0142u to:",questionAnswers:[{text:"pr\u0119dko\u015b\u0107 zmian wysoko\u015bci d\u017awi\u0119ku"},{text:"warto\u015b\u0107 entropi poszczeg\xf3lnych cz\u0119stotliwo\u015bci w sygnale"},{text:"odst\u0119p pomi\u0119dzy najni\u017cszym i najwy\u017cszym poziomem przenoszonego d\u017awi\u0119ku",isCorrect:!0}]},{questionID:76,questionText:"Jaki rozmiar ma minuta nagrania stereo o cz\u0119stotliwo\u015bci 44.1kHz (pr\xf3bka = 16bit)",questionAnswers:[{text:"10336kB",isCorrect:!0},{text:"10584kB"},{text:"1754kB"},{text:"17640kB"}]},{questionID:77,questionText:"Wska\u017c fa\u0142szywe zdanie:",questionAnswers:[{text:"format mp3 stosuje kodowanie stratne (niska jako\u015b\u0107) i bezstratne (wysoka jako\u015b\u0107)",isCorrect:!0},{text:"format OGG pozwala zapisac wiecej ni\u017c 2 kana\u0142y"},{text:"format OGG ma lepsza jako\u015b\u0107 ni\u017c mp3 przy porownywalnej wielko\u015bci"},{text:"format MP3 pozwala na zapisanie dodatkowych informacji (ID Tags)"}]},{questionID:78,questionText:"Kt\xf3rego z za\u0142o\u017ce\u0144 nie spe\u0142nia VRML:",questionAnswers:[{text:"\u0142\u0105czenie z innymi \u015bwiatami 3D"},{text:"rozbudowa w oparciu o XML",isCorrect:!0},{text:"niezale\u017cno\u015b\u0107 od systemu operacyjnego"},{text:"generowanie w czasie rzeczywistym"}]}]};function V(){var e=Object(d.a)(["\n    width: 1000px;\n    margin: 0 auto;\n    font-size: 16px;\n\n    @media (max-width: 600px) {\n        width: 100%;\n        font-size: 12px;\n    }\n"]);return V=function(){return e},e}var L=p.b.main(V()),J=function(e){function t(){var e,n;Object(u.a)(this,t);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return(n=Object(c.a)(this,(e=Object(z.a)(t)).call.apply(e,[this].concat(o)))).state={questionIndexes:n.shuffleArray(Object(r.a)(Array(B.multimediaAndInterfaces.length).keys())),currentQuestionIndex:0,learntQuestionsCount:0,answersCount:0,goodAnswersCount:0,answered:!1},n.handleAnswer=function(e){if(!n.state.answered){var t=0;e&&(t=1),n.setState({answersCount:n.state.answersCount+1,goodAnswersCount:n.state.goodAnswersCount+t,answered:!0})}},n.handleNextQuestion=function(){if(n.state.answered){var e,t=!1;n.state.currentQuestionIndex<B.multimediaAndInterfaces.length-1?e=n.state.currentQuestionIndex+1:(e=0,t=!0),n.setState({questionIndexes:t?n.shuffleArray(n.state.questionIndexes):n.state.questionIndexes,currentQuestionIndex:e,answered:!1})}},n}return Object(y.a)(t,e),Object(w.a)(t,[{key:"shuffleArray",value:function(e){for(var t,n,i=e.length;0!==i;)n=Math.floor(Math.random()*i),t=e[i-=1],e[i]=e[n],e[n]=t;return e}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(k,null),o.a.createElement(j,null),o.a.createElement(b,null),o.a.createElement(L,null,o.a.createElement(C,{numberOfQuestions:B.multimediaAndInterfaces.length,learntQuestionsCount:this.state.learntQuestionsCount,answersCount:this.state.answersCount,goodAnswersCount:this.state.goodAnswersCount}),o.a.createElement(A,null),o.a.createElement(G,{onClick:this.handleNextQuestion,question:B.multimediaAndInterfaces[this.state.questionIndexes[this.state.currentQuestionIndex]],answerHandler:this.handleAnswer,answered:this.state.answered})),o.a.createElement(H,null),o.a.createElement(Q,null))}}]),t}(i.Component);s.a.render(o.a.createElement(J,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.24dc519a.chunk.js.map