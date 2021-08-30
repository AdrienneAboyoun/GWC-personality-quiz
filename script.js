var questionCount = 0;
var tabCount = 0;
var spaceCount = 0;

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var result = document.getElementById("result");
var restart = document.getElementById("restart");

q1a1.addEventListener("click", tabs);
q1a2.addEventListener("click", spaces);
q2a1.addEventListener("click", tabs);
q2a2.addEventListener("click", spaces);
q3a1.addEventListener("click", tabs);
q3a2.addEventListener("click", spaces);
restart.addEventListener("click", reset);

function tabs(){
  tabCount++;
  questionCount++;
  console.log("tabCount: " + tabCount + "; questionCount: " + questionCount);
  if (questionCount == 3){
    console.log("quiz complete");
    results();
  }
}

function spaces(){
  spaceCount++;
  questionCount++;
  console.log("spaceCount: " + spaceCount + "; questionCount: " + questionCount);
  if (questionCount == 3){
    console.log("quiz complete");
    results();
  }
}

function results(){
  if (tabCount >= 2) {
   result.innerHTML = "You are a tabs person!";
  }
  else if (spaceCount >= 2) {
    result.innerHTML = "You are a spaces person!"
  }
  else {
    console.log("something's not right");
  }
}

function reset(){
  questionCount = 0;
  tabCount = 0;
  spaceCount = 0;
  result.innerHTML = "You are a..."
  console.log("quiz reset");
}