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
    file = file.split('(');
    
    var questionNumber;
    var questionText;
    var questionAnswers = [];
    for (i = 0; i < file.length; ++i) {
        questionNumber = parseInt(file[i].substr(0, file[i].indexOf(')') - 1));
        alert(file[i]);
        file[i] = file[i].substr(file[i].indexOf('\n') + 1);
        alert(file[i]);
    }

}
