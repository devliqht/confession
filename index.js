
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

    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
          event.preventDefault();
          document.getElementById("#next-btn").click();
        }});
    
 });

var hasWon1 = false;
var hasWon2 = false;
var hasWon3 = false;
var hasWon4 = false;
var hasWon5 = false;
var hasWon6 = false;
var hasWon7 = false;
var hasWon8 = false;
var hasWon9 = false;
var hasWon10 = false;
var hasWon11 = false;
var round = 1;

 function startQuiz() {
    console.log("User has started quiz");
    $("#ready").hide(); $("#answer-field").show(); $("#quiz-img").show();
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
            } else if (round == 3) {
                $("#correct").hide(); $("#incorrect").hide();
                $("#quiz-img").attr("src","assets/keeho.jpg");
                $("#next-btn").click(function(){
                    if (hasWon3 == false) {
                        var answer = $("#input-field").val();
                        if (answer == "keeho" || answer == "Keeho") {
                            console.log("Correct 3");
                            round = 4;
                            hasWon3 = true;
                            console.log("Next round: ", round);
                            $("#incorrect").hide();
                            $("#correct").show();
                        } else  {
                            $("#incorrect").show();
                        }
                    } else if (hasWon3 == true) {
                        console.log("Has won Round 3: ", hasWon3);
                        round = 4;
                    }
                }); 
            } else if (round == 4) {
                $("#correct").hide(); $("#incorrect").hide();
                $("#quiz-img").attr("src","assets/soobin.jpg");
                $("#next-btn").click(function(){
                    if (hasWon4 == false) {
                        var answer = $("#input-field").val();
                        if (answer == "Soobin" || answer == "soobin") {
                            console.log("Correct 4");
                            round = 5;
                            hasWon4 = true;
                            console.log("Next round: ", round);
                            $("#incorrect").hide();
                            $("#correct").show();
                        } else  {
                            $("#incorrect").show();
                        }
                    } else if (hasWon4 == true) {
                        console.log("Has won Round 4: ", hasWon4);
                        round = 5;
                    }
                }); 
            } else if (round == 5) {
                $("#correct").hide(); $("#incorrect").hide();
                $("#quiz-img").attr("src","assets/sakura.jpg");
                $("#next-btn").click(function(){
                    if (hasWon5 == false) {
                        var answer = $("#input-field").val();
                        if (answer == "sakura" || answer == "Sakura") {
                            console.log("Correct 5");
                            round = 6;
                            hasWon5 = true;
                            console.log("Next round: ", round);
                            $("#incorrect").hide();
                            $("#correct").show();
                        } else  {
                            $("#incorrect").show();
                        }
                    } else if (hasWon5 == true) {
                        console.log("Has won Round 5: ", hasWon5);
                        round = 6;
                    }
                }); 
            } else if (round == 6) {
                $("#correct").hide(); $("#incorrect").hide();
                $("#quiz-img").attr("src","assets/ryunjin.jpg");
                $("#next-btn").click(function(){
                    if (hasWon6 == false) {
                        var answer = $("#input-field").val();
                        if (answer == "Ryunjin" || answer == "ryunjin") {
                            console.log("Correct 6");
                            round = 7;
                            hasWon6 = true;
                            console.log("Next round: ", round);
                            $("#incorrect").hide();
                            $("#correct").show();
                        } else  {
                            $("#incorrect").show();
                        }
                    } else if (hasWon6 == true) {
                        console.log("Has won Round 6: ", hasWon6);
                        round = 7;
                    }
                }); 
            } else if (round == 7) {
                $("#correct").hide(); $("#incorrect").hide();
                $("#quiz-img").attr("src","assets/mingyu.jpg");
                $("#next-btn").click(function(){
                    if (hasWon7 == false) {
                        var answer = $("#input-field").val();
                        if (answer == "Mingyu" || answer == "mingyu") {
                            console.log("Correct 7");
                            round = 8;
                            hasWon7 = true;
                            console.log("Next round: ", round);
                            $("#incorrect").hide();
                            $("#correct").show();
                        } else  {
                            $("#incorrect").show();
                        }
                    } else if (hasWon7 == true) {
                        console.log("Has won Round 7: ", hasWon7);
                        round = 8;
                    }
                }); 
            } else if (round == 8) {
                $("#correct").hide(); $("#incorrect").hide();
                $("#quiz-img").attr("src","assets/taehyung.jpg");
                $("#next-btn").click(function(){
                    if (hasWon8 == false) {
                        var answer = $("#input-field").val();
                        if (answer == "Taehyung" || answer == "taehyung") {
                            console.log("Correct 8");
                            round = 9;
                            hasWon8 = true;
                            console.log("Next round: ", round);
                            $("#incorrect").hide();
                            $("#correct").show();
                        } else  {
                            $("#incorrect").show();
                        }
                    } else if (hasWon8 == true) {
                        console.log("Has won Round 8: ", hasWon8);
                        round = 9;
                    }
                }); 
            } else if (round == 9) {
                $("#correct").hide(); $("#incorrect").hide();
                $("#quiz-img").attr("src","assets/kai.jpg");
                $("#next-btn").click(function(){
                    if (hasWon9 == false) {
                        var answer = $("#input-field").val();
                        if (answer == "kai" || answer == "Kai") {
                            console.log("Correct 9");
                            round = 10;
                            hasWon9 = true;
                            console.log("Next round: ", round);
                            $("#incorrect").hide();
                            $("#correct").show();
                        } else  {
                            $("#incorrect").show();
                        }
                    } else if (hasWon9 == true) {
                        console.log("Has won Round 9: ", hasWon8);
                        round = 10;
                    }
                }); 
            } else if (round == 10) {
                $("#correct").hide(); $("#incorrect").hide();
                $("#quiz-img").attr("src","assets/nyla.jfif");
                $("#quiz-title").text("Nyla, I like you.");
                $("#quiz-desc").text("Pwede ba kitang liligawan?");
                $("#input-field").text("UwU");
                $("#next-btn").click(function(){
                    if (hasWon10 == false) {
                        var answer = $("#input-field").val();
                        if (answer == "yes" || answer == "Yes") {
                            console.log("Correct 10");
                            round = 11;
                            hasWon8 = true;
                            console.log("Next round: ", round);
                        } else  {
                        }
                    } else if (hasWon10 == true) {
                        console.log("Has won Round 10: ", hasWon10);
                        round = 11;
                    }
                }); 
            } else if (round == 11) {
                $("#correct").hide(); $("#incorrect").hide();
                $("#quiz-img").attr("src","assets/letsgo.jpg");
                $("#quiz-title").text("LETS GOOOOOOO");
                $("#next-btn").click(function(){
                    if (hasWon11 == false) {
                        var answer = $("#input-field").val();
                        if (answer == "yes" || answer == "Yes") {
                            console.log("Correct 10");
                            round = 12;
                            hasWon11 = true;
                            console.log("Next round: ", round);
                        } else  {
                        }
                    } else if (hasWon11 == true) {
                        console.log("Has won Round 11: ", hasWon11);
                        round = 12;
                    }
                }); 
            } 







 }