var score;
var playing = false;
var timeremaining;
var correct;
document.getElementById("start").onclick =
    function () {
        if (playing == true) {
            location.reload();
        } else {
            playing = true;
            score = 0;
            document.getElementById("scorevalue").innerHTML = score;
            document.getElementById("timer").style.display = "block";
            timeremaining = 60;
            document.getElementById("timervalue").innerHTML = timeremaining;
            document.getElementById("gameover").style.display = "none";
            document.getElementById("start").innerHTML = "Reset Game";
            startcountdown();
            questions();
        }
    }
for (i = 1; i < 5; i++) {
    document.getElementById("box" + i).onclick =
        function () {
            if (playing == true) {
                if (this.innerHTML == correctanswer)
                // if (document.getElementById("box" + i).innerHTML == correctanswer)اي الغلط ف دي!!!عشان انا هتجننننننن  
                {
                    score += 1;
                    document.getElementById("scorevalue").innerHTML = score;
                    document.getElementById("correct").style.display = "block";
                    document.getElementById("tryagain").style.display = "none";
                    setTimeout(function () {
                        document.getElementById("correct").style.display = "none";
                    }, 1000);
                    questions();
                }
                else {

                    document.getElementById("tryagain").style.display = "block";
                    document.getElementById("correct").style.display = "none";
                    setTimeout(function () {
                        document.getElementById("tryagain").style.display = "none";
                    }, 1000);
                    questions();
                }
            }
        }
}

function startcountdown() {
    action = setInterval(function () {
        timeremaining -= 1;
        document.getElementById("timervalue").innerHTML = timeremaining;
        if (timeremaining == 0) {
            stopcountdown();
            document.getElementById("gameover").style.display = "block";
            document.getElementById("gameover").innerHTML = "<p> GAME OVER</p><p> YOUR SCORE IS: " + score + "</p>"
            document.getElementById("timer").style.display = "none";
            document.getElementById("correct").style.display = "none";
            document.getElementById("tryagain").style.display = "none";
            playing = false
            document.getElementById("start").innerHTML = "Start Game";

        }
    }, 1000);
}
function stopcountdown() {
    clearInterval(action);
}


function questions() {
    var x = 1 + Math.round(9 * Math.random());
    var y = 1 + Math.round(9 * Math.random());
    correctanswer = x * y;
    document.getElementById("first").innerHTML =
        x + "x" + y;

    var correctbox = 1 + Math.round(3 * Math.random());
    document.getElementById("box" + correctbox).innerHTML = correctanswer;
    var answers = [correctanswer]

    for (i = 1; i < 5; i++) {
        if (i != correctbox) {
            do {
                var wrong = (1 + Math.round(9 * Math.random())) * (1 + Math.round(9 * Math.random()));

            } while (answers.indexOf(wrong) > -1);
            document.getElementById("box" + i).innerHTML = wrong;
            answers.push(wrong);

        }

    }
}