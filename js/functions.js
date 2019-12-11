function loadFile(filePath) {
    var result = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filePath, false);
    xmlhttp.send();

    if (xmlhttp.status == 200) {
        result = xmlhttp.responseText;
        alert(result);
    }
    else alert("error");

    return result;
}

function init() {
    var file = loadFile("resources/mii_questions.txt");
    alert(file);

    var questionP = document.getElementById("question");
}
