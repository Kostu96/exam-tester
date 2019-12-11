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

function init() {
    var file = loadFile("resources/mii_questions.txt");
    file = file.split("\n")
    
    var questionNumber;
    var questionText;
    for (i = 0; i < file.length; ++i) {
        if (file[i][0] === '(')
            questionNumber = parseInt(file[i].substr(1, file[i].indexOf(')') - 1));
            questionText = file[i].substr(3);
    }
    alert(questionNumber + "   " + questionText);

    var questionP = document.getElementById("question");
}
