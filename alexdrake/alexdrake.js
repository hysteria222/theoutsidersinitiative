//header 
const title = document.createElement('h1');
document.querySelector('header').append(title);
title.textContent = 'The Outsiders';
const secondTitle = document.createElement('h2');
title.insertAdjacentElement('beforeend', secondTitle);
secondTitle.classList.add('outsiders-subtitle')
secondTitle.innerHTML = 'Ebixia\'s most wanted <span>heroes</span>.'
const nav = document.createElement('nav')
document.querySelector('header').appendChild(nav)
const navLink1 = document.createElement('a')
const navLink2 = document.createElement('a')
const navLink3 = document.createElement('a')
const navLink4 = document.createElement('a')
//nav1 
document.querySelector('nav').appendChild(navLink1)
navLink1.innerHTML = 'HOME'
navLink1.classList.add('navlinks')
//nav2
document.querySelector('nav').appendChild(navLink2)
navLink2.innerHTML = 'HERE'
navLink2.classList.add('navlinks')
//nav3
document.querySelector('nav').appendChild(navLink3)
navLink3.textContent = 'THERE '
navLink3.classList.add('navlinks')
//nav4
document.querySelector('nav').appendChild(navLink4)
navLink4.textContent = 'EVERYWHERE'
navLink4.classList.add('navlinks')




//main div
const headingOne = document.createElement('h3')
document.querySelector('.mainbody').appendChild(headingOne)
headingOne.textContent = 'Inside The Mind Of'
const headingTwo = document.createElement('h4')
document.querySelector('.mainbody').appendChild(headingTwo)
headingTwo.innerHTML = 'alex "<span class="redacted">declined to answer "</span> drake?'
headingTwo.setAttribute('class', 'redacted')

const bodyTextDiv = document.createElement('div')
document.querySelector('.mainbody').appendChild(bodyTextDiv)
bodyTextDiv.classList.add('bodyTextDiv')
const bodyText = document.createElement('p')
bodyText.classList.add('bodytext')
bodyTextDiv.appendChild(bodyText)
bodyText.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean pharetra magna ac placerat vestibulum. Dui accumsan sit amet nulla facilisi morbi tempus iaculis. Adipiscing at in tellus integer. Purus sit amet luctus venenatis. Malesuada bibendum arcu vitae elementum curabitur vitae. Nunc mattis enim ut tellus elementum sagittis. Vulputate mi sit amet mauris commodo quis. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Nisi quis eleifend quam adipiscing vitae proin sagittis.'

const headingThree = document.createElement('h5');
document.querySelector('.mainbody').appendChild(headingThree);
headingThree.textContent = 'The Leader Himself';
const headingFour = document.createElement('h6');
document.querySelector('.mainbody').appendChild(headingFour);
headingFour.textContent = 'something something?';
const bodyText2Div = document.createElement('div');
bodyText2Div.classList.add('bodytextDiv2');
document.querySelector('.mainbody').appendChild(bodyText2Div);
const bodytext2 = document.createElement('p');
bodytext2.classList.add('bodytext2');
bodyText2Div.appendChild(bodytext2);
bodytext2.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean pharetra magna ac placerat vestibulum. Dui accumsan sit amet nulla facilisi morbi tempus iaculis. Adipiscing at in tellus integer. Purus sit amet luctus venenatis. Malesuada bibendum arcu vitae elementum curabitur vitae. Nunc mattis enim ut tellus elementum sagittis. Vulputate mi sit amet mauris commodo quis. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Nisi quis eleifend quam adipiscing vitae proin sagittis.'


const bigBodyDrakeTitle = document.createElement('h7');
bigBodyDrakeTitle.textContent = 'Broody Boy';
const bigBodyTitleSubtitle = document.createElement('h8');
bigBodyTitleSubtitle.textContent = 'why so serious?';
document.querySelector('.bigbodydiv').appendChild(bigBodyDrakeTitle)
document.querySelector('.bigbodydiv').appendChild(bigBodyTitleSubtitle);
const bigBodyDiv = document.createElement('div');
document.querySelector('.bigbodydiv').appendChild(bigBodyDiv);
bigBodyDiv.classList.add('bigbodytextdiv');
const bigBodyText = document.createElement('p');
bigBodyText.classList.add('bigbodytext');
bigBodyDiv.appendChild(bigBodyText);
bigBodyText.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean pharetra magna ac placerat vestibulum. Dui accumsan sit amet nulla facilisi morbi tempus iaculis. Adipiscing at in tellus integer. Purus sit amet luctus venenatis. Malesuada bibendum arcu vitae elementum curabitur vitae. Nunc mattis enim ut tellus elementum sagittis. Vulputate mi sit amet mauris commodo quis. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Nisi quis eleifend quam adipiscing vitae proin sagittis.';
