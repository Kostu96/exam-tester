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

function init() {
    var file = loadFile("resources/mii_questions.txt");
    file = file.split("\n")
    alert(file);

    var questionP = document.getElementById("question");
}
