//Variables
//User
var correct = 0;
var incorrect = 0;
var unanswered = 0;
//Quiz

var userAnswers = ["", "", "", "", ""];
var quizAnswers = ["C", "D", "A", "B", "C"];

//Timer

var timeRemaining = 30;
var intervalId;
var isCounting = false;
var hasSubmitted = false; 

function count() {
    //decrease time 
    timeRemaining--;
    console.log(timeRemaining);
    $("#time-remaining").html(timeRemaining);
    
    if (timeRemaining === 0 || hasSubmitted) {
        stopTimer();
        alert("Time is over!")
        submitted();
    }

}

function startTimer() {
    intervalId = setInterval(count, 1000);
    isCounting = true;
}

function stopTimer() {
    clearInterval(intervalId);
    isCounting = false;
}

function compAnswers() {
    

    for (var i = 0; i < userAnswers.length; i++) {
        if (userAnswers[i] === quizAnswers[i]) {
            correct++
        } else {
            incorrect++

        }
    }
}

    function displayResults() {
        $("#results").html(
                "You got" + correct + "/5 correct<br>" +
                "You got" + incorrect + "/5 incorrect<br>"
               
            );
    }

    function submitted() {
        


        stopTimer();

        compAnswers();

        displayResults();
    }

    $(window).on("load", function() {
        $("#submit").on("click", function(e) {
            e.preventDefault();
           
            console.log(userAnswers);
            console.log(quizAnswers);

            submitted();
         
        });
       
        
        $(".quizOption").on("click", function() {
            
            userAnswers[$(this).attr("name")] = $(this).attr("value");
            console.log(userAnswers);
           
        }); 
        


        $("#startBtn").on("click", function() {
            console.log("start button clicked");
            startTimer();
        });
        //right here
    });
