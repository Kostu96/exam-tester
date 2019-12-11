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
    constructor(text, isCorrect) {
        this.text = text;
        this.isCorrect = isCorrect;
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
    
    var questionNumber, questionText, questionAnswers = [];
    for (i = 0; i < file.length; ++i) {
        if (file[i][0] === '(') {

            if (questionAnswers.length > 0) {
                g_questions.push(new Question(questionNumber, questionText, questionAnswers));
                questionAnswers = [];
            }

            questionNumber = parseInt(file[i].substr(1, file[i].indexOf(')') - 1));
            questionText = file[i].substr(file[i].indexOf(')') + 1);
        }
        else if (file[i][0] === 'X')
            questionAnswers.push(new Answer(file[i].substr(2), true));
        else
            questionAnswers.push(new Answer(file[i], false));
    }

    g_questions = shuffle(g_questions);
    loadQuestion(0);   
}
