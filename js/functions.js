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
    
    for (i = 0; i < file.length; ++i) {
        if (file[i][0] === '(')
            alert(file[i]);
    }

    var questionP = document.getElementById("question");
}
