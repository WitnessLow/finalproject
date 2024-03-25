

function checkAnswer() {
  var userAnswer = document.getElementById("userAnswer").value.toLowerCase(); // Convert to lowercase for case-insensitive comparison

  var correctAnswer = ["france", "7.5", "7,5", "map", "a map", "thomas pesquet"];

  // Check if the user's answer matches the correct answer
  if (correctAnswer.includes(userAnswer)) {
      document.getElementById("result").innerHTML = "Correct!";
      document.getElementById("reward1").innerHTML = "Discover your 1st clue!";
      document.getElementById("reward2").innerHTML = "Discover your 2nd clue!";
      document.getElementById("reward3").innerHTML = "Discover your 3rd clue!";
      document.getElementById("thanks").innerHTML = "You made it!";
  } else {
      document.getElementById("result").innerHTML = "Incorrect. Try again";
  }
}

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}