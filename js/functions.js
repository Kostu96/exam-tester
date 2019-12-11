function loadFile(filePath) {
    var result = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filePath, false);
    xmlhttp.send();

    if (xmlhttp.status == 200) {
        result = xmlhttp.responseText;
    }

    return result;
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

function init() {
    var file = loadFile("resources/mii_questions.txt");
    file = file.split('\n');
    
    var questionNumber;
    var questionText;
    var questionAnswers = [];
    for (i = 0; i < file.length; ++i) {
        if (file[i][0] === '(') {

            if (questionAnswers.length > 0)
                g_questions.push(new Question(questionNumber, questionText, questionAnswers));

            questionNumber = parseInt(file[i].substr(1, file[i].indexOf(')') - 1));
            questionText = file[i].substr(file[i].indexOf(')') + 1);
        }
        else {
            questionAnswers.push(file[i]);
        }
    }

    alert(g_questions[0].text);
    alert(g_questions[0].answers);
}
