var q = ["Commonly used data types DO NOT include:", "The condition in an if / else statement is enclosed within ____.", 
         "Arrays in Javascript can be used to store ____.", "String values must be enclosed within ____ when being assigned to variables.", 
         "A very useful tool for used during development and debugging for printing content to the debugger is:"]
var a1 = ["<button class=button2 onclick=q1i()>strings</button>", "<button class=button2 onclick=q1i()>quotes</button>", "<button class=button2 onclick=q1i()>numbers and strings</button>",
          "<button class=button2 onclick=q1i()>commas</button>", "<button class=button2 onclick=q1i()>Javascript</button>",];

var a2 = ["<button class=button2 onclick=q1i()>booleans</button>", "<button class=button2 onclick=q1i()>curly brackets</button>", "<button class=button2 onclick=q1i()>other arrays</button>",
          "<button class=button2 onclick=q1i()>curly brackets</button>", "<button class=button2 onclick=q1i()>terminal / bash</button>",];

var a3 = ["<button class=button2 onclick=q1c()>alerts</button>", "<button class=button2 onclick=q1c()>parentheses</button>", "<button class=button2 onclick=q1i()>booleans</button>",
          "<button class=button2 onclick=q1c()>quotes</button>", "<button class=button2 onclick=q1i()>for loops</button>",];

var a4 = ["<button class=button2 onclick=q1i()>numbers</button>", "<button class=button2 onclick=q1c()>square brackets</button>", "<button class=button2 onclick=q1c()>all of the above</button>",
          "<button class=button2 onclick=q1i()>parenthesis</button>", "<button class=button2 onclick=q1c()>console log</button>",];

var c = ["Correct", "Correct", "Correct", "Correct", "Correct", "Correct", "Correct", "Correct", "Correct", "Correct",];
var i = ["Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect",];
var timeleft = 75;
var n = 0;
n++;
var s = 0;
s++;
var z = 0
var wrong = 10;
//var timerEl = document.getElementById('countdown');
function countdown() {
    
    var timeInterval= setInterval(function () {
        if (timeleft >= 1) {
            timerEl.innerHTML = timeleft + ' seconds';
            timeleft--;
        }
        else if (timeleft === 1) {
            timerEl.innerHTM = timeleft + ' second';
            timeleft--;
        }
        else {
            timerEl.innerHTM = '';
            clearInterval(timeInterval);
            timerEl.textContent = "FIN";
            ls()
            
        }
        if (z === 6) {
            question1.innerHTML = "";
            option1.innerHTML = "";
            option2.innerHTML = "";
            option3.innerHTML = "";
            option4.innerHTML = "";
            number1.innerHTM = "";
            clearInterval(timeInterval);
            timerEl.textContent = "FIN"
            ls()
            
        };
    }, 1000);
    begin1()
}
    function begin1() {
        
        disappear1.innerHTML = "";
        
        message1.innerHTML = "";
        answer1.innerHTML = "";
        next1.innerHTML = "";
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
        timeleft -= 10
        answer1.innerHTML = "<div id=red>" + i[0] + "</div>";
        option1.innerHTML = "";
        option2.innerHTML = "";
        option3.innerHTML = "";
        option4.innerHTML = "";
        next1.innerHTML = "<button class=button1 onclick=begin1()>Next</button>";  
        
    }

    function ls() {
        
        var pro = (prompt("enter your initials."));
        
        var po = pro + " " + s
        localStorage.setItem('initials', po);
           
        localStorage.getItem('initials');
        
        console.log(localStorage.initials);
        
    };
 
    
            
       
   
    
    
              
