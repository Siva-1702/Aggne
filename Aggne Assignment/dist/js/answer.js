window.onload = function () {
   load()
};

// Show Results
function load() {
  let answer = document.getElementById('answers');
  let getValues = sessionStorage.getItem('answers');
  let idxvalue = JSON.parse(getValues);

  // Selecting Data From local storage
  for (let i = 0; i < idxvalue.length; i++){
    console.log(idxvalue[i]);
    var k = idxvalue[i].value;
    let [first, second, third, fourth] = idxvalue[i].options;
    let crtans = idxvalue[i].answer;
    answer.innerHTML += `
    <h2>Q${i+1}.${idxvalue[i].question}</h2>
    <ul class="option_group">
      <li class="option_val">${first}</li>
      <li class="option_val">${second}</li>
      <li class="option_val">${third}</li>
      <li class="option_val">${fourth}</li>
    </ul>
    <div >
      <h3 class=""crt-ans" > Correct Answer => <span>${crtans}</span></h3>
    </div>
    <hr>
    `;
    
    // Set Colors to Options
    let option = document.querySelectorAll('li.option_val');
    console.log(option)
    for (let j = 0; j < option.length; j++) {
      // Wrong Answer Color Red
      if (option[j].innerHTML === idxvalue[i].answer &&
        option[j].innerHTML !== option[idxvalue[i].value].innerHTML)
      {
        option[k].classList.add('newanswer');
      }
      // Correct Answer Color Green
      if ( option[j].innerHTML === idxvalue[i].answer &&
        option[j].innerHTML === option[idxvalue[i].value].innerHTML)
      {
        option[j].classList.add('active');
      }
    }
  }
}