//header
const headerDiv = document.createElement('div')
headerDiv.classList.add('headerdiv')
document.querySelector('header').appendChild(headerDiv)
const title = document.createElement('h1');
title.classList.add('title')
headerDiv.appendChild(title);
title.textContent = 'The Outsiders';
const secondTitle = document.createElement('h2');
title.appendChild(secondTitle);
secondTitle.classList.add('outsiders-subtitle');
secondTitle.innerHTML = 'Ebixia\'s most wanted <span>heroes</span>.';
const nav = document.createElement('nav');
headerDiv.appendChild(nav);
const navLink1 = document.createElement('a');
const navLink2 = document.createElement('a');
const navLink3 = document.createElement('a');
const navLink4 = document.createElement('a');
//nav1 
document.querySelector('nav').appendChild(navLink1);
navLink1.innerHTML = 'HOME';
navLink1.classList.add('navlinks');
navLink1.href= 'index.html'
//nav2
document.querySelector('nav').appendChild(navLink2);
navLink2.innerHTML = 'HERE';
navLink2.classList.add('navlinks');
//nav3
document.querySelector('nav').appendChild(navLink3);
navLink3.textContent = 'THERE ';
navLink3.classList.add('navlinks');
//nav4
document.querySelector('nav').appendChild(navLink4);
navLink4.textContent = 'EVERYWHERE';
navLink4.classList.add('navlinks');




//main div
const divForSymbolImg = document.createElement('div');
divForSymbolImg.classList.add('symboldiv')
document.querySelector('.mainbody').appendChild(divForSymbolImg)
const outsidersImgDiv = document.createElement('div');
outsidersImgDiv.classList.add('outsidersimgdiv');
divForSymbolImg.appendChild(outsidersImgDiv)
const outsidersImg = document.createElement('img');
outsidersImg.classList.add('outsidersimg');
outsidersImg.src = 'https://i.postimg.cc/ncC34Yx4/New-Pgfdgroject-1.png';
outsidersImgDiv.appendChild(outsidersImg);
const hoverImgDiv = document.createElement('div');
hoverImgDiv.classList.add('hoverimgdiv');
divForSymbolImg.appendChild(hoverImgDiv);
const hoverImg = document.createElement('img');
hoverImg.classList.add('hoverimg', 'fadein');
hoverImgDiv.appendChild(hoverImg)
hoverImg.src = 'https://i.postimg.cc/WbVzvXMp/fg.png'
const headingOne = document.createElement('h3');
document.querySelector('.mainbody').appendChild(headingOne);
headingOne.textContent = 'Hollyanna Knox';
const headingTwo = document.createElement('h4');
headingTwo.classList.add('headingtwo')
document.querySelector('.mainbody').appendChild(headingTwo);
headingTwo.innerHTML = '<span class="headingspan">duchess... </span>among other things.';


const bodyTextDiv = document.createElement('div');
document.querySelector('.mainbody').appendChild(bodyTextDiv);
bodyTextDiv.classList.add('bodyTextDiv');
const bodyText = document.createElement('p');
bodyText.classList.add('bodytext');
bodyTextDiv.appendChild(bodyText);
bodyText.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean pharetra magna ac placerat vestibulum. Dui accumsan sit amet nulla facilisi morbi tempus iaculis. Adipiscing at in tellus integer. Purus sit amet luctus venenatis. Malesuada bibendum arcu vitae elementum curabitur vitae. Nunc mattis enim ut tellus elementum sagittis. Vulputate mi sit amet mauris commodo quis. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Nisi quis eleifend quam adipiscing vitae proin sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean pharetra magna ac placerat vestibulum. Dui accumsan sit amet nulla facilisi morbi tempus iaculis. Adipiscing at in tellus integer. Purus sit amet luctus venenatis. Malesuada bibendum arcu vitae elementum curabitur vitae. Nunc mattis enim ut tellus elementum sagittis. Vulputate mi sit amet mauris commodo quis. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Nisi quis eleifend quam adipiscing vitae proin sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean pharetra magna ac placerat vestibulum. Dui accumsan sit amet nulla facilisi morbi tempus iaculis. Adipiscing at in tellus integer. Purus sit amet luctus venenatis. Malesuada bibendum arcu vitae elementum curabitur vitae. Nunc mattis enim ut tellus elementum sagittis. Vulputate mi sit amet mauris commodo quis. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Nisi quis eleifend quam adipiscing vitae proin sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean pharetra magna ac placerat vestibulum. Dui accumsan sit amet nulla facilisi morbi tempus iaculis. Adipiscing at in tellus integer. Purus sit amet luctus venenatis. Malesuada bibendum arcu vitae elementum curabitur vitae. Nunc mattis enim ut tellus elementum sagittis. Vulputate mi sit amet mauris commodo quis. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Nisi quis eleifend quam adipiscing vitae proin sagittis.';