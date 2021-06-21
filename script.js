var q = ["What is the capitol of Ohio?", "Pick the one that is not a mammal.", "What is 5 * 5?", "How many outs are there in a full inning in baseball?", "What highschool did LeBron James attend?"]
var a1 = ["<button class=button2 onclick=q1c()>Columbus</button>", "<button class=button2 onclick=q1i()>Dog</button>", "<button class=button2 onclick=q1i()>5</button>",
          "<button class=button2 onclick=q1i()>3</button>", "<button class=button2 onclick=q1i()>Hoban</button>",];

var a2 = ["<button class=button2 onclick=q1i()>Cinncinati</button>", "<button class=button2 onclick=q1i()>Cat</button>", "<button class=button2 onclick=q1i()>20</button>",
          "<button class=button2 onclick=q1i()>5</button>", "<button class=button2 onclick=q1i()>Walsh</button>",];

var a3 = ["<button class=button2 onclick=q1i()>Cleveland</button>", "<button class=button2 onclick=q1c()>Snake</button>", "<button class=button2 onclick=q1i()>10</button>",
          "<button class=button2 onclick=q1c()>6</button>", "<button class=button2 onclick=q1i()>Oak Hill</button>",];

var a4 = ["<button class=button2 onclick=q1i()>Akron</button>", "<button class=button2 onclick=q1c()>Cow</button>", "<button class=button2 onclick=q1c()>25</button>",
          "<button class=button2 onclick=q1i()>54</button>", "<button class=button2 onclick=q1c()>St. Vincent St. Mary</button>",];

var c = ["Correct", "Correct", "Correct", "Correct", "Correct", "Correct", "Correct", "Correct", "Correct", "Correct",];
var i = ["Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect",];

var n = 0;
n++;
var s = 0;
s++;
var z = 0
var timerEl = document.getElementById('countdown');
function countdown() {
    var timeleft = 75;
    var timeInterval= setInterval(function () {
        if (timeleft > 1) {
            timerEl.textContent = timeleft + ' seconds';
            timeleft--;
        }
        else if (timeleft === 1) {
            timerEl.textContent = timeleft + ' second';
            timeleft--;
        }
        else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
            timerEl.textContent = "FIN";
        }
    }, 1000);
    begin1()
}
    function begin1() {
        disappear1.innerHTML = "";
        
        message1.innerHTML = "";
        
        question1.innerHTML = q[z];
        option1.innerHTML = a1[z];
        option2.innerHTML = a2[z];
        option3.innerHTML = a3[z];
        option4.innerHTML = a4[z];
        number1.innerHTML = n++;
        z++;
    }

    function q1c() {
        answer1.innerHTML = "<div id=green>" + c[0] + "</div>";
        option1.innerHTML = "";
        option2.innerHTML = "";
        option3.innerHTML = "";
        option4.innerHTML = "";
        next1.innerHTML = "<button class=button1 onclick=begin1()>Next</button>";
        score1.innerHTML = s++;
    }

    function q1i() {
        answer1.innerHTML = "<div id=red>" + i[0] + "</div>";
        option1.innerHTML = "";
        option2.innerHTML = "";
        option3.innerHTML = "";
        option4.innerHTML = "";
        next1.innerHTML = "<button class=button1 onclick=begin1()>Next</button>";
    }
    
    
        
    
              
