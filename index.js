// this holds all the data from the survey
const surveyAnswers = {
  q01: '',
  q02: '',
  q03: '',
  q04: '',
  q05: '',
  q06: '',
  q07: '',
  q08: '',
  q09: '',
  q10: '',
  q11: '',
  q12: '',
  q13: '',
  q14: '',
  q15: '',
  q16: '',
  q17: '',
  code: '',
};

// first other - activate textbox
const other01 = document.getElementById('q03');
other01.addEventListener('change', handleOther);

// grab the heading for the bipocnithity text to toggle it
const bipocHeading = document.getElementById('bipoc-heading');

// this toggles the words in the bipocHeading
setInterval(function () {
  toggleWords(bipocHeading);
}, 1000);

function handleOther(e) {
  let textbox = document.getElementById('q03a05');

  if (e.target.id === 'q03a02') {
    textbox.removeAttribute('disabled');
    textbox.setAttribute('placeholder', 'Explain Yourself!');
  } else {
    textbox.setAttribute('disabled', true);
    textbox.removeAttribute('placeholder');
    textbox.value = '';
  }
}

// handle the navigation buttons - every page
// maybe make this into a switch statement later?
const views = document.getElementsByClassName('nav');
console.log(views);

for (let view = 0; view < views.length; view++) {
  views[view].addEventListener('click', handleNavigation);
}

function handleNavigation(e) {
  // add values to object

  let btnClicked = e.currentTarget;

  if (btnClicked.value === 'proceed') {
    // hide this view
    let parent = btnClicked.parentElement.parentElement;
    parent.classList.add('hide');
    parent.classList.remove('show');
    console.log(parent);
    // show the next view
    let next = parent.nextElementSibling;
    next.classList.remove('hide');
    next.classList.add('show');
  } else if (btnClicked.value === 'back') {
    // hide this view
    let parent = btnClicked.parentElement.parentElement;
    parent.classList.add('hide');
    parent.classList.remove('show');

    // show previous view
    let next = parent.previousElementSibling;
    next.classList.remove('hide');
    next.classList.add('show');
  } else if (btnClicked.value === 'bipoc') {
    // hide this view
    let parent = btnClicked.parentElement.parentElement;
    parent.classList.add('hide');
    parent.classList.remove('show');

    // show the next view
    let next = parent.nextElementSibling;
    next.classList.remove('hide');
    next.classList.add('show');

    // start the word toggle
  } else if (btnClicked.value === 'end') {
    // hide this view
    let parent = btnClicked.parentElement.parentElement;
    parent.classList.add('hide');
    parent.classList.remove('show');

    // show the next view
    let next = parent.nextElementSibling;
    next.classList.remove('hide');
    next.classList.add('show');

    // start playing audio
    const audioElement = new Audio('assets/out-of-cntrl.mp3');
    audioElement.loop = true;
    audioElement.play();
  } else {
    console.log('error!');
  }
}

// // get demographic button
// const demoBtn = document.getElementById('demographics');
// demoBtn.addEventListener('click', handleDemographicSubmit);

// button.addEventListener('click', handleAnswerSubmit);

function handleAnswerSubmit(e) {
  e.preventDefault();
  let answer;
  console.log('target', e.target.parentElement);

  const picked = `input[name = "${e.target.parentElement.name}"]`;

  const possible = document.querySelectorAll(picked);
  console.log('target', possible);

  for (let one of possible) {
    if (one.checked) {
      answer = one.nextSibling.innerText[0];
    }
  }

  surveyAnswers[e.target.parentElement.name] = answer;
  console.log(surveyAnswers, 'answers');
}

function handleViewSwitch(e) {
  e.preventDefault();

  if (true) {
    // put values into object
    // hide current view
    // show next view
  } else if (false) {
    // put values into object
    // hide current view
    // show previous view
  }
}

function toggleWords(bipocHeading) {
  if (bipocHeading.firstElementChild.classList[0] === 'words') {
    // remove the bland words
    bipocHeading.firstElementChild.classList.add('words-gone');
    bipocHeading.firstElementChild.classList.remove('words');
    bipocHeading.firstElementChild.nextElementSibling.nextElementSibling.classList.add(
      'words-gone'
    );
    bipocHeading.firstElementChild.nextElementSibling.nextElementSibling.classList.remove(
      'words'
    );

    // add the spicy words
    bipocHeading.firstElementChild.nextElementSibling.classList.add('words');
    bipocHeading.firstElementChild.nextElementSibling.classList.remove(
      'words-gone'
    );
    bipocHeading.lastElementChild.classList.add('words');
    bipocHeading.lastElementChild.classList.remove('words-gone');
  } else {
    // add the bland words
    bipocHeading.firstElementChild.classList.remove('words-gone');
    bipocHeading.firstElementChild.classList.add('words');
    bipocHeading.firstElementChild.nextElementSibling.nextElementSibling.classList.remove(
      'words-gone'
    );
    bipocHeading.firstElementChild.nextElementSibling.nextElementSibling.classList.add(
      'words'
    );

    // remove the spicy words
    bipocHeading.firstElementChild.nextElementSibling.classList.add(
      'words-gone'
    );
    bipocHeading.firstElementChild.nextElementSibling.classList.remove('words');
    bipocHeading.lastElementChild.classList.add('words-gone');
    bipocHeading.lastElementChild.classList.remove('words');
  }
  // bipocHeading.firstElementChild.innerHTML = 'Clown';
  // bipocHeading.lastElementChild.innerHTML = 'Barsoom';
}

// function handleFormSubmit(e) {
//   e.preventDefault();

//   const form = JSON.stringify

//   fetch(
//       'https://sheet.best/api/sheets/d48f685c-1e18-4a21-8193-1732e82292f8',
//       { method: 'POST', body: form }
//     )
//       .then((response) => console.log('Success!', response))
//       .catch((error) => console.error('Error!', error));
//   });
// }

/* <div>
    <input type="radio" id="contactChoice1"
     name="contact" value="email">
    <label for="contactChoice1">Email</label>

    <input type="radio" id="contactChoice2"
     name="contact" value="phone">
    <label for="contactChoice2">Phone</label>

    <input type="radio" id="contactChoice3"
     name="contact" value="mail">
    <label for="contactChoice3">Mail</label>
  </div>
  <div>
    <button type="submit">Submit</button>
  </div> */
