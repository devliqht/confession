
var startedQuiz = false;
$(document).ready(function(){
    $("#answer-field").hide(); $("#quiz-img").hide(); $("#correct").hide(); $("#incorrect").hide();


    console.log(startedQuiz);

    $("#next-btn").click(function(){
        if (startedQuiz == false) {
            startQuiz();
            startedQuiz = true;
            console.log(startedQuiz);
        } else {
            startQuiz();
        }
    }); 

 });

var hasWon1 = false;
var hasWon2 = false;
var round = 1;

 function startQuiz() {
    console.log("User has started quiz");
    $("#ready").hide(); $("#answer-field").show(); $("#quiz-img").show();


    //Round 1
            if (round == 1) {
                $("#quiz-img").attr("src","assets/jake.jpg");
                $("#next-btn").click(function(){
                    if (hasWon1 == false) {
                        var answer = $("#input-field").val();
                        if (answer == "Jake" || answer == "jake") {
                            console.log("Correct 1");
                            round = 2;
                            console.log("Next round: ", round);
                            hasWon1 = true;
                            $("#incorrect").hide();
                            $("#correct").show();
                        } else {
                            $("#incorrect").show();
                        }
                    } else if (hasWon1 == true) {
                        console.log("Has won Round 1: ", hasWon1);
                        round = 2;
                    }
                });
            } else if (round == 2) {
                $("#correct").hide(); $("#incorrect").hide();
                $("#quiz-img").attr("src","assets/bangchan.jpg");
                $("#next-btn").click(function(){
                    if (hasWon2 == false) {
                        var answer = $("#input-field").val();
                        if (answer == "Bangchan" || answer == "bangchan") {
                            console.log("Correct 2");
                            round = 3;
                            hasWon2 = true;
                            console.log("Next round: ", round);
                            $("#incorrect").hide();
                            $("#correct").show();
                        } else  {
                            $("#incorrect").show();
                        }
                    } else if (hasWon2 == true) {
                        console.log("Has won Round 2: ", hasWon2);
                        round = 3;
                    }
                });
            }

            if (round == 2) {
               
            }



 }