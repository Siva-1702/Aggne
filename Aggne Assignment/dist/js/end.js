// Get Name from session storage
let user_name = sessionStorage.getItem("name");
// Get Point from session storage
let user_points = sessionStorage.getItem("points");
// Get Total Points from session storage
let user_totalpoints = sessionStorage.getItem('totalpoints');

// Set Name to End Page
document.querySelector('span.name').innerHTML = user_name;
if (user_points === user_totalpoints) {
  document.querySelector('h3.username').innerHTML = 'Excellent! ' + user_name;
} else if (user_points > user_totalpoints / 2) {
  document.querySelector('h3.username').innerHTML = 'Well Played! ' + user_name;
} else {
  document.querySelector('h3.username').innerHTML = 'Practice well! '+ user_name;
}
// Set Point to End Page
document.querySelector("span.points").innerHTML = user_points;
// Set Point to End Page
document.querySelector("span.totalpoints").innerHTML = user_totalpoints;

// Restart Quiz
function restartForm(e) {
     e.preventDefault();
     location.href = 'quiz.html';
    }
    
// Result Page
function viewanswer(e) {
    e.preventDefault();
    location.href = 'answer.html';
}