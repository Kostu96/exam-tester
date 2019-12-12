function loadFile(filePath) {
    var result = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filePath, false);
    xmlhttp.send();

    if (xmlhttp.status == 200) {
        result = xmlhttp.responseText;
    }
    else alert("error loading " + filePath);

    return result;
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
  
    return array;
}

class Answer {
    constructor(text) {
        this.text = text;
        this.isCorrect = false;
    }

    makeCorrect() {
        this.isCorrect = true;
    }
}

class Question {
    constructor(number, text, answers) {
        this.number = number;
        this.text = text;
        this.answers = answers;
    }
}

var g_questions = [];
var questionIndex = 0;

function loadQuestion(index) {
    document.getElementById("question").innerText = g_questions[index].number + ". " + g_questions[index].text;

    var answer_buttons = document.getElementById("answer_buttons");
    while (answer_buttons.firstChild)
        answer_buttons.removeChild(answer_buttons.firstChild);

    var button;
    for (i = 0; i < g_questions[index].answers.length; ++i) {

        button = document.createElement("div");
        button.innerText = String.fromCharCode('A'.charCodeAt(0) + i) + ") " + g_questions[index].answers[i].text;
        button.className = "answer_button";

        if (g_questions[index].answers[i].isCorrect)
            button.onclick = goodAnswer;
        else
            button.onclick = badAnswer;

        answer_buttons.appendChild(button);
    }
}

function goodAnswer() {
    alert("Dobra odpowiedź!");
    loadQuestion(++questionIndex);
}

function badAnswer() {
    alert("Niestety, Twoja odpowiedź nie jest prawidłowa...");
    loadQuestion(++questionIndex);
}

function init() {
    var file = loadFile("resources/mii_questions.txt");
    file = file.split('\n');
    
    var numberOfQuestions, numberOfAnswers, questionText, questionAnswers = [];
    numberOfQuestions = parseInt(file[0]);
    file.shift();
    for (i = 0; i < numberOfQuestions; ++i) {
        questionText = file[0].substr(file[i].indexOf(')') + 1);
        file.shift();
        numberOfAnswers = parseInt(file[0]);
        file.shift();

        for (j = 0; j < numberOfAnswers; ++j) {
            questionAnswers.push(new Answer(file[0]));
            file.shift();
        }

        questionAnswers[parseInt(file[0]) - 1].makeCorrect();
        file.shift();

        g_questions.push(new Question(i + 1, questionText, questionAnswers));
        questionAnswers = [];
    }

    g_questions = shuffle(g_questions);
    loadQuestion(0);   
}
