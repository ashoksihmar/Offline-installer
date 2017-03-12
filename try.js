function countdown( elementName, minutes, seconds )
{
    var element, endTime, hours, mins, msLeft, time;

    function twoDigits( n )
    {
        return (n <= 9 ? "0" + n : n);
    }

    function updateTimer()
    {
        msLeft = endTime - (+new Date);
        if ( msLeft < 1000 ) {
            element.innerHTML = "Quiz Submitted Check Your Marks thanks. iascgl.com!";
        } else {
            time = new Date( msLeft );
            hours = time.getUTCHours();
            mins = time.getUTCMinutes();
            element.innerHTML = (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() );
            setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );
        }
    }

    element = document.getElementById( elementName );
    endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;
    updateTimer();
}

countdown( "countdown", 18, 0 );

    
</script>
<script>
// scripts here:
window.onload = function submitQuiz(){
//Code for Timer	
		var seconds_left = 1000;
var interval = setInterval(function() {
    document.getElementById('timer_div').innerHTML = "00:"+ (--seconds_left);

    if (seconds_left <= 0)
    {
        clearInterval(interval);
        document.getElementById('timer_div').innerHTML = 'Yours TimeOut...';
    }
}, 10);


		setTimeout(function(){document.getElementById('submitButton').click(); }, 2*60000);
 
};



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
  var calcScore = (answerScore('q1') + answerScore('q2') + answerScore('q3') + answerScore('q4')  + answerScore('q5')  + answerScore('q6')  + answerScore('q7')  + answerScore('q8') + answerScore('q9') + answerScore('q10') + answerScore('q11') + answerScore('q12') + answerScore('q13') + answerScore('q14')  + answerScore('q15')  + answerScore('q16')  + answerScore('q17')  + answerScore('q18') + answerScore('q19') + answerScore('q20') + answerScore('q21') + answerScore('q22') + answerScore('q23') + answerScore('q24')  + answerScore('q25')  + answerScore('q26')  + answerScore('q27')  + answerScore('q28') + answerScore('q29') + answerScore('q30'));
  console.log("CalcScore: " + calcScore); // it works!

 // function to return correct answer string
  function correctAnswer (correctStringNo, qNumber) {
   console.log("qNumber: " + qNumber);  // logs 1,2,3,4 after called below
   return ("The correct answer for question #" + qNumber + ": &nbsp;<strong>" +
    (document.getElementById(correctStringNo).innerHTML) + "</strong>");
   }

 // print correct answers only if wrong (calls correctAnswer function)
  if (answerScore('q1') === -.5) {
   document.getElementById('correctAnswer1').innerHTML = correctAnswer('correctString1', 1);
  }
  if (answerScore('q2') === -.5) {
   document.getElementById('correctAnswer2').innerHTML = correctAnswer('correctString2', 2);
  }
  if (answerScore('q3') === -.5) {
   document.getElementById('correctAnswer3').innerHTML = correctAnswer('correctString3', 3);
  }
  if (answerScore('q4') === -.5) {
   document.getElementById('correctAnswer4').innerHTML = correctAnswer('correctString4', 4);
  }
        if (answerScore('q5') === -.5) {
   document.getElementById('correctAnswer5').innerHTML = correctAnswer('correctString5', 5);
  }
        if (answerScore('q6') === -.5) {
   document.getElementById('correctAnswer6').innerHTML = correctAnswer('correctString6', 6);
  }
        if (answerScore('q7') === -.5) {
   document.getElementById('correctAnswer7').innerHTML = correctAnswer('correctString7', 7);
  }
        if (answerScore('q8') === -.5) {
   document.getElementById('correctAnswer8').innerHTML = correctAnswer('correctString8', 8);
  
  }
     if (answerScore('q9') === -.5) {
   document.getElementById('correctAnswer9').innerHTML = correctAnswer('correctString9', 9);
  
  }
     if (answerScore('q10') === -.5) {
   document.getElementById('correctAnswer10').innerHTML = correctAnswer('correctString10', 10);
  
  }
if (answerScore('q11') === -.5) {
   document.getElementById('correctAnswer11').innerHTML = correctAnswer('correctString11', 11);
  }
  if (answerScore('q12') === -.5) {
   document.getElementById('correctAnswer12').innerHTML = correctAnswer('correctString12', 12);
  }
  if (answerScore('q13') === -.5) {
   document.getElementById('correctAnswer13').innerHTML = correctAnswer('correctString13', 13);
  }
  if (answerScore('q14') === -.5) {
   document.getElementById('correctAnswer14').innerHTML = correctAnswer('correctString14', 14);
  }
        if (answerScore('q15') === -.5) {
   document.getElementById('correctAnswer15').innerHTML = correctAnswer('correctString15', 15);
  }
        if (answerScore('q16') === -.5) {
   document.getElementById('correctAnswer16').innerHTML = correctAnswer('correctString16', 16);
  }
        if (answerScore('q17') === -.5) {
   document.getElementById('correctAnswer17').innerHTML = correctAnswer('correctString17', 17);
  }
        if (answerScore('q18') === -.5) {
   document.getElementById('correctAnswer18').innerHTML = correctAnswer('correctString18', 18);
  
  }
     if (answerScore('q19') === -.5) {
   document.getElementById('correctAnswer19').innerHTML = correctAnswer('correctString19', 19);
  
  }
     if (answerScore('q20') === -.5) {
   document.getElementById('correctAnswer20').innerHTML = correctAnswer('correctString20', 20);
  
  }
     if (answerScore('q21') === -.5) {
   document.getElementById('correctAnswer21').innerHTML = correctAnswer('correctString21', 21);
  }
  if (answerScore('q22') === -.5) {
   document.getElementById('correctAnswer22').innerHTML = correctAnswer('correctString22', 22);
  }
  if (answerScore('q23') === -.5) {
   document.getElementById('correctAnswer23').innerHTML = correctAnswer('correctString23', 23);
  }
  if (answerScore('q24') === -.5) {
   document.getElementById('correctAnswer24').innerHTML = correctAnswer('correctString24', 24);
  }
        if (answerScore('q25') === -.5) {
   document.getElementById('correctAnswer25').innerHTML = correctAnswer('correctString25', 25);
  }
        if (answerScore('q26') === -.5) {
   document.getElementById('correctAnswer26').innerHTML = correctAnswer('correctString26', 26);
  }
        if (answerScore('q27') === -.5) {
   document.getElementById('correctAnswer27').innerHTML = correctAnswer('correctString27', 27);
  }
        if (answerScore('q28') === -.5) {
   document.getElementById('correctAnswer28').innerHTML = correctAnswer('correctString28', 28);
  
  }
     if (answerScore('q29') === -.5) {
   document.getElementById('correctAnswer29').innerHTML = correctAnswer('correctString29', 29);
  
  }
     if (answerScore('q30') === -.5) {
   document.getElementById('correctAnswer30').innerHTML = correctAnswer('correctString30', 30);
  
  }
 // calculate "possible score" integer
  var questionCountArray = document.getElementsByClassName('question');

  var questionCounter = 0;
  for (var i = 0, length = questionCountArray.length; i < length; i++) {
   questionCounter++;
  }

 // show score as "score/possible score"
  var showScore = "Your Score: " + calcScore +"/" + 2*questionCounter;
 // if 4/4, "perfect score!"
  if (calcScore === 2*questionCounter) {
   showScore = showScore + "&nbsp; <strong>Perfect Score!</strong>"
  };
  document.getElementById('userScore').innerHTML = showScore;
 }

$(document).ready(function() {

 $('#submitButton').click(function() {
  $(this).addClass('hide');
 });

});


