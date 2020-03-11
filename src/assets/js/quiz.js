function submitQuiz() {
    console.log('submitted');

// get each answer score
    function answerScore (qName) {
        var radiosNo = document.getElementsByName(qName);

        for (var i = 0, length = radiosNo.length; i < length; i++) {
               if (radiosNo[i].checked) {
        // do something with radiosNo
                var answerValue = Number(radiosNo[i].value);
            }
        }
        // change NaNs to zero
        if (isNaN(answerValue)) {
            answerValue = 0;
        }
        return answerValue;
    }

// calc score with answerScore function
    var calcScore = (answerScore('q1') + answerScore('q2') + answerScore('q3') + answerScore('q4') + answerScore('q5'));
    console.log("CalcScore: " + calcScore); 



// calculate "possible score" integer
    var questionCountArray = document.getElementsByClassName('question');

    var questionCounter = 0;
    for (var i = 0, length = questionCountArray.length; i < length; i++) {
        questionCounter++;
    }

// show score as "score/possible score"
    var showScore = "Your Score: " + calcScore +"/" + questionCounter;
// if  "perfect score!"
    if (calcScore === questionCounter) {
        showScore = showScore + "&nbsp; <strong><br>Perfect Score!</strong>"
    };
    document.getElementById('userScore').innerHTML = showScore;
}

$(document).ready(function() {

$('#submitButton').click(function() {
    $(this).addClass('hide');
});

});