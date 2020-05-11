function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var curent=currentQuestionNumber.toString();
    var anterior=(currentQuestionNumber-1).toString();
    document.getElementById(curent).className = "active";
    document.getElementById(curent+"p").innerHTML = "activ"
    //daca e bun verde,daca nu ,rosu.
    
    if(x==true){
    document.getElementById(anterior).className = "completed";
    document.getElementById(anterior+"p").innerHTML = "Corect"
    }
    else{
        document.getElementById(anterior).className = "gresit";
    document.getElementById(anterior+"p").innerHTML = "gresit"
    }
    
  
};

function showScores() {
    var gameOverHTML = "<h1>Rezultat</h1>";
    gameOverHTML += "<h2 id='score'> Scorul tau a fost: " + quiz.score + " puncte"+"</h2>";
    gameOverHTML +="<p align='center' style='width:100%'><img src='../../imagini/logo.png' class='castorcnt'></p>"
    gameOverHTML += "<h2 id='score'> Bravo micuțule castor!" + "</h2>";
    gameOverHTML +="<div class='box'><a href='../../index.html'><div class='acasa'><p class='acasatext' align='center'>Du-te acasa</p></div></a></div>"
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("In ce an a aparut conflictul dintre Siria si Irak?", ["2011", "2012","1313", "2002"], "2011"),
    new Question("Ce alianta se strange dupa asasinarea la 19 Decembrie a ambasadorului rus la Ankara", ["Alianta cu China", 
        "Alianta cu Germania", "Alianta cu Romania", "Alianta cu Moscova"], "Alianta cu Moscova"),
    new Question("Cine are interesul de a mentine implicata Arabia Saudita in conflictul yemenit ?", ["Rusia", "Afganistan","America", "Iran"], "Iran"),
    new Question("Cati refugiati a generat criza umanitara din Sahel si Lacul Ciad?", ["1,32 milioane", "4,2 milioane", "PHP", "300.000"], "4,2 milioane"),
    new Question("Ce forte persista in Afganistan?", ["talibane", "nigere", "americane", "mexicane"], "talibane"),
    new Question("Ce presedinte a fost inlaturat de la putere in urma revoluţiei din februarie 2014 şi mişcarea Euromaidan?",
     ["Vladimir Putin", "Viktor Ianukovych", "Donald Trump", "Emmanuel Macron"], "Viktor Ianukovych"),
    new Question("Cate victime au facut confruntarile armate din Mexic si Triunghiul Nordic?", 
        ["34.000", "12.000", "100.000", "3400"], "34.000"),
    new Question("In ce an a fost anulata autonomia provinciei Kosovo?", ["1989", "1990", "2000", "1975"], "1989"),
    new Question("In ce an şi-a declarat cecenia independenta fata de Rusia?", ["1999", "1989", "1991", "1990"], "1991"),
    new Question("Cine conduce noul guvern civil din Myanmar?", ["Maung Lin Aung", "Aung San Suu Ky", "Xion Ping", "Ko Lin Aung"], "Aung San Suu Ky"),
    new Question("Cati ani a durat razboiul din Sudanul de Sud", ["1", "3", "6", "2"], "3"),
    new Question("In ce an a fost ocupat tibetul de catre Armata Populară de Eliberare?", ["1945", "1960", "1950", "1968"], "1950")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();





