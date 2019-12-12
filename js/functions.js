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
        this.correntAttempts = 0;
    }
}

var g_questions = [];
var g_leartQuestions = [];
var g_questionIndex = 0;
var g_answers = 0;
var g_goodAnswers = 0;

function loadQuestion(index) {
    document.getElementById("question").innerText = g_questions[index].number + ". " + g_questions[index].text;

    var answer_buttons = document.getElementById("answer_buttons");
    while (answer_buttons.firstChild)
        answer_buttons.removeChild(answer_buttons.firstChild);

    var button;
    g_questions[index].answers = shuffle(g_questions[index].answers);
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

function updateStatistics() {
    document.getElementById("answers_count").innerText = g_answers;
    document.getElementById("good_answers_count").innerText = g_goodAnswers;
    document.getElementById("percent").innerText = (Math.round((g_goodAnswers / g_answers) * 100)) + "%";
    document.getElementById("learnt_count").innerHTML = g_leartQuestions.length;
}

function nextQuestion() {
    ++g_questionIndex;
    if (g_questionIndex >= g_questions.length) {
        g_questionIndex = 0;
        g_questions = shuffle(g_questions);
    }
    loadQuestion(g_questionIndex);
}

function goodAnswer() {
    ++g_goodAnswers;
    ++g_answers;
    if (++g_questions[g_questionIndex].correntAttempts > 4) {
        g_leartQuestions.push(g_questions[g_questionIndex]);
        g_questions.splice(g_questionIndex, 1);
    }
    updateStatistics();
    alert("Dobra odpowiedź!");
    nextQuestion();
}

function badAnswer() {
    ++g_answers;
    g_questions[g_questionIndex].correntAttempts = 0;
    updateStatistics();

    var wchichWasGood = 0;
    for (i = 0; i < g_questions[g_questionIndex].answers.length; ++i)
        if (g_questions[g_questionIndex].answers[i].isCorrect)
            wchichWasGood = i;
    
    alert("Niestety, Twoja odpowiedź nie jest prawidłowa...\nPrawidłowa odpowiedź to " + String.fromCharCode('A'.charCodeAt(0) + wchichWasGood));
    nextQuestion();
}

function init() {
    var file = loadFile("resources/mii_questions.txt");
    file = file.split('\n');
    
    var numberOfQuestions, numberOfAnswers, questionText, questionAnswers = [];
    numberOfQuestions = parseInt(file[0]);
    document.getElementById("question_count").innerText = numberOfQuestions;
    file.shift();
    for (i = 0; i < numberOfQuestions; ++i) {
        questionText = file[0].substr(file[0].indexOf(')') + 1);
        file.shift();
        numberOfAnswers = parseInt(file[0]);
        file.shift();

        for (j = 0; j < numberOfAnswers; ++j) {
            questionAnswers.push(new Answer(file[0]));
            file.shift();
        }

        var num = parseInt(file[0]);
        questionAnswers[num - 1].makeCorrect();
        file.shift();

        g_questions.push(new Question(i + 1, questionText, questionAnswers));
        questionAnswers = [];
    }

    g_questions = shuffle(g_questions);
    loadQuestion(0);   
}
