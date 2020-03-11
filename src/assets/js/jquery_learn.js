
$(document).ready(function(){
    // $('#btn-yes-id').click(function(){
    //     event.preventDefault();
        
    // });
    // document.getElementById('btn-yes-id').addEventListener("click", function(){
    //     $('#yes-id').fadeIn("slow");
    //     $('#timer-id').fadeIn("slow");
    //     $('#no-id').fadeOut("slow");
    //     alert('hello');
    // })
    // $('#btn-no-id').click(function(){
    //     event.preventDefault();
    //     $('#no-id').fadeIn("slow");
    //     $('#timer-id').fadeIn("slow");
    //     $('#yes-id').fadeOut("slow");
    //     alert('hello');
    // });
function fun1(){

var timer = document.getElementById('timer-id');
var counter = 5;
var int = setInterval(function(){
    
    timer.innerHTML = counter;
    counter--;
    console.log(counter);
    if(counter < 0){
            clearInterval(int);
            showotherdiv();
    }
}, 1000);
}

function showotherdiv(){
    var fact = document.getElementsByClassName("fact");
    var main = document.getElementById('mainlearn');
    // $("#mainlearn").fadeOut("fast");

    for(let i = 0; i<fact.length; i++){
        $(fact[i]).fadeIn("slow");
    }
}
})
